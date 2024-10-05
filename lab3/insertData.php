<?php
// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);
header("Content-Type: application/json");

// Custom error handler to capture errors and output them as JSON
function handleError($errno, $errstr, $errfile, $errline)
{
    echo json_encode([
        "success" => false,
        "message" => "PHP Error: [$errno] $errstr in $errfile on line $errline"
    ]);
    exit;
}

set_error_handler("handleError");

// Database connection
$servername = "localhost:3306";
$username = "phpmyadmin";
$password = "websyssql";
$dbname = "lab03";

// Initialize connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Get the input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Check if JSON decoding failed
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(["status" => "error", "message" => "JSON Decode Error: " . json_last_error_msg()]);
    exit;
}

// Process the data for weather or recipes
if ($data['data_type'] == 'weather') {
    // Prepare the weather insert statement
    $stmt = $conn->prepare("INSERT INTO api_data (weather_condition, weather_description, weather_icon_src, temperature, feels_like, temp_min, temp_max) VALUES (?, ?, ?, ?, ?, ?, ?)");

    if ($stmt === false) {
        echo json_encode(["success" => false, "message" => "Failed to prepare weather statement: " . $conn->error]);
        exit;
    }

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

    // Execute the statement
    if (!$stmt->execute()) {
        echo json_encode(["success" => false, "message" => "Error inserting weather data: " . $stmt->error]);
        exit;
    }

    echo json_encode(["success" => true, "message" => "Weather data inserted successfully."]);
    $stmt->close();

} else if ($data['data_type'] == 'recipe') {
    // Check if all required recipe keys are present
    if (
        !isset(
        $data['recipe1Url'],
        $data['recipe1Label'],
        $data['recipe1Image'],
        $data['recipe2Url'],
        $data['recipe2Label'],
        $data['recipe2Image'],
        $data['recipe3Url'],
        $data['recipe3Label'],
        $data['recipe3Image'],
        $data['recipe4Url'],
        $data['recipe4Label'],
        $data['recipe4Image'],
        $data['recipe5Url'],
        $data['recipe5Label'],
        $data['recipe5Image'],
        $data['recipe6Url'],
        $data['recipe6Label'],
        $data['recipe6Image']
    )
    ) {

        echo json_encode(["success" => false, "message" => "Missing recipe data."]);
        exit;
    }

    // Prepare and bind the SQL statement for recipes
    $stmt = $conn->prepare("INSERT INTO recipes 
        (recipe1Url, recipe1Label, recipe1Image, 
         recipe2Url, recipe2Label, recipe2Image, 
         recipe3Url, recipe3Label, recipe3Image, 
         recipe4Url, recipe4Label, recipe4Image, 
         recipe5Url, recipe5Label, recipe5Image, 
         recipe6Url, recipe6Label, recipe6Image) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if ($stmt === false) {
        echo json_encode(["success" => false, "message" => "Failed to prepare recipe statement: " . $conn->error]);
        exit;
    }

    // Bind the parameters for all recipes
    if (
        !$stmt->bind_param(
            "ssssssssssssssssss",
            $data['recipe1Url'],
            $data['recipe1Label'],
            $data['recipe1Image'],
            $data['recipe2Url'],
            $data['recipe2Label'],
            $data['recipe2Image'],
            $data['recipe3Url'],
            $data['recipe3Label'],
            $data['recipe3Image'],
            $data['recipe4Url'],
            $data['recipe4Label'],
            $data['recipe4Image'],
            $data['recipe5Url'],
            $data['recipe5Label'],
            $data['recipe5Image'],
            $data['recipe6Url'],
            $data['recipe6Label'],
            $data['recipe6Image']
        )
    ) {
        echo json_encode(["success" => false, "message" => "Failed to bind recipe parameters: " . $stmt->error]);
        exit;
    }

    // Execute the statement
    if (!$stmt->execute()) {
        echo json_encode(["success" => false, "message" => "Failed to execute recipe statement: " . $stmt->error]);
        exit;
    }

    echo json_encode(["success" => true, "message" => "Recipe data inserted successfully."]);
    $stmt->close();

} else {
    echo json_encode(["success" => false, "message" => "Invalid data type or missing data."]);
}

$conn->close();
