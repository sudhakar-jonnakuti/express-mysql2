/* Create the database */
CREATE DATABASE IF NOT EXISTS blog;

/* Switch to the blog database */
USE blog;

/* Drop existing tables */
DROP TABLE IF EXISTS post;

/* Create the tables */
CREATE TABLE post (
  id      BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title   VARCHAR(255) DEFAULT NULL,
  author  VARCHAR(255) DEFAULT NULL,
  content VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
) AUTO_INCREMENT = 1;