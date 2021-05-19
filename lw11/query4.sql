USE university;
SELECT
    student.name AS Name,
    student.surname AS Surname,
    faculty.name AS Faculty,
    `group`.name AS `Group`
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
    JOIN faculty ON `group`.faculty_id = faculty.id
WHERE
    student.name = 'Ксения' AND student.surname = 'Ильина'; -- Указать имя и фамилию для поиска
