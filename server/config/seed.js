const mongoose = require("mongoose");
const Cat = require("../models/Cat");
const User = require("../models/User");
require("dotenv").config();

const uri = process.env.MONGO_URI;
mongoose.connect(uri);

//Users
const Jackie = 
  {
    firstName: "Jackie", 
    lastName: 'Smith', 
    age: 25, 
    email: "jackiesmith@gmail.com"
  }
;

//Cats
const seedCats = [
  {
    name: "Bojji", 
    breed: 'European Shorthair', 
    age: 7, 
    weight: "7.3"
  },

  {
    name: "Luma", 
    breed: 'European Shorthair', 
    age: 7, 
    weight: "6.5"
  }
];

const seed = async () => {
  await User.deleteMany({});
  await Cat.deleteMany({});

  const cats = await Cat.insertMany(seedCats);
  cats.map(async (cat) => {
    await cat.save();
  })

  const user1 = User.create(Jackie, function(err, _user) {
    if(err) console.log(err)
  
    cats.map( async cat => {
      _user.cats.push(cat)
    })

    _user.save()
    console.log(_user)
  });

  console.log("Users and Cats seeded");
}

seed();