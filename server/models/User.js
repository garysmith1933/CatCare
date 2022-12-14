const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  age: Number,

  email: {
    type: String,
    required: true
  },

  cats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cat"
  }]
})

module.exports = mongoose.model("User", userSchema)