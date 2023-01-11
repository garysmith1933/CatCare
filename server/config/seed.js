const mongoose = require("mongoose");
const Cat = require("../models/Cat");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const uri = process.env.MONGO_URI;
mongoose.connect(uri);


//Users
const Jackie = 
  {
    username: "JackieSmith97",
    email: "jackiesmith@gmail.com",
    password: "basic103",
    token: "something"
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