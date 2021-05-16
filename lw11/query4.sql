USE university;
SELECT
    faculty.name AS Факультет,
    `group`.name AS Группа
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
    JOIN faculty ON `group`.faculty_id = faculty.id
WHERE
    student.name = 'Ксения' AND student.surname = 'Ильина'; -- Указать имя и фамилию для поиска
