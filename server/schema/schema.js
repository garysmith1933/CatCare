const { gql } = require('apollo-server-express')

const typeDefs = gql `
  type Query {
    users: [User]
    cats: [Cat]
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

