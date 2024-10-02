<?php

$servername = "localhost:3306";
$username = "phpmyadmin";
$password = "websyssql";
$servername = "lab3";

// initialize connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}