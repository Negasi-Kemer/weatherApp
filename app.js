// Require requesr module
const request = require("request");

// Require configs file
const configs = require("./configs");

// Full url of the weather source
const url =
  "http://api.weatherstack.com/current?access_key=47306088c419b9d2886be432587ddd7f&query=37.8267,-122.4233?units=f";

// Mapbox url - geocode "Los Angeles"
const geocode =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" +
  configs.mapbox.access_token +
  "&limit=1";

// Send the geocode request
request({ url: geocode, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[0];
  const longitude = response.body.features[0].center[1];
  console.log(latitude, longitude);
});

// Send request
request({ url, json: true }, (error, response) => {
  console.log(
    `It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});
