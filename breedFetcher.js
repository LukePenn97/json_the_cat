const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error) {
      if (data[0]) {
        callback(error, data[0].description);
      } else {
        callback(error, "Breed name invalid");
      }
    } else {
      callback(error);
    }
  });
};

module.exports = { fetchBreedDescription };