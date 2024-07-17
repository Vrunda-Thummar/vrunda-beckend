// db.users.find({})
// db.users.find({"movies.floop": 'sui-dhaga'})
// db.users.findOne({gender:'female'})

// Data update
// db.users.updateOne({filte}, {update data}, {upsert: true})
// db.users.updateMany()

// db.users.updateOne({gender:'Female'},{$set: {age:25 , email:"jolly@test.in"}}, {upsert: true})

// db.users.updateMany({gender:'Female'},{$set: {passion:"Make-up"}}, {upsert: true})

// db.users.deleteOne({filter})
// db.users.deleteMany({gender:Female})

// db.users.drop()
// show collections
// db.dropDatabase()