const axios = require('axios');

exports.getAlbum = params =>
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
    .then(response => response.data)
    .catch(() => {
      throw new Error('Cannot fetch album from external api');
    });

exports.getAlbums = () =>
  axios
    .get(`https://jsonplaceholder.typicode.com/albums`)
    .then(response => response.data)
    .catch(() => {
      throw new Error('Cannot fetch albums from external api');
    });
