const { gql } = require('apollo-server-express')

const typeDefs = gql `
  type Query {
    users: [User]
    cats: [Cat]
  }

  type Mutation {
    createUser(input: UserInput!): User!
    deleteUser(ID: ID!): Boolean!
    editUser(ID: ID!, userInput: UserInput): Boolean!

    createCat(input: CatInput!): Cat!
    deleteCat(ID: ID!): Boolean!
    editCat(ID: ID!, catInput: CatInput): Boolean! 
  }

  input UserInput {
    firstName: String
    lastName: String
    age: Int
    email: String
  }

  input CatInput {
    name: String
    breed: String
    age: Int
    weight: String
  }

  type User {
    firstName: String,
    lastName: String,
    age: Int,
    email: String
  }

  type Cat {
    name: String
    breed: String
    age: Int
    weight: String
    owner: ID
  }
`

module.exports = typeDefs

