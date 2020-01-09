const someArray = [1, 2, 3, 4, 5, 6];
const someObject = {
  a: 1,
  b: 2,
  c: 3
};

console.log("For of loop on an array");
for (let element of someArray) {
  console.log(element);
}
// For an element of an iterable object, we console log it

console.log("For in loop on an array");
for (let element in someArray) {
  console.log(element);
}
// For a key in an iterable object, we console log it

// console.log("For of loop on an object");
// for (let element of someObject) {
//   console.log(element);
// }
// For an element of an iterable object, we console log it, doesn't work becauses objects are not iterable

console.log("For in loop on an object");
for (let element in someObject) {
  console.log(element);
}

for (let key of Object.keys(someObject)) {
  console.log(key);
}
// For a key in an iterable object, we console log it
