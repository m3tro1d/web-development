USE university;
SELECT
    student.name AS Имя,
    student.surname AS Фамилия,
    `group`.name AS Группа
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
    JOIN faculty ON `group`.faculty_id = faculty.id
WHERE
    faculty.name = 'ФИиВТ'; -- Указать факультет для поиска
