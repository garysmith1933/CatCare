const User = require("../models/User")
const { ApolloError } = require('apollo-server-errors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_root, { ID }) => await User.findById(ID),
  },

  Mutation: {
    createUser: async (_root, {userInput: {username, email, password}}) => {
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
        id: res._id,
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

    loginUser: async (_root, {loginInput: {email, password}}) => {
      const user = await User.findOne({email});

      console.log(user._id)
      
      if (user && (await bcrypt.compare(password, user.password))) {

        const token = jwt.sign(
          { user_id: user._id, email}, 
          process.env.SECRET,
          {
            expiresIn: "2h"
          }
        );

        user.token = token;
        
        return {
          id: user._id,
          ...user._doc
        }

      } else {
        throw new ApolloError(`Incorrect password, 'INCORRECT_PASSWORD'`)
      }
    }
  }
}

module.exports = resolvers