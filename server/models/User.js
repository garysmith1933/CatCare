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

const User = mongoose.model('User', userSchema)

module.exports = User