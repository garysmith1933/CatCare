const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  breed: String,

  age: Number,

  weight: mongoose.Decimal128,
})

const Cat = mongoose.model('Cat', catSchema, 'Cat')

module.exports = Cat