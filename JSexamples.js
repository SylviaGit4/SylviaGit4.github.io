console.log(":3 Console output tests."); // logging (printing) a message to the console //

// VARIABLES //
let number = 17; // declaring a variable //

const lang = "JavaScript"; // declaring a constant //

if (number === 17) {
  // 3rd = means ensuring it's an integer //
  console.log("Wow, that is the number 17"); // executing a conditional (if) statement //
}

// INPUT/OUTPUT //
alert("THIS IS JAVASCRIPT"); // shows a popup message //

const answer = confirm("Do you really want to see javascript?"); // shows a popup with OK and Cancel buttons //

console.log(answer); // logging the result of the confirm() function //

let opinion = prompt("Do you like JavaScript?", "Yes"); // shows a popup with a text input field //

console.log(opinion); // logging the result of the prompt() function //

// ARRAYS AND LOOPS //
const drinks = ["Tea", "Coffee", "Soda", "Water"]; // declaring an array //

let drinkLength = drinks.length; // calculating the length of the array //

console.log(drinks.toString()); // converts and logs array to a single string //

for (let n of drinks) {
  console.log(n); // logging each element of the array //
}

let last = drinks.pop(); // removes and logs the last element of the array //

let first = drinks.shift(); // removes and logs the first element of the array //

console.log(first); // logging the first element of the array after removing it //
console.log(last); // logging the last element of the array after removing it //

for (let i = 0; i < 5; i++) { // length based loop//
  // logging numbers from 0 to 4 //
  console.log("Output:", i);
}

// FUNCTIONS //
function printDrinks(drinks) {
  // declaring a function //
  console.log(drinks);
}

drinks.forEach(printDrinks); // logging each element of the array using forEach() //

drinks.forEach((n) =>
  // declaring a function using arrow (lambda) function //
  {console.log(n);}
);