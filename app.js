// Require configs file
const configs = require("./configs");

// Forecast
const forecaset = require("./utils/forecast");

// Geocode
const geocode = require("./utils/geocode");

geocode("Addis Ababa", (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});

forecaset("-73.98rtdyfugihl66", data.longitude, (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});
