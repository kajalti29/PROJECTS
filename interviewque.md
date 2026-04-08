<!-- 21. What is JSON? -->

JSON means JavaScript Object Notation used to store and transfer data.

{
 "name":"Kajalti",
 "age":21
}

<!-- 30. What is ES6? -->
ES6 is a modern version of JavaScript.
Features:
let / const
arrow functions
classes
modules
promises
-----------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------


==============================================================
<!--13. What is event delegation? -->
Event delegation is a technique where a parent element handles events of its child elements using event bubbling.

<!-- 14. What is event bubbling? -->
Event bubbling means an event starts from the target element and bubbles up to parent elements.

<!-- 18. What is debounce? -->
Debounce limits how often a function runs (useful for search input).

<!-- 19. What is throttle? -->
Throttle ensures a function runs at a fixed interval.
------------------------------------------------------------------------

17. What is typeof?
typeof is an operator used to check the data type of a variable or value.
<!-- 
let a = 10;
console.log(typeof a);   // number

let name = "John";
console.log(typeof name); // string

let isTrue = true;
console.log(typeof isTrue); // boolean -->

18. What is isNaN()?
Checks if value is Not a Number (NaN).
<!-- 
console.log(isNaN("Hello")); // true
console.log(isNaN(100));     // false
console.log(isNaN("123"));   // false -->
"Hello" cannot convert to number → NaN

19. What is parseInt()?
parseInt() is used to convert a string into an integer (whole number).
<!-- 
let num = "25";
let result = parseInt(num);

console.log(result); // 25
console.log(typeof result); // number -->

20. What is parseFloat()?
Converts string to decimal number.
<!-- 
let price = "10.75";

let result = parseFloat(price);

console.log(result); // 10.75 -->

21. What is Boolean()?
Converts value into boolean.
<!-- 
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true -->

24. What is the difference between alert, prompt, confirm?
alert → show message
prompt → input
confirm → yes/no
<!-- 
alert("Welcome");
let name = prompt("Enter your name");
let result = confirm("Are you sure?"); -->

25. What is console.log()?
Prints output in browser console.
<!-- 
let name = "Rahul";

console.log(name);
console.log("Hello World");
console.log(10 + 20); -->

12. What is type coercion?
Type coercion is JavaScript’s automatic or explicit conversion of values from one data type to another.

13. What are primitive types?
Primitive types are immutable data types that store single values directly in memory.
string, number, boolean, null, undefined, symbol, bigint

15. null vs undefined?
undefined → declared but not assigned a value.
<!-- 
let a;
console.log(a); // undefined
-->

null → intentional empty value
<!--
let b = null;
console.log(b); // null -->

16. What is strict mode?
Strict mode makes JavaScript more secure and prevents common mistakes.

"use strict";
x = 10;
Error because variable is not declared.

🔟 Difference between == and ===
| Operator | Meaning              |
| -------- | -------------------- |
| `==`     | Compare value only   |
| `===`    | Compare value + type |

5 == "5"   // true
5 === "5"  // false

<!-- 1️⃣4️⃣ What is the difference between null and undefined? -->
| null                    | undefined                          |
| ----------------------- | ---------------------------------- |
| Intentional empty value | Variable declared but not assigned |
<!-- 
let a
console.log(a) // undefined

let b = null -->

<!-- 1️⃣5️⃣ What is the difference between map() and forEach()? -->
| map                     | forEach               |
| ----------------------- | --------------------- |
| Returns new array       | Does not return array |
| Used for transformation | Used for iteration    |

------------------------------------------------------------------------------------========================================================================================================================================================================================================================
<!-- 🟠 Functions :- -->
✔ What is a function
✔ Function Declaration vs Expression
✔ Arrow Function
✔ Hoisting
✔ Callback
✔ Higher Order Function
✔ Closure
✔ this behavior
✔ Default parameters
✔ Return value (undefined)

<!-- Functions -->
A function is a block of code that performs a specific task and can be reused.It can accept parameters and return a value.”

Like a machine that takes input and produces output.
<!-- Logic -->
Input → process → return result

“For example, if I want to add two numbers multiple times, I can create a function.”
<!-- 
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); -->

“Here, ‘add’ is a function that takes two parameters and returns their sum. When I call add(2, 3), it returns 5.”

<!-- "Why do we use functions in JavaScript?" -->
* Avoid repetition
* Organize code
* Improve readability
---------------------------------------------------------------------------

<!-- 🔹 1️⃣ Parameter -->
Parameters are inputs passed to function.
<!-- function add(a,b) -->

<!-- 🔹 2️⃣ Argument -->
An argument is the actual value passed to a function when calling it.
<!-- greet("Kajal"); -->
👉 Yaha "Kajal" argument hai.

<!-- 🔹 3️⃣ Return Keyword -->
👉 Used to send value back
<!-- 
function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);
console.log(result);   // 5 -->

<!-- 21. What is anonymous function? -->
Function without name.
<!-- 
const greet = function() {
  console.log("Hi");
}; -->

<!-- 22. What is recursion? -->
Function calling itself.

<!--6. First-Class Function (Important 🔥) -->
Functions can be stored in variables, passed as arguments, and returned from other functions.
-------------------------------------------------------------------------------------------------------
<!-- 1️⃣ Function Declaration vs Function Expression -->
Function Declaration:
A function defined using the function keyword with a name.It is fully hoisted and can be called before definition

Function Declaration = A public rule
A government rule exists before you read it. 
(Function Declaration pre-defined rule)
<!-- 
greet();   // Yeh kaam karega
function greet() {
  console.log("Hello Guest!");
}
 -->
Logic
function greet(name) → creates a function 
return sends value back
We call it using greet("Kajal")

Function declarations are hoisted.
<!-- 
greet("Kajal");
function greet(name) {
  console.log("Hello " + name);
} -->
Works fine ✅

Function Expression:
A function stored inside a variable. It is not fully hoisted, so it cannot be called before it is defined.

Function Expression is like a job appointment letter.
It becomes valid only after signing.
<!-- 
const greet = function() {
  console.log("Hello");
};
greet(); -->
-------------------------------------------------------------------------
<!-- 🔥 1️⃣ Difference Between normal Function and Arrow Function. --> -->
A normal function has its own this and arguments object, and it can be used as a constructor with the new keyword.

✅ Normal Function
<!-- 
function greet(name) {
  return "Hello " + name;
} -->

An arrow function does not have its own this and arguments object and cannot be used as a constructor.
✅ Arrow Function
<!-- 
const greet = (name) => {
  return "Hello " + name;
}; -->

-----------------------------------------------------------------------
<!-- Arrow Functions -->
An Arrow Function is a shorter and modern way to write a function in JavaScript using the => syntax and does not have its own this.
<!-- Real-World Example --> 
A child using their parent’s ID. 
The child does not have their own identity card,
so they use the parent’s ID.
Similarly, an arrow function uses the parent’s this.

Normal function
<!-- 
function add(a,b){
 return a+b
} -->

Arrow function

<!-- const add = (a,b) => a+b --> 

<!-- 8. What is this keyword? -->
this refers to the object that is currently calling the function.
<!-- 
const obj = {
  name: "Kajal",
  greet() {
    console.log(this.name);
  }
}; -->
----------------------------------------------------
<!-- 🔥 3. What is Hoisting? -->
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

Imagine your name is already written on the attendance list before the class starts.
Even if the teacher calls your name first,
your name is already in the list.
👉 That means your name was prepared earlier.
<!-- j
console.log(a);
var a = 5; -->
Output: undefined

<!-- 🔥 What is TDZ? -->
Temporal Dead Zone is the time between entering a block and the variable declaration where a let or const variable cannot be accessed.

<!-- 🌍 Real-world Example -->
"TDZ is like a booked movie seat — it exists, but you can't use it until the movie starts."
<!-- 
console.log(a); // ❌ ReferenceError
let a = 10; -->
---------------------------------------------------------------------------
<!-- Callback Functions -->
A callback function is a function that is passed as an argument to another function and is executed after some task is completed.

<!-- Real-World Example: -->
 Online Order (Callback)
A customer places an order → the payment is completed → a confirmation message is sent.
The confirmation message comes after the payment is successful.
In the same way, a callback function runs after another function finishes its work
<!-- 
function greet(name) {
    console.log("Hello " + name);
}
function processUser(callback) {
    callback("Rahul");
}
processUser(greet); -->

Explanation
greet → callback function
processUser → doosra function
greet ko argument ki tarah pass kiya gaya
processUser ne baad me callback() call kiya

<!-- Why Callbacks Are Important? -->
Event handling
API calls
setTimeout / setInterval
Asynchronous programming
----------------------------------------------------
<!-- ✅ 3️⃣ Higher Order Function (HOF) -->
A Higher Order Function is a function that either:
Takes another function as an argument, or
Returns another function

<!-- Example:- -->
A washing machine:
You choose different modes (Quick Wash, Heavy Wash).
The machine’s behavior changes based on the selected mode (function).
The machine like a higher-order function.
<!-- 
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add)); // 8 -->

Example:-2
<!-- 
function sayHello() {
  console.log("Hello!");
}

function callFunction(fn) {
  fn();
}

callFunction(sayHello); -->
---------------------------------------------------
<!-- 🔥 4️⃣ What is Closure? -->
A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.It is used for data hiding and private variables.

<!-- Real-life example -->
Like a backpack that carries items from previous place.

Real use:
Data hidding
Private variables, 
counters,
callback
Event handlers
<!-- 
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  }
}

const counter = outer();
counter(); // 1
counter(); // 2 -->
outer() returns the inner() function.
inner() remembers the variable count because of closure.
So each time counter() is called, count increases instead of resetting.
(Isliye har baar counter() call karne par count increase hota hai, reset nahi hota. 😎)
<!-- 
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
let result = outer();
result(); // 10 -->

<!-- 🔹 Why do we use Closure? -->
We use closure protect data inside a function.They are widely used in callbacks, event handlers, and functional programming.
--------------------------------------------------
<!-- IIFE (Immediately Invoked Function Expression) -->
👉 IIFE is a function that runs immediately after it is defined.

🔹 Basic Syntax
<!-- ✅ Normal IIFE -->
<!-- 
(function () {
  console.log("IIFE executed");
})(); -->

(function(){}) → Function expression
() → Immediately call s

<!-- ✅ Arrow Function IIFE -->
(() => {
  console.log("Arrow IIFE executed");
})();

👉 Global scope bachane ke liye
IIFE is used to create a private scope
----------------------------------------------------
<!-- 42. What is currying? -->
Transforming a function with multiple arguments into multiple nested functions.
<!-- 
function add(a) {
  return function(b) {
    return a + b;
  }
} -->

<!-- ✅ 4️⃣ Pure vs Impure Function --> IMP
"A pure function is a function that always returns the same output for the same input and does not cause any side effects.

<!-- Same input doge → hamesha same output dega -->
<!-- 
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5 -->

<!-- Why are pure functions preferred? -->
👉 Because:
Easy to test
No side effects
Better performance optimization
DOM change karna
API call karna
Console log karna
File write karna

<!-- 🔹 2️⃣ Impure Function -->
“An impure function is a function that does not always return the same output for the same input
<!-- 
let count = 0;

function increase() {
  count++;
}s

increase();
console.log(count); // 1
 -->

====================================================

4️⃣ Asynchronous JavaScript 🔥🔥🔥
<!--7. What is the difference between synchronous and asynchronous? -->
✅ Synchronous Javascript:-
Synchronous Javascript execute Code runs line by line.
<!-- Real-Life Example -->
Imagine you are standing in a bank queue. Until the person in front of you finishes their work, your turn will not come.
<!-- 
console.log("Start");
console.log("Middle");
console.log("End"); -->
Output:-
Start
Middle
End 

✅ Asynchronous Javascript:-
 Asynchronous Javascript Code runs without blocking the next line.
<!-- Real-Life Example -->
You download a movie 🎬

The download happens in the background,
and meanwhile you can watch YouTube or do other tasks.
You don't have to sit and wait for the download to finish.

👉 This is similar to asynchronous JavaScript, where a task runs in the background while the program continues doing other work.

<!-- 
setTimeout(() => {
  console.log("Hello");
}, 2000); -->
<!-- 
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 2000);

console.log("End"); -->
Sync → ek ke baad ek
Async → wait kiye bina next line chalti hai.


<!-- 👉 What is difference between setTimeout and setInterval? -->
<!-- setTimeout -->
setTimeout run a function only once after a specified time delay.
Syntax:-
setTimeout(function, delay)
delay is in milliseconds
1000 ms = 1 second
<!-- 
setTimeout(() => {
  console.log("Hello after 3 seconds")
}, 3000)
-->
Output after 3 seconds
Hello after 3 seconds

<!-- Real-Life Example 2: Popup Message  -->
A website shows welcome popup after 5 seconds.

setTimeout(() => {
  alert("Welcome to our website!")
}, 5000)

--------------------------------------------------------------------------------
<!-- setInterval -->
setInterval run a function repeatedly at fixed intervals
until it is cleared.
<!-- 
setInterval(() => {
  console.log("Running every 2 seconds");
}, 2000); -->

<!-- Real-Life Example 2: Live Notifications -->
Example: Instagram / WhatsApp
Checking new messages every 5 seconds.

setInterval(() => {
  console.log("Checking new notifications...")
}, 5000)

In real apps this calls an API.
----------------------------------------------------------------------
<!-- How do you stop setInterval()? -->

<!-- 🛑 Stop Karne Ka Tarika -->
Dono ko clearTimeout() aur clearInterval() se stop karte hain.
1. 
<!-- 
const timer = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(timer); -->

2. 
<!--
 const interval = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000); -->


Create a countdown timer from 10 to 0.
<!-- 
let time = 10

let timer = setInterval(() => {

  console.log(time)

  time--

  if(time < 0){
    clearInterval(timer)
    console.log("Time up")
  }

},1000) -->
Real-world use:
Exam timer
Quiz timer
Offer countdown

1️⃣ Question: Output Prediction (Event Loop)
<!-- 
console.log("Start")

setTimeout(() => {
  console.log("Inside Timeout")
}, 0)

console.log("End") -->

What will be the output?
<!-- Output -->
Start
End
Inside Timeout

1️⃣ Call Stack
2️⃣ Web APIs
3️⃣ Callback Queue
4️⃣ Event Loop

1️⃣ console.log("Start") → runs immediately
Start
2️⃣ setTimeout() goes to Web APIs
3️⃣ console.log("End") runs
End
4️⃣ Now event loop moves callback to stack
Inside Timeout
-----------------------------------------------------------------------------
<!-- 🔥 8. What is a Promise? -->
A Promise is an object that represents a future value — either resolved or rejected.
It has three states: pending, fulfilled, and rejected.
We handle promises using .then(), .catch(), and .finally().

<!-- Real-life Example -->
Imagine you take an exam.
If you pass → You will receive a certificate (resolve).
If you fail → You will not receive a certificate (reject).
The result will come in the future — not immediately

✅ Promise Syntax
<!-- 
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  } -->

<!-- 
🎯 .then() and .catch()
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); -->

👉 .then() → success handle karta hai
👉 .catch() → error handle karta hai

<!-- 
fetch(url)
.then(rev => rev.json())
.then(data => console.log(data))
.catch(err => console.log(err)) -->

🔥 2️⃣ What is Promise Chaining?
Promise chaining is executing multiple asynchronous operations sequentially using multiple .then() methods.
<!-- 
Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => console.log(result)); -->
👉 Output: 25

🔥 3️⃣ What is Promise.all()?
Promise.all() runs multiple promises in parallel and returns a single promise.
<!-- 
const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");

Promise.all([p1, p2])
  .then(results => console.log(results)); -->

👉 Output: ["First", "Second"]
------------------------------------------------------------------------
<!-- What is async/await ? -->
“async/await is used to handle API calls in a cleaner and readable way.”
async/await is a cleaner way to handle promises.
<!-- 
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
} -->

<!-- 3. What is an async function? -->
async/await is a syntax used to handle asynchronous operations (Promises) in a cleaner way.

async → makes a function return a Promise
await → pauses the function until the Promise resolves
Syntax:-
<!-- 
async function getData() {
  const res = await fetch(url);
} -->


async function getData() {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  console.log(data);
}

Example:-
<!-- 
async function getUsers(){

  let response = await fetch("https://jsonplaceholder.typicode.com/users")
  let data = await response.json()
  console.log(data)

}

getUsers() -->

-------------------------------------------------------------------------
<!-- ❓2. What is Blocking and Non-Blocking code? -->
Blocking: Stops execution until task finishes.
Non-Blocking: Doesn’t stop execution.

<!-- ❓4. What are different ways to handle async in JS? -->
Callback
Promise
Async/Await

imp:-
<!-- 👉 “Why is JavaScript called single-threaded but still asynchronous?” -->
JavaScript has a single call stack, but it uses Web APIs and the Event Loop to handle asynchronous tasks in the background without blocking the main thread
-------------------------------------------------------
<!--this Keyword 🔥 (Very Important) -->
this refers to the object that is calling the function.

<!-- 🔥 3️⃣ this Inside Object -->
const student = {
  name: "Kajal",
  age: 21,
  info() {
    console.log(this.name);
  }
};

student.info();

<!-- 🔥 17. Difference Between call, apply, bind -->
Ye teen methods this ko control karte hain.
✅ 1️⃣ call():-
call() calls the function immediately and passes arguments one by one.
<!-- Real-life example -->
You borrow your friend’s ID card and enter the office immediately.
👉 Borrowed identity
👉 Used right away
That is like call()
<!-- 
function greet(city) {
  console.log(this.name + " from " + city);
}

greet.call({name: "Kajalti"}, "Delhi"); -->

✅ apply():-
apply() calls the function immediately but passes arguments as an array.
(Arguments array me deta hai).

<!-- Real-life example -->
You borrow your friend’s ID card and enter the office immediately.
but you carry all your documents together in one file (like an array).
That is like apply().

<!-- greet.apply({name: "Kajalti"}, ["Delhi"]); -->

✅ bind():- 
bind() does not call the function immediately. It returns a new function with a fixed this value that can be called later.

You borrow your friend’s ID card,
but you don’t enter immediately.
You keep it and use it later.

👉 Identity is fixed
👉 Used later

That is like bind()

<!-- 
const newFunc = greet.bind({name: "Kajalti"}, "Delhi");
newFunc(); -->
===========================================================================
<!-- What is Lexical Scope -->
Lexical scope means a function can use variables from the place where it was created (written in the code).

<!-- 1️⃣ Example: User Login System -->
Imagine a login system where username is stored in a parent function.
<!-- 
function login(){
  let username = "Kajalti"
  function showUser(){
    console.log("Welcome " + username)
  }
  showUser()
}
login()
-->
Welcome Kajalti

<!-- Why this works -->
showUser() can access username because of lexical scope.

<!-- 🔥 2️⃣ Execution Context -->
<!-- 🔹 What is Execution Context? -->
“Execution Context is an environment where JavaScript code is executed.”
Hindi:-
Execution Context ek environment hota hai jahan JavaScript code execute hota hai.

<!-- 🔥 5️⃣ Event Loop, Call Stack & Microtasks vs Macrotasks -->
<!-- 🔹 Event Loop -->
The Event Loop is a mechanism in JavaScript that allows asynchronous operations to run without blocking the single-threaded call stack.

<!-- Call Stack -->
Call stack is a data structure that keeps track of function call and execution them one by one LIFO order.

<!-- 
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
 -->
Execution order:
first → second → console.log

<!-- 17. What is prototype? -->
A prototype is an object from which other objects inherit properties and methods.

<!-- 18. What is prototypal inheritance? -->
Prototypal inheritance is a mechanism in JavaScript where one object inherits properties and methods from another object using the prototype chain.
<!-- 
let human = {
  walk: true
}

let student = {
  study: true 
}

student.__proto__ = human

console.log(student.walk)-->true
Because student human से property ले रहा है।


<!-- 📦 1️⃣Rest Operator (...) -->
 Rest parameter collects multiple values into one array.
Rest → collect all chocolates into one box.
<!-- 
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4); -->
[1, 2, 3, 4]

<!--2️⃣ Spread Operator (...) -->
Spread operator expands an array into individual values.
Spread → open box and spread chocolates individually.
<!-- 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); -->
[1, 2, 3, 4, 5]
===================================================================================================================================
7️⃣ DOM (Frontend Interviews):-
<!-- What is DOM -->
DOM (Document Object Model) is a programming interface that allows JavaScript to access, modify, add, or delete HTML elements and change the content of a web page.

<!-- 🌍 Real-world Example -->
When you click Like button on Instagram, JavaScript updates the DOM to change the icon color.  

HTML
<!-- <p id="text">Hello</p> -->

JavaScript
<!-- document.getElementById("text").innerText = "Hi"; -->

<!-- 🔥2️⃣ DOM Selectors Elements -->
JavaScript me HTML elements ko select karne ke liye methods use hote hain.

| Method                 | Example                           |
| ---------------------- | --------------------------------- |
| getElementById         | document.getElementById()         |
| getElementsByClassName | document.getElementsByClassName() |
| getElementsByTagName   | document.getElementsByTagName()   |
| querySelector          | document.querySelector()          |
| querySelectorAll       | document.querySelectorAll()       |


🔹 getElementById():-
Selects element by id.
HTML:-
<!-- <p id="demo">Hello</p> -->
JS:-
<!-- 
let element = document.getElementById("demo");
console.log(element); -->

🔹 querySelector():- 
Selects first matching elements.
<!-- 
document.querySelector("#para");   // id
document.querySelector(".box");    // class
document.querySelector("p");       // tag
 -->

 🔹 querySelectorAll():-
 Selects all matching elements (returns NodeList).

 <!-- let elements = document.querySelectorAll(".item"); -->

<!--Q.Difference between querySelector and querySelectorAll? -->
querySelector returns first matching element.
querySelectorAll returns all matching elements.

<!-- 3. Difference between innerHTML and textContent? -->
innerHTML → Reads and writes HTML content including tags
textContent → Reads and writes only text

element.innerHTML = "<b>Hello</b>"
element.textContent = "Hello"

<!-- Difference between getElementById() and querySelector() -->
getElementById() → id name only
querySelector() → CSS selector (#, ., tag) 
Example:-  
let a = document.getElementById("text");
let b = document.querySelector("#text"); 
---------------------------------------------------------------------------------
<!-- 🔥 2️⃣ Manipulating DOM -->
<!-- How do you change HTML content using JavaScript? -->
DOM manipulation means changes to content, style, and structure of web pages using JavaScript.

<!-- 🔹 innerHTML -->
Changes HTML inside element.

element.innerHTML = "<b>New Text</b>";

<!-- 🔹 textContent -->
Changes only text (safe).

element.textContent = "New Text";

<!-- 🔹 style -->
element.style.color = "red";

<!-- 🔹 classList -->
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");

NOTE:- Agar class hai → remove karega 
       Agar class nahi hai → add karega  

Mini Projects:-
<!DOCTYPE html>
<html>
<head>
  <title>Dark Mode</title>

  <style>
    .dark-mode {
      background-color: black;
      color: white;
    }
  </style>

</head>
<body>

<button id="btn">Dark Mode</button>

<script>
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
  });
</script>

</body>
</html>
IMP:-
--------------------------------------------------------------------------------
<!-- 4️⃣ Create and Add Elements -->
<!-- How do you create elements dynamically in JavaScript? -->
Methods:
createElement()
appendChild()
prepend()
remove()

<!-- 
const li = document.createElement("li")
li.innerText = "New Task"

document.querySelector("ul").appendChild(li) -->

Example:-
Todo List App
User adds task → JS creates new <li>.

<!-- 7. How do you create a new element in the DOM? -->
let div = document.createElements("div")
div.textContent = "Hello"
document.body.appendChild(div)

<!-- 8. How do you remove an element from the DOM? -->
element.remove()
<!-- 9. What is classList? -->
classList is used to add, remove, or toggle CSS classes.
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("active")
---------------------------------------------------------------------------
<!-- 5️⃣ Event Handling -->
handle events → handle user actions like click, hover, key. 
Examples:
click
input 
change
submit
mouseover
<!-- 
const btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    alert("Button clicked")
}) -->

Real World Example
Clicking the "Add to Cart" button on an e-commerce website.

<!-- 10. What is an Event Listener? -->
An event listener listens for user actions like click or key press and runs a function.
<!-- 
button.addEventListener("click", function(){
  alert("Button Clicked")
}) -->

11. What does setAttribute() do?
It is used to set an HTML attribute.
element.setAttribute("href", "https://google.com")
--------------------------------------------------------------------------
🔥 BOM (Browser Object Model)
BOM allows JavaScript to interact with browser features outside the document.

<!-- 🔹 window Object -->
Global object in browser.

<!-- console.log(window.innerWidth); -->

<!-- 🔹 navigator --> 
Gives browser information.

<!-- console.log(navigator.userAgent); -->

<!-- 🔹 location -->
Used to get or change URL.
<!-- 
console.log(location.href);
location.reload(); -->
-----------------------------------------------------------------------------------------------
<!-- 6️⃣Very Important Interview Question -->

<!-- 5️⃣ What is Event Loop in JavaScript? -->
The Event Loop is a mechanism in JavaScript that allows asynchronous operations to run without blocking the single-threaded call stack.
The Event Loop allows async operations by:
Call Stack 
Web APIs
Callback Queue / Microtask Queue
Event Loop moves tasks when stack is empty
<!-- 
console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);
console.log("End"); -->


<!-- 1️⃣ Event Bubbling:--->
Event Bubbling means the event starts from the target element and propagate up to its parent elements.
Event bubbles from child to parent.

<!-- Real-World -->
Imagine there is a fire alarm in a building.
The alarm starts in one room (child element).
Then the signal spreads throughout the entire building (parent elements).
The same concept applies in event bubbling.

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child Clicked");
});
<!-- O/P -->
Child Clicked
Parent Clicked
<!-- event.stopPropagation() se rok sakte hain. -->


<!-- Q16: Event bubbling vs capturing? -->
Event Bubbling: Event goes from child to parent.
Event Capturing: Event goes from parent to child.


<!-- 🔥 6. What is Event Delegation? -->
Event delegation means adding one event listener to a parent element instead of many child elements.

This improves performance because we avoid attaching multiple event listeners to individual child elements
<!-- Real World Example -->
Clicking items in product list of Amazon.

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

let list = document.getElementById("list");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") { 
    console.log("Clicked:", event.target.textContent);
  }
});

Here I attached a single event listener to the parent <ul> element.When a child <li> is clicked, the event bubbles up to the parent and using event.target, we identify which child was clicked.
<!-- Use event.stopPropagation() to stop it. -->
-------------------------------------------------------
<!-- 🔥 12. What is Debouncing? -->
Debouncing limits how often a function runs.
how often(kitni bar)

<!-- Debouncing me function tab run hota hai jab user action stop kare. -->
🎯 Real-Life Example
A real-life example of debouncing is a search bar.
to avoid too many API calls.”

When a user types continuously, the search function does not run on every keystroke.
Instead, it runs only after the user stops typing for a short delay.
<!-- 
function debounce(func, delay){
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  }
} -->
Real World Example
Google Search suggestions.

<!-- 🔥 13. What is Throttling? -->
It ensures a function runs at a fixed interval.
“Used for performance optimization in scroll or resize events.”
<!-- 🌍 Real-Life Example -->


<!-- 3️⃣ addEventListener -->
addEventListener is used to attach an event handler to an element.
<!-- 
element.addEventListener("click", function() {
  console.log("Clicked");
}); -->
-------------------------------------------------------
<!-- 🔥 15. What is localStorage? -->
Local Storage is a client-side web storage mechanism that stores data in key-value pairs in the browser permanently.

<!-- Real-Life Example -->
Imagine a website that saves:
Dark mode preference
Cart items 
ogin status
Even if you close the browser and open it again,
your settings are still saved.
👉 That is localStorage.

<!-- 
// Store data
localStorage.setItem("username", "Kajal");

// Get data
let user = localStorage.getItem("username");
console.log(user);

// Remove data
localStorage.removeItem("username"); -->

<!-- 🔥 21. How JavaScript Works Internally? -->
JavaScript engine (like V8) has:
Memory Heap (stores variables)
Call Stack (executes code)

Process:
Code → Parsed
Execution Context created
Variables stored in memory
Functions pushed to stack
<!-- 
let data = '{"name":"Kajal","age":22}';

let obj = JSON.parse(data);

console.log(obj.name); // Kajal -->


<!-- 🔥 24. What is Callback Hell? -->
“Callback Hell is a situation in JavaScript where multiple asynchronous callbacks are nested inside each other, making the code difficult to read, debug, and maintain.”
<!-- 
getData(function(){
  getMoreData(function(){
    getEvenMore(function(){
      console.log("Done");
    });
  });
}); -->
✅ Solution:
Promises
async/await

================================================================================================================
<!-- What is API? -->
API is used to get data from server (like weather app).

<!-- 8️⃣ Fetch API -->
Fetch API is used to call backend APIs and get data from servers.
<!-- 
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
 -->

🔥 9. API Integration (Real Project Level):-
API integration is the process of fetching and sending data between frontend and backend using HTTP requests.
<!-- 
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error)); -->


🔥 7. Performance Optimization:-
Performance optimization means improving the speed and efficiency of a web application.

<img src="image.jpg" loading="lazy" alt="example">


10. Memoization:-
Memoization stores function results to improve performance.

11. Modules:-
Modules allow you to split code into multiple files.
export function add(){}

import {add} from "./file.js"


🔥 8. Error Handling:-
Error handling is the process of managing runtime errors using try, catch, and finally blocks.
<!-- 
try{
  //code
}catch(error){
  console.log(error);
} -->

Example:-
<!-- 
try {
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Invalid division");
  }
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Execution completed");
} -->

 ============================================================================================
QUN ans
<!-- 2. Difference between HTML DOM and Browser DOM? -->
| HTML DOM                            | Browser DOM                      |
| ----------------------------------- | -------------------------------- |
| Represents HTML document            | Represents browser window        |
| Used to manipulate webpage elements | Used to control browser features |
Example:-
document.getElementById() vs window.alert()

<!-- 3. How does JavaScript interact with the DOM? -->
JavaScript interacts with the DOM using the document object to select, modify, add, or remove HTML elements.

<!-- 4. What is a DOM tree? -->
A DOM tree is a hierarchical structure of HTML elements where each element is represented as a node.

<!-- 5. What are DOM nodes? -->
Every element, attribute, or text in the HTML document is called a node.

Types:
Element Node
Text Node
Attribute Node

<!-- 6. Difference between document and window -->
| window                    | document                 |
| ------------------------- | ------------------------ |
| Represents browser window | Represents HTML document |
| Global object             | Child of window          |

<!-- 7. What is document.body? -->
document.body returns the body element of the webpage.

<!-- 8. What is document.head? -->
document.head returns the head element of the HTML document.

<!-- 9. What is innerHTML? -->
innerHTML gets or sets the HTML content inside an element.
Example
element.innerHTML = "<h1>Hello</h1>"

<!-- 10. Difference between innerHTML and innerText -->
| innerHTML            | innerText              |
| -------------------- | ---------------------- |
| Returns HTML content | Returns only text      |
| HTML tags are parsed | Tags are shown as text |

<!-- 🔹 DOM Selectors -->
<!-- 11. What is getElementById()? -->
It selects an element by its unique id.

document.getElementById("title")

<!-- 14. Difference between HTMLCollection and NodeList -->
| HTMLCollection          | NodeList                     |
| ----------------------- | ---------------------------- |
| Live collection         | Static collection            |
| Returned by getElements | Returned by querySelectorAll

15. How do you select elements using CSS selectors in JS?**
Using `querySelector()`.
document.querySelector(".box")
`
<!-- 16. How do you select multiple elements in DOM?** -->
Using `querySelectorAll()`.

<!-- **17. What is `getElementsByTagName()`?** -->
It selects all elements with a **specific HTML tag**.
document.getElementsByTagName("p")
<!-- **18. How do you convert NodeList to Array?** -->
Array.from(nodeList)

<!-- # 🔹 DOM Manipulation -->
<!-- **19. How do you change text content of an element?** -->
element.textContent = "Hello"
**20. Difference between `textContent`, `innerText`, and `innerHTML`**

| Property    | Description          |
| ----------- | -------------------- |
| textContent | Returns all text     |
| innerText   | Returns visible text |
| innerHTML   | Returns HTML content |
<!-- **21. How do you change CSS using JavaScript?** -->
element.style.color = "red"
<!-- **22. How do you add a class to an element?** -->
element.classList.add("active")
<!-- **23. How do you remove a class?** -->
element.classList.remove("active")
<!-- **24. What is `classList`?** -->
`classList` is a property used to **add, remove, or toggle CSS classes**.
<!-- **25. How do you toggle classes?** -->
element.classList.toggle("active")
=========================================================================
