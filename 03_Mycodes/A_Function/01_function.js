// “What is a function in JavaScript?”
// “A function is a block of code that performs a specific task and can be reused.”

// LEVEL 1 :- Structure of function 

function greet(){
    return "Hello";
}

// Breakdown:
// function → keyword
// greet → function name
// () → parameters (abhi empty)
// {} → function body
// return → output

// “I used the function keyword, defined a function name, and returned a value.”

// ------------------------------------------------------------------

// Parameters:-

function add(a, b) {
  return a + b;
}

// Explanation:

// a & b = parameters
// Function ko value dene ke liye
// 🗣️ Interview line:
// “Parameters are used to pass values into the function.”
// ------------------------------------------------------------------

// LEVEL 3 → FUNCTION CALL (MOST CONFUSING FOR BEGINNERS)

let result = add(5, 3);
console.log(result);


// 🧠 Logic:
// 5 → goes into a
// 3 → goes into b
// Output → 8

// 🗣️ Interview line:
// “I called the function by passing arguments.”
// ------------------------------------------------------------------

// 🟢 LEVEL 4 → if / else INSIDE FUNCTION
// function checkEvenOdd(num){
//   if(num % 2 === 0){
//     return "even"
//   }else{
//     return "odd"
//   }
// }

// let result = checkEvenOdd(9)
// console.log(result);

// “I used if-else inside the function for decision making.”

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 🟢 LEVEL 5 → REAL INTERVIEW BEGINNER QUESTIONS
// ✅ Q1: Check Even / Odd
// function isEven(num) {
//   return num % 2 === 0;
// }

// ✅ Q2: Add Two Numbers
// function sum(a, b) {
//   return a + b;
// }

// ✅ Q3: Square of Number
// function square(num) {
//   return num * num;
// }
