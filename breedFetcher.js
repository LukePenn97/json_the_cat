const request = require('request');
const arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (!error) {
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("Breed name invalid");
    }
  } else {
    console.log(error);
  }
});