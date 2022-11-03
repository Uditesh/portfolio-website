<?php
if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient =  "uditesh.r.jha@gmail.com";
$subject = "Portfolio Message";

mail($recipient,$subject,$message,$mailheader) or die("Error!");
header('Location: index.html');
}
?>