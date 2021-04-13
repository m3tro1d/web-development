<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
  <meta name="description" content="Profile Page v2 Feedbacks" />
  <link rel="stylesheet" type="text/css" href="/css/style.css" />
  <link rel="stylesheet" type="text/css" href="/css/feedbacks.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
  <title>Profile Page v2 | Feedbacks</title>
</head>
<body>
  <form class="page-feedbacks" method="POST">
    <label for="email" class="contact-form__label contact-form__label_required">Email</label>
    <input id="email" name="email" class="contact-form__item contact-form__text" type="email" required="required" value="<?php echo $args['email'] ?? '' ?>" />
    <input class="fancy-button contact-form__submit" type="submit" value="Отправить" />
  </form>

  <?php
    if (isset($args['error']) && $args['error']):
      echo '<div class="feedbacks-result__error-msg">';
      echo $args['msg'];
      echo '</div>';
    else:
      if (isset($args['email'])):
        echo '<ul class="feedbacks-result__info">';
        echo '<li>Name: <b>' . $args['name'] . '</b></li>';
        echo '<li>Email: <b>' . $args['email'] . '</b></li>';
        echo '<li>Country: <b>' . $args['country'] . '</b></li>';
        echo '<li>Gender: <b>' . $args['gender'] . '</b></li>';
        echo '';
        echo '<li>Message:</li>';
        echo '<b>' . str_replace(PHP_EOL, '<br />', $args['message']) . '</b></li>';
        echo '</ul>';
      endif;
    endif;
  ?>

  <a class="link rest__link" href="/">На главную</a>
</body>
</html>
