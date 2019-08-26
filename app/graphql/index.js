const { gql, makeExecutableSchema } = require('apollo-server');
const serviceBooks = require('../services/book');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => serviceBooks.books,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
