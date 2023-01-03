const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  token: {
    type: String,
    required: true
  },
  
  cats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cat"
  }]
})

const User = mongoose.model('User', userSchema, 'User')

module.exports = User