<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
  <meta name="description" content="Profile Page v2" />
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
  <title>Profile Page v2</title>
</head>
<body class="has-overlapping">
  <header class="page-header page-header_dimmed">
    <nav class="page-header__navigation">
      <a href="#" class="navigation__item">
        <img class="navigation__icon" src="/images/about_me_icon.svg" alt="About me" />
        <div class="navigation__caption">Обо мне</div>
      </a>
      <a href="#" class="navigation__item">
        <img class="navigation__icon" src="/images/hobby_icon.svg" alt="Hobbies" />
        <div class="navigation__caption">Мое хобби</div>
      </a>
      <a href="#" class="navigation__item">
        <img class="navigation__icon" src="/images/video_icon.svg" alt="Movies" />
        <div class="navigation__caption">Любимые фильмы</div>
      </a>
    </nav>

    <nav class="page-header__navigation_hamburger">
      <div class="navigation__menu-toggle">
        <input type="checkbox" class="navigation__checkbox" />

        <span class="navigation__line"></span>
        <span class="navigation__line"></span>
        <span class="navigation__line"></span>

        <ul class="navigation__menu">
          <li>
            <a href="#" class="navigation__item">
              <img class="navigation__icon" src="/images/about_me_icon.svg" alt="About me" />
              <div class="navigation__caption">Обо мне</div>
            </a>
          </li>
          <li>
            <a href="#" class="navigation__item">
              <img class="navigation__icon" src="/images/hobby_icon.svg" alt="Hobbies" />
              <div class="navigation__caption">Мое хобби</div>
            </a>
          </li>
          <li>
            <a href="#" class="navigation__item">
              <img class="navigation__icon" src="/images/video_icon.svg" alt="Movies" />
              <div class="navigation__caption">Любимые фильмы</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="page-content">
    <div class="page-about has-floating">
        <div class="page-about__top">
          <img class="top__photo" src="/images/photo.png" alt="A photo of me" />
          <div class="top__quote">
            <div class="quote__text">
              Мы берем на себя много, потому что мало чего боимся
            </div>
            <div class="quote__caption">
              &mdash; Том Демарко. Deadline
            </div>
          </div>
        </div>
        <div class="page-about__rest">
          <div class=page-about__main>
            <h1 class="heading1 rest__heading1">Jane Doe</h1>
            <div class="divider rest__divider"></div>
            <p class="text">
            В 1930-е годы прошлого века физик Джордж Гамоу из
            университета штата Колорадо начал публиковать
            мини&#8209;сериал рассказов о неком мистере Томпкинсе,
            банковском клерке средних лет. Мистер Томпкинс, как
            явствовало из этих историй, интересовался современной
            наукой.
            </p>
            <h1 class="heading2 rest__heading2">Мое хобби</h1>
            <p class="text">
            Он регулярно посещал вечерние лекции местного профессора
            и, разумеется, всегда засыпал на самом интересном месте.
            А когда просыпался, то обнаруживал себя в каком&#8209;нибудь
            параллельном мире, где один из основных законов физики
            действовал не так, как в его мире. 
            </p>
            <p class="rest__link">
            <a class="link" href="#">Напиши мне</a> &rarr;
            </p>
          </div>
          <aside class="page-about__aside">
            <h3 class="heading3 aside__heading">Любимые писатели:</h3>
            <ul class="aside__list list markered-list">
              <li class="markered-list__item">Айзек Азимов</li>
              <li class="markered-list__item">Говард Лавкрафт</li>
              <li class="markered-list__item">Дмитрий Глуховский</li>
              <li class="markered-list__item">Чак Паланик</li>
            </ul>
            <h3 class="heading3 aside__heading">Любимые фильмы:</h3>
            <ol class="aside__list list">
              <li>Шоу Трумэна</li>
              <li>Малхолланд Драйв</li>
              <li>Семь жизней</li>
              <li>Гравитация</li>
            </ol>
          </aside>
        </div>
    </div>

    <div class="page-movies">
      <h2 class="heading2 page-movies__heading">Любимые фильмы</h2>
      <div class="page-movies__movie-container">
        <div class="movie-container__movie">
          <img class="movie-container__preview" src="/images/movie_1.png" alt="First movie" />
          <h3 class="movie-container__heading">Побег из Шоушенка</h3>
          <p class="movie-container__description">
            Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и доброй душой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.
          </p>
        </div>
        <div class="movie-container__movie">
          <img class="movie-container__preview" src="/images/movie_2.png" alt="Second movie" />
          <h3 class="movie-container__heading">Наркоз</h3>
          <p class="movie-container__description">
            Клай Бересфорд вынужден лечь под нож. Однако в процессе операции на сердце он неожиданно приходит в себя. Находясь в парализованном состоянии, будучи не в силах пошевелить ни рукой, ни ногой, он, тем не менее, чувствует каждое касание скальпеля к своей плоти…
          </p>
        </div>
        <div class="movie-container__movie">
          <img class="movie-container__preview" src="/images/movie_3.png" alt="Third movie" />
          <h3 class="movie-container__heading">Астрал</h3>
          <p class="movie-container__description">
            Джош и Рене переезжают со своими детьми в новый дом, но не успевают толком распаковать вещи, как начинаются странные события. Необъяснимо перемещаются предметы, в детской звучат странные звуки… Но в настоящий ужас приходят родители, когда их десятилетний сын Далтон впадает в кому. Все усилия врачей в больнице помочь мальчику безуспешны.
          </p>
        </div>
        <div class="movie-container__movie">
          <img class="movie-container__preview" src="/images/movie_4.png" alt="Fourth movie" />
          <h3 class="movie-container__heading">Гравитация</h3>
          <p class="movie-container__description">
            Доктор Райан Стоун, блестящий специалист в области медицинского инжиниринга, отправляется в свою первую космическую миссию под командованием ветерана астронавтики Мэтта Ковальски, для которого этот полет — последний перед отставкой. Но во время, казалось бы, рутинной работы за бортом случается катастрофа. <br> Шаттл уничтожен, а Стоун и Ковальски остаются совершенно одни; они находятся в связке друг с другом, и все, что они могут, — это двигаться по орбите в абсолютно черном пространстве без всякой связи с Землей и какой-либо надежды на спасение.
          </p>
        </div>
      </div>
      <button class="fancy-button page-movies__all-button">Все фильмы</button>
    </div>

    <div class="page-contact">
      <div class="page-contact__header">
        <hr class="page-contact__line" />
        <h3 class="page-contact__heading">Напиши мне</h3>
        <hr class="page-contact__line" />
      </div>

      <form class="page-contact__contact-form" method="POST">
        <div class="contact-form__main-info">
          <label for="name" class="contact-form__label contact-form__label_required">Ваше имя</label>
          <input id="name" class="contact-form__item contact-form__text" type="text" name="name" required="required" value="<?php echo $args['name'] ?? '' ?>" />
          <div class="page-contact__msg page-contact__msg_error">
            <?php echo $args['name-msg'] ?? '' ?>
          </div>

          <label for="email" class="contact-form__label contact-form__label_required">Ваш email</label>
          <input id="email" class="contact-form__item contact-form__text" type="email" name="email" required="required" value="<?php echo $args['email'] ?? '' ?>" />
          <div class="page-contact__msg page-contact__msg_error">
            <?php echo $args['email-msg'] ?? '' ?>
          </div>
        </div>

        <label for="country" class="contact-form__label">Откуда вы?</label>
        <select id="country" name="country" class="contact-form__item contact-form__country">
          <option value="RUS">Россия</option>
          <option value="USA" <?php echo isset($args['country']) && $args['country'] === 'USA' ? 'selected' : '' ?>>США</option>
          <option value="GER" <?php echo isset($args['country']) && $args['country'] === 'GER' ? 'selected' : '' ?>>Германия</option>
          <option value="ITA" <?php echo isset($args['country']) && $args['country'] === 'ITA' ? 'selected' : '' ?>>Италия</option>
          <option value="GSK" <?php echo isset($args['country']) && $args['country'] === 'GSK' ? 'selected' : '' ?>>Генсокё</option>
        </select>
        <div class="page-contact__msg page-contact__msg_error">
          <?php echo $args['country-msg'] ?? '' ?>
        </div>

        <div class="contact-form__label contact-form__gender-heading">Ваш пол</div>
        <div class="contact-form__gender">
          <input id="male" type="radio" name="gender" value="male" <?php echo isset($args['gender']) && $args['gender'] === 'male' || !isset($args['gender']) ? 'checked' : '' ?> />
          <label for="male" class="contact-form__label contact-form__gender-label">Мужской</label>
          <input id="female" type="radio" name="gender" value="female" <?php echo isset($args['gender']) && $args['gender'] === 'female' ? 'checked' : '' ?> />
          <label for="female" class="contact-form__label contact-form__gender-label">Женский</label>
        </div>
        <div class="page-contact__msg page-contact__msg_error">
          <?php echo $args['gender-msg'] ?? '' ?>
        </div>

        <label for="message" class="contact-form__label contact-form__label_required">Ваше сообщение</label>
        <textarea id="message" name="message" class="contact-form__item contact-form__message" required="required"><?php echo $args['message'] ?? '' ?></textarea>
        <div class="page-contact__msg page-contact__msg_error">
          <?php echo $args['message-msg'] ?? '' ?>
        </div>

        <input type="submit" value="Отправить" class="fancy-button contact-form__submit" />
        <div class="page-contact__msg">
          <?php echo $args['msg'] ?? '' ?>
        </div>
      </form>
    <a class="link rest__link feedback__link" href="/feedbacks.php">Просмотр отзывов</a>
    </div>

    <footer class="page-footer">
      <div class="footer__copyright">&copy; 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО &laquo;ПГТУ&raquo;</div>
    </footer>
  </div>
</body>
</html>
