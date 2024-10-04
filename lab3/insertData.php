<?php
header("Content-Type: application/json");

$servername = "localhost:3306";
$username = "phpmyadmin";
$password = "websyssql";
$dbname = "lab03";

// initialize connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// if connection is successful
echo "Connected successfully";

$input = file_get_contents('php://input');
$data = json_decode($input, true);

// check data type
if ($data['data_type'] == 'weather') {
    echo "Data type is weather";
    $weather_json = json_encode($data['weather_json']); // Make sure this is JSON encoded
    $query = "INSERT INTO weather_data (weather_json) VALUES ('$weather_json')";
    if ($conn->query($query) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Weather data inserted successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error inserting weather data: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data type received."]);

}

$conn->close();
?>