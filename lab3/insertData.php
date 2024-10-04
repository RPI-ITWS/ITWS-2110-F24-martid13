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

// Check if the data is for weather
if ($data['data_type'] == 'weather') {

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO api_data (weather_condition, weather_description, weather_icon_src, temperature, feels_like, temp_min, temp_max) VALUES (?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param(
        "sssssss",
        $data['condition'],
        $data['description'],
        $data['icon'],
        $data['temp'],
        $data['feels_like'],
        $data['temp_min'],
        $data['temp_max']
    );

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Weather data inserted successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error inserting weather data: " . $stmt->error]);
    }

    // Close the statement
    $stmt->close();

} else {
    echo json_encode(["success" => false, "message" => "Invalid data type received."]);
}

// Close the connection
$conn->close();
?>
