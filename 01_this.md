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

<!-- 🚀 Hoisting -->
<!-- 🔹 What is Hoisting? -->
Hoisting is a JavaScript behavior where variable and function declarations are moves to the top of their scope before execution.
Variables declared with var are initialized as undefined, while let and const remain in the temporal dead zone until initialized.

Imagine your name is already written on the attendance list before the class starts.

Even if the teacher calls your name first,
your name is already in the list.
👉 That means your name was prepared earlier.


<!-- var -->
console.log(a);
var a = 10;

<!-- let -->
console.log(b);
let b = 20;

let bhi hoist hota hai, but it stays in Temporal Dead Zone.
Isliye ReferenceError aata hai.

<!-- Function Hoisting -->
<!-- 
sayHello();

function sayHello() {
  console.log("Hello");
} -->

Function declaration fully hoist hoti hai, isliye ye work karta hai.

<!-- 🔥 What is TDZ? -->
TDZ (Temporal Dead Zone) is the time between variable hoisting and its initialization.
For let and const, variable exists in memory but cannot be accessed before declaration.

<!-- 🌍 Real-world Example -->
Think of let like:
Room is reserved (memory allocated)
But you cannot enter until official opening (initialization).

<!-- Lexical Environment -->
It is the environment where variables and functions are stored based on where the code is written (lexical scope).

<!-- function outer() {
  let city = "Mumbai";

  function inner() {
    console.log(city);
  }

  inner();
}

outer();
-->

🌍 Real-world Example
Think of scope like rooms in a house:
People inside room can access main hall
But main hall cannot access inside private room

<!-- 🔥 3️⃣ this Keyword (Global vs Object vs Arrow) -->

<!-- 🔥 4️⃣ Prototype & Prototypal Inheritance -->
JavaScript uses prototype-based inheritance, where objects inherit properties and methods from other objects.

<!-- 🌍 Real-world Example -->
Think of prototype like:
All students share same syllabus.
Instead of giving each student separate syllabus copy.

<!-- 🔥 5️⃣ Event Loop, Call Stack & Microtasks vs Macrotasks -->
<!-- 🔹 Event Loop -->
Event Loop is the system in JavaScript that checks if the call stack is empty and then runs pending tasks from the queue.

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

<!-- 🌍 Real-world Example -->
Stack of plates 🍽️
Last plate placed → first removed.

<!-- 🔹 Microtasks vs Macrotasks -->

<!-- 🔥 2️⃣ Execution Context -->
<!-- 🔹 What is Execution Context? -->
“Execution Context is an environment where JavaScript code is executed.”
Hindi:-
Execution Context ek environment hota hai jahan JavaScript code execute hota hai.

-----------------------------------------------------------------------------------
<!-- 🔄 2️⃣ Array Methods (MOST IMPORTANT) -->
map()
filter()
reduce() 🔥🔥
forEach()
find(), includes(), sort()

<!-- 1️⃣ map() 🔥🔥 (MOST IMPORTANT) -->
Creates a new array by applying a function to each element of the array.
does not change original array.

Jaise factory machine 🏭
Raw items → process → new items
<!-- 
let arr = [1, 2, 3, 4];
let result = arr.map(num => num * 2);
console.log(result)    //[1, 2, 6, 8]-->


<!-- 2️⃣ filter() 🔥🔥 -->
Check condition and return only matching elements.
Hindi:-
👉 Condition check karta hai
👉 Sirf matching elements return karta hai.
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
Reduces an array to a single value by accumulating results.
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

<!-- 5️⃣ find() -->
Returns the first element that matches a condition.
<!-- 
let nums = [5, 12, 8, 130];

let result = nums.find(n => n > 10);

console.log(result); // 12 -->

<!-- “Kya ye problem for loop ke bina solve ho sakti hai?” -->
Yes we can solve it without a for loop by using  other looping techniques like while, map, reduce, etc., depending on the problem.

<!-- Example 1: Sum of Array -->
✅ Using for loop
<!-- 
let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
} -->

Without for loop (Using reduce)
<!-- 
let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); -->

👉 Same result, no for loop.
<!-- Example 2: Print 1 to 5 -->
Without for loop (Using while)
<!-- 
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
} -->

🔥 1️⃣ Shopping Cart Total Price:-
<!-- 
let cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1000, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

let total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);

console.log("Total Bill:", total); -->

----------------------------------------------------------------------------------------------------------------------
🧩 3️⃣ Functions – Advance Level
<!-- ✅ 1️⃣ Arrow Function -->
Arrow function is a shorter way to write a function in JavaScript.
It was introduced in ES6.
It does not have its own this.
<!-- 
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b; -->

✅ 2️⃣ Callback Function:-
A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
<!-- 
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Kajalti", sayBye); -->

👉 sayBye is callback function.

<!-- Why Callbacks Are Important? -->
Used in:
Event handling
API calls
setTimeout / setInterval
Asynchronous programming

<!-- ✅ 3️⃣ Higher Order Function (HOF) -->
A higher order function is a function that takes another function as an argument or returns a function.
Hindi:-
Higher Order Function wo function hota hai jo ya to kisi dusre function ko argument me leta hai ya khud ek function return karta hai.
<!-- 
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add)); -->

👉 calculate is Higher Order Function.

<!-- ⚡ Important: -->
map(), filter(), reduce() are also higher order functions



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
Predictable
No side effects
Better performance optimization

Side Effects Kya Hote Hain?
Side effect matlab:
Global variable change karna
DOM change karna
API call karna
Console log karna
File write karna

<!-- 🔹 2️⃣ Impure Function -->
“An impure function is a function that does not always return the same output for the same input, or it produces side effects such Global Variable Change, the DOM change, or making API calls.”
<!-- 
let count = 0;

function increase() {
  count++;
}

increase();
console.log(count); // 1
 -->

==================================================================================================

⏳ 4️⃣ Asynchronous JavaScript (VERY IMPORTANT):-
Frontend interview me ye skip nahi hota ❌
Topics:
* setTimeout
* setInterval
* Promise
* async / await

<!--Difference between synchronous and asynchronous?-->
🔹 1️⃣ Synchronous:-
Synchronous JavaScript executes code line by line, and each task must complete before the next one starts.
👉 Matlab ek kaam khatam hoga tabhi next kaam start hoga.

Real-world Example:-
Imagine you are standing in a bank queue. Until the person in front of you finishes their work, your turn will not come.
Hindi:-
Socho aap bank line me khade ho —
jab tak pehle person ka kaam khatam nahi hota, aapka number nahi aata. in english.

1. Example:-
<!-- 
console.log("Start");
console.log("Middle");
console.log("End"); 

Output:-Start
        Middle
        End
-->
2. Example:-
<!-- 
console.log("A");
console.log("B");
console.log("C");

O/P:- A
      B
      C -->
🔹 2️⃣ Asynchronous(Wait kare bina next chalega)

Asynchronous JavaScript allows certain tasks (like API calls, timers, file operations) to run in the background without blocking the execution of the rest of the code.
1. Example:-
<!-- 
console.log("start");

setTimeout(() => {
  console.log("Middle");
  }, 2000);

console.log("End")   
Output:-
Start
End
Middle
-->

2. Example:-
<!-- 
console.log("A");
setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C") 

Output:-A
        C
        B -->

Restaurant me order diya →
Jab tak food ready ho, aap baaki kaam kar sakte ho.
English:-
When you order food at a restaurant, the preparation happens in the background, and you are free to do other activities while waiting.

<!-- ❓1. Is JavaScript synchronous or asynchronous? -->
JavaScript is single-threaded and synchronous by default,
but it can handle asynchronous operations using:
Callbacks
Promises
Async/Await
Event Loop

<!-- ❓2. What is Blocking and Non-Blocking code? -->
Blocking: Stops execution until task finishes.
Non-Blocking: Doesn’t stop execution.

<!-- ❓4. What are different ways to handle async in JS? -->
Callback
Promise
Async/Await

imp:-
<!-- 👉 “Why is JavaScript called single-threaded but still asynchronous?” -->
JavaScript has a single call stack, but it uses Web APIs and the Event Loop to handle asynchronous tasks in the background without blocking the main thread.

<!-- 2️⃣ setTimeout() -->
setTimeout executes a function after a specified delay asynchronously.
<!-- 
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End"); -->

Start
End
Hello after 2 seconds

<!-- 3️⃣ setInterval() -->
setInterval runs a function repeatedly at fixed time intervals.
<!-- 
setInterval(() => {
  console.log("Hello every 1 second");
}, 1000); -->
Yeh har 1 second me chalega


Stop karne ke liye:
<!-- 
let id = setInterval(() => {
  console.log("Hello");
}, 1000);

clearInterval(id); -->

------------------------------------------------------------------------------------
<!-- 4️⃣ Promise 🔥 (VERY VERY IMPORTANT) -->
A Promise in JavaScript is an object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.
It has three states: 
1️⃣pending, 
2️⃣Resolved(fulfilled), and 
3️⃣Rejected. 
We use .then() for success and .catch() for error handling.”


