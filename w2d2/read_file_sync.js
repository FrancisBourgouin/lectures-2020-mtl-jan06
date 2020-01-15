const fs = require("fs");

console.log("I AM ABOUT TO WRITE TO A FILE");

fs.writeFileSync("./superoutput.txt", "Hey there little chicken!");

console.log("FINISHED");
