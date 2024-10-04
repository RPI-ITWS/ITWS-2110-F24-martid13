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

} else if ($data['data_type'] == 'recipe') {

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO recipes 
        (recipe1Url, recipe1Label, recipe1Image, 
         recipe2Url, recipe2Label, recipe2Image, 
         recipe3Url, recipe3Label, recipe3Image, 
         recipe4Url, recipe4Label, recipe4Image, 
         recipe5Url, recipe5Label, recipe5Image, 
         recipe6Url, recipe6Label, recipe6Image) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // post to console to indicate program recognizes it received recipes
    echo json_encode(["success" => true, "message" => "Recipe data received."]);

    if ($stmt === false) {
        echo json_encode(["success" => false, "message" => "Failed to prepare statement: " . $conn->error]);
        exit;
    }

    // Bind all 6 recipes to the respective columns
    $stmt->bind_param(
        "ssssssssssssssssss",
        $data['recipe1Url'], $data['recipe1Label'], $data['recipe1Image'],
        $data['recipe2Url'], $data['recipe2Label'], $data['recipe2Image'],
        $data['recipe3Url'], $data['recipe3Label'], $data['recipe3Image'],
        $data['recipe4Url'], $data['recipe4Label'], $data['recipe4Image'],
        $data['recipe5Url'], $data['recipe5Label'], $data['recipe5Image'],
        $data['recipe6Url'], $data['recipe6Label'], $data['recipe6Image']
    );

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Recipe data inserted successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to execute statement: " . $stmt->error]);
    }

    
    $stmt->close();
} else {
}

$conn->close();
