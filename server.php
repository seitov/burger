<?php
  
  $name = $_POST ['user-name'];
  $phone = $_POST ['user-phone'];
  $street = $_POST ['user-street'];
  $house = $_POST ['user-house'];
  $korpus = $_POST ['user-korpus'];
  $apartment = $_POST ['user-apartment'];
  $floor = $_POST ['user-floor'];
  $text = $_POST ['user-text'];
  $pay = $_POST ['pay'];

  $call = $_POST ['call'];
  $call = isset($call) ? 'НЕТ' : 'ДА';

  $mail_mesagge = '
  <html>
    <head>
      <title>Заявка</title>
    </head>
  <body>
    <h2>Заявка</2>
    <ul>
      <li>Имя: ' . $name . '</li>
      // <li>Телефон: ' . $phone . ' </li>
      <li>Улица: ' . $street . ' </li>
      <li>Дом: ' . $house . ' </li>
      <li>Корпус: ' . $korpus . ' </li>
      <li>Квартира: ' . $apartment . ' </li>
      <li>Этаж: ' . $floor . ' </li>
      <li>Комментарий: ' . $text . ' </li>
      <li>Способ оплаты: ' . $pay . ' </li>
      <li>Перезванивать: ' . $call . ' </li>
    </ul>
  </body>
  </html>';

  echo "$mail_mesagge";

  $headers = "From: Администратор сайта <seitovnurken@yndex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('seitovnurken@gmail.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
      echo 'done';
    }else {
      echo 'error';
    }

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>