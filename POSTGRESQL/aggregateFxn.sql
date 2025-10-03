-- how to find total no of employees?
-- isme count() fxn use hoga aur isme try kro primary key do to unique rec hocount honge
select count(emp_id) from employee;

-- emp with max salary?
select max(salary) from employee;

-- avg salary of employees?
select avg(salary) from employee;


-- total amount paid in terms of salary? -- we can sum all the salary
select sum(salary) from employee;

