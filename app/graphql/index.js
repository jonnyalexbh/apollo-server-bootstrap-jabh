const { makeExecutableSchema } = require('graphql-tools'),
  types = require('./types'),
  books = require('./books');

const typeDefs = [types, ...books.schemas];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...books.queries
    }
  }
});
