const userResolvers = require('./users')
const catsResolvers = require('./cats')

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...catsResolvers.Query
  },

  Mutation: {
    ...userResolvers.Mutation,
    ...catsResolvers.Mutation
  }
}