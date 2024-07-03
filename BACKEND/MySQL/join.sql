use node5to7;

-- a. Find out the products, which have been sold to 'ivan bayross'.

select sod.productno, pm.description, cm.name from sales_order_details sod 
inner join product_master pm on sod.productno = pm.productno
inner join sales_order so on sod.orderno = so.orderno
inner join client_master cm on cm.clientNo = so.cleintNo where cm.NAME = "Ivan Bayross"; 


-- b. Find out the products and their quantities that will have to be delivered in the currunt month.


select sod.qtyordered , pm.description from sales_order_details sod 
inner join product_master pm on sod.productno = pm.productno
inner join sales_order so on sod.orderno = so.orderno
WHERE MONTH(so.orderdate) = current_date();





-- c. List the ProductNo and description of constantly sold products. 

select pm.productno , pm.description from sales_order_details sod
inner join product_master pm 
on sod.productno = pm.productno 
where reorderlvl > 30;

select * from Product_master;

-- d. Find the names of clients who have purchased "Trousers".

select cm.clientno, cm.name , pm.description from client_master cm
inner join sales_order so on cm.clientno = so.cleintno
inner join sales_order_details sod on  so.orderNo = sod.orderno
inner join product_master pm on  pm.description = 'Trousers';


-- e. List the products and their orders from customers who have ordered less than 5 units of "Pull Overs".

select * from product_master;

SELECT client_master.Name, sales_order.Orderno, Product_master.description, sales_Order_Details.qtyordered FROM client_master
inner JOIN sales_order ON client_master.clientno = sales_Order.cleintno
inner JOIN sales_Order_Details ON sales_Order.Orderno = sales_Order_Details.Orderno
inner JOIN Product_master ON sales_Order_Details.Productno = Product_master.Productno
WHERE Product_master.description = 'Pull Overs' && sales_Order_Details.qtyordered < 5;



-- f. Find the products and their quantities for the orders placed by "Ivan Bayross" and "Mamta Muzumdar",

select sod.productno, pm.description, cm.name from sales_order_details sod 
inner join product_master pm on sod.productno = pm.productno
inner join sales_order so on sod.orderno = so.orderno
inner join client_master cm on cm.clientNo = so.cleintNo where cm.NAME = "Ivan Bayross" && cm.name = "Mamta Muzumdar";



-- g. Find the products and their quantities for the order placed by clirntno'C00001' and 'C00002'.

select sod.orderno, pm.description, cm.name , cm.clientno, pm.qtyonhand, sod.qtyordered from sales_order_details sod 
inner join product_master pm on sod.productno = pm.productno
inner join sales_order so on sod.orderno = so.orderno
inner join client_master cm on cm.clientNo = so.cleintNo where cm.clientno = "C00001" && cm.clientno = "C00002";

