const { makeExecutableSchema } = require('graphql-tools');
const types = require('./types');
const books = require('./books');
const albums = require('./albums');

const typeDefs = [types, ...books.schemas, ...albums.schemas];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...books.queries,
      ...albums.queries,
    },
  },
});
