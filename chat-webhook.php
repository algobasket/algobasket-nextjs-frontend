<?php
// Read request JSON
$request = file_get_contents("php://input");
$data = json_decode($request, true);

// Extract user query
$userQuery = $data['query'] ?? '';

// Set default response
$responseText = "I'm not sure how to respond to that.";

// Define responses based on user query
if (stripos($userQuery, "hello") !== false) {
    $responseText = "Hello! How can I assist you today?";
} elseif (stripos($userQuery, "price") !== false) {
    $responseText = "Our premium products price as mentioned";  
}

// Return JSON response
$response = ["reply" => $responseText];
header("Content-Type: application/json");
echo json_encode($response);
?>    
