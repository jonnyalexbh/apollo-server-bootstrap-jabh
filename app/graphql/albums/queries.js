const { gql } = require('apollo-server'),
  { getAlbums } = require('../../services/album');

module.exports = {
  queries: {
    albums: async () => await getAlbums(),
  },
  schema: gql`
    extend type Query {
      albums: [Album]
    }
  `
};
