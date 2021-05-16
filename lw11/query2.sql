USE university;
SELECT
    student.name AS Имя,
    student.surname AS Фамилия
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
WHERE
    `group`.name = 'ПС-11'; -- Указать группу для поиска
