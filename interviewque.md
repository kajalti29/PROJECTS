<!-- 🔥 1. What is JavaScript? -->
JavaScript is a high-level, interpreted programming language used to add interactivity and dynamic behavior to web pages.
It run in the browser and on the server(node.js).
It allows us to handle events, manipulate the DOM, validate forms, and fetch data from APIs.
<!-- For example: -->
When you click a button and a popup appears.

<!-- 🌍 Uses of JavaScript -->
✅ Web Development (Frontend)
✅ Backend (Node.js)
✅ Mobile Apps
✅ Games
✅ APIs
✅ Real-time chat apps

<!-- 3️⃣ How JavaScript Works in Browser -->
Simple Flow:

HTML → CSS → JavaScript Engine → Output show

<!-- why called “JavaScript scripting language"  -->
“JavaScript is called a scripting language because it runs directly in the browser and adds dynamic behavior like button clicks, form validation, and live updates.”

<!-- Features -->
* Interpreted Language
* Dynamically Typed
* Platform Independent
* Event-Driven 
* Client-side & server-side scripting
* Runs in browser & Node.js
* First-Class Functions
* Object-Oriented

<!-- What is variable ? -->
A variable is a container used to store data(value) in a program.

naming rules:-
1] A variable name can start only with - a letter, underscore_ and dollar($).
2] No number at start.
3] No space.
4] Reserved keywords can not be used.
5] Variable name are case-sensitive.

<!-- JavaScript has three ways to declare variables: -->

<!-- 🔥 2. Difference between var, let, and const? -->
 Var:- 
 var is a function-scoped variable declaration keyword introduced in ES5. It allows both re-declaration and reassignment. It is hoisted and initialized with undefined, which may lead to unexpected behavior.”

🌍 Real-Life Example:
Think of var like a company notice board.

If someone changes the notice, everyone in the company sees the updated message.
<!-- 
var message = "Meeting at 10 AM";

if (true) {
  var message = "Meeting Cancelled";
}

console.log(message); // Meeting Cancelled -->

Let:-
“let is a block-scoped variable introduced in ES6. It allows reassignment but does not allow re-declaration in the same scope. It is hoisted but remains in the Temporal Dead Zone until initialized.”

<!-- Real-Life Example: -->
Think of let like a classroom whiteboard.

Changes inside one classroom do not affect others.
<!-- 
let topic = "Math";

if (true) {
  let topic = "Science";
  console.log(topic); // Science
}

console.log(topic); // Math -->
👉 Outside value stays the same.

Const:- 
“const is a block-scoped variable introduced in ES6. It does not allow reassignment and re-declaration in the same scope. It is hoisted but remains in the Temporal Dead Zone until initialized

<!-- Real-Life Example: -->
Think of const like a government law.
Once created, it cannot be changed.
<!-- 
const country = "India";

country = "USA"; // Error -->
👉 You cannot change it.
--------------------------------------------------------------------------------
<!-- 🔹 What is Scope? -->
Scope defines where a variable can be accessed in a program.

<!-- Types of Scope -->
1️⃣ Global Scope
2️⃣ Function Scope
3️⃣ Block Scope

Global → everywhere
Local → inside function
Block → inside { }

<!-- 1️⃣ Global Scope -->
A variable declared outside all functions is called a global variable, and it can be accessed from anywhere in the program.
Example:_
Jaise sun (suraj) — sab jagah roshni deta hai, har jagah visible hota hai.
<!-- 
let x = 10;   // global variable

function show() {
  console.log(x);
}

show();      // 10
console.log(x); // 10 -->

<!--2️⃣Local Scope (Function Scope) -->
A variable declared inside a function is accessible only within that function.
Example:-
1. “The ATM PIN is required only for ATM transactions.”
ATM ka PIN → sirf ATM transaction ke time

2. “Like your bedroom — it is used only inside your room, not outside.”
<!-- 
function test() {
  var a = 5;
  let b = 6;
  const c = 7;
  console.log(a, b, c);
}

test();

console.log(a); // ❌ error
console.log(b); // ❌ error
console.log(c); // ❌ error -->

<!-- 3️⃣ Block Scope -->
A variable declared with let or const inside a block { } is accessible only within that block.
Example:-
“The exam hall question paper is used only inside the exam hall.”
Exam hall ka question paper → sirf exam hall ke andar
<!-- 
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(x); // ❌ error
console.log(y); // ❌ error
console.log(z); // ✅ 30 -->

👉 var block scope follow nahi karta 😱
-------------------------------------------------------------
* DataTypes
* Conditon Statements
* Loops 
------------------------------------------------------------------------------------
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
“For example, if I want to add two numbers multiple times, I can create a function.”
<!-- 
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); -->

“Here, ‘add’ is a function that takes two parameters and returns their sum. When I call add(2, 3), it returns 5.”

<!-- * Functions Basics:- -->
Syntax
<!--
 function functionName() {
  // code
} 
-->

<!-- "Why do we use functions in JavaScript?" -->
Functions are used to make code reusable, organized, and modular.
They help avoid repetition, improve readability, and make debugging easier.
Functions also allow us to break large programs into smaller manageable pieces.

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

<!-- Arrow Functions -->
An Arrow Function is a shorter and modern way to write a function in JavaScript using the => syntax and does not have its own this.

<!-- Real-World Example --> 
A child using their parent’s ID.
The child does not have their own identity card,
so they use the parent’s ID.
Similarly, an arrow function uses the parent’s this.

Simple Example:-
<!-- 
const greet = () => {
    console.log("Hello");
}; -->

📌 Arrow Function with Parameters:-
<!--
 const add = (a, b) => {
    return a + b;
}; -->


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

<!-- 🔥 What is TDZ? -->
Temporal Dead Zone is the time between entering a block and the variable declaration where a let or const variable cannot be accessed.

<!-- 🌍 Real-world Example -->
Imagine you opened a bank account.

The account has been created ✅
But until you deposit money into it,
you cannot withdraw any money ❌

👉 The account exists
👉 But you cannot use it yet

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
Callbacks are important because JavaScript is single-threaded and asynchronous. Callbacks allow us to execute code after an operation like API calls, timers, or user events is completed.

Event handling
API calls
setTimeout / setInterval
Asynchronous programming

<!-- ✅ 3️⃣ Higher Order Function (HOF) -->
A Higher Order Function is a function that either:
Takes another function as an argument, or
Returns another function

<!-- Example:- -->
A washing machine:
You choose different modes (Quick Wash, Heavy Wash).
The machine’s behavior changes based on the selected mode (function).
The machine like a higher-order function.


"Main tumhe ek task dunga, aur tum us task ko complete karne ka method choose kar sakti ho."
Yaha:
Teacher = Higher Order Function

Method (Math solve karna, Diagram banana, etc.) = Callback Function
Example:-1
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
<!-- Real-world Use -->
Used in:
Data privacy
Counters
Event handlers
React hooks

<!-- 🔹 Why do we use Closure? -->
We use closure protect data inside a function.They are widely used in callbacks, event handlers, and functional programming.


<!-- 🔥 What is this in JavaScript? -->
👉 this refers to the object that is calling the function.

<!-- 
let user = {
  name: "Kajal",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Kajal -->

console.log(this);


<!-- 🔹 1️⃣ Parameter -->
A parameter is a variable written inside the function parentheses when we define a function.
<!-- 
function greet(name) {   // name is a parameter
  console.log("Hello " + name);
} -->

<!-- 🔹 2️⃣ Argument -->
An argument is the actual value passed to a function when calling it.

<!-- greet("Kajal"); -->
👉 Yaha "Kajal" argument hai.

<!-- 🔹 3️⃣ Return Statement -->
The return statement sends a value back from a function.
<!-- 
function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);
console.log(result);   // 5 -->



<!-- IIFE (Immediately Invoked Function Expression) -->
👉 IIFE is a function that runs immediately after it is defined.

🔹 Basic Syntax
<!-- ✅ Normal IIFE -->
<!-- 
(function () {
  console.log("IIFE executed");
})(); -->

(function(){}) → Function expression
() → Immediately call

<!-- ✅ Arrow Function IIFE -->
(() => {
  console.log("Arrow IIFE executed");
})();

👉 Global scope bachane ke liye
IIFE is used to create a private scope

IMP:-
<!-- 🔥 1️⃣ Difference Between normal Function and Arrow Function. -->

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

<!-- Why do we use functions in real applications? -->
Functions are used to organize code, avoid repetition, and make applications easier to maintain and reuse.

<!--Why not use arrow functions everywhere? -->

<!--✅ Arrow Function kab use karna best hota hai? -->
✔ Callback functions
✔ map, filter, reduce
✔ Short logic wale functions
✔ setTimeout, setInterval

<!-- // How do functions help in frontend development? -->
Functions help in handling user events, validating forms, and interacting with APIs.
=================================================================================
<!-- * Arrays:- -->
An array is a collection of multiple values stored in a single variable.
It is a Mutable and Index starts from 0.
<!-- let numbers = [10, 20, 30, 40]; -->

numbers[0] → 10 
numbers.length → 4
Index starts from 0

Mutable -->
<!-- Array Methods -->

🔹 1. push() – Add element at end
<!-- 
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);  //[1, 2, 3, 4] -->

🔹 2. pop() – Remove element from end
<!-- 
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
 -->

🔹 3. unshift() – Add element at start
<!-- 
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
 -->

🔹 4. shift() – Remove element from start
<!-- 
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3] -->

🔹 5. length – Array size
<!-- 
let arr = [10, 20, 30];
console.log(arr.length); // 3
 -->

🔹 6. concat() – Merges two or more array(Join arrays)

<!-- let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);      //[1, 2, 3, 4] -->


🔹 9. indexOf() – Find index
<!-- 
let arr = [10, 20, 30];
console.log(arr.indexOf(20)); // 1
 -->

 🔹 10. includes() – Check value exists or not.
 Ye value true or false me deta hai.
<!-- 
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true -->

========================================================================💛Is Very important Array methods==================================================================================
🔹 7.slice(start, end) = start se uthao, end se pehle tak
slice() returns a new array without changing the original array.
<!-- 
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4);
console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] -->

Index:   0       1        2        3
Value: ["Apple","Banana","Mango","Orange"]
// output:- Banana, Mango.

🔹 8. splice() – 
splice() changes the original array by adding, removing, or replacing elements.
<!-- 
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 4] -->

11. map()
12. filter()
13. reduce() 🔥🔥
14. forEach()
 
<!-- 1️⃣ map() 🔥🔥 (MOST IMPORTANT) -->
map() Creates a new array by applying a function to each element of the array.
does not change original array.

Jaise factory machine 🏭
Raw items → process → new items
<!-- 
let arr = [1, 2, 3, 4];
let result = arr.map(num => num * 2);
console.log(result)    //[1, 2, 6, 8]-->


<!-- 2️⃣ filter() 🔥🔥 -->
“filter() creates a new array with elements that satisfy a given condition.”
<!-- 
let arr = [1, 2, 3, 4];
let even = arr.filter(num % 2 === 0);
console.log(even); //[2, 4] -->

Example:-
Jaise college entrance cutoff list 🎓
Sirf eligible students pass
<!-- 
let ages = [12, 18, 22, 15];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 22] -->


<!-- ✅ 3️⃣ reduce() 🔥🔥 (Most Important) -->
reduce() is an array method that reduces all elements of an array into a single value by applying a function on each element.
Example:-
Jaise shopping cart bill 🛒
Sab items ka total ek final amount
<!-- 
let arr = [100, 200, 300];
let total = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total)  //600 -->

<!-- 
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10 -->

Explanation:
acc → accumulator
curr → current value
0 → initial value

<!-- 4️⃣ forEach() -->
forEach() executes a function on each element but does not return a new array.

Example:-
Jaise attendance check 📋
Sirf dekhna hai, result store nahi karna
<!-- 
let arr = [1, 2, 3];

arr.forEach(num => {
  console.log(num);
}); -->

🔹 15. sort() – Sort array
sort() sorts the elements of an array.
sort() array ke elements ko sahi order me set karta hai.
<!-- 
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4] -->

<!-- 
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits);            
                      //["Apple", "Banana", "Mango"]
 -->

🔹 16. reverse() – Reverse array
<!-- 
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
 -->

🔹 17. join() – Convert array to string
<!-- 
let arr = ["Hello", "World"];
console.log(arr.join(" ")); // Hello World
 -->

🔹 18. find() – Find first match
<!-- 
let arr = [10, 20, 30];
let result = arr.find(num => num > 15);
console.log(result); // 20 -->

🔹 19. findIndex() – Index of first match
<!-- 
let arr = [10, 20, 30];
console.log(arr.findIndex(num => num > 15)); // 1 -->

🔹 20. some() – At least one true?
Returns true if at least one element matches.
<!-- 
let numbers = [1, 2, 3];

console.log(numbers.some(num => num > 2)); 
// true -->

🔹 21. every() – All true?
Returns true if all elements match.
<!-- 
let numbers = [1, 2, 3];

console.log(numbers.every(num => num > 0));
// true -->
====================================================
=========================================






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