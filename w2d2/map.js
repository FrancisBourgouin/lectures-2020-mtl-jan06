// Building an homemade map with cb

const homemadeMap = (array, callback) => {
  const output = [];
  for (const element of array) {
    const modifiedElement = callback(element);
    output.push(modifiedElement);
  }
  return output;
};

const bob = [1, 2, 3, 4, 5, 6];

const doubledArray = homemadeMap(bob, element => element * 2);

console.log(doubledArray);
