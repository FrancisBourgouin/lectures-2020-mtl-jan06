const request = require(`request`);

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
    data = JSON.parse(body).ip
    err = null
    return callback(err, data);
  });
};

fetchMyIP((err, data) => console.log(err ? err : data)

const fetchMyPosition = () => {
  //Fetch my position so I can know when the ISS is flying over me
};

const fetchISSFlyovers = () => {
  //Fetch the flyovers because this is want I want.
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, nextPasses);
      });
    });
  });
};

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(
        Error(`Status Code ${response.statusCode} when fetching IP: ${body}`),
        null
      );
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(
        Error(
          `Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`
        ),
        null
      );
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;
    // console.log('lat/lng data:', { latitude, longitude });

    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(
        Error(
          `Status Code ${response.statusCode} when fetching ISS pass times: ${body}`
        ),
        null
      );
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};

module.exports = { nextISSTimesForMyLocation };
