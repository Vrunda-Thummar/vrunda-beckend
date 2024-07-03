use node5to7;

--                                                     Table 1 

create table CLIENT_MASTER(
	CLIENTNO varchar(6) primary key,
    NAME varchar(20) not null,
    ADDRESS1 varchar(30),
    ADDRESS2 varchar(30),
    CITY varchar(15),
    PINCODE int,
    STATE varchar(15),
    BALDUE int
);

desc CLIENT_MASTER;

insert into CLIENT_MASTER values 
("C00001" , "Ivan Bayross" , "A/14" , "Worli" ,"Mumbai" , 400054 , "Maharastra" , 15000),
("C00002" , "Mamta Muzumdar", "65" , "Nariman" , "Madras" , 780001 , "Tamil Nadu" , 0),
("C00003" , "Chhaya Bankar", "P-7" , "Bandra" , "Mumbai" , 400057 , "Maharastra" , 5000),
("C00004" , "Ashwin Joshi", "A/5" , "Juhu" , "Banglore" , 560001 , "Karnataka" , 0),
("C00005" , "Hansel Colaco", "14" , "Marin" , "Mumbai" , 400060 , "Maharastra" , 2000),
("C00006" , "Deepak Sharma", "D-9" , "Juhu" , "Manglore" , 560050 , "karnataka" , 0);

select * from CLIENT_MASTER;



--                                                    Table 2

create table PRODUCT_MASTER(
	PRODUCTNO varchar(6) primary key,
    DESCRIPTION varchar(15) not null,
    PROFITPERCENT int not null,
    UNITMEASURE varchar(10) not null,
    QTYONHAND int not null,
    REORDERLVL int not null,
    SELLPRICE int not null,
    COSTPRICE int not null
); 

desc PRODUCT_MASTER;

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

select * from PRODUCT_MASTER;

--                                                    table 3

create table SALESMAN_MASTER(
	SALESMANNO varchar(6) primary key,
    SALESMANNAME varchar(20) not null,
    ADDRESS1 varchar(30) not null,
    ADDRESS2 varchar(30),
    CITY varchar(20),
    PINCODE int,
    STATE varchar(20),
    SALAMT int not null,
    TGTTOGET int not null,
    YTDSALES int not null,
    REMARKS varchar(60)
);

desc SALESMAN_MASTER;

insert into SALESMAN_MASTER values
("S00001" , "Aman" , "A/14" , "worli" , "Mumbai" , 400002 , "Maharastra" , 3000 , 100 , 50 , "Good"),
("S00002" , "Omkar" , "65" , "Nariman" , "Mumbai" , 400001 , "Maharastra" , 3000 , 200 , 100 , "Good"),
("S00003" , "Raj" , "p-7" , "Bandra" , "Mumbai" , 400032 , "Maharastra" , 3000 , 200 , 100 , "Good"),
("S00004" , "Ashish" , "A/5" , "Juhu" , "Mumbai" , 400044 , "Maharastra" , 3500 , 200 , 150 , "Good");

select * from SALESMAN_MASTER;



--                                                  table 4

 create table SALES_ORDER(
	ORDERNO varchar(6) primary key,
    CLEINTNO varchar(6),
    ORDERDATE date not null,
    SALESMANNO varchar(6),
    DELYTYPE char(1),
    BILLYN char(1),
    DELYDATE date,
    ORDERSTATUS varchar(10),
    
	foreign key (CLEINTNO) references CLIENT_MASTER(CLIENTNO),
	foreign key (SALESMANNO) references SALESMAN_MASTER(SALESMANNO)
);

desc SALES_ORDER;

insert into SALES_ORDER values
("O19001" , "C00001" , "2012-06-04" , "S00001" , "F" , "N" , "2020-07-02" , "In Process"),
("O19002" , "C00002" , "2025-06-04" , "S00002" , "P" , "N" , "2027-06-02" , "Cancelled"),
("O46865" , "C00003" , "2018-02-04" , "S00003" , "F" , "Y" , "2020-02-02" , "Fulfilled"),
("O19003" , "C00001" , "2003-04-04" , "S00001" , "F" , "Y" , "2007-04-02" , "Fulfilled"),
("O46866" , "C00005" , "2020-05-04" , "S00002" , "P" , "N" , "2022-05-02" , "Cancelled"),
("O19008" , "C00006" , "2024-05-04" , "S00004" , "F" , "N" , "2026-07-02" , "In Process");

select * from SALES_ORDER;



--                                                              table 5

  create table SALES_ORDER_DETAILS(
	ORDERNO varchar(6),
    PRODUCTNO varchar(6),
    QTYORDERED int,
    QTYDISP int,
    PRODUCTRATE int,
    
	foreign key (ORDERNO) references SALES_ORDER(ORDERNO),
	foreign key (PRODUCTNO) references PRODUCT_MASTER(PRODUCTNO)
);

desc SALES_ORDER_DETAILS;

insert into SALES_ORDER_DETAILS values
("O19001" , "P00001" , 4 , 4 , 525),
("O19001" , "P07965" , 2 , 1 , 8400),
("O19001" , "P07885" , 2 , 1 , 5250),
("O19002" , "P00001" , 10 , 0 , 525),
("O46865" , "P07868" , 3 , 3 , 3150),
("O46865" , "P07885" , 3 , 1 , 5250),
("O46865" , "P00001" , 10 , 10 , 525),
("O46865" , "P0345" , 4 , 4 , 1050),
("O19003" , "P0345" , 2 , 2 , 1050),
("O19003" , "P06734" , 1 , 1 , 12000),
("O46866" , "P07965" , 1 , 0 , 8400),
("O46866" , "P07975" , 1 , 0 , 1050),
("O19008" , "P00001" , 10 , 5 , 525),
("O19008" , "P07975" , 5 , 3 , 1050);

select * from SALES_ORDER_DETAILS;





