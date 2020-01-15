console.log("Before setTimeout");

setTimeout(() => {
  console.log("I AM THE TIMEOUT");
}, 5000);

// setInterval(() => {
//   console.log(" I AM AN INTERVAL MWAHAHAHA");
// }, 3000);

console.log("After setTimeout");

const listOfNumbers = [20, 900, 20, 3456543, 314159, 2653589, 79323, 846];

for (const number of listOfNumbers) {
  setTimeout(() => {
    console.log(number);
  }, number);
}
