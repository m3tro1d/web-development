USE university;
SELECT
    student.name AS Name,
    student.surname AS Surname,
    student.age AS Age,
    `group`.name AS `Group`
FROM
    student
    JOIN `group` ON student.`group_id` = `group`.id
WHERE
    student.age = 19;
