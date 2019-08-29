const { gql } = require('apollo-server');
const { getAlbum, getAlbums } = require('../../services/album');

module.exports = {
  queries: {
    album: async (_, params) => {
      const album = await getAlbum(params);
      return album;
    },
    albums: async () => {
      const albums = await getAlbums();
      return albums;
    },
  },
  schema: gql`
    extend type Query {
      album(id: ID): Album!
      albums: [Album]
    }
  `,
};
