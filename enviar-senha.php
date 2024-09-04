<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Conecte-se ao banco de dados
    $conn = new mysqli("localhost", "usuario", "senha", "nome_do_banco");

    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Recebe o e-mail do formulário
    $email = $_POST['email'];

    // Verifica se o e-mail existe no banco de dados
    $sql = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Gera uma senha temporária
        $senha_temporaria = bin2hex(random_bytes(4)); // Exemplo: 8 caracteres aleatórios
        
        // Atualiza o banco de dados com a nova senha temporária (criptografada)
        $senha_temporaria_hash = password_hash($senha_temporaria, PASSWORD_DEFAULT);
        $sql_update = "UPDATE usuarios SET senha_temporaria = ? WHERE email = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("ss", $senha_temporaria_hash, $email);
        $stmt_update->execute();

        // Envia o e-mail com a senha temporária
        $to = $email;
        $subject = "Recuperação de Senha - bookcase.com";
        $message = "Sua senha temporária é: $senha_temporaria";
        $headers = "From: no-reply@bookcase.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "E-mail enviado com sucesso!";
        } else {
            echo "Falha ao enviar o e-mail.";
        }
    } else {
        echo "E-mail não encontrado.";
    }

    $stmt->close();
    $conn->close();
} else {
    http_response_code(405);
    echo "Método não permitido";
}
?>