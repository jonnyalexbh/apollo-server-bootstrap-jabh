const axios = require('axios');

exports.getAlbums = () =>
  axios
    .get(`https://jsonplaceholder.typicode.com/albums`)
    .then(response => response.data)
    .catch(() => {
      throw new Error('Cannot fetch albums from external api');
    });
