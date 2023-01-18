<?PHP
$email = $_POST["email"];
$name = $_POST["name"];
$phone = $_POST["phone"];

$to = "amitashdot@gmail.com";
$subject = "כההההה, יש ליד חדש";
$headers = "From: no-reply@boomerang.fit\n";
$message = " \n כהההה, מישהו רוצה לשמוע על האימונים\r\n<br>
שם: $name \r\n  
טלפון: $phone \r\n
email: $email \r\n

בהצלחה!
";

$user = "web@livnes.com";
$usersubject = "כהההה";
$userheaders = "From: no-reply@boomerang.fit\n";
$usermessage = "תודה פשוש";

mail($to,$subject,$message,$headers); //send to Sharon&Aya
mail($user,$usersubject,$usermessage,$userheaders); //send to user
?>
