// Require requesr module
const request = require("request");

// Full url of the weather source
const url =
  "http://api.weatherstack.com/current?access_key=47306088c419b9d2886be432587ddd7f&query=37.8267,-122.4233?units=f";

// Send request
request({ url, json: true }, (error, response) => {
  console.log(
    `It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});
