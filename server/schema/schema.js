const { gql } = require('apollo-server-express')

const typeDefs = gql `
  type Query {
    users: [User]
    cats: [Cat]
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    createCat(input: CreateCatInput): Cat!
    deleteUser(ID: ID!): Boolean!
    deleteCat(ID: ID!): Boolean!
  
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    age: Int
    email: String
  }

  input CreateCatInput {
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

