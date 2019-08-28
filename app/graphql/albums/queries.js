const { gql } = require('apollo-server'),
  { albums } = require('../../services/album');

module.exports = {
  queries: {
    albums: () => albums,
  },
  schema: gql`
    extend type Query {
      albums: [Album]
    }
  `
};
