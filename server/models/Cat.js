const { Decimal128 } = require("mongodb")
const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  breed: String,

  age: Number,

  weight: String
})

const Cat = mongoose.model('Cat', catSchema, 'Cat')

module.exports = Cat