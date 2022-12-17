const mongoose = require("mongoose");
const Cat = require("./models/Cat");
const User = require("./models/User");

mongoose.connect("mongodb://localhost/appdb");

//Users
const seedUsers = [
  {
    firstName: "Jackie", 
    lastName: 'Smith', 
    age: 25, 
    email: "jackiesmith@gmail.com"
  }
];

//Cats
const seedCats = [
  {
    name: "Bojji", 
    breed: 'European Shorthair', 
    age: 7, 
    weight: 7.3, 
    // owner: "1"
  },

  {
    name: "Luma", 
    breed: 'European Shorthair', 
    age: 7, 
    weight: 6.5, 
    // owner: User.find({name: "Jackie"}.lean()
  }
];

//I need to get the id of the owner in order to populate the data for owner field in each cat.

const seed = async () => {
  await User.deleteMany({});
  await Cat.deleteMany({});

  await User.insertMany(seedUsers);
  const cats = await Cat.insertMany(seedCats);

  cats.map(async cat => {
    await cat.save();
  })


  
  console.log("Users and Cats seeded");

}

seed().then(() => mongoose.connection.close());
