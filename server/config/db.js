const mongoose = require("mongoose");
require("dotenv").config();
const Cat = require("../models/Cat")
const User = require("../models/User")

const uri = process.env.MONGO_URI;

const connectToDB = () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("MongoDB is connected"));
  } 
  
  catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB;
