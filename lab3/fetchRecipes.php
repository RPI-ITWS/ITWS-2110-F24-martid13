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

// Query to get all recipe data
$query = "SELECT recipe1Url, recipe1Label, recipe1Image, recipe2Url, recipe2Label, recipe2Image, recipe3Url, recipe3Label, recipe3Image, recipe4Url, recipe4Label, recipe4Image, recipe5Url, recipe5Label, recipe5Image, recipe6Url, recipe6Label, recipe6Image FROM recipes ORDER BY id DESC LIMIT 1";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    $recipes = $result->fetch_assoc();
    echo json_encode(["success" => true, "recipes" => $recipes]);
} else {
    echo json_encode(["success" => false, "message" => "No recipes found."]);
}

$conn->close();
?>