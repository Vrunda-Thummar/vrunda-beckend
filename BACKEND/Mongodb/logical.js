// db.books.find({$and:[{cond1} , {cond2}]})

// db.books.find({$and:[{"pages" : {$lte: 505}} , {"author" : {$eq: "Unknown"}} , {"year" : 1350}]})
    
// db.books.find({$or:[{"pages" : {$lte: 505}} , {"author" : {$eq: "Unknown"}} , {"year" : 1350}]})

// db.books.find({$nor:[{"pages" : {$lte: 505}} , {"author" : {$eq: "Unknown"}} , {"year" : 1350}]})

// db.books.find({"pages" :{$not: {$lte: 505}}})

// db.books.find({})

// db.books.find({"pages":{$eq:784}})

// db.books.find({"author":{$eq:"Unknown"}})

// db.books.find({"pages":{$ne:784}})

// db.books.find({"author":{$ne:"Unknown"}})

// db.books.find({"author" : {$in: ["Unknown" , "Hans Christian Andersen"]}})

// db.books.find({"author" : {$nin: ["Unknown" , "Hans Christian Andersen"]}})

// db.books.find({"pages":{$gt: 505}})

// db.books.find({"pages":{$gte: 505}})

// db.books.find({"pages":{$lt: 505}})

// db.books.find({"pages":{$lte: 505}})

