const User = require("./models/User")
const Cat = require("./models/Cat")

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    cats: async () => await Cat.find({})
  },

  Mutation: {
    createUser: async ({ input }) => await User.create({...input}),
    createCat: async ({ input }) => await Cat.create({...input})
  }
}

module.exports = resolvers