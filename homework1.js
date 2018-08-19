// Write a function below with the name "pow" that accepts 2 arguments and returns the
// result of the first argument raised to the power of the second argument.
// For example: if argument1 = 2 and argument2 = 8, the function should return 2^8.

//{BRIAN}> I think you forgot to do this part^


//---------------------------------------------------

// Fill in the function body below, which accepts an array as an argument.
// The function should:
// * loop through the array
// * if, while looping through the array, we encounter a non-numeric
//   value, we should return a boolean, false.
// * If all the values are numbers, return true.
function numberArrayValidator(arr) {
  //{BRIAN}> Good use for the "for...of" construct.
  //{BRIAN}> You can also use the Array.forEach() construct to loop through values.
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

//{BRIAN}> Good use of the "in" operator.
//{BRIAN}> You can also use obj.name to check if the name property exists!
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

//{BRIAN}> This question was a "Gotcha"/trick question
//{BRIAN}> Try passing in an array and see what happens.
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

//{BRIAN}> Nice! A slightly more concise way of writing this might be the
//{BRIAN}> for each construct:

//{BRIAN}> Object.keys(obj).forEach((val) => { console.log(key); });
//{BRIAN}> This is purely stylistic, though. The only reason you might
//{BRIAN}> consider doing this is because you're reassigning a value to key
//{BRIAN}> each time, which results in more computation than the forEach
//{BRIAN}> construct.

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

//{BRIAN}> This is a good attempt & I can see the logic behind your code!
/* {BRIAN}>
This is another solution, optimized for this question:

We know that the maximum # of stars in any given tree where the height >= 2 is
represented by the following relation:

MaximumNumberOfStars = 2(height - 1) - 1

Example:
height = 5, MaximumNumberOfStars = 2(5 - 1) - 1 = 8 - 1 = 7.
    *
   ***
  *****
 ******* <-- 7 stars.
    *

height = 6, MaximumNumberOfStars = 2(6 - 1) - 1 = 10 - 1 = 9.
    *
   ***
  *****
 *******
********* <-- 9 stars.
    *

If the height is one or zero, however, then we can simply print out one or zero
stars, respectively.

We want to maximize space (amount of memory required to store your tree) and 
time efficiency for this question. How do we do this?

Since we can calculate the maximum # of stars in a given tree where height >= 2,
we can create an array that represents the stars at any given level and continuously
add the result to a string! Here's what that looks like:
*/

function optimizedMakeTree(height) {
  
  // We have to first make sure that the height is at least 0:
  if (height < 0) {
    // Return an error object explaining what went wrong.
    return Error("You must supply a height >= 0!");
  }
  // now let's check if the height is less than 2:
  if (height < 2 && height >= 0) {
    // We're going to return whatever is calculated below:
    return '*'.repeat(height);
    // This is because if height = 1, we just return 1 star; if height = 0, 
    // we return 0 stars.
  }
  else {
    // We defined a variable named "tree", representing our christmas tree.
    // 'tree' is the string we'll return.
    let tree = '';
    
    // If height is at least 2, we can use the formula we defined above to
    // generate the Christmas tree.
    let maximumNumberOfStars = (2 * (height - 1)) - 1;
    // 'level' is an array to represent each level, initialized to the max # of 
    // stars. For each level, we add the necessary # of stars. All other values 
    // are spaces.
    let level = Array.from(' '.repeat(maximumNumberOfStars));

    // We're only going to loop for (height / 2) lowered to the nearest whole
    // value + 1. Why is this? We're writing an optimized version of this code which
    // means that we want to do as few loops and calculations as possible while
    // keeping the number of variables we use to a minimum.
    // We can think of generating the tree as not top-down or left to right,
    // but middle-out (a Silicon Valley reference if you get it LOL). 
    // See the example below for height = 4 ((4/2) + 1 = 3 loops total):
    // Loop 1:    *
    // Loop 2:   ***
    // Loop 3:  *****
    // And we add 1 star at the end.

    let i; // "i" is our index counter.
    let middle = Math.floor(height / 2) + 1;
    // Here's the loop:
    for (i = 0; i < height - 1; i++) {
      level[middle - i] = "*";
      level[middle + i] = "*";
      tree += level.join("") + "\n";
    }
    // Reset the array (takes very little computational power).
    level.fill(" ");
    // Set the middle value to a star (the last star we have to add at the end).
    level[middle] = "*";
    tree += level.join("");
    
    return tree;
  }
}

// You can test the speed of your code against mine!

// Here's the benchmarks:

console.time("Your Code");
makeChristmasTree(5000);
console.timeEnd("Your Code");

console.time("Optimized Code");
optimizedMakeTree(5000);
console.timeEnd("Optimized Code");