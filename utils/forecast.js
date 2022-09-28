// Request
const request = require("request");

// Configs
const configs = require("../configs");

// Forecast
const forecaset = (latitude, longitude, callback) => {
  // Weather stack url
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    configs.weatherstack.access_token +
    "&query=" +
    latitude +
    "," +
    longitude +
    "?units=f";

  // Send request
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services");
    } else if (response.body.error) {
      console.log("Unable to find to find location", undefined);
    } else {
      callback(
        undefined,
        `It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
      );
    }
  });
};

// Export
module.exports = forecaset;
