function largest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// function call with values
let ans = largest(12, 7);
console.log("Largest number is:", ans);


// 🔹 Short version (smart way)
// function largest(a, b) {
//   return a > b ? a : b;
// }


// “I created a function that takes two numbers as parameters.
// Using an if–else condition, I compare both numbers and return the greater one.”