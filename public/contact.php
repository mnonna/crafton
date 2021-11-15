<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

$requestBody = file_get_contents('php://input');
$data = array(
    "data" => json_decode($requestBody),
    "message" => "Dziękujemy za kontakt"
);
echo json_encode($data);