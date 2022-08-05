// Require requesr module
const request = require("request");

// Full url of the weather source
const url =
  "http://api.weatherstack.com/current?access_key=47306088c419b9d2886be432587ddd7f&query=37.8267,-122.4233";

// Send request
request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
