require('dotenv').config();

const config = {
  common: {
    albumsApi: {
      url: process.env.PLACEHOLDER_URL,
    },
  },
};

module.exports = config;
