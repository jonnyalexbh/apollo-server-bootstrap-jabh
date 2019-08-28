const { gql } = require('apollo-server'),
  serviceBooks = require('../../services/book');

module.exports = {
  queries: {
    books: () => serviceBooks.books,
  },
  schema: gql`
    extend type Query {
      books: [Book]
    }
  `
};
