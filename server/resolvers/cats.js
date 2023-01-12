const Cat = require("../models/Cat");
//Need to implement errors
const { ApolloError } = require('apollo-server-errors');
const User = require("../models/User");

const resolvers = {
  Query: {
    cats: async () => await Cat.find({}),
    cat: async (_root, { ID }) => await Cat.findById(ID)
  },

  Mutation: {
    registerCat: async (_root, { ID, input }) => {
      const cat = new Cat(input);
    
      const user = User.findById(ID, function(err, _user) {
        if(err) console.log(err);

        _user.cats.push(cat)
        console.log(_user)

        _user.save()
      });

      const res = await cat.save();
      console.log(res)

      return {
        owner: ID,
        id: res._id,
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
