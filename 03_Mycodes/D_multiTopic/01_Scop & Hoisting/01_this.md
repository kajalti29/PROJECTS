<!-- 🔥 TOPIC 1: var, let, const (MOST IMPORTANT) -->

<!-- ❓ Q1. What is a variable in JavaScript? -->
A variable is used to store data values so they can be used and modified later in the program.

<!-- let name = "Kajal"; -->

<!-- ❓ Q2. Difference between var, let, and const? -->

* let :-  A variable cannot be re-declared but can be update.
It is block scope variable(work only inside {})
<!-- 
let y = 10;
y = 20;   // allowed
// let y = 30; ❌ error -->

* const :- A variable cannot be re-declared and cannot be update.It is a block scope variable.

<!-- 
const z = 10;
// z = 20; ❌ error -->
Interview line:
const me variable re-assign nahi ho sakta, lekin object/array modify ho sakta hai.

* var :- A variable can be re-declared and can be update.
It is a function scope.

<!-- 
var x = 10;
var x = 20;   // allowed
x = 30;       // allowed -->

