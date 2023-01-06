const { gql } = require('apollo-server-express')

const typeDefs = gql `
  type Query {
    users: [User]
    user(ID: ID!): User
    cats: [Cat]
    cat(ID: ID!): Cat
  }

  type Mutation {
    createUser(userInput: NewUserInput!): User!
    deleteUser(ID: ID!): Boolean!
    editUser(ID: ID!, userInput: UpdateUserInput): Boolean!
    loginUser(loginInput: LoginInput): User!

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
    email: String
    password: String
    confirmPassword: String
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

