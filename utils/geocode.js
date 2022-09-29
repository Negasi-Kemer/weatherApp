// Request module
const request = require("request");

// Configs file
const configs = require("../configs");

// Geocode method
const geocode = (address, callback) => {
  // Mapbox url
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=" +
    configs.mapbox.access_token +
    "&limit=1";

  // Send request - destructure 'response' object and take only 'body'
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services");
    } else if (body.message) {
      console.log(body.message);
    } else if (body.features.length == 0) {
      callback("Location not found. Try another search");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

// Export
module.exports = geocode;
