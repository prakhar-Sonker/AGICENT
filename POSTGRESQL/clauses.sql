-- 1> where clause
select * from employee
 where emp_id = 5;

--  get the salary of employees whose salary are equal or greater than 50000
select * from employee
where salary>=50000;

-- find the employees of hr and it dept only
select * from employee
where dept= 'IT' or dept= 'HR';

-- find the employees whose dept='IT' and salary greater then 50000
select * from employee
where dept= 'IT' and salary>50000;


-- IN , NOT IN --> These are the better version of OR AND operators it avoids the repetetion if we have to find multiple emp of diff dept only

-- find the employees whose dept are IT, HR AND FINANCE
SELECT * FROM employee
where dept='IT' OR dept='HR' OR dept='Finance';
-- to avoid this we use IN 
SELECT * FROM employee
where dept IN('IT','HR','Finance');

-- NOT IN --> ye tb use krte hai jb aisa record chaiye jo entry na hi eg-- aise emp btao jo it, hr dept ke na ho tb we use not in

-- BETWEEN 
-- find emp whose salary is more than 40000 and less than 65000 

select * from employee
where salary BETWEEN 40000 and 60000;

-- DISTINCT 
-- it is used to get the unique values
select DISTINCT dept from employee;
-- agr ek particular unique cheej chiaye jaise agr chaiye ki saare cities k naam aajaye jha se emp hai to distinct use krlo


-- order by
-- agr sorted data chaiye jaise ki kis col k basis pe sort krna hai jaise fname ke basis pe sort krna hai isliye use kr skte hai ye by default ascending order krta hai
select * from employee
order by fname;
-- by default asc order krta hai agr desc order chaiye to --
order by fname desc;

-- limit
select * from employee
limit 3;
-- isse bas 3 record dekhne ko mil jyenge by default top 3 dedega

--LIKE
-- mujhe un emp ka data nikaal kr do jin emp ka naam r se shuru hota hai iske liye like use kr skte hai
select * from employee
where fname like 'R%';

-- un emp ka naam do jinka name a se end hota ho

select * from employee
where fname like '%a'; 

-- un emp ka record do jisme sirf 2 char  ho lets say jinke dept me sirf 2 char ho

select * from employee
where dept like '__';

-- emp jinka name me 2nd char a ho

select * from employee
where fname like '_a%';
