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
  type User {
    id: ID!
    name: String!
    mobile: String
  }
`;
