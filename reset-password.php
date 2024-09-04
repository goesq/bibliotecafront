<?php
include 'db.php'; // Conexão com o banco de dados

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $token = $_POST['token'];
    $newPassword = $_POST['new-password'];
    $confirmPassword = $_POST['confirm-password'];

    if ($newPassword !== $confirmPassword) {
        echo "As senhas não coincidem.";
        exit();
    }

    // Verificar o token
    $query = $conn->prepare("SELECT * FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()");
    $query->bind_param("s", $token);
    $query->execute();
    $result = $query->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        // Atualizar a senha
        $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);
        $query = $conn->prepare("UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?");
        $query->bind_param("si", $hashedPassword, $user['id']);
        $query->execute();
        echo "Senha redefinida com sucesso.";
    } else {
        echo "Token inválido ou expirado.";
    }
}
?>
