const { gql } = require('apollo-server'),
  { getAlbum, getAlbums } = require('../../services/album');

module.exports = {
  queries: {
    album: async (_, params) => await getAlbum(params),
    albums: async () => await getAlbums(),
  },
  schema: gql`
    extend type Query {
      album(id: ID): Album!
      albums: [Album]
    }
  `
};
