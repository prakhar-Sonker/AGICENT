Problem 1 – Simple Users Table

Task:
Create a table users with columns:
id (auto-increment primary key)
name (text, not null)
email (unique, not null)
age (integer)

Perform the following operations:
Insert 3 users of your choice.
Update the age of one user.
Delete one user.
Select all users to see the final table.

-- query
-- isse table k columns bn jyenge ab entries add krni hai
create table userdata(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
);

-- entries added

insert into userdata(id, name, email, age)
values
 (1, 'Prakhar', 'prkhar@email.com', 22),
 (2, 'Rohit', 'rohit@email.com', 23),
 (3, 'Harsh', 'harsh@email.com', 23);
--  correction
✔️ Works fine.
👉 But since you used id SERIAL PRIMARY KEY, you don’t need to manually insert IDs. PostgreSQL auto-generates them. Best practice would be:

insert into userdata(name, email, age)
values
 ('Prakhar', 'prkhar@email.com', 22),
 ('Rohit', 'rohit@email.com', 23),
 ('Harsh', 'harsh@email.com', 23);



-- age update of one user

update userdata
   set age = 24
   WHERE
      id = 3;

-- delete 1 user
delete from userdata
where id = 3;

-- selecting all users
select * from userdata;

🔑 Key Takeaways

Don’t insert into id column if it’s SERIAL → let PostgreSQL handle auto IDs.