/* Creating the database */

CREATE DATABASE vikaradb;

/* Creating the user table */
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    fullName varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    phone varchar(11) NOT NULL,
    pwdHash varchar(256) NOT NULL,
    karma integer DEFAULT 0
);

/* Creating the issues table */
CREATE TABLE issues(
    issue_id SERIAL PRIMARY KEY,
    issueType varchar(50) NOT NULL,
    issueName varchar(50) NOT NULL,
    area varchar(50) NOT NULL,
    description varchar(50) NOT NULL,
    targetAmount NUMERIC NOT NULL, 
    status varchar(50) NOT NULL,
    NoOfBackers integer DEFAULT 0,
);

/* Creating the media table */
CREATE TABLE media(
    issue_id integer REFERENCES issues(issue_id),
    media_loc varchar(256) NOT NULL,
);

/* Creating the volunteers table */
CREATE TABLE volunteers(
    id integer REFERENCES users(id),
    issue_id integer REFERENCES issues(issue_id),
);

/* Creating the funders table */
CREATE TABLE funders(
    id integer REFERENCES users(id),
    issue_id integer REFERENCES issues(issue_id),
    Amountfunded NUMERIC NOT NULL,
);
