// A closure is a function that remaimber the variable from its outer scope and even after the outer function finished execution.
// It is used for data hiding and pravite variable.

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
let result = outer();
result(); // 10