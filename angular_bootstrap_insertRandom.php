<?php

$dbh=new PDO('sqlite:test.sqlite');
try {
	$qry = $dbh->prepare('INSERT INTO testtable (one, two) VALUES (?, ?)');
} catch (PDOException $e) {
	echo "Connection Failed: " . $e->getMessages();
}

$qry->bindParam(1, $rand_char);
$qry->bindParam(2, $rand_int);

$rand_char = rand(1,100);
$rand_int = rand(1,100);

echo $rand_char, $rand_int;
try {
	$qry->execute();
} catch (Exception $e) {
	echo "What now... " . $e->getMessages();
}

$dbh = null;

?>
