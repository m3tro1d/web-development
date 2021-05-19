USE university;
SELECT
    student.name AS Name,
    student.surname AS Surname,
    `group`.name AS `Group`,
    faculty.name AS Faculty
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
    JOIN faculty ON `group`.faculty_id = faculty.id
WHERE
    faculty.name = 'ФИиВТ'; -- Указать факультет для поиска
