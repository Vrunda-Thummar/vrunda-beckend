--                                             Table1
-- \sql
-- \connect root@localhost:3306
-- show databases;
-- use node5to7;
-- show tables;

-- create new table

create table CLIENT_MASTER(
    CLIENTNO varchar(6),
    NAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(15),
    PINCODE int,
    State varchar(15),
    NALDUE int
);

-- desc CLIENT_MASTER;

-- insert data

insert into CLIENT_MASTER values 
("C00001" , "Ivan Bayross" , "A/14" , "Worli" ,"Mumbai" , 400054 , "Maharastra" , 15000),
("C00002" , "Mamta Muzumdar", "65" , "Nariman" , "Madras" , 780001 , "Tamil Nadu" , 0),
("C00003" , "Chhaya Bankar", "P-7" , "Bandra" , "Mumbai" , 400057 , "Maharastra" , 5000),
("C00004" , "Ashwin Joshi", "A/5" , "Juhu" , "Banglore" , 560001 , "Karnataka" , 0),
("C00005" , "Hansel Colaco", "14" , "Marin" , "Mumbai" , 400060 , "Maharastra" , 2000),
("C00006" , "Deepak Sharma", "D-9" , "Juhu" , "Manglore" , 560050 , "karnataka" , 0);

-- select * from CLIENT_MASTER;





--                                              Table 2

-- \sql
-- \connect root@localhost:3306
-- show databases;
-- use node5to7;
-- show tables;

-- create new table

create table PRODUCT_MASTER(
    PRODUCTNO varchar(6),
    DESCRIPTION varchar(15),
    PROFITPERCENT float(4),
    UNITMEASURE varchar(10),
    QTYONHAND int,
    REORDERLVL int,
    SELLPRICE int,
    COSTPRICE int
);

-- desc PRODUCT_MASTER;

-- insert data

insert into PRODUCT_MASTER values
("P00001" , "T-Shirts" , 5 , "Piece" , 200 , 50 , 350 , 250),
("P0345" , "Shirt" , 6 , "Piece" , 150 , 50 , 500 , 350),
("P06734" , "Cotton Jeans" , 5 , "Piece" , 100 , 20 , 600 , 450),
("P07865" , "Jeans" , 5 , "Piece" , 100 , 20 , 750 , 500),
("P07868" , "Trouser" , 2 , "Piece" , 150 , 50 , 850 , 550),
("P07885" , "Pull Overs" , 2.5 , "Piece" , 80 , 30 , 700 , 450),
("P07965" , "Denim Shirts" , 4 , "Piece" , 100 , 40 , 350 , 250),
("P07975" , "Lycra Tops" , 5 , "Piece" , 70 , 30 , 300 , 175),
("P08865" , "Skirts" , 5 , "Piece" , 75 , 30 , 450 , 300);

-- select * from PRODUCT_MASTER;






--                                                 Table 3

-- \sql
-- \connect root@localhost:3306
-- show databases;
-- use node5to7;
-- show tables;

-- create new table

create table SALESMAN_MASTER(
    SALESMANNO varchar(6),
    SALESMANNAME varchar(20),
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(20),
    PINCODE int,
    STATE varchar(20),
    SALAMT int,
    TGTTOGET int,
    YTDSALES int,
    REMARKS varchar(60)
);

-- desc SALESMAN_MASTER;

-- insert data

insert into SALESMAN_MASTER values
("S00001" , "Aman" , "A/14" , "worli" , "Mumbai" , 400002 , "Maharastra" , 3000 , 100 , 50 , "Good"),
("S00002" , "Omkar" , "65" , "Nariman" , "Mumbai" , 400001 , "Maharastra" , 3000 , 200 , 100 , "Good"),
("S00003" , "Raj" , "p-7" , "Bandra" , "Mumbai" , 400032 , "Maharastra" , 3000 , 200 , 100 , "Good"),
("S00004" , "Ashish" , "A/5" , "Juhu" , "Mumbai" , 400044 , "Maharastra" , 3500 , 200 , 150 , "Good");

-- select * from SALESMAN_MASTER;
