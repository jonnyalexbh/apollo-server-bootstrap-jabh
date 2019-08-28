const { gql } = require('apollo-server');

module.exports = gql`
  type Query
  type Book {
    title: String
    author: String
  }
  type Album {
    id: ID!
    title: String!
    userId: Int!
  }
`;
