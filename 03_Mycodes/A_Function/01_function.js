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


// // ✅ Q4: Voting Eligibility

// function canVote(age){
//     if(age >= 18){
//         return "voting";
//     }else{
//         return "Non voting";
//     }
// }

// console.log(canVote(14));


// “I start by creating a function using the function keyword.
// I pass parameters to receive input values.
// I apply conditions using if-else when required.
// Finally, I return the result.”

// What is a function in JavaScript?
// “A function is a block of code that performs a specific task and can be reused.”

// Why do we use functions in JavaScript?
// “We use functions to reuse code, make the code easier to read, and easier to manage and maintain.”

// What are parameters in a function?
// “Parameters are used to pass values into the function.”

// What is the use of return statement in a function?
// “The return statement returns the output value from the function.”

function add(a, b) {
  return a + b;
}

// “This is a function named add.
// It takes two parameters a and b.
// It adds both values and returns the result.”
// // ----------------------------------------------------------


// 🟢 FUNCTION CALL – BILKUL BASIC SE
// “A function call is used to execute a function by passing arguments to it.”

// function add(a, b) {
//   return a + b;
// }

// add(2, 3);   // function call

// // ----------------------------------------------------------

// ✅ Parameters vs Argumens:-
 
// “Parameters are used to pass values into the function.”
// Arguments are actual values passed to a function during function call.
// “ Means Parameters receive values, arguments pass values.”

function add(a, b) {   // a, b → parameters
  return a + b;
}

add(2, 3);             // 2, 3 → arguments

// ----------------------------------------------------------

// 3️⃣ What is function definition?
// Function definition is the process of creating a function using the function keyword.

// 8️⃣ Can a function return multiple values?
// No, a function returns only one value, but we can return multiple values using an array or object.

// 🔟 What is the difference between parameters and arguments?
// Parameters are used while defining a function, and arguments are used while calling a function.

// 1️⃣1️⃣ What is a default parameter?
// A default parameter is a value assigned to a parameter if no argument is passed.

// 1️⃣2️⃣ Can we call a function before defining it?
// // Yes, function declarations can be called before definition due to hoisting.

// 1️⃣3️⃣ What is a function expression?
// A function expression is a function stored in a variable.

// 1️⃣4️⃣ What is an anonymous function?
// An anonymous function is a function without a name.

// 1️⃣5️⃣ What is arrow function?
// An arrow function is a shorter syntax for writing functions using =>.

// ----------------------------------------------------------------------------------------

// 1️⃣ Add Two Numbers
// function add(a, b) {
//   return a + b;
// }
// 🗣️ Logic: Takes two parameters and returns their sum.

// 2️⃣ Check Even or Odd
// function checkEvenOdd(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }
// 🗣️ Logic: Uses modulus operator to check remainder.

// 3️⃣ Square of a Number
// function square(num) {
//   return num * num;
// }


// 🗣️ Logic: Multiplies number by itself.

// 4️⃣ Largest of Two Numbers
// function largest(a, b) {
//   return a > b ? a : b;
// }


// 🗣️ Logic: Compares two numbers and returns the larger one.

// 5️⃣ Check Voting Eligibility
// function canVote(age) {
//   return age >= 18 ? "Eligible" : "Not Eligible";
// }

// ----------------------------------------------------------------

// 🟡 MEDIUM LEVEL (Common Interview)
// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// “I initialize fact with 1. Then I run a loop from 1 to n and multiply each number with fact. Finally, I return the factorial.”


// function reverseNumber(num) {
//   let rev = 0;
//   while (num > 0) {
//     rev = rev * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }
