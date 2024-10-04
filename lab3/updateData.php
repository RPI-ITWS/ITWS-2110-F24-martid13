<?php
header("Content-Type: application/json");

$servername = "localhost:3306";
$username = "phpmyadmin";
$password = "websyssql";
$dbname = "lab03";

// Initialize connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Get the input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Check the data type (weather or recipe)
if ($data['data_type'] == 'weather') {
    // Update weather data
    $query = "UPDATE api_data SET 
              weather_condition = COALESCE(?, weather_condition), 
              weather_description = COALESCE(?, weather_description), 
              weather_icon_src = COALESCE(?, weather_icon_src), 
              temperature = COALESCE(?, temperature), 
              feels_like = COALESCE(?, feels_like), 
              temp_min = COALESCE(?, temp_min), 
              temp_max = COALESCE(?, temp_max)
              WHERE id = (SELECT MAX(id) FROM api_data)";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param(
        "sssssss",
        $data['weather_condition'] ?? null,
        $data['weather_description'] ?? null,
        $data['weather_icon_src'] ?? null,
        $data['temperature'] ?? null,
        $data['feels_like'] ?? null,
        $data['temp_min'] ?? null,
        $data['temp_max'] ?? null
    );

} else if ($data['data_type'] == 'recipe') {
    // Update recipe data
    $query = "UPDATE recipes SET 
              recipe1Label = COALESCE(?, recipe1Label), 
              recipe2Label = COALESCE(?, recipe2Label), 
              recipe3Label = COALESCE(?, recipe3Label), 
              recipe4Label = COALESCE(?, recipe4Label), 
              recipe5Label = COALESCE(?, recipe5Label), 
              recipe6Label = COALESCE(?, recipe6Label)
              WHERE id = (SELECT MAX(id) FROM recipes)";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param(
        "ssssss",
        $data['recipe1Label'] ?? null,
        $data['recipe2Label'] ?? null,
        $data['recipe3Label'] ?? null,
        $data['recipe4Label'] ?? null,
        $data['recipe5Label'] ?? null,
        $data['recipe6Label'] ?? null
    );
}

// Execute the statement and send the result
if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => ucfirst($data['data_type']) . " data updated successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Error updating data: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
