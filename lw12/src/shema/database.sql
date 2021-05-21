CREATE DATABASE lw12;
USE lw12;


CREATE TABLE feedback
(
    id               INT(11) AUTO_INCREMENT NOT NULL,
    name             VARCHAR(255)           NOT NULL,
    email            VARCHAR(255)           NOT NULL,
    country          VARCHAR(255)           NOT NULL,
    gender           VARCHAR(255)           NOT NULL,
    message          TEXT                   NOT NULL,
    UNIQUE(email),
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB;
