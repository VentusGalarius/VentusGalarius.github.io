const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Проверка подписи Telegram
function verifyTelegramHash(data, secret) {
    const hash = data.hash;
    delete data.hash;
    
    const dataCheckString = Object.keys(data)
        .sort()
        .map(key => `${key}=${data[key]}`)
        .join('\n');
    
    const secretKey = crypto.createHash('sha256')
        .update(secret)
        .digest();
    
    const hmac = crypto.createHmac('sha256', secretKey)
        .update(dataCheckString)
        .digest('hex');
    
    return hmac === hash;
}

// Сохранение измененного контента
app.post('/api/save-content', (req, res) => {
    const { content, initData } = req.body;
    const secret = process.env.TELEGRAM_SECRET; // Секрет из BotFather
    
    if (!verifyTelegramHash(JSON.parse(initData), secret)) {
        return res.status(401).json({ error: 'Invalid signature' });
    }
    
    // Здесь будет сохранение контента в БД
    console.log('Received content to save:', content.length);
    
    res.json({ status: 'success' });
});

// Получение сообщений
app.get('/api/messages', (req, res) => {
    // Здесь будет получение сообщений из БД
    res.json({
        messages: [
            { id: 1, text: 'Первое сообщение', userId: 123, timestamp: new Date() },
            { id: 2, text: 'Второе сообщение', userId: 456, timestamp: new Date() }
        ]
    });
});

// Авторизация пользователя
app.post('/api/auth', (req, res) => {
    const { initData } = req.body;
    const secret = process.env.TELEGRAM_SECRET;
    
    if (!verifyTelegramHash(JSON.parse(initData), secret)) {
        return res.status(401).json({ error: 'Invalid signature' });
    }
    
    const data = JSON.parse(initData);
    const user = data.user;
    
    // Возвращаем данные пользователя
    res.json({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        photoUrl: user.photo_url
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
