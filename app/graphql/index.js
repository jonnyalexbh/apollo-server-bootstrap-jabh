const { makeExecutableSchema } = require('graphql-tools');
const types = require('./types');
const books = require('./books');
const albums = require('./albums');
const users = require('./users');

const typeDefs = [types, ...books.schemas, ...albums.schemas, ...users.schemas];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...books.queries,
      ...albums.queries,
      ...users.queries,
    },
  },
});
