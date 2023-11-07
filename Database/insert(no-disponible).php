<?php

$hostname = "localhost";
$username = "maycodev";
$password = "Tigremayco123";
$db = "blog_de_tenis";

$dbconnect=mysqli_connect($hostname,$username,$password,$db);

if ($dbconnect->connect_error) {
  die("Database connection failed: " . $dbconnect->connect_error);
}

if(isset($_POST['submit'])) {
  $nombre=$_POST['nombre'];
  // Recoge más campos según sea necesario

  $query = "INSERT INTO formulario (nombre) VALUES ('$nombre')";

    if (!mysqli_query($dbconnect, $query)) {
        die('An error occurred. Your review has not been submitted.');
    } else {
      echo "Thanks for your review.";
    }
}
?>