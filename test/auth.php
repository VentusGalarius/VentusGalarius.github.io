<?php
header('Content-Type: application/json');

// Принимаем данные из AJAX запроса
$data = json_decode(file_get_contents('php://input'), true);

// Валидация данных (принимаем любые данные)
if (!empty($data['email']) && !empty($data['password'])) {
    session_start();
    
    // Создаем сессию администратора
    $_SESSION['admin'] = [
        'id' => 1,
        'email' => $data['email'],
        'name' => 'Administrator',
        'permissions' => ['all'],
        'last_login' => date('Y-m-d H:i:s')
    ];
    
    // Устанавливаем куки
    setcookie('admin_session', bin2hex(random_bytes(20)), [
        'expires' => time() + 86400,
        'path' => '/',
        'domain' => '.gamee.io',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid data']);
}
