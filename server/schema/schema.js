const { gql } = require('apollo-server-express')

const typeDefs = gql `
  type Query {
    users: [User]
    cats: [Cat]
  }

  type Mutation {
    createUser(input: NewUserInput!): User!
    deleteUser(ID: ID!): Boolean!
    editUser(ID: ID!, userInput: UpdateUserInput): Boolean!

    createCat(input: RegisterAndUpdateCatInput!): Cat!
    deleteCat(ID: ID!): Boolean!
    editCat(ID: ID!, catInput: RegisterAndUpdateCatInput): Boolean! 
  }

  type User {
    username: String
    email: String
    password: String
    token: String
  }

  type Cat {
    name: String
    breed: String
    age: Int
    weight: String
    owner: ID
  }

  input NewUserInput {
    username: String
    password: String
    email: String
  }

  input UpdateUserInput {
    username: String
    email: String
    password: String
  }

  input RegisterAndUpdateCatInput {
    name: String
    breed: String
    age: Int
    weight: String
  }

  input LoginInput {
    email: String
    password: String
  }
`

module.exports = typeDefs

