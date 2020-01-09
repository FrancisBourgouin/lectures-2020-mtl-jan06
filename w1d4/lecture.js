/* eslint-disable func-style */
// Functions recap

//Function expressions are like normal variables, as they can be used after declaration
const superFunction = function(param) {
  return "Joy";
};

//Function declarations are hoisted
function megaFunction() {
  return "PAWAH";
}

// Functions as a value
const superObject = {
  secretFunction: function() {
    console.log("Shhhh");
  }
};

const mwahaha = superObject.secretFunction;

mwahaha();

// Anonymous functions

// function(arg){
//     console.log(arg)
// }

// Arrow functions

const magicFunction = () => console.log("YAS");
const arrowFunction = arg => console.log(arg);

const longerArrowFct = () => {
  let bob = Math.random();

  return bob;
};

// Callback intro

const names = [
  "Dimitri Ivanovich Mendeleiv",
  "Leon Semionovitch Tolstoi",
  "Bob"
];

const otherNames = [
  "Dostoievsky",
  "Marcel Proust",
  "Pequeño Pollo de la Pampa"
];

const listNamesAndSayHi = (names, saying) => {
  for (let name of names) {
    console.log(saying + " " + name);
  }
};

const listNamesAndSingTheName = names => {
  for (let name of names) {
    console.log(`🎶${name}🎵`);
  }
};

listNamesAndSayHi(names, "Howdy");
listNamesAndSingTheName(otherNames);

const sayHi = name => {
  console.log(`Hi ${name}`);
};

const singName = name => {
  console.log(`🎶${name}🎵`);
};
const randomFunction = sayHi;

const listNames = (names, action) => {
  for (let name of names) {
    action(name);
  }
};

listNames(names, sayHi);
listNames(otherNames, singName);

listNames(names, function(name) {
  console.log(name.toUpperCase());
});

listNames(names, name => console.log(name.toUpperCase()));

const listElementsOfAnArray = (array, action) => {
  for (let element of array) {
    action(element);
  }
};

const multiplyElement = (element, multiplier) => {
  if (element % 3 === 0) {
    return element * multiplier;
  }
  if (element % 5 === 0) {
    return element * multiplier + 2;
  }
  if (element % 30 === 0) {
    return element * multiplier * multiplier;
  }
  return element * multiplier;
};

const powerRangersAssemble = (array, modifier) => {
  const output = [];
  for (let element of array) {
    let modifiedElement = modifier(element, element);
    output.push(modifiedElement);
  }
  return output;
};
//Create a new array based on an original one and apply a modification to it

// Callback usage

// JS DOESNT CARE ABOUT YOUR VARIABLES
