USE university;
SELECT
    student.name AS Name,
    student.surname AS Surname,
    `group`.name AS `Group`
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
WHERE
    `group`.name = 'ПС-11'; -- Указать группу для поиска
