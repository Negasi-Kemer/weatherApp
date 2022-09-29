// https module
const https = require("http");

// url
const url =
  "http://api.weatherstack.com/current?access_key=47306088c419b9d2886be432587ddd7f&query=38.73694,9.02722?units=f";

// Data
let data = "";

// Send request
const request = https.request(url, (response) => {
  // Read response
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  // End of reading response
  response.on("end", () => {
    // Parse the string to JSON format and log it
    console.log(JSON.parse(data));
  });
});

// Listen for an error
request.on("error", (error) => {
  console.log("This error occurred: ", error);
});

request.end();
