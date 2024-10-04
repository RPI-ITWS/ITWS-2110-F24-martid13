<?php
header("Content-Type: application/json");

$servername = "localhost:3306";
$username = "phpmyadmin";
$password = "websyssql";
$dbname = "lab03";

// initialize connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Get the input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Fetch the most recent weather data entry
$query = "SELECT * FROM api_data ORDER BY id DESC LIMIT 1"; // This will get the most recent entry
$result = $conn->query($query);

$conn->close();
?>