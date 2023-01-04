const Cat = require("../models/Cat");
//Need to implement errors
const { ApolloError } = require('apollo-server-errors');

const resolvers = {
  Query: {
    cats: async () => await Cat.find({}),
    cat: async (_root, { ID }) => await Cat.findById(ID)
  },

  Mutation: {
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
