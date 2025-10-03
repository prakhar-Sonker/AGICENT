create table employee(
 emp_id SERIAL primary key,
 fname VARCHAR(50) NOT NULL,
 lname VARCHAR(50) NOT NULL,
 email VARCHAR(100) NOT NULL UNIQUE,
 dept VARCHAR(20), 
 salary DECIMAL(10,2) DEFAULT 30000.00,
 hire_date DATE NOT NULL DEFAULT CURRENT_DATE
);


-- //add entries


INSERT INTO employee(fname, lname, email, dept, salary, hire_date)
VALUES
  ('Raj','Sharma','raj.sharma@example.com','IT',50000,'2020-01-15');


INSERT INTO employee (fname, lname, email, dept, salary, hire_date)
VALUES
   ('Priya','Singh','priya.singh@example.com','HR',45000,'2019-03-22'),
   ('Arjun','Verma','arjun.verma@example.com','IT',55000,'2021-06-01'),
   ('Suman','Patel','suman.patel@example.com','Finance',60000,'2018-07-30'),
   ('Kavita','Rao','kavita.rao@example.com','HR',47000,'2020-11-10'),
   ('Amit','Gupta','amit.gupta@example.com','Marketing',52000,'2020-09-25'),
   ('Neha','Desai','neha.desai@example.com','IT',48000,'2019-05-18'),
   ('Rahul','Kumar','rahul.kumar@example.com','IT',53000,'2021-02-14'),
   ('Anjali','Mehta','anjali.mehta@example.com','Finance',61000,'2018-12-03'),
   ('Vijay','Nair','vijay.nair@example.com','Marketing',50000,'2020-04-11');