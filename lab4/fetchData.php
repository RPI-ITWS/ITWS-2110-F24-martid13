<?php
header(header: "Content-Type: application/json");

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

// Check if any data was retrieved
if ($result->num_rows > 0) {
    // Fetch the data
    $row = $result->fetch_assoc();
    // Return the data as JSON
    echo json_encode([
        "weather" => [
            [
                "main" => $row['weather_condition'],
                "description" => $row['weather_description'],
                "icon" => $row['weather_icon_src']
            ]
        ],
        "main" => [
            "temp" => $row['temperature'],
            "feels_like" => $row['feels_like'],
            "temp_min" => $row['temp_min'],
            "temp_max" => $row['temp_max']
        ]
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "No weather data found"]);
}

$conn->close();
?>