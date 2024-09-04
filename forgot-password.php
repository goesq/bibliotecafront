<?php
include 'db.php'; // Conexão com o banco de dados

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Gerar token temporário
    $token = bin2hex(random_bytes(50));
    $expiry = date('Y-m-d H:i:s', strtotime('+1 hour'));

    // Atualizar o banco de dados com o token
    $query = $conn->prepare("UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?");
    $query->bind_param("sss", $token, $expiry, $email);
    $query->execute();

    // Enviar e-mail com o token
    $resetLink = "http://yourwebsite.com/reset_password.php?token=" . $token;
    $subject = "Redefinição de Senha";
    $message = "Clique no link para redefinir sua senha: " . $resetLink;
    $headers = "From: no-reply@yourwebsite.com";

    if (mail($email, $subject, $message, $headers)) {
        echo "Um e-mail foi enviado com instruções para redefinir sua senha.";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
