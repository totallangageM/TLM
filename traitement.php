<?php

$firstname = $_POST["firstname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$gender = $_POST["gender"];
$option = $_POST["option"];
$message = $_POST["message"];

$mailheader = "From".$email.">\r\n";

$recipient = "stanleynewcl@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("error!");

echo'

';




?>