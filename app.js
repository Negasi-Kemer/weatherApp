// Require configs file
const configs = require("./configs");

// Forecast
const forecaset = require("./utils/forecast");

// Geocode
const geocode = require("./utils/geocode");

// Take address from user via command
const address = process.argv[2];

// Check location is passed
if (!address) return console.log("Please provide an address");

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) return console.log(error);
  console.log(latitude, longitude);
  forecaset(latitude, longitude, (error, forecastData) => {
    if (error) return console.log(error);

    console.log(location);
    console.log(forecastData);
  });
});
