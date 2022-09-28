// Load environment varibales
const dotenv = require("dotenv");

// Add config.env file to the environmen varibales
dotenv.config({ path: "config.env" });

// Exportd variables
module.exports = {
  mapbox: {
    access_token: process.env.MAP_BOX_TOKEN,
  },
  weatherstack: {
    access_token: process.env.WEATHER_STACK_TOKEN,
  },
};
