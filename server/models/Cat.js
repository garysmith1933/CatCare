const { Decimal128 } = require("mongodb")
const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  breed: String,

  age: Number,

  weight: Decimal128,

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

})

module.exports = mongoose.model("Cat", catSchema)