const { makeExecutableSchema } = require('graphql-tools'),
  types = require('./types'),
  books = require('./books'),
  albums = require('./albums');

const typeDefs = [types, ...books.schemas, ...albums.schemas];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...books.queries,
      ...albums.queries
    }
  }
});
