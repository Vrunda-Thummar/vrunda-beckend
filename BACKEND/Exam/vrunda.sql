-- Q.1 create a database named student_management. Write the SQL query for creating this databases.

create database student_management;


-- Q.2 create the following tables with the given structures:

-- Studets:

create table Students(
    student_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    DOB date,
    gender varchar(10),
    class_id int
);

-- Classes:

create table Classes(
    class_id int primary key,
    class_name varchar(50),
    teacher_id int
);

-- Teachers:

create table Teachers(
    teacher_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    subject varchar(50)
);


-- Q.3 Insert the following data into the respective tables:

-- Students:

insert into Students value
(1 , "Arjun" , "Kumar" , "2005-04-23" , "Male" , 1),
(2 , "Priya" , "Sharma" , "2006-06-15" , "Female" , 1),
(3 , "Rohan" , "Singh" , "2007-09-12" , "Male" , 2),
(4 , "Anjali" , "Varma" , "2005-11-22" , "Female" , 2),
(5 , "Amit" , "Patel" , "2008-02-03" , "Male" , 1);

-- Classes:

insert into Classes value
(1 , "Mathematics" , 1),
(2 , "Science" , 2),
(3 , "English" , 3),
(4 , "History" , 4),
(5 , "Geography" , 5);

-- Teachers:

insert into Teachers value
(1, "Ravi" , "Mehta" , "Mathematics"),
(2, "Suman" , "Rao" , "Science"),
(3, "Kavita" , "Desai" , "English"),
(4, "Rajesh" , "Khan" , "History"),
(5, "Sneha" , "Joshi" , "Geography");


-- Q.4 1. Select all details of students who are in class 1.

select * from Students where class_id = 1;

-- Q.4 2. Retrieve the first and last names of all teachers.

select first_name , last_name from Teachers;

-- Q.5 Retrieve the enrollment details along with student and class names.

create table Enrollments(
    enrollment_id int primary key,
    enrollment_date date,
    student_id int,
    teacher_id int,

    foreign key (student_id) references Students(student_id),
    foreign key (teacher_id) references Teachers(teacher_id)
);

insert into Enrollments value
(1 , "2024-07-05" , 1 , 1),
(2 , "2024-07-06" , 2 , 2),
(3 , "2024-07-07" , 3 , 3),
(4 , "2024-07-08" , 4 , 4),
(5 , "2024-07-09" , 5 , 5);

select * from Enrollments E
inner join student_id from Students s on s.student_id = E.student_id
inner join teacher_id from Teachers t on t.teacher_id = E.teacher_id;


-- Q.6 1. Update the last name of the student with student_id 1 to "singh".

update Students set last_name = "Singh" where student_id = 1 ; 


-- Q.7 1. Count the total number of Students.

select count(student_id) from Students;

-- Q.7 2. Find the maximum age of students, assuming today's date is "2024-07-05".

select max(dob) from Students where date("2024-07-05");

-- Q.8 1. Delete the student with student_id 5 from the student table.

Delete from Students where student_id = 5;

-- Q.8 2. Delete the enrollment with enrollment_id 4 from the Enrollments table.

Delete from Enrollments where enrollment_id = 4;
