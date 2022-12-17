const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI;

const connectToDB = () => {
  console.log(db)
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is connected");
  } 
  
  catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB;
