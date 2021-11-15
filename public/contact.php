<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

$request = [];
foreach($_POST as $prop => $value){
    $request[$prop] = json_decode($value);
}

$data = array(
    "data" => $request,
    "message" => "Dziękujemy za kontakt"
);
echo json_encode($data);