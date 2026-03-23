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
<!-- 🔥 1. What is JavaScript? -->
JavaScript is a high-level, interpreted programming language used to add interactive and dynamic behavior to web pages.
It run in the browser and also on the server(node.js).It allows us to handle events, manipulate the DOM, validate forms, and fetch data from APIs.
<!-- For example: -->
When you click a button and a popup appears.

HTML:-
<button id="btn">Click Me</button>

JS:-
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  alert("Button Clicked");
}); 

--------------------------------------------------------------------------

handle events → user actions (click, hover, keypress) को handle करना

manipulate the DOM → JavaScript से webpage के elements (text, style, content) बदलना

<!-- document.getElementById("title").innerHTML = "Hello Kajalti"; -->

validate forms → form में डाला गया data सही है या नहीं check करना
<!-- 
if(name === ""){
 alert("Please enter your name");
} -->

fetch data from APIs → server या API से data लेकर webpage पर दिखाना
<!-- 
fetch("https://api.example.com/users")
.then(response => response.json())
.then(data => console.log(data));

 -->
-------------------------------------------------------------------------------------------------------

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

<!-- 2. Is JavaScript single-threaded? -->
Yes, JavaScript is single-threaded because it has only one call stack and can execute one task at a time.

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

Task 1
Task 2 
Task 3
<!-- What is Call Stack in JavaScript? -->
The Call Stack is a data structure that keeps track of function execution in JavaScript using a Last In, First Out (LIFO) principle.
<!-- 
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first(); -->
1️⃣ first() call hua → Call Stack me push hua
2️⃣ first() ke andar second() call hua → Stack me push hua
3️⃣ second() ke andar console.log("Hello") execute hua
4️⃣ "Hello" print ho gaya
5️⃣ second() complete → stack se pop
6️⃣ first() complete → stack se pop
------------------------------------------------------------------------
<!-- What is variable ? -->
A variable is a container used to store data(value) in a program.

<!-- Real-life example -->
Like a container or box where we store things.
<!-- 
let name = "Rahul";
const age = 22;
var city = "Mumbai";

console.log(name, age, city); -->

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
"Like the sun — it spreads light everywhere and is visible in all places." ☀️

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
<!-- 
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
console.log(x); // ❌ error
console.log(y); // ❌ error
console.log(z); // ✅ 30 -->
-------------------------------------------------------------
* DataTypes
Just like different types of files in computer.
* Conditon Statements
* Loops 
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
Functions are used to reuse code and perform specific tasks. They make the code easier to read and avoid repeating the same code again and remove errors.

<!-- 🔹 1️⃣ Parameter -->
Parameters are inputs passed to function.
<!-- function add(a,b) -->

<!-- 🔹 2️⃣ Argument -->
An argument is the actual value passed to a function when calling it.
<!-- greet("Kajal"); -->
👉 Yaha "Kajal" argument hai.

<!-- 🔹 3️⃣ Return Statement -->
return Statement sends the result back from function.
<!-- 
function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);
console.log(result);   // 5 -->

<!-- 21. What is anonymous function? -->
Function without name.

<!-- 22. What is recursion? -->
Function calling itself.
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
----------------------------------------------------- 
🔥 1️⃣ Difference Between normal Function and Arrow Function. -->
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
----------------------------------------------------
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
"TDZ is like a booked movie seat — it exists, but you can't use it until the movie starts."
<!-- 
console.log(a); // ❌ ReferenceError
let a = 10; -->
-------------------------------------------------
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
Global variable change karna
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
}

increase();
console.log(count); // 1
 -->
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
 
<!-- 1️⃣ map()(MOST IMPORTANT) -->
map() Creates a new array by applying a function to each element of the array.
does not change original array.

Jaise factory machine 🏭
Raw items → process → new items
<!-- 
let arr = [1, 2, 3, 4];
let result = arr.map(num => num * 2);
console.log(result)    //[1, 2, 6, 8]-->

<!-- 2️⃣ filter()-->
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

<!--3️⃣ reduce() -->
reduce() is used to reduce an array to a single value (like sum, total, or result).

array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

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
forEach() is used to loop through each element of an array.
<!-- 
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
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

### 1️⃣9️⃣ What is array destructuring?
Array destructuring means taking values from an array and storing them in variables.

Array destructuring ka matlab hai array ke values ko directly variables me nikal lena, bina index use kiye.
<!-- 
let arr = [10, 20, 30];
let [a, b, c] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30 -->
====================================================
=========================================
🟣 1️⃣ Objects in JavaScript
"Object is a collection of key-value pairs used to store structured data."
<!-- Real-life example -->
Like a student ID card with different details.
<!-- 
let student = {
  name: "Kajal",
  age: 23,
  city: "Indore"
};
 -->
Here:
name, age, city → keys
"Kajal", 21, "Bhopal" → values

<!-- 🔥 2️⃣ Object Destructuring (Very Common) -->
Object ke andar ki values ko directly variables me nikalna.
<!-- 
let student = {
  name: "Kajal",
  age: 23,
  city: "Indore"
};

let { name, age } = student;

console.log(name); // Kajal
console.log(age);  // 23
 -->

<!-- Accessing Object Properties -->
JavaScript me object ki properties (values) ko access karne ke 2 simple tareeke hote hain 👇
<!-- 
let student = {
    name: "Rahul",
    age: 20,
    city: "Indore"
}; -->

1️⃣ Dot Notation (Most Common)
<!-- 
console.log(student.name);   // Rahul
console.log(student.age);    // 20 -->

2️⃣ Bracket Notation
<!-- 
console.log(student["name"]); // Rahul
console.log(student["age"]);  // 20
 -->

<!-- Q: Difference between dot and bracket notation? -->
Dot notation is used when key is fixed.
Bracket notation is used when key is dynamic.


<!-- 🔥 4️⃣ Loop Through Object -->
✔ for...in loop
<!-- 
for (let key in person) {
  console.log(key, person[key]);
} -->

<!-- * Object Methods -->
When a function is inside an object, it is called a method.
Object ke andar function ho to use method kehte hain.
<!-- 
let user = {
  name: "Kajal",
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(user.greet()); -->

🔥 5️⃣ Object Iteration (Important)

<!-- 
const person = {
  name: "Kajal",
  age: 23
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); -->
✅ Output
["name", "age"]
["Kajal", 23]
[["name", "Kajal"], ["age", 23]]


<!-- ❓ Difference between Shallow and Deep Copy? -->
A shallow copy copies only the first level of an object.
and shares nested references.

<!-- const obj1 = {
  name: "Kajal",
  address: {
    city: "Delhi"
  }
};

const obj2 = { ...obj1 }; // Shallow copy

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Mumbai ❗ -->


A deep copy copies all levels of the object, including nested objects.
It creates completely independent copies.
<!-- 
const obj1 = {
  name: "Kajal",
  address: {
    city: "Delhi"
  }
};

const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Delhi ✅
// Delhi ✅ -->y
-------------------------------------------------------------------
6️⃣ JSON (parse, stringify) :-
🔹 What is JSON?
JSON = JavaScript Object Notation
is a data format used to send and receive data.

JSON.stringify() converts a JavaScript object into a JSON string, while JSON.parse() converts a JSON string back into a JavaScript object.

🔹 JSON.stringify():-
👉 Converts a JavaScript object → JSON string
stringify → object ko string me convert karta hai

<!-- 
const user = {
  name: "Kajal",
  age: 22
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
// {"name":"Kajal","age":22} -->


🔹 JSON.parse():-
👉 Converts a JSON string → JavaScript object
parse → string ko object me convert karta hai

<!-- 
const jsonData = '{"name":"Kajal","age":22}';

const user = JSON.parse(jsonData);

console.log(user.name); // Kajal -->


<!-- 5️⃣ What is an object method? -->
English: Function inside an object
<!-- 1️⃣7️⃣ Is object mutable? -->
✅ Yes, objects are mutable.

✅ 1️⃣ Do you know objects convert to arrays?
Yes. We can convert object to array using:
Object.keys()
Object.values()
Object.entries()
<!-- 
let user = { name: "Kajal", age: 22 };
console.log(Object.keys(user));    
// ["name", "age"]
console.log(Object.values(user));  
// ["Kajal", 22]
console.log(Object.entries(user)); 
// [["name","Kajal"], ["age",22]] -->

✅ 2️⃣ Do you understand destructuring?
Yes. Destructuring allows extracting properties from objects into variables.
<!-- 
let user = { name: "Kajal", age: 22 };
let { name, age } = user;
console.log(name); // Kajal
 -->
✅ 3️⃣ Do you know arrays are objects?
Yes. In JavaScript, arrays are special type of objects.
<!-- 
let arr = [10, 20, 30];
console.log(typeof arr); // object -->

Because:
Arrays store indexed key-value pairs
Keys are numbers (0,1,2…)
Example internal structure:

{
  0: 10,
  1: 20,
  2: 30
}
================================================================================================================
✅ What is a String?
A string is a sequence of characters used to represent text.
Strings are immutable

<!-- let name = "Kajalti"; -->

<!-- 🟤 2️⃣ String Methods :- -->
🔹 1. length :- Find length of string
<!-- 
let str = "Hello";
console.log(str.length); // 5
 -->
🔹 2. toUpperCase() :- 
<!-- 
let str = "hello";
console.log(str.toUpperCase()); // HELLO -->

🔹 3. toLowerCase():-
<!-- 
let str = "HELLO";
console.log(str.toLowerCase()); // hello -->

🔹 4. trim():- 
<!-- 
let str = "  hi  ";
console.log(str.trim()); // "hi" -->

🔹 5. includes():-
<!-- 
let str = "I love JS";
console.log(str.includes("JS")); // true -->

🔹 6. slice():-
👉 String ka part nikalta hai
<!-- 
let str = "JavaScript";
console.log(str.slice(0, 4)); // Java -->

🔹 7. substring():-
👉 slice() jaisa hi hota hai
<!-- 
let str = "HelloWorld";
console.log(str.substring(0, 5)); // Hello -->

🔹 8. replace():-
👉 Word ko change karta hai
<!-- 
let str = "I like tea";
console.log(str.replace("tea", "coffee"));
// I like coffee
 -->

🔹 9. split():- 
👉 String ko array me tod deta hai
<!-- 
let str = "a,b,c";
console.log(str.split(",")); // ["a","b","c"] -->

🔹 10. charAt():- 
👉 Given index ka character deta hai

<!-- 
let str = "Hello";
console.log(str.charAt(1)); // e -->

🔹 11. indexOf():- 
👉 Word ka index batata hai
<!-- 
let str = "Hello JS";
console.log(str.indexOf("JS")); // 6 -->

🔹 12. concat():-
👉 Strings ko jodta hai
<!-- 
let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // Hello World -->

### 1️⃣ Reverse a String
```js
let str = "hello";
let rev = str.split("").reverse().join("");
console.log(rev); // olleh


🔟 Check Palindrome
js
let str = "madam";
let rev = str.split("").reverse().join("");

console.log(str === rev); // true
```
=================================================================================
8. Events:-
Events are actions performed by users.

Examples:
click
hover
submit 
<!-- Real-life example -->
Pressing a button in a mobile app.
<!-- 
button.addEventListener("click", function(){
 alert("Button clicked");
}); -->

======================================================================================================================================================================================================================================================================
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
We handle promises using .then(), .catch(), and .finally().d

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

<!-- 🔥 9. async/await kya hai? -->
async/await is a syntax used to handle asynchronous operations (Promises) in a cleaner way.

async → makes a function return a Promise
await → pauses the function until the Promise resolves
<!-- 
async function getUsers(){

  let response = await fetch("https://jsonplaceholder.typicode.com/users")

  let data = await response.json()

  console.log(data)

}

getUsers() -->

---------------------------------------------------------
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
this refers to the object that is currently executing the function.

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
--------------------------------------------------------------------------------
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
Debouncing is a technique that delays the execution of a function until a specified time has passed after the last event trigger.

Function runs after user stops action.

<!-- Debouncing me function tab run hota hai jab user action stop kare. -->
🎯 Real-Life Example
A real-life example of debouncing is a search bar.
When a user types continuously, the search function does not run on every keystroke.
Instead, it runs only after the user stops typing for a short delay.
<!-- 
function debounce(fn, delay){
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  }
} -->
Real World Example
Google Search suggestions.

<!-- 🔥 13. What is Throttling? -->
Throttling is a technique that limits a function to run only once within a specified time interval.

Function runs once in a fixed time interval.

<!-- 🌍 Real-Life Example -->
🚗 Toll Plaza Example
Imagine there is a toll gate.
100 cars arrive at the same time 🚗🚗🚗
But the gate allows only 1 car to pass every 5 seconds
👉 No matter how many cars arrive,
only one car is allowed to pass within each fixed time interval.
This is exactly how throttling works.

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
