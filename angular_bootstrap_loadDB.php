<?php

$pdo=new PDO('sqlite:test.sqlite');
$statement=$pdo->prepare("SELECT * FROM testtable ORDER BY 2 DESC");
$statement->execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
$json=json_encode($results);

echo $json;

?>
