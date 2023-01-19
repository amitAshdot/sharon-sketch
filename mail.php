<?PHP

$email = $_POST["email"];
$name = $_POST["name"];
$phone = $_POST["phone"];

$to = "amitashdot@gmail.com";
$subject = "כההההה, יש ליד חדש";
$headers = "From: no-reply@boomerang.fit\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html\r\n";

$message = " \n כהההה, מישהו רוצה לשמוע על האימונים\r\n<br>
שם: $name \r\n  
טלפון: $phone \r\n
email: $email \r\n

בהצלחה!
";

$user = $email;
$usersubject = "כהההה";
$userheaders = "From: no-reply@boomerang.fit\n";
$usermessage = "תודה פשוש";

$retval = mail($to,$subject,$message,$headers); //send to Sharon&Aya
if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
mail($user,$usersubject,$usermessage,$userheaders); //send to user
?>

