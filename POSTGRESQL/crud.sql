create table person(
  id INT,
  name VARCHAR(100),
  city VARCHAR(100)
);

-- ye abhi single data tha
INSERT INTO person(id,name,city)
VALUES
(101, 'Raju', 'Delhi');
-- multiple data k liye
(102, 'Rajendra', 'Kanpur'),
(103, 'Raj', 'Indore');

-- agr tum saare case m jb value provide kr re ho tb agr jitni tune define kri hai saari value dere ho to baad me tum jb qury run kro tb INSERT INTO person(id,name,city) is wle part se (id,name,city) hta bhi skte ho. bs point ye hai ki 3no values do 1bhi miss mt krna....


-- reading data
-- it gives all the table bcz of star
SELECT * FROM person;
-- if u want a particular column so write the col name
SELECT name FROM person;

-- updating the data from a table
update person
   set city='Banglore'
   where
     name='Raju';
-- yha pe jaise hmlog ne name use krliya hai pr nhi krnas chaiye kyunki database me mutiple log ho skte hai same name k to isliye we update any record with some unique thing like id...


-- deleting a particular entry 
delete from person
where id= 101;
or where name ='Raj';
-- but we wil only use id bcz it is unique and we can identify unique records through it


-- //iska drawback ye hai ki agr isme koi entry add kre jiski id unique na bhi ho tobhi wo add hojyegi 
-- eg-- ye add hojyengi thisis a drawabck
(103, 'Rajendra', 'Kanpur'),
(103, 'Raj', 'Indore');