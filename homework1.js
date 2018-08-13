// Write a function below with the name "pow" that accepts 2 arguments and returns the
// result of the first argument raised to the power of the second argument.
// For example: if argument1 = 2 and argument2 = 8, the function should return 2^8.



//---------------------------------------------------

// Fill in the function body below, which accepts an array as an argument.
// The function should:
// * loop through the array
// * if, while looping through the array, we encounter a non-numeric
//   value, we should return a boolean, false.
// * If all the values are numbers, return true.
function numberArrayValidator(arr) {
  for (let num of arr) {
    if (typeof num != 'number') {
      return false;
    }
  }
  return true;
}

let arr = ["work", 1, true];

console.log(numberArrayValidator(arr));

//---------------------------------------------------

// Create a function below with the name "objectHasNameProp" that accepts
// 1 argument, an object, and checks if the object has a property with the
// name, "name".
// If it does, return true. Otherwise, return false.

function objectHasNameProp(obj) {
  if ("name" in obj) {
    return true;
  }
  return false;
}

let obj = {name:"sup"};
console.log(objectHasNameProp(obj));

// ...

//---------------------------------------------------

// Create a function below named "addNamePropToObject". This function should:
// * accept 1 argument
// * You must check the type of argument you receive--if the type is
//   not 'object', then you must return null.
// * If the type IS 'object', then add a property, "name", to the object
// * and set its value to be your full name as a string.
// * Return the object.

function addNamePropToObject(arg) {
  if (typeof arg != 'object'){
    return null;
  }

  arg.name = "Jonathan Wang";
  return arg;
}

let arg = {booty:"sweat"};
console.log(addNamePropToObject(arg))

//---------------------------------------------------

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
/*
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output: name,sclass,rollno
*/

const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function printProperties(obj) {
  for (let key of Object.keys(obj)) {
    console.log(key);
  }
}
printProperties(student);


//---------------------------------------------------

// Write a function named "deletePropFromObj", which accepts 2 arguments:
// an object and a string, which represents the property to be deleted from the
// object.
// If the property does not exist, return false. Otherwise, return the deleted object.

function deletePropFromObj(obj, property) {
  console.log(Object.keys(obj));
  if (property in obj) {
    delete obj[property];
    console.log("deleted");
  } else {
    return false;
  }
}
console.log(arg);
console.log(deletePropFromObj(arg, 'booty'));
console.log(arg);
//---------------------------------------------------

// Create a function named "Person". You should add a function to Person's
// prototype, named "sayHello". This prototype function should log out
// "Hello, my name is <name>" (with your name in place of "<name>").
// If you're confused, reference this link:
//
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function(){
  console.log("Hello, my name is " + this.name)
}

let jonathan = new Person("Jonathan Wang");
jonathan.sayHello();

//---------------------------------------------------

// Create a function named "specialLoop" that loops through an array and
// console.log's out each element in the array. You CANNOT use a standard
// for, while, or do-while loop. (Find a way to loop through an array
// without using the methods mentioned above.)

function specialLoop(array) {
  array.forEach(l => console.log(l));
}

let array = [1, 2, 3];
specialLoop(array);

//---------------------------------------------------

// Create a function named "weatherChecker". This function should:
// * Accept 1 argument, which should have one of the following values:
//   "rainy", "sunny", "cloudy", "snowy", "windy"
// * Your goal is to tell the user how to best prepare themselves for
//   the weather (via console.log). If it's sunny, tell the user to
//   "wear sunscreen!".
// * If it's cloudy or windy, tell them to bring some kind of outerwear.
// * If it's rainy, tell them to bring an umbrella, and if its snowy,
//   tell them to to wear a thick coat and snow boots.
// * You MUST use a switch statement to finish this function.
// * The function doesn't return anything.

function weatherChecker(weather) {
  switch (weather) {
    case "rainy":
      console.log("Bring an umbrella");
      break;
    case "sunny":
      console.log("Wear sunscreen!");
      break;
    case "cloudy":
    case "rainy":
      console.log("Bring some outerwear");
      break;
    case "snowy":
      console.log("Wear a thick coat and snow boots");
      break;
    default:
      console.log("Weather type not found");
  }
}

weatherChecker("sunny");

//---------------------------------------------------

// Create a function named "makeChristmasTree". This function should:
// * Accept 1 argument, a number. This number represents the height of
//   a tree. Remember, you should check to make sure that the argument
//   you receive is valid (that it is a number). This number must also be
//   positive (or zero)!
// * The function will create a tree, represented as a string, with the
//   asterisk (*) character.
// * The function should create a tree, as seen below. It should both
//   log out the result AND return the result as a string.
// Example:
/*
// Calling makeChristmasTree...
makeChristmasTree(5);
// Output:
    *
   ***
  *****
 *******
    *

makeChristmasTree(1);
// Output:
  *

makeChristmasTree(2);
// output:
  *
  *

makeChristmasTree(3):
// output:

  *
 ***
  *

makeChristmasTree(0):
// Output:

(nothing should be outputted)


makeChristmasTree(-1):
// Output:

ERROR!
*/

function makeChristmasTree(num) {

  if (typeof num != 'number' || num < 0) {
    console.log("ERROR!");
  } else {

      let root = "";
      if (num == 1) {
        console.log(star);
      } else {
        for (let i = 0; i < num - 1; i++) {
          let current = "";

          for (let j = 0; j < num - i; j++) {
            current += " ";
          }

          for (let k = 0; k < (2 * i + 1); k++) {
            current += "*";
          }
          console.log(current);
          if (i == 0) {
            root = current;
          }
        }
        console.log(root);
      }
  }
}

makeChristmasTree(0);
