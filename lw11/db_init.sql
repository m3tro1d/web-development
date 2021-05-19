-- Создание базы и таблиц
CREATE DATABASE university;
USE university;


CREATE TABLE faculty
(
    id               INT(11) AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)           NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;


CREATE TABLE `group`
(
    id               INT(11) AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)           NOT NULL,
    faculty_id       INT(11)                NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(faculty_id) REFERENCES faculty(id) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;


CREATE TABLE student
(
    id               INT(11) AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)           NOT NULL,
    surname          VARCHAR(255)           NOT NULL,
    age              INT(3)                 NOT NULL,
    `group_id`       INT(11)                NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(`group_id`) REFERENCES `group`(id) ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;
