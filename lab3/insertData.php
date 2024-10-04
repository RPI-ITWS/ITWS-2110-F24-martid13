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

} else if ($data[0]['data_type'] == 'recipe') {

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO recipes (recipeUrl, recipeLabel, recipeImage) VALUES (?, ?, ?)");

    // post to console to indicate program recognizes it received recipes
    echo json_encode(["success" => true, "message" => "Recipe data received."]);

    if ($stmt === false) {
        echo json_encode(["success" => false, "message" => "Failed to prepare statement: " . $conn->error]);
        exit;
    }

    foreach ($data as $recipe) {
        // Log each recipe's data before binding to check values
        error_log("Inserting Recipe: URL: " . $recipe['url'] . " Label: " . $recipe['label'] . " Image: " . $recipe['image_src']);
        
        $stmt->bind_param(
            "sss",
            $recipe['url'],
            $recipe['label'],
            $recipe['image_src']
        );

        // Execute the statement
        if (!$stmt->execute()) {
            echo json_encode(["success" => false, "message" => "Failed to execute statement: " . $stmt->error]);
            exit;
        }
    }

    echo json_encode(["success" => true, "message" => "Recipe data inserted successfully."]);
    $stmt->close();
}



// Close the connection
$conn->close();
?>
