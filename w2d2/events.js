const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Listen to the emitter

eventEmitter.on("loggedIn", () => {
  console.log("good job you're logged in");
});

eventEmitter.on("notLoggedIn", () => {
  console.log("you need to log in");
});
// Create emitter

// setInterval(() => eventEmitter.emit("loggedIn"), 1000);

const username = process.argv[2];

if (username) {
  eventEmitter.emit("loggedIn");
} else {
  eventEmitter.emit("notLoggedIn");
}
