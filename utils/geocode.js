// Request module
const request = require("request");

// Configs file
const configs = require("../configs");

// Geocode method
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=" +
    configs.mapbox.access_token +
    "&limit=1";

  // Send request
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services");
    } else if (response.body.message) {
      console.log(response.body.message);
    } else if (response.body.features.length == 0) {
      callback("Location not found. Try another search");
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

// Export
module.exports = geocode;
