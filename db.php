<?php
$servername = "localhost"; // Host do banco de dados
$username = "root";        // Usuário do banco de dados
$password = "";            // Senha do banco de dados
$dbname = "bookcase";      // Nome do banco de dados

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
