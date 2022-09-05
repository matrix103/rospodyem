<?php
// Файлы phpmailer
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';
require './phpmailer/src/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['username'];
$email = $_POST['useremail'];
$usersername = $_POST['usersername'];
$phone = $_POST['userphone'];
$text = $_POST['text'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br>
<br><b>Сообщение:</b><br>$text";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.rospodyem.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'support@rospodyem.ru'; // Логин на почте
    $mail->Password   = '6F9j9Z5m'; // Пароль на почте
    $mail->SMTPSecure = 'TSL';
    $mail->Port       = 25;
    $mail->setFrom('support@rospodyem.ru', 'Rospodyem'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('Rospodyem@mail.ru');  

    $mail->SMTPOptions = array(
      'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    
  

  
  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";} 
  else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }
  
  // Отображение результата
  echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);