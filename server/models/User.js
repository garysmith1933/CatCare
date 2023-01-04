const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    default: null,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  token: {
    type: String,
  },
  
  cats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cat"
  }]
})

const User = mongoose.model('User', userSchema, 'User')

module.exports = User