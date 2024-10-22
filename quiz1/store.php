<?php
// Database connection
$servername = "localhost:3306";
$username = "phpmyadmin";
$password = "websyssql";
$dbname = "quiz1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// json_decode
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Prepare SQL statement to insert data into the database
$stmt = $conn->prepare("INSERT INTO frankfurter (amount, base, date, rates) VALUES (?, ?, ?, ?)");

// Bind parameters
$amount = $data['amount'];
$base = $data['base'];
$date = $data['date'];
$rates = json_encode($data['rates']); // Convert rates array to JSON

$stmt->bind_param("isss", $amount, $base, $date, $rates);

// Execute the statement
if ($stmt->execute()) {
    echo "Data stored successfully!";
} else {
    echo "Error storing data: " . $conn->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
