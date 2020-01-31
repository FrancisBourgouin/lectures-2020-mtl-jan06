const request = require(`request`);
const requestP = require("request-promise-native");

const fetchMyIP = callback => {
  //Fetches my IP so I can calculate my position at a later date

  //Using the request package to send a request to find my ip.
  request("https://api.ipify.org?format=json", (error, response, body) => {
    let err = error;
    let data = null;
    //Manage error is there is a connection error
    if (err) {
      data = "There was a connection problem to the API";
      return callback(err, data);
    }
    //Manage error if there is a problem with the API response
    if (response.statusCode !== 200) {
      err = response.statusCode;
      data = `There was a ${err} code when doing the request`;
      return callback(err, data);
    }
    //Parse and manipulate received data from the API
    data = JSON.parse(body).ip;
    err = null;
    return callback(err, data);
  });
};

const fetchMyIPPromised = () => {
  //Fetches my IP so I can calculate my position at a later date
  //Using the request package to send a request to find my ip.
  return requestP("https://api.ipify.org?format=json")
    .then((response, body) => {
      //Manage error if there is a problem with the API response
      if (response.statusCode !== 200) {
        err = response.statusCode;
        data = `There was a ${err} code when doing the request`;
        return { err, data };
      }
      //Parse and manipulate received data from the API
      data = JSON.parse(body).ip;
      return { err: null, data };
    })
    .catch(err => {
      //Manage error is there is a connection error
      return { err, data: "There was a connection error" };
    });
};
