const fs = require("fs");

console.log("I AM ABOUT TO WRITE TO A FILE");

fs.writeFile("./superoutput.txt", "Hey there little chicken!", function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

console.log("FINISHED");
