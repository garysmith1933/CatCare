const User = require("./models/User")
const Cat = require("./models/Cat")
const { ApolloError } = require('apollo-server-errors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_root, { ID }) => await User.findById(ID),
    cats: async () => await Cat.find({})
  },

  Mutation: {
    //USER MUTATIONS
    createUser: async (_root, {input: {username, email, password}}) => {

      const alreadyExists = await User.findOne({email});

      if (alreadyExists) {
        throw new ApolloError(`A user is already registered with that email ${email}, 'USER_ALREADY_EXISTS`);
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword
      });

      const token = jwt.sign(
        { user_id: newUser._id, email}, 
        process.env.SECRET,
        {
          expiresIn: "2h"
        }
      );

      newUser.token = token;
      const res = await newUser.save();

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