const User = require("./models/User")
const Cat = require("./models/Cat")

const resolvers = {
  Query: {
    users: () => User.find({}),
    cats: () => Cat.find({})
  }
}

module.exports = resolvers