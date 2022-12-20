const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  breed: String,

  age: Number,

  //This needs to be fixed
  weight: Number
})

const Cat = mongoose.model('Cat', catSchema, 'Cat')

module.exports = Cat