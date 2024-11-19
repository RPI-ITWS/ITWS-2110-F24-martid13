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

// Query to get the latest data
$sql = "SELECT * FROM frankfurter ORDER BY date DESC LIMIT 1";
$result = $conn->query($sql);

// HTML table
if ($result->num_rows > 0) {
    echo '<table class="table table-bordered">
            <tr><th>Amount</th><th>Base</th><th>Date</th><th>Rates</th></tr>';
    
    // Output data from each row
    while ($row = $result->fetch_assoc()) {
        echo '<tr><td>' . $row["amount"] . '</td><td>' . $row["base"] . '</td><td>' . $row["date"] . '</td><td>' . $row["rates"] . '</td></tr>';
    }
    
    echo '</table>';
} else {
    echo "0 results";
}

// Close connection
$conn->close();
?>
