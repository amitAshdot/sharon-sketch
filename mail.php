<?
 $recepient = "amitashdot@gmail.com";

$name = trim($_POST["name"]);
$text_2 = trim($_POST["phone"]);
$email = trim($_POST["email"]);

$message = " \n כהההה, מישהו רוצה לשמוע על האימונים\r\n<br>
שם: $text_1 \r\n  </br>

טלפון: $text_2 \r\n </br>

email: $text_3 \r\n </br>

בהצלחה!
";

$to "amitashdot@gmail.com"
$pagetitle = "כהההה, מישהו רוצה לשמוע על האימונים";
$headers = "Content-Type: text/html; charset=UTF-8";
$from = "postmaster@boomerang.fit";
header("Location: https://boomerang.fit/thank-you");
// mail($recepient, $pagetitle, $message, $headers,$from);
$mymessage = quoted_printable_encode($message);

function mail_utf8($to, $subject = 'מישהו רוצה לשמוע על האימונים', $message = '', $from ='') { 
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";
  $headers .= "Content-Transfer-Encoding: quoted-printable\r\n";
  $headers .= "From: $from\r\n";
  mail($to, $subject, $message, $headers, $from);  
}
mail_utf8 ($recepient, $pagetitle, $mymessage , $from);

?>
