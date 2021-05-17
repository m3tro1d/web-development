-- Внос данных
USE university;


INSERT INTO faculty
    (name)
VALUES
    ('ФИиВТ'),
    ('РТФ'),
    ('ФУП');


INSERT INTO `group`
    (name, faculty_id)
VALUES
    ('ПС-11', 1),
    ('БИ-21', 1),
    ('ИВТ-32', 1),
    ('БТС-11', 2),
    ('ИТС-21', 2),
    ('РСК-32', 2),
    ('ГМУ-11', 3),
    ('ИНВ-21', 3),
    ('МТ-32', 3);


INSERT INTO student
    (name, surname, age, `group_id`)
VALUES
    ('Ксения', 'Ильина', 18, 1),
    ('Кира', 'Захарова', 19, 1),
    ('София', 'Блохина', 21, 1),
    ('Елизавета', 'Бородина', 19, 1),
    ('Варвара', 'Грекова', 18, 1),
    ('Виктория', 'Шестакова', 19, 2),
    ('Вероника', 'Шмелева', 20, 2),
    ('Иван', 'Коршунов', 19, 2),
    ('Сергей', 'Давыдов', 18, 2),
    ('Иван', 'Богданов', 20, 2),
    ('Анастасия', 'Белякова', 18, 3),
    ('Михаил', 'Крылов', 18, 3),
    ('Лилия', 'Тарасова', 19, 3),
    ('Кирилл', 'Левин', 21, 3),
    ('Алиса', 'Сахарова', 19, 3),
    ('Павел', 'Майоров', 22, 4),
    ('Артём', 'Чернов', 20, 4),
    ('Алиса', 'Овчинникова', 19, 4),
    ('Павел', 'Ковалев', 20, 4),
    ('Пётр', 'Жуков', 18, 4),
    ('Вячеслав', 'Соколов', 17, 5),
    ('Полина', 'Митрофанова', 18, 5),
    ('Виктория', 'Игнатова', 19, 5),
    ('Артемий', 'Лебедев', 20, 5),
    ('Пётр', 'Пантелеев', 19, 5),
    ('Всеволод', 'Иванов', 18, 6),
    ('Амина', 'Осипова', 19, 6),
    ('Иван', 'Седов', 20, 6),
    ('Арсений', 'Куприянов', 20, 6),
    ('Василиса', 'Николаева', 20, 6),
    ('Тимур', 'Николаев', 18, 7),
    ('Дмитрий', 'Трофимов', 21, 7),
    ('Валерия', 'Ларина', 19, 7),
    ('Диана', 'Трофимова', 21, 7),
    ('Полина', 'Иванова', 22, 7),
    ('София', 'Третьякова', 18, 8),
    ('Михаил', 'Иванов', 19, 8),
    ('Елизавета', 'Покровская', 18, 8),
    ('Александра', 'Меркулова', 19, 8),
    ('Ксения', 'Чернышева', 20, 8),
    ('Вероника', 'Субботина', 21, 9),
    ('Александр', 'Титов', 23, 9),
    ('Алёна', 'Маслова', 21, 9),
    ('Александра', 'Глушкова', 19, 9),
    ('Милана', 'Нестерова', 18, 9);
