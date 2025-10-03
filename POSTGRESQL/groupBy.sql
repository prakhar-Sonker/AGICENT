-- eg-- write query to find the no. of employees in each department?

select dept,count(emp_id) from employee
group by (dept);

-- find the total salaries dept giving to their employees

select dept,sum(salary) from employee
group by (dept);