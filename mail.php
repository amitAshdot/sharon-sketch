<?php
$email = $_POST["email"];
$name = $_POST["name"];
$phone = $_POST["phone"];
// $time = $_POST["time"];

$email_from = 'no-reply@boomerang.fit';

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion()."\r\n" .
'Content-type: text/html; charset=iso-8859-1'."\r\n";


$email_to = "boomerangfit23@gmail.com";
$email_subject = "Yes! Some want to join!";
//Errors to show if there is a problem in form fields.


$email_message = "<p>";
$email_message .= "אימייל: ". $email . " \r\n\n";
$email_message .= "</p>";
$email_message .= "<p>";
$email_message .= "שם: ".$name . " \r\n\n";
$email_message .= "</p>";
$email_message .= "<p>";
$email_message .= "טלפון: ".$phone . " \r\n\n";
$email_message .= "</p>";
// $email_message .= "<p>";
// $email_message .= "זמן לחזור: ".$time . " \r\n\n";
// $email_message .= "</p>";

$isMailSent = @mail($email_to, $email_subject, $email_message, $headers);
if($isMailSent){
   echo "mail sent:" . $isMailSent;
}else{
   echo "failed";
}
?>



