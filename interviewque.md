<!-- 🔥 1. What is JavaScript? -->
JavaScript is a high-level, interpreted programming language used to add interactivity and dynamic behavior to web pages.
It run in the browser and on the server(node.js).
It allows us to handle events, manipulate the DOM, validate forms, and fetch data from APIs.
<!-- For example: -->
When you click a button and a popup appears.

<!-- 🔥 2. Difference between var, let, and const? -->
 Var:- 
 var is a function-scoped variable declaration keyword introduced in ES5. It allows both re-declaration and reassignment. It is hoisted and initialized with undefined, which may lead to unexpected behavior.”

🌍 Real-Life Example:
If you declare something using var, it's like announcing something to the entire office floor —
even if you declared it inside one cabin, everyone on that floor can access it.
<!-- 
function office() {
  if (true) {
    var employeeName = "Kajal";
  }
  console.log(employeeName); // Accessible outside block
} -->
Even though it was declared inside {}, it is accessible outside the block.
That’s why var can cause confusion.

Let:-
“let is a block-scoped variable introduced in ES6. It allows reassignment but does not allow re-declaration in the same scope. It is hoisted but remains in the Temporal Dead Zone until initialized.”

<!-- Real-Life Example: -->
Think of let like a locker in a specific room.
Only people inside that room can access that locker.
<!-- 
if (true) {
  let salary = 50000;
}
console.log(salary); // ❌ Error -->

Outside the room (block), you cannot access it.
This prevents accidental access and bugs.

Const:- 
“const is a block-scoped variable introduced in ES6. It does not allow reassignment and re-declaration in the same scope. It is hoisted but remains in the Temporal Dead Zone until initialized

<!-- Real-Life Example: -->
Think of const like 
your Date of Birth.
It is fixed. You cannot change it.
<!-- 
const birthYear = 2002;
birthYear = 2003; // ❌ Error -->
-------------------------------------------------------------
<!-- 🔥 3. What is Hoisting? -->
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

Imagine your name is already written on the attendance list before the class starts.

Even if the teacher calls your name first,
your name is already in the list.
👉 That means your name was prepared earlier.
<!-- 
console.log(a);
var a = 5; -->

Output: undefined

<!-- 🔥 4. What is Closure? -->
A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.
Hindi:-
Closure matlab inner function ko outer function ki variables yaad rehti hain.

🔥 Real use: Private variables, counters, data hiding.
<!-- 
function outer(){
    let count =  0;
    return function inner(){
        count++;
        console.log(count);
    };
} -->

<!-- 🔥 5. What is the difference between == and === ? -->
✅ == :- Compares value only (type conversion happens)

✅ === :- Compares value + type (no conversion)

5 == "5"   // true
5 === "5"  // false

<!-- 🔥 6. What is Event Delegation? -->
Event delegation is a technique where a parent element handles events for its child elements using event bubbling.
<!-- 
document.getElementById("parent").addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    console.log("Button clicked");
  }
}); -->


<!-- 🔥 7. What is the difference between synchronous and asynchronous? -->
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
 A real-life example is ordering food in a restaurant — you place the order and continue doing other things while waiting.”
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

<!-- 🔥 8. What is a Promise? -->A Promise is an object that represents a future value — either resolved or rejected.
It has three states: 
1️⃣pending, 
2️⃣Resolved(fulfilled), and 
3️⃣Rejected. 
We use .then() for success and .catch() for error handling.”

<!-- Real-life Example -->
Imagine you take an exam.

If you pass → You will receive a certificate (resolve).

If you fail → You will not receive a certificate (reject).

The result will come in the future — not immediately
<!-- 
fetch(url)
.then(rev => rev.json())
.then(data => console.log(data))
.catch(err => console.log(err)) -->

<!-- 🔥 9. async/await kya hai? -->
async/await is a cleaner way to handle promises.
<!-- 
async function getData(){
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch(err){
    console.log(err);
  }
} -->


<!-- 🔥 10. What is the DOM? -->
DOM (Document Object Model) is a programming interface that allows JavaScript to access, modify, add, or delete HTML elements and change the content of a web page.

<!-- 🌍 Real-Life Example 2: House Example -->
Imagine your house is an HTML page.
Rooms = Elements
Furniture = Content
You = JavaScript

You can:
Replace the sofa
Add a new table
Remove a chair
👉 This is similar to DOM manipulation.

<h1 id="title">Hello</h1>
<button onclick="changeText()">Click Me</button>

<!-- function changeText() {
  document.getElementById("title").innerText = "Welcome!";
} -->


<!-- 🔥 11. What is Event Bubbling? -->
Event bubbles from child to parent.

<!-- 🔥 12. What is Debouncing? -->
Debouncing is a technique that delays the execution of a function until a certain time has passed since the last event trigger.
Hindi:-
Debouncing ek technique hai jisme function tab execute hota hai jab event trigger hona band ho jata hai ek fixed delay ke baad.

🔥 Used in search input.
<!-- 
function debounce(fn, delay){
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  }
} -->
Bar-bar call hone se function ko rokta hai.


<!-- 🔥 13. What is Throttling? -->
Throttling is a technique that limits a function to run only once within a specified time interval.

Hindi:
Throttling ek technique hai jo ensure karti hai ki function ek fixed time interval me sirf ek baar hi chale.

Har time interval me ek hi baar run karega.

<!-- 🌍 Real-Life Example -->
🚗 Toll Plaza Example
Imagine there is a toll gate.
100 cars arrive at the same time 🚗🚗🚗
But the gate allows only 1 car to pass every 5 seconds

👉 No matter how many cars arrive,
only one car is allowed to pass within each fixed time interval.

This is exactly how throttling works.

<!-- 🔥 14. What is the difference between null and undefined? -->
* Intentional empty value
* Variable declared but not assigned a value.

<!-- 🔥 15. What is localStorage? -->
localStorage is a Web Storage API provided by the browser that allows developers to store key-value pairs in the user's browser with no expiration time.

<!-- Real-Life Example -->
Imagine a website that saves:
🌙 Dark mode preference
🛒 Cart items
🔐 Login status

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
-------------------------------------------------------------------------------
<!-- 🔥 16. Explain Event Loop -->
JavaScript is single-threaded. The event loop allows it to handle asynchronous operations using the call stack, callback queue, and microtask queue.

Event loop checks:
Is call stack empty?
If yes → move callback from queue to stack.

🔥 Structure:
Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop
<!-- 
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End"); -->
Output:-
Start
End
Timeout
----------------------------------
<!-- 🔥 17. Difference Between call, apply, bind -->
Ye teen methods this ko control karte hain.
✅ 1️⃣ call():-
call() calls the function immediately and passes arguments one by one.

<!-- “An argument is the actual value that is passed to a function when it is called.” -->

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

_--------------------------------------------
<!-- 🔥 18. What is Prototypal Inheritance? -->
JavaScript uses prototype-based inheritance. Objects inherit properties from another object.
<!-- 
const person = {
  greet(){
    console.log("Hello");
  }
};

const student = object.create(person);
student.greet(); //Hello -->


<!-- 🔥 19. Shallow vs Deep Copy -->
?

<!-- 🔥 20. map, filter, reduce -->
* map():-
“map() creates a new array by applying a function to each element of the original array.”
👉 It transforms data.
<!-- Real-Life Example -->
Add GST to every product price
💻 Example
<!-- 
const number = [1, 2, 4];

const doubled = number.map(num => num * 2);

console.log(doubled);
// [2, 4, 6] -->

* filter():-
“filter() creates a new array with elements that satisfy a given condition.”
<!-- 
const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);
// [2, 4] -->

* reduce():-
“reduce() reduces an array to a single value by applying a function to each element.”
👉 It combines data.
<!-- 🌍 Real-Life Example -->
Calculate total bill amount
<!-- 
const number = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); //10 -->

------------------------------------
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


<!-- 🔥 22. What is Lexical Scope? -->
Lexical scope means a function can access variables from its parent scope.
<!-- 
function outer(){
  let name = "Kajalti";
  function inner(){
    console.log(name);
  }
  inner();
} -->

<!-- 23 Callback Functions -->
A callback function is a function that is passed as an argument to another function and is executed after a specific task is completed.”

<!-- Real-Life Example -->
Imagine you order food online.
You place the order 🍕
After delivery, the delivery boy calls you 📞
That call is like a callback —
it happens after the task (delivery) is completed.

<!-- 
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Kajal", sayBye); -->
Hello Kajal
Goodbye!

👉 Here, sayBye is the callback function.
👉 It runs after greet() finishes its task.

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
============================================================================================
<!-- 🔥 9. What is CORS? -->CORS (Cross-Origin Resource Sharing) is a security mechanism that restricts requests from different domains.
?

<!-- ✅ 4️⃣ ES6 Features (Spread, Destructuring, Rest) -->

✅ Spread Operator (...):-

Spread operator (...) expands elements of an array or object.

Hindi:
Array ya object ko copy ya merge karne ke liye use hota hai.
<!-- 
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); -->

✅ Destructuring:-
Extracts values from arrays or objects into variables.

Hindi:
Array ya object se direct values nikalne ka easy tareeka
<!-- 
const user = { name: "Kajalti", age: 22 };
const { name, age } = user;
console.log(name, age); -->

✅ Rest Operator (...):-
Rest operator (...) collects multiple elements into a single array.
<!-- 
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); -->
-------------------------------------------------------------------------------
🔥 5. Modules:-
Modules allow splitting code into separate reusable files using export and import.

📁 math.js
<!-- 
export function add(a, b) {
  return a + b;
} -->

📁 main.js
<!-- 
import { add } from "./math.js";

console.log(add(2, 3)); -->

🔥 6. Memory Leaks (Basics):-
A memory leak when unused memory is not released, causing performance issues.

Wrong (Event listener remove nahi kiya):
<!-- 
function addListener() {
  document.getElementById("btn").addEventListener("click", function () {
    console.log("Clicked");
  });
} -->

✅ Correct (Cleanup):
<!-- 
function handleClick() {
  console.log("Clicked");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);

// Cleanup
btn.removeEventListener("click", handleClick); -->

🔥 7. Performance Optimization:-
Performance optimization means improving the speed and efficiency of a web application.

<img src="image.jpg" loading="lazy" alt="example">

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

🔥 9. API Integration (Real Project Level):-
API integration is the process of fetching and sending data between frontend and backend using HTTP requests.
<!-- 
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error)); -->

 ==================================================================================================================!
 🎯 Level 2 – Strong Frontend Developer Level(job)

 <!-- ✅ 1. Execution Context:- -->
 Execution context is the environment where JavaScript code runs.
<!-- 
var x = 10;

function test() {
  var y = 20;
  console.log(x + y);
}
test(); -->


 <!-- What happens during execution context creation phase? -->
You can say:
Execution context is created in two phases:
1. Memory Creation Phase
2. Execution Phase

1️⃣ Creation Phase
Memory is allocated for variables and functions
Variables are initialized as undefined
Functions are stored completely

2️⃣ Execution Phase
Code runs line by line

<!-- ✅ 2. Temporal Dead Zone (TDZ) -->
DZ is the time between variable declaration and initialization where let/const cannot be accessed.
<!-- 
console.log(a); // ❌ Error
let a = 5; -->


<!-- ✅ 3. Prototype Chain (Deep): -->
The prototype chain is the mechanism by which JavaScript objects inherit properties from other objects.

If a property is not found in an object, JS looks up the prototype chain.
<!-- 
const obj = {};
console.log(obj.toString()); // from Object prototype -->

<!-- ✅ 4. Garbage Collection:- -->
JavaScript automatically removes unused memory (mark and sweep algorithm).


<!-- ✅ 5. Memory Optimization -->
Memory optimization means writing code that avoids unnecessary memory usage.

Avoid global variables
Remove unused event listeners
Clear intervals
Use weak references
<!-- 
let interval = setInterval(() => {
  console.log("Running");
}, 1000);

clearInterval(interval); -->