const WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const session = require('express-session');

// Конфигурация
const SECRET_KEY = 'your_secret_key_here';
const PORT = process.env.PORT || 3000;

// Инициализация сервера
const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

// Инициализация WebSocket сервера
const wss = new WebSocket.Server({ noServer: true });

// Хранилище данных (в реальном приложении использовать БД)
const users = {};
const sessions = {};

// API: Регистрация пользователя
app.post('/api/register', (req, res) => {
  const userData = req.body;
  
  if (!userData.id) {
    return res.status(400).json({ success: false, message: 'Invalid user data' });
  }
  
  // Создаем нового пользователя
  const userId = `user_${userData.id}`;
  const newUser = {
    id: userId,
    first_name: userData.first_name,
    last_name: userData.last_name,
    username: userData.username,
    photo_url: userData.photo_url,
    phone: null,
    createdAt: new Date()
  };
  
  users[userId] = newUser;
  
  // Создаем сессию
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '7d' });
  const sessionId = `session_${Date.now()}`;
  
  sessions[token] = {
    id: sessionId,
    userId,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    createdAt: new Date(),
    current: true
  };
  
  res.json({ success: true, token, user: newUser });
});

// API: Валидация сессии
app.post('/api/validate-session', (req, res) => {
  const { token } = req.body;
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const session = sessions[token];
    
    if (session && session.userId === decoded.userId) {
      const user = users[session.userId];
      if (user) {
        return res.json({ valid: true, user });
      }
    }
  } catch (err) {
    // Токен невалиден
  }
  
  res.json({ valid: false });
});

// API: Получение активных сессий
app.get('/api/sessions', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const userSessions = Object.values(sessions)
      .filter(session => session.userId === decoded.userId)
      .map(session => ({
        id: session.id,
        device: session.userAgent,
        ip: session.ip,
        createdAt: session.createdAt,
        current: session.current
      }));
    
    res.json(userSessions);
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});

// API: Удаление сессии
app.delete('/api/sessions/:sessionId', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const sessionId = req.params.sessionId;
    
    // Находим сессию для удаления
    const sessionEntry = Object.entries(sessions).find(
      ([key, session]) => session.id === sessionId && session.userId === decoded.userId
    );
    
    if (sessionEntry) {
      const [sessionToken, session] = sessionEntry;
      
      // Нельзя удалить текущую сессию
      if (session.current) {
        return res.status(400).send('Cannot terminate current session');
      }
      
      // Удаляем сессию
      delete sessions[sessionToken];
      
      // Уведомляем клиента через WebSocket
      wss.clients.forEach(client => {
        if (client.userId === decoded.userId && client.sessionId !== sessionId) {
          client.send(JSON.stringify({
            type: 'session_terminated',
            sessionId
          }));
        }
      });
      
      res.sendStatus(204);
    } else {
      res.status(404).send('Session not found');
    }
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});

// API: Удаление аккаунта
app.delete('/api/account', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.userId;
    
    // Удаляем пользователя
    delete users[userId];
    
    // Удаляем все сессии пользователя
    Object.entries(sessions).forEach(([token, session]) => {
      if (session.userId === userId) {
        delete sessions[token];
      }
    });
    
    res.sendStatus(204);
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});

// Обработка WebSocket соединений
wss.on('connection', (ws, req) => {
  const token = new URL(req.url, `http://${req.headers.host}`).searchParams.get('token');
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    ws.userId = decoded.userId;
    ws.sessionId = sessions[token]?.id;
    
    // Помечаем эту сессию как активную
    if (ws.sessionId) {
      sessions[token].lastActive = new Date();
    }
  } catch (err) {
    ws.close(1008, 'Invalid token');
  }
  
  ws.on('message', message => {
    console.log(`Received message: ${message}`);
  });
  
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// Создаем HTTP сервер
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Подключаем WebSocket сервер к HTTP серверу
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, ws => {
    wss.emit('connection', ws, request);
  });
});
