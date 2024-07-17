// aggregation pipeline => []

// db.books.find({"country" : "Iceland" , "pages":470})

// db.books.aggregate([
//     {
//         $match : {"country" : "Iceland" , "pages" : 470}
//     }
// ])

// db.books.find({} , {"author" : 1 , _id : 0 , country : 1})
// db.books.find({}).select({pages : 1 , year : 1 , title : 1})
// db.books.find({}).project({year : 1 , title : 1})

// db.books.aggregate([
//     {
//         $match: { "country": "Denmark"}
//     },
//     {
//         $project: {
//             year: 1, title: 1
//         }
//     },
// ])

// db.books.find({}).sort({"author" : 1 , "pages" : -1})

// db.books.aggregate([
//     {
//         $project: {year : -1}
//     },
//     {
//         "$sort" : {"author" : 1}
//     },
// ])

// db.books.find({}).skip(10).limit(20)

// db.books.aggregate([
//     {
//         "$skip" : 20
//     },
//     {
//         "$limit" : 3
//     }
// ])

// db.books.find({}).count()

// db.books.aggregate([
//     {
//         $match: { "country": "Denmark"}
//     },
//     {
//         $count : "total"
//     }
// ])

// db.books.aggregate([
//     {
//         $group: {
//             _id: "$country",
//             total: {
//                 $sum: 3
                
//             },
//         },
//     }
// ])

// db.CLIENT_MASTER1.insertMany([
//     {
//         "CLIENTNO": "C00001",
//         "NAME": "Ivan Bayross",
//         "ADDRESS1": "A/14",
//         "ADDRESS2": "Worli",
//         "CITY": "Mumbai",
//         "PINCODE": 400054,
//         "State": "Maharastra",
//         "BALDUE": 15000
//     },
//     {
//         "CLIENTNO": "C00002",
//         "NAME": "Mamta Muzumdar",
//         "ADDRESS1": "65",
//         "ADDRESS2": "Nariman",
//         "CITY": "Madras",
//         "PINCODE": 780001,
//         "State": "Tamil Nadu",
//         "BALDUE": 0
//     },
//     {
//         "CLIENTNO": "C00003",
//         "NAME": "Chhaya Bankar",
//         "ADDRESS1": "P-7",
//         "ADDRESS2": "Bandra",
//         "CITY": "Mumbai",
//         "PINCODE": 400057,
//         "State": "Maharastra",
//         "BALDUE": 5000
//     },
//     {
//         "CLIENTNO": "C00004",
//         "NAME": "Ashwin Joshi",
//         "ADDRESS1": "A/5",
//         "ADDRESS2": "Juhu",
//         "CITY": "Banglore",
//         "PINCODE": 560001,
//         "State": "Karnataka",
//         "BALDUE": 0
//     },
//     {
//         "CLIENTNO": "C00005",
//         "NAME": "Hansel Colaco",
//         "ADDRESS1": "14",
//         "ADDRESS2": "Marin",
//         "CITY": "Mumbai",
//         "PINCODE": 400060,
//         "State": "Maharastra",
//         "BALDUE": 2000
//     },
//     {
//         "CLIENTNO": "C00006",
//         "NAME": "Deepak Sharma",
//         "ADDRESS1": "D-9",
//         "ADDRESS2": "Juhu",
//         "CITY": "Manglore",
//         "PINCODE": 560050,
//         "State": "karnataka",
//         "BALDUE": 0
//     },
// ]);


// db.PRODUCT_MASTER1.insertMany([
//     {
//         "PRODUCTNO": "P00001",
//         "DESCRIPTION": "T-Shirts",
//         "PROFITPERCENT": 5,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 200,
//         "REORDERLVL": 50,
//         "SELLPRICE": 350,
//         "COSTPRICE": 250
//     },
//     {
//         "PRODUCTNO": "P0345",
//         "DESCRIPTION": "Shirt",
//         "PROFITPERCENT": 6,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 150,
//         "REORDERLVL": 50,
//         "SELLPRICE": 500,
//         "COSTPRICE": 350
//     },
//     {
//         "PRODUCTNO": "P06734",
//         "DESCRIPTION": "Cotton Jeans",
//         "PROFITPERCENT": 5,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 100,
//         "REORDERLVL": 20,
//         "SELLPRICE": 600,
//         "COSTPRICE": 450
//     },
//     {
//         "PRODUCTNO": "P07865",
//         "DESCRIPTION": "Jeans",
//         "PROFITPERCENT": 5,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 100,
//         "REORDERLVL": 20,
//         "SELLPRICE": 750,
//         "COSTPRICE": 500
//     },
//     {
//         "PRODUCTNO": "P07868",
//         "DESCRIPTION": "Trouser",
//         "PROFITPERCENT": 2,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 150,
//         "REORDERLVL": 50,
//         "SELLPRICE": 850,
//         "COSTPRICE": 550
//     },
//     {
//         "PRODUCTNO": "P07885",
//         "DESCRIPTION": "Pull Overs",
//         "PROFITPERCENT": 2.5,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 80,
//         "REORDERLVL": 30,
//         "SELLPRICE": 700,
//         "COSTPRICE": 450
//     },
//     {
//         "PRODUCTNO": "P07965",
//         "DESCRIPTION": "Denim Shirts",
//         "PROFITPERCENT": 4,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 100,
//         "REORDERLVL": 40,
//         "SELLPRICE": 350,
//         "COSTPRICE": 250
//     },
//     {
//         "PRODUCTNO": "P07975",
//         "DESCRIPTION": "Lycra Tops",
//         "PROFITPERCENT": 5,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 70,
//         "REORDERLVL": 30,
//         "SELLPRICE": 300,
//         "COSTPRICE": 175
//     },
//     {
//         "PRODUCTNO": "P08865",
//         "DESCRIPTION": "Skirts",
//         "PROFITPERCENT": 5,
//         "UNITMEASURE": "Piece",
//         "QTYONHAND": 75,
//         "REORDERLVL": 30,
//         "SELLPRICE": 450,
//         "COSTPRICE": 300
//     },
// ]);


// db.SALESMAN_MASTER1.insertMany([
//     {
//         "SALESMANNO" : "S00001" ,
//         "SALESMANNAME" : "Aman" ,
//         "ADDRESS1" : "A/14" ,
//         "ADDRESS2" : "worli" ,
//         "CITY" : "Mumbai" ,
//         "PINCODE" : 400002 ,
//         "STATE" : "Maharastra" ,
//         "SALAMT" : 3000 ,
//         "TGTTOGET" : 100 ,
//         "YTDSALES" : 50 ,
//         "REMARKS" : "Good"
//     },
//     {
//         "SALESMANNO" : "S00002" ,
//         "SALESMANNAME" : "Omkar" ,
//         "ADDRESS1" : "65" ,
//         "ADDRESS2" : "Nariman" ,
//         "CITY" : "Mumbai" ,
//         "PINCODE" : 400001 ,
//         "STATE" : "Maharastra" ,
//         "SALAMT" : 3000 ,
//         "TGTTOGET" : 200 ,
//         "YTDSALES" : 100 ,
//         "REMARKS" : "Good"
//     },
//     {
//         "SALESMANNO" : "S00003" ,
//         "SALESMANNAME" : "Raj" ,
//         "ADDRESS1" : "p-7" ,
//         "ADDRESS2" : "Bandra" ,
//         "CITY" : "Mumbai" ,
//         "PINCODE" : 400032 ,
//         "STATE" : "Maharastra" ,
//         "SALAMT" : 3000 ,
//         "TGTTOGET" : 200 ,
//         "YTDSALES" : 100 ,
//         "REMARKS" : "Good"
//     },
//     {
//         "SALESMANNO" : "S00004" ,
//         "SALESMANNAME" : "Ashish" ,
//         "ADDRESS1" : "A/5" ,
//         "ADDRESS2" : "Juhu" ,
//         "CITY" : "Mumbai" ,
//         "PINCODE" : 400044 ,
//         "STATE" : "Maharastra" ,
//         "SALAMT" : 3500 ,
//         "TGTTOGET" : 200 ,
//         "YTDSALES" :  150 ,
//         "REMARKS" : "Good"
//     },
// ]);

