const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const PATH = process.argv[3];



const fetcher = function(URL, PATH) {

  if (URL === undefined) {
    return console.log("URL cannot be undefined");
  } else if (PATH === undefined) {
    return console.log("PATH cannot be undefined");
  }
  request(URL, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (response.statusCode !== 200) {
      console.log("URL ERROR");
      process.exit();
    }
    fs.writeFile(PATH, body, (error) => {

      if (error) {
        return console.log("Incorrect Path");

      }
      // Success!
      console.log(`downloaded and saved ${body.length} to ${PATH}`);
    });
  });
};

fetcher(URL, PATH);