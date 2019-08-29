const axios = require('axios');
const config = require('../../config');
const logger = require('../logger');

const baseUri = config.common.albumsApi.url;

exports.getAlbum = (params) => axios
  .get(`${baseUri}/albums/${params.id}`)
  .then((response) => response.data)
  .catch((error) => {
    logger.error(error);
    throw new Error('Cannot fetch album from external api');
  });

exports.getAlbums = () => axios
  .get(`${baseUri}/albums`)
  .then((response) => response.data)
  .catch((error) => {
    logger.error(error);
    throw new Error('Cannot fetch albums from external api');
  });
