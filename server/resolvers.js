const User = require("./models/User")
const Cat = require("./models/Cat")

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    cats: async () => await Cat.find({})
  },

  Mutation: {
    //USER MUTATIONS
    createUser: async (_root, { input }) => {
      const user = new User(input);
      const res = await user.save();

      return {
        id: res.id,
        ...res._doc
      }
    },

    deleteUser: async (_root, { ID }) => {
      const deletedUser = (await User.deleteOne({_id: ID})).deletedCount;
      return deletedUser; //expecting this to be 1 if something was deleted.
    },

    editUser: async (_root, { ID, userInput }) => {
      const editedUser = (await User.updateOne({_id: ID}, {...userInput})).modifiedCount;
      return editedUser;
    },

    //CAT MUTATIONS
    createCat: async (_root, { input }) => {
      const cat = new Cat(input);
      const res = await cat.save();

      return {
        id: res.id,
        ...res._doc
      }
    },

    deleteCat: async (_root, { ID }) => {
      const deletedCat = (await Cat.deleteOne({_id: ID})).deletedCount;
      return deletedCat;
    },

    editCat: async (_root, { ID, catInput }) => {
      const editedCat = (await Cat.updateOne({_id: ID}, {...catInput})).modifiedCount;
      return editedCat;
    },
  }
}

module.exports = resolvers