📜 2. SQL Commands (run inside psql or any SQL client)

These are standard SQL statements:

Database
CREATE DATABASE test;
DROP DATABASE test;

Connect / Switch
\c test;   -- (meta command, not SQL)

Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

DROP TABLE users;
ALTER TABLE users ADD COLUMN age INT;
ALTER TABLE users DROP COLUMN age;

Insert / Update / Delete
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

UPDATE users SET name = 'Alice Smith' WHERE id = 1;

DELETE FROM users WHERE id = 1;

Select / Query
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 2;
SELECT COUNT(*) FROM users;

Roles / Users
CREATE USER prakhar WITH PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE test TO prakhar;
DROP USER prakhar;

Indexes
CREATE INDEX idx_users_email ON users(email);
DROP INDEX idx_users_email;

Transactions
BEGIN;
UPDATE users SET name = 'Temp' WHERE id = 1;
ROLLBACK; -- undo
COMMIT;   -- save


👉 These two sets (meta-commands + SQL) cover 90% of what you’ll type in cmd for PostgreSQL.