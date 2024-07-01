<?php 
header('content-type:application/json');
$rawData = file_get_contents('./db/todo.json');
$data = json_decode($rawData,true);
$data = json_encode($data);
file_put_contents('./db/todofiltrati.json', $data);

echo $data;
?>
