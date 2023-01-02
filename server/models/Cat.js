const { Decimal128 } = require("mongodb")
const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  breed: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  weight: {
    type: String,
    required: true
  }
})

const Cat = mongoose.model('Cat', catSchema, 'Cat')

module.exports = Cat