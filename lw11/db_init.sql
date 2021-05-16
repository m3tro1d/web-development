-- Создание базы и таблиц
CREATE DATABASE university;
USE university;


CREATE TABLE faculty
(
    id               INT AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)       NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;


CREATE TABLE `group`
(
    id               INT AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)       NOT NULL,
    faculty_id       INT                NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;


CREATE TABLE student
(
    id               INT AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)       NOT NULL,
    surname          VARCHAR(255)       NOT NULL,
    age              INT                NOT NULL,
    `group_id`       INT                NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;
