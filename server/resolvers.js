const User = require("./models/User")
const Cat = require("./models/Cat")

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    cats: async () => await Cat.find({})
  },

  Mutation: {
    createUser: async (_root, { input }) => {
      const user = new User(input);
      const res = await user.save();

      return {
        id: res.id,
        ...res._doc
      }
    },
    createCat: async (_root, { input }) => {
      const cat = new Cat(input);
      const res = await cat.save();

      return {
        id: res.id,
        ...res._doc
      }
    },

    deleteUser: async (_root, {ID}) => {
      const deletedUser = (await User.deleteOne({_id: ID})).deletedCount;
      return deletedUser; //expecting this to be 1 if something was deleted.
    },

    deleteCat: async (_root, {ID}) => {
      const deletedCat = (await Cat.deleteOne({_id: ID})).deletedCount;
      return deletedCat;
      }
  }
}

module.exports = resolvers