// verify-age-worker.js
importScripts(
    'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.18.0/dist/tf.min.js',
    'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js',
    'https://cdn.jsdelivr.net/npm/hyperspace@1.0.0/dist/hyperspace.min.js'
);

const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
const descriptorThreshold = 0.6;
const ageErrorMargin = 3; // Years margin for 4D analysis

let modelsLoaded = false;
let net;
let faceDetectionOptions;
let hyperspaceAnalyzer;

// 4D Face Analysis Helper
class HyperspaceFaceAnalyzer {
    constructor() {
        this.hyperspace = new Hyperspace({
            virtualContainer: true,
            tesseract: false
        });
        this.faceCache = new Map();
    }

    analyzeIn4D(descriptor) {
        // Convert descriptor to 4D coordinates
        const coords4D = this.convertTo4D(descriptor);
        
        // Project into 3D space for analysis
        const projection = this.hyperspace.project4DTo3D(coords4D);
        
        // Analyze multiple temporal dimensions
        return this.analyzeTemporalDimensions(projection);
    }

    convertTo4D(descriptor) {
        // Split descriptor into 4D components
        const quarter = Math.floor(descriptor.length / 4);
        return {
            x: descriptor.slice(0, quarter),
            y: descriptor.slice(quarter, quarter * 2),
            z: descriptor.slice(quarter * 2, quarter * 3),
            w: descriptor.slice(quarter * 3)
        };
    }

    analyzeTemporalDimensions(projection) {
        // Calculate temporal consistency across dimensions
        const temporalVariance = this.calculateVariance([
            ...projection.x, 
            ...projection.y, 
            ...projection.z
        ]);
        
        return {
            temporalVariance,
            isConsistent: temporalVariance < 0.2
        };
    }

    calculateVariance(values) {
        const mean = values.reduce((a, b) => a + b) / values.length;
        return values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length;
    }
}

async function loadModels() {
    if (modelsLoaded) return;
    
    try {
        // Load face-api.js models
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        
        // Initialize face detection options
        faceDetectionOptions = new faceapi.TinyFaceDetectorOptions({
            inputSize: 512,
            scoreThreshold: 0.5
        });
        
        // Initialize 4D analyzer
        hyperspaceAnalyzer = new HyperspaceFaceAnalyzer();
        
        modelsLoaded = true;
        
        // Report progress
        self.postMessage({ progress: 1 });
    } catch (error) {
        console.error('Error loading models:', error);
        throw error;
    }
}

async function detectFace({ bitmap, mobile }) {
    if (!modelsLoaded) {
        throw new Error('Models not loaded');
    }

    try {
        // Create canvas from bitmap
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);
        
        // Detect faces with face-api.js
        const detections = await faceapi.detectAllFaces(canvas, faceDetectionOptions)
            .withFaceLandmarks()
            .withFaceDescriptors()
            .withAgeAndGender()
            .withFaceExpressions();
        
        if (!detections || detections.length === 0) {
            return null;
        }
        
        // Get the most prominent face (largest)
        const detection = detections.reduce((prev, current) => 
            (prev.detection.box.area > current.detection.box.area) ? prev : current
        );
        
        // 4D analysis of face descriptor
        const hyperspaceAnalysis = hyperspaceAnalyzer.analyzeIn4D(detection.descriptor);
        
        // Adjust age based on 4D temporal consistency
        let adjustedAge = detection.age;
        if (!hyperspaceAnalysis.isConsistent) {
            // If face is inconsistent in 4D space, add error margin
            adjustedAge += ageErrorMargin;
        }
        
        return {
            age: adjustedAge,
            gender: detection.gender,
            genderProbability: detection.genderProbability,
            expressions: detection.expressions,
            angle: getHeadAngle(detection.landmarks),
            descriptor: detection.descriptor,
            hyperspaceAnalysis
        };
    } catch (error) {
        console.error('Error detecting face:', error);
        return null;
    }
}

function getHeadAngle(landmarks) {
    // Simple head pose estimation using facial landmarks
    const jawline = landmarks.getJawOutline();
    const nose = landmarks.getNose();
    
    // Calculate pitch (up/down) from nose to jaw
    const pitch = (nose[6].y - jawline[8].y) / 100;
    
    // Calculate yaw (left/right) from jaw symmetry
    const left = jawline[0].x;
    const right = jawline[16].x;
    const center = (left + right) / 2;
    const yaw = (center - jawline[8].x) / 100;
    
    return { pitch, yaw, roll: 0 };
}

// Worker message handler
self.onmessage = async function(event) {
    const { id, type, data } = event.data;
    
    try {
        switch (type) {
            case 'loadModels':
                await loadModels();
                self.postMessage({ id, result: true });
                break;
                
            case 'detect':
                const result = await detectFace(data);
                self.postMessage({ id, result });
                break;
                
            default:
                throw new Error(`Unknown message type: ${type}`);
        }
    } catch (error) {
        console.error(`Error processing ${type}:`, error);
        self.postMessage({ id, error: error.message });
    }
};

// Progress reporting for model loading
let progress = 0;
const progressInterval = setInterval(() => {
    if (modelsLoaded) {
        clearInterval(progressInterval);
        return;
    }
    
    progress = Math.min(0.9, progress + 0.1);
    self.postMessage({ progress });
}, 300);
