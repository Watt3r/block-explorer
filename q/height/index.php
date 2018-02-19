<?php 
$json = file_get_contents('https://turtle-coin.com/daemon/getinfo');

$json_a = json_decode($json, true);
echo $json_a['height'];


?>