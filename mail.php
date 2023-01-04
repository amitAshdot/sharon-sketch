<?
 $recepient = "amitashdot@gmail.com";



$message = " \n מברוק! קיבלתם ליד חדש \r\n<br>

בהצלחה!
";
$pagetitle = "ליד חדש - partnertv-sales.co.il";
$headers = "Content-Type: text/html; charset=UTF-8";
$from = "Boomerangfit23@gmail.com";

// header("Location: https://partnertv-sales.co.il/thankyoupage/");
// mail($recepient, $pagetitle, $message, $headers,$from);
$mymessage = quoted_printable_encode($message);

function mail_utf8($to, $subject = '(No subject)', $message = '', $from ='') { 
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";
  $headers .= "Content-Transfer-Encoding: quoted-printable\r\n";
  $headers .= "From: $from\r\n";
  mail($to, $subject, $message, $headers, $from);  
}
mail_utf8 ($recepient, $pagetitle, $mymessage , $from);
?>
