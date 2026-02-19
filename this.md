<!-- what is JavaScript(js) ? -->
JavaScript is a scripting language used to add interactivity and dynamic behavior to web pages.It allows us to handle events, manipulate the DOM, validate forms, and fetch data from APIs.
For example:
When you click a button and a popup appears

<!-- why called “JavaScript scripting language"  -->
“JavaScript is called a scripting language because it runs directly in the browser and adds dynamic behavior like button clicks, form validation, and live updates.”

<!-- Features -->
1️⃣ Interpreted Language
2️⃣ Dynamically Typed
9️⃣ Platform Independent
5️⃣ Event-Driven
3️⃣ First-Class Functions
8️⃣ Object-Oriented

👉 HTML = structure
👉 CSS = design
👉 JS = logic / brain 
----------------------------------------------
<!-- What is variable ? -->
A variable is a container used to store data(value) in a program.

naming rules:-
1] A variable name can start only with - a letter, underscore_ and dollar($).
2] No number at start.
3] No space.
4] Reserved keywords can not be used.
5] Variable name are case-sensitive.

<!-- JavaScript has three ways to declare variables: -->

* Let :- Variable cannot re-declared but can be update.
         It is a block scop(work only inside {})
         Hoisted but not initialized(Temporal dead zone means error aata hai)

         console.log(a); // Error (a is in TDZ)
         let a = 10;
         console.log(a); // ✔ 10

<!-- Example: let message = "Hello Word";
             message = "kajalti";
             console.log(message);
              -->

              Example (Basic)
let name = "Kajalti";
console.log(name);


<!-- Block Scope Example (IMPORTANT ⭐) -->
{
  let a = 5;
  console.log(a); // ✅ 5
}
console.log(a); // ❌ Error (a block ke bahar available nahi

----------------------------------------------------------------------------------------------------
* Const(fix value) :- Variable cannot be re-declared and cannot be update.

<!-- Example:-  const country = "India";
           console.log(country);   //India -->

<!-- const pi = 3.14; // pi kabhi change nahi hota -->
NOTE:_  Objects and arrays inside const can be modified:

const arr = [1, 2];
arr.push(3);   // ✅ Allowed
console.log(arr); // [1, 2, 3]


* var(old, avoid) :- Variable can be re-declared and updated.
<!-- 
var y = 10;
var y = 20;
console.log(y); -->
----------------------------------------------
DATA TYPES IN JAVASCRIPT:-
👉 A Data Type tells us what kind of value is stored in a variable.

JavaScript has two main categories of data types 👇
🔹 1. Primitive Data Types (Simple values) ->Immutable
🔹 2. Non-Primitive (Reference) Data Types -> Mutable

<!-- Primitive data types store single immutable values directly in memory, while non-primitive data types store collections of values by reference. -->

🔹 1.  Primitive Data Types (Simple values):-
Primitive data types are simple values that are stored directly in memory and are immutable (cannot be changed).

Types of Primitive
String
Number
Boolean
Undefined
Null
BigInt
Symbol
<!-- 
let name = "Kajal";   // String
let age = 22;         // Number
let isStudent = true; // Boolean
let x;                // Undefined
let y = null;         // Null -->

1.String:-
A string represent sequence of characters(text value)
<!-- 🌍 Real-world Example: -->
User name in Instagram → "Kajal"
<!-- 
let name = "Kajal";
console.log(typeof name); // string -->

2. Number:-
Represents numeric values (integer or decimal)
<!-- 🌍 Example: -->
Bank balance → 5000
<!-- 
let balance = 5000;
let price = 99.99;
console.log(typeof balance); // number
 -->

3. Boolean:-
Represents true or false value.
<!-- 🌍 Example: -->
User logged in? → true
<!-- 
let isLoggedIn = true;
let isAdult = false; -->

4️⃣ Undefined :-
A variable is declared but not assigned a value.
<!-- 
let x;
console.log(x); // undefined -->
📌 Means: value is not defined.

5️⃣ Null:-
Represents an empty value (intentionally).
<!-- let data = null; -->

6️⃣ BigInt:-
Used to store very large numbers.
<!-- let bigNumber = 12345678901234567890n; -->
📌 n at the end is required.

7️⃣ Symbol:-
Used to create unique values (advanced use).

<!-- let id = Symbol("id"); -->

<!-- Non-Primitive -->
📦 Types
Object
Array
Function
8️⃣ Object:-
A object is a collection of key-value pairs.
<!-- 
let student = {
  name: "Kajal",
  age: 20,
  course: "JavaScript"
}; 
console.log(student.name)
-->

9️⃣ Array:-
An array is a collection of multiple values store in a single variable.
<!-- let marks = [80, 90, 85]; -->

🔟 Function:-
A function is a block of code that parform the specific code and can be reused.
<!-- 
function add(a, b) {
  return a + b;
} -->
---------------------------------------------
<!-- IMPORTANTE -->
<!-- 1️⃣1️⃣ What is typeof operator? -->
It is used to check the data type of a variable.
typeof 10;      // "number"
typeof "hi";    // "string
-------------------------------------------------------------------------------------------------------------------------------------------------------------
<!-- 🔥 JavaScript Operators:- -->
operators are symbol used to peform operation on value & variable.
Example: + , - , * , / , == , ===.

1️⃣ Arithmetic Operators
Used for mathematical calculations.

| Operator | Kaam      |
| -------- | --------- |
| `+`      | Add       |
| `-`      | Minus     |
| `*`      | Multiply  |
| `/`      | Divide    |
| `%`      | Remainder |
| `**`     | Power     |
<!-- 
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
console.log(2 ** 3); // 8 -->

2️⃣ Assignment Operators:-
Used to assign values.
👉 Value assign / update karne ke liye.

| Operator | Meaning           |
| -------- | ----------------- |
| `=`      | Assign            |
| `+=`     | Add + assign      |
| `-=`     | Minus + assign    |
| `*=`     | Multiply + assign |
| `/=`     | Divide + assign   |
<!-- 
let x = 10;
x += 5;  // x = x + 5
console.log(x); // 15 -->

3️⃣ Comparison Operators:-
Used to compare two values and return boolean.
👉 Result hamesha true / false

| Operator | Meaning                |
| -------- | ---------------------- |
| `==`     | Sirf value check       |
| `===`    | Value + type check ✅   |
| `!=`     | Value not equal        |
| `!==`    | Value + type not equal |
| `>`      | Greater                |
| `<`      | Less                   |
| `>=`     | Greater or equal       |
| `<=`     | Less or equal          |
<!-- 
5 == "5"    // true
5 === "5"   // false -->

> (Greater than)
👉 left wali value badi hoti hai right wali se
Example: 10 > 5 (10 bada hai 5 se)

< (Less than)
👉 left wali value chhoti hoti hai right wali se
Example: 5 < 10 (5 chhota hai 10 se)


4️⃣ Logical Operators
Used with conditions.
👉 Multiple conditions ko join karne ke liye

Operator	Meaning
&&	AND (sab true hona chahiye)
`	
!	NOT (ulta kar deta hai)
<!-- 
let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age < 18 || age > 60); // false
console.log(!true); // false -->
Login, signup, eligibility check.

5️⃣ Unary Operators:-
Work on a single operand.
👉 Single value par kaam.
| Operator | Kaam            |
| -------- | --------------- |
| `++`     | 1 add           |
| `--`     | 1 minus         |
| `typeof` | Data type check |

<!-- 
let n = 5;
n++;
console.log(n); // 6

console.log(typeof 10); // number
console.log(typeof "Hi"); // string -->

6️⃣ Ternary Operator:-
Short form of if-else.

condition ? trueValue : falseValue
<!-- 
let age = 17;

let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg); -->

🧠 Use kaha?
UI show/hide, button enable/disable

--------------------------------------------------------------------------------------------
8️⃣ Type Conversion Operators
used to convert data type(Data type badalne ke liye)
<!-- Types:- -->
🔹 Implicit Conversion (Type Coercion)
🔹 Explicit Conversion

<!--Implicit Conversion (Type Coercion) -->
JavaScript automatically converts type.

console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3

<!-- 🔹 Explicit Conversion -->
Manually converting type.

Number("10")  // 10
String(10)    // "10"
Boolean(1)    // true

<!-- 🌍 Real-world Example: -->
User enters age in input field → always string
We convert it into number before calculation.

<!-- let age = Number(prompt("Enter age")); -->
-------------------------------------------
<!-- : What is difference between single, double, and backtick? -->
A: Single & double are same. Backtick allows template literals and multi-line strings.
<!-- Q: Is NaN a number? -->
A: Yes. typeof NaN is "number".
<!-- Difference b/w == and ===? -->
== → checks value only
=== → checks value + type
<!-- What is typeof null? -->
typeof null   // "object"
<!-- What is NaN? -->
NaN means "Not a Number".
But its type is number.
typeof NaN // number
<!--  Is NaN === NaN? -->
NaN === NaN // false
No. NaN is not equal to itself.
----------------------------------------------------------
<!-- 🔹 Falsy Values (Important – Yaad Karlo 🔥) -->
JavaScript me sirf ye 7 values falsy hoti hain:
* false
* 0
* -0
* 0n
* ""   (empty string)
* null
* undefined
* NaN
👉 Agar condition me inme se koi value hogi, to result false mana jayega.
<!-- 
if (0) {
    console.log("Hello");
} else {
    console.log("Falsy value");
} -->
Output: Falsy value

<!-- 🔹 Truthy Values -->
Falsy ke alawa sab values truthy hoti hain ✅
"hello"
1
-5
[]
{}
true
"0"
<!-- 
if ("hello") {
    console.log("Truthy value");
} -->
----------------------------------------------------------
# 🔥 Conditions in JavaScript (Full)
“A conditional statement is used to make decisions in a program. It executes code based on whether a condition is true or false.”

🔹 1. if statement:-
Executes a block if the condition is true.
<!-- 
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
} -->
🧠Agar condition true hogi tabhi code chalega**

🔹 2. if–else statement:-
Runs one block if condition is true, otherwise another block.
👉 Jab true / false dono cases handle karne ho
<!-- 
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
} -->

## 3️⃣ `if...else if...else`
Used to check multiple conditions.
<!-- 
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
} -->

## 4️⃣ Ternary Operator (Short Condition)
The ternary operator is a short way to write an if-else condition in a single line.

condition ? expression_if_true : expression_if_false;
<!-- 
let age = 17;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result); -->

<!--5️⃣ switch Statement -->
Used when comparing one value with many cases.
👉 Jab fixed options ho (menu, days, cases)
<!-- let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
-->
🌍 Real-World Example
Menu selection:
1 → Pizza
2 → Burger
3 → Pasta
Q1: Why break is important in switch?

<!-- Q1: Why break is important in switch? -->
Without break, execution continues to next cases (fall-through behavior).
<!-- Q2: When to prefer switch over if-else? -->
When checking one variable against multiple fixed values.
----------------------------------------------
<!-- Loops in JavaScript:- -->
<!-- // 🔹 What are loops? -->
Loops are used to repeat a block of code multiple times until a condition is false.

<!-- 🔹 1️⃣ for loop:- -->
for loop is used when the number of iterations is known.

for (initialization; condition; increment/decrement) {
  // code to rune
}

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// // Output: 1 2 3 4 5

<!-- 🔹 2️⃣ while loop:- -->
while loop is used when the number of iterations is unknown and depends on a condition.

while (condition) {
  // code to run
}

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// // Output: 1 2 3 4 5

<!-- 🔹 3️⃣ do...while loop:- -->
do-while loop executes at least once, even if the condition is false.
OR
Similar to while, but executes the code at least once.

do {
  // code to run
} while (condition);

<!-- 
let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
// Output: 6  (executes once even if condition false) -->
-------------------------------------------------------------
<!-- 🔹 6️⃣ Loop Control Statements:- -->
break → exit loop immediately.
<!-- 
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1 2 -->

continue → skip current iteration.

<!-- for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5 -->
---------------------------------------------
for...in is used to iterate over object keys, while for...of is used to iterate over iterable values like arrays and strings.

🔹 4️⃣ for...in loop:-
Used to iterate over object keys.
<!-- 
let user = {
  name: "Kajal",
  age: 22
};

for (let key in user) {
  console.log(key);
} -->

<!-- Can we use for...in for arrays? -->
Technically yes, but not recommended because it loops over keys (indexes).

🔹 5️⃣ for...of loop:-
Used to iterate over values of iterable objects (array, string).
<!-- 
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
} -->
O/P:-
10
20
30 
<!-- 1️⃣ Difference between for, while, do-while -->

for loop is used when the number of iterations is known.
while loop is used when the number of iterations is unknown and depends on a condition.
do-while loop executes at least once, even if the condition is false.

<!-- // for loop
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// while loop
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
// do-while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 3); -->

<!-- 🔥 2️⃣ What is fall-through in switch? -->
The execution continues to the next case even if it does not match.

<!-- let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
}
Output:
Monday
Tuesday
Because break is missing. -->
---------------------------------------------
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
-----------------------------------------------------------
* Why use functions?
* Code reuse
* Easy to read
* Easy to maintain
-----------------------------------------------------------
------------------------------------------------------------
<!-- 1️⃣ Function Declaration vs Function Expression -->
Function Declaration:
A function defined using the function keyword with a name.It is fully hoisted and can be called before definition

Function Declaration = A public rule
A government rule exists before you read it.
<!-- 
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Kajal")); -->
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
-----------------------------------------------------------------
Function Expression:
A function stored inside a variable. It is not fully hoisted, so it cannot be called before it is defined.
Function Expression is like a job appointment letter.
It becomes valid only after signing.
<!-- 
const add = function(a, b) {
  return a + b;
}; -->
----------------------------------------------------------------------------------
<!-- Arrow Functions -->
An Arrow Function is a shorter and modern way to write a function in JavaScript using the => syntax. It is a type of function expression and does not have its own this.

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

<!-- 🔹 What is Hoisting? -->
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the memory creation phase, before the code is executed.

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
--------------------------------------------------
<!-- Callback Functions -->
A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.

Callback function ek aisa function hota hai jo kisi dusre function ko argument ke roop me pass kiya jata hai aur baad me call hota hai.

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
Used in:
Event handling
API calls
setTimeout / setInterval
Asynchronous programming

<!-- ✅ 3️⃣ Higher Order Function (HOF) -->
A Higher Order Function is a function that either:
Takes another function as an argument, or
Returns a function as its result.

Hindi:-
Higher Order Function wo function hota hai jo ya to kisi dusre function ko argument me leta hai ya khud ek function return karta hai.
<!-- Example:- -->
A washing machine:
You choose different modes (Quick Wash, Heavy Wash).
The machine’s behavior changes based on the selected mode (function).
The machine like a higher-order function.
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


<!-- 🔹 1️⃣ Closure -->
A Closure is a function that remembers the variables from its outer function.
<!-- Real-world Use -->
Used in:
Data privacy
Counters
Event handlers
React hooks
<!-- 
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

let counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
 -->
<!-- Logic -->
outer() runs
count = 0
inner function returned
inner still remembers count
Every time we call → count increases

<!-- 🔹 Why do we use Closure? -->
We use closure to remember and protect data inside a function.They are widely used in callbacks, event handlers, and functional programming.

<!-- 🔹 2️⃣ this in JavaScript -->
this refers to the object that is calling the function.
<!-- 
let user = {
  name: "Kajal",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Kajal -->

this का मतलब है —
जो object function को call कर रहा है।

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

---------------------------------------------------------------------------------------------------------------------
<!-- IIFE (Immediately Invoked Function Expression) -->
IIFE is a function expression that is executed immediately after it is defined.

🔹 Basic Syntax
<!-- ✅ Normal IIFE -->
(function () {
  console.log("IIFE executed");
})();

<!-- ✅ Arrow Function IIFE -->
(() => {
  console.log("Arrow IIFE executed");
})();


“IIFE is used to execute code immediately and to avoid polluting the global scope by creating a private scope.”

// IIFE kyun use karte hain?
(function () {
  console.log("Runs immediately");
})();
<!-- WHY:-/ -->
👉 Global scope bachane ke liye
IIFE is used to create a private scope

<!-- Rest parameter collects multiple values into one array. -->
Rest → collect all chocolates into one box
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

<!-- Spread operator expands an array into individual values. -->
Spread → open box and spread chocolates individually.
let arr1 = [1, 2];
let arr2 = [...arr1, 3];

==============================================================================================================
<!-- Q: Difference between normal function and arrow function? -->
?
<!-- // Why do we use functions in real applications? -->
Functions are used to organize code, avoid repetition, and make applications easier to maintain and reuse.
<!-- 
// function calculateTotal(price, tax) {
//   return price + tax;
// } -->

<!-- // What is a callback function? Give a real example? -->
A callback function is a function that passed as an argument to another function and is executed after a task is completed.


setTimeout(() => {
  console.log("Order confirmed");
}, 2000);

<!-- // Where are arrow functions used in real projects? -->
Arrow functions are commonly used in event handlers, array methods, and callbacks because of their short syntax and lexical this.

// users.map(user => user.name);

<!-- // Why not use arrow functions everywhere? -->
✅ Answer:Arrow function chhota hota hai, lekin isme apna this, arguments aur constructor nahi hota. Isliye hum ise har jagah use nahi karte.

Arrow function ko tab avoid karna chahiye jab hume this, arguments, constructor ya hoisting ki zarurat ho.

<!-- // ✅ Arrow Function kab use karna best hota hai? -->
✔ Callback functions
✔ map, filter, reduce
✔ Short logic wale functions
✔ setTimeout, setInterval

<!-- // How do functions help in frontend development? -->
Functions help in handling user events, validating forms, and interacting with APIs.
<!-- 
🧠 Example:
function validateForm() {
  if (email === "") alert("Email required");
} -->

🔥 1️⃣ Difference Between Arrow Function and Normal Function.

A normal function has its own this, arguments, and can be used as a constructor.
An arrow function does not have its own this or arguments and cannot be used as a constructor.
<!-- 
const user = {
  name: "Kajal",
  greet: function() {
    console.log(this.name);
  }
};

user.greet();
-->

<!-- 
const user = {
  name: "Kajal",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); -->
============================================================================================ 
<!-- * Arrays:- -->
An array is a collection of multiple values stored in a single variable.

Hindi:
Array ek variable hota hai jisme hum multiple values store kar sakte hain.

let fruits = ["apple", "banana", "mango"];

<!-- Array Basics -->

let numbers = [10, 20, 30, 40];

numbers[0] → 10
numbers.length → 4
Index starts from 0

Hindi:
Array ka index 0 se start hota hai.

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

-------------------------------------------------------------------
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

---------------------------------------------------------------------
🔹 8. splice() – 
splice() changes the original array by adding, removing, or replacing elements.
<!-- 
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 4] -->

--------------------------------------------------------
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
-----------------------------------------------------------------------------------------------------------------------
11. map()
12. filter()
13. reduce() 🔥🔥
14. forEach()
 

-----------------------------------------------------------
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
<!-- numbers.some(num => num > 2); -->

🔹 21. every() – All true?
Returns true if all elements match.
numbers.every(num => num > 0);


------------------------------------------------------------------------
Array Methods (frontend ka heart ❤️)

map() vs forEach()
filter() ka use
reduce() ka use
slice() vs splice()
----------------------------------------------------------------
### 2️⃣ How do you create an array?
let arr = [10, 20, 30];
### 3️⃣ How to find length of an array?
arr.length
### 4️⃣ Difference between `push()` and `pop()`?

| Method | Work                    |
| ------ | ----------------------- |
| push() | Add element at end      |
| pop()  | Remove element from end |

### 5️⃣ Difference between `shift()` and `unshift()`?

| Method    | Work              |
| --------- | ----------------- |
| shift()   | Remove from start |
| unshift() | Add at start      |

## 🟡 Intermediate Level Interview Questions

### 6️⃣ Difference between `slice()` and `splice()`? ⭐⭐ (Very Important)

| slice()                        | splice()               |
| ------------------------------ | ---------------------- |
| Does NOT change original array | Changes original array |
| Used to copy elements          | Used to add/remove     |

arr.slice(1,3);
arr.splice(1,2);

### 7️⃣ What is `map()`?
Creates a new array by applying a function to each element.
Har element par function lagakar naya array banata hai.

arr.map(x => x * 2);

### 8️⃣ Difference between `map()` and `forEach()`?

| map()                   | forEach()        |
| ----------------------- | ---------------- |
| Returns new array       | Does not return  |
| Used for transformation | Used for looping |

### 9️⃣ What is `filter()`?

Used to filter values based on condition.

arr.filter(x => x > 10);

### 🔟 What is `reduce()`? ⭐⭐⭐

**English:**
Reduces array to a single value.

**Hindi:**
Array ko ek single value me convert karta hai.

arr.reduce((sum, x) => sum + x, 0);

## 🔵 Advanced Level Interview Questions

### 1️⃣1️⃣ Difference between `find()` and `filter()`?

| find()              | filter()            |
| ------------------- | ------------------- |
| Returns first match | Returns all matches |
| Single value        | Array               |

---

### 1️⃣2️⃣ Difference between `some()` and `every()`?

| some()            | every()          |
| ----------------- | ---------------- |
| At least one true | All must be true |

### 1️⃣3️⃣ How to check array includes value?

```js
arr.includes(5);

### 1️⃣4️⃣ How to remove duplicates from array? ⭐⭐⭐

let unique = [...new Set(arr)];

### 1️⃣5️⃣ How to sort numbers correctly?

arr.sort((a, b) => a - b);

### 1️⃣6️⃣ Difference between `==` and `===` in array comparison?

* `==` checks value
* `===` checks value + type

### 1️⃣7️⃣ Is array mutable or immutable?

✅ **Mutable** (can be changed)

### 1️⃣8️⃣ How to convert array to string?

```js
arr.join(",");
```
### 1️⃣9️⃣ What is array destructuring?
Array destructuring ka matlab hai array ke values ko directly variables me nikal lena, bina index use kiye.
<!-- 
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30 -->

===========================================================================================================================================================
🟣 1️⃣ Objects in JavaScript
"Object is a collection of key-value pairs used to store structured data."
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

<!-- Q: Difference between dot and bracket notation? -->
Dot notation is simpler and used when property name is fixed.
Bracket notation is used when property name is dynamic or stored in a variable.


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

 <!-- 🎤 Difference? -->
"Dot notation is used when key is fixed.
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

🔹 4️⃣ this Keyword ⭐⭐⭐:-
this refers to the current object.

<!-- 
let person = {
  name: "Kajal",
  age: 23,
  show() {
    console.log(this.name);
  }
};
person.show(); // Kajal -->


🔥 6️⃣ Object.keys(), values(), entries():-
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

---------------------------------------------
<!-- ❓ Difference between Shallow and Deep Copy? -->

<!-- Shallow Copy -->
A shallow copy copies only top-level properties and shares nested references.
obj1.name → "Kajal"
obj2.name → "Riya"
Primitive values do NOT share reference.
✅ String,✅ Number,✅ Boolean,✅ null,✅ undefined,✅ BigInt,✅ Symbol

<!-- 
const original = {
  name: "Kajal",
  address: { city: "Pune" }
};
const copy = { ...original };   // Shallow copy
copy.address.city = "Mumbai";

console.log(original.address.city); -->
✅ Output:
Mumbai
note:- Because inner object was shared.

<!-- Deep Copy:- -->
A deep copy creates a completely independent clone.No shared references at any level.
✅ Primitive values → separate
✅ Objects → separate
✅ Arrays → separate
✅ Nested objects → separate

<!-- 
const original = {
  name: "Kajal",
  address: { city: "Pune" }
};

const deepCopy = structuredClone(original);   // Deep copy
deepCopy.address.city = "Mumbai";

console.log(original.address.city); -->
✅ Output:
Pune
Because structuredClone() creates completely new nested object.
---------------------------------------------
🟣 5️⃣ Object Destructuring ⭐⭐⭐ :-
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

<!-- 🔥 5️⃣ What is Immutability? -->
Immutability means not modifying the original data, but creating a new copy instead.
<!-- 
let arr = [1, 2];
let newArr = [...arr, 3];
 -->

6️⃣ JSON (parse, stringify) :-
🔹 What is JSON?
JSON = JavaScript Object Notation
is a data format used to send and receive data.
🔹 JSON.stringify() (Object → JSON):-
<!-- 
let obj = { name: "Kajal", age: 23 };

let jsonData = JSON.stringify(obj);
console.log(jsonData); -->

🔹 JSON.parse() (JSON → Object):-
<!-- 
let data = '{"name":"Kajal","age":23}';

let obj = JSON.parse(data);
console.log(obj.name); -->

<!-- 3️⃣ How do you access object properties? -->
user.name;        // Dot notation
user["age"];     // Bracket notation

<!-- 5️⃣ What is an object method? -->
English: Function inside an object
<!-- 7️⃣ What is object destructuring? -->
Hindi: Object se direct values nikalna
let { name, age } = user;

<!-- 🔟 Difference between object and array? -->
<!-- 1️⃣7️⃣ Is object mutable? -->
✅ Yes, objects are mutable.
---------------------------------------------
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
=============================================================================================================================
🟤 1️⃣ Strings in JavaScript
✔ Strings are immutable (original string does not change)
<!-- ✅ What is a String? -->
A string is a sequence of characters.
<!-- 
let name = "Kajal";
let city = 'Indore'; 
console.log(name)
-->

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


change → toUpperCase, toLowerCase, replace
check → includes, indexOf
cut → slice, substring
convert → split
========================================================================================
🔢 NUMERICAL / CODE QUESTIONS:-

## 🔢 NUMERICAL / CODE QUESTIONS

### 1️⃣ Reverse a String

```js
let str = "hello";
let rev = str.split("").reverse().join("");
console.log(rev); // olleh
```
### 2️⃣ Count Characters in a String

```js
let str = "JavaScript";
console.log(str.length); // 10
```
### 3️⃣ Check if String contains "JS"

```js
let str = "I love JS";
console.log(str.includes("JS")); // true
```
---

### 4️⃣ Convert string to uppercase

```js
let str = "hello";
console.log(str.toUpperCase()); // HELLO
```
---

### 5️⃣ Remove spaces

```js
let str = "  hi  ";
console.log(str.trim()); // "hi"
```

---

### 6️⃣ Find index of word

```js
let str = "Hello World";
console.log(str.indexOf("World")); // 6
```
---

### 7️⃣ Replace word

```js
let str = "I like tea";
console.log(str.replace("tea", "coffee"));
// I like coffee
```

### 8️⃣ Convert string to array

```js
let str = "a,b,c";
console.log(str.split(",")); // ["a","b","c"]
```

---

### 9️⃣ Print each character

```js
let str = "ABC";
for (let ch of str) {
  console.log(ch);
}
```

---

### 🔟 Check Palindrome

```js
let str = "madam";
let rev = str.split("").reverse().join("");

console.log(str === rev); // true
```
==============================================
!-- 🔥 5️⃣ Event Loop, Call Stack & Microtasks vs Macrotasks -->
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
=============================================================
<!-- 🔥 6️⃣ DOM (Document Object Model) -->
<!-- What is DOM -->
DOM (Document Object Model) is a programming interface that allows JavaScript to access, modify, add, or delete HTML elements and change the content of a web page.

<!-- 🌍 Real-world Example -->
Think of DOM like:
HTML page = house
DOM = blueprint of house
JavaScript = person modifying house

HTML
<!-- <p id="text">Hello</p> -->

JavaScript
<!-- document.getElementById("text").innerText = "Hi"; -->
👉 Page par Hello → Hi ho jayega
--------------------------------------------------------------
<!-- Why DOM is used? -->
👉 To make web pages dynamic and interactive. 

<!-- What is document? -->
👉 document is the root object of DOM.

<!-- What is window? -->
👉 window is the global object in browser.

<!--What is DOM tree? -->
👉 Hierarchical structure of HTML elements (parent–child).
------------------------------------------------------------------------------------------------------------------------------
<!-- 🔥 1️⃣ Selecting Elements -->
JavaScript me HTML elements ko select karne ke liye methods use hote hain.

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
-----------------------------------------------------------
<!-- 🔥 2️⃣ Manipulating DOM -->
DOM manipulation allows dynamic changes to content, style, and structure of web pages using JavaScript.

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

---------------------------------------------------------------------------------------------------------------------------
<!-- 🔥 3️⃣ Event Listeners -->

🔹 addEventListener():-
Used to attach event to element.
<!-- 
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Button Clicked");
}); -->

🔥 Event Delegation (Important 🔥)
Event delegation means attaching event listener to parent element instead of multiple child elements.

<!-- 🧠 Why? -->
Events bubble up in DOM.
<!-- 
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Item clicked:", e.target.textContent);
  }
});
 -->
------------------------------------------------------------------------------------------------------------------------------
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
-------------------------------------------------------------------------------------------------------------------------
<!-- Difference between setTimeout and setInterval? -->
setTimeout runs once after delay.
setTimeout → show OTP after 5 seconds
setInterval runs repeatedly at given interval.
setInterval → countdown timer

<!-- Q: What is event bubbling? -->
Event bubbles from child to parent elements.

---------------------------------------------------------------
<!-- 🔹 setTimeout() -->
setTimeout Executes code after delay.
setTimeout → show OTP after 5 seconds
<!-- 
setTimeout(() => {
  console.log("Hello");
}, 2000);
 -->

<!-- 🔹 setInterval() -->
setInterval Repeats code after interval.

setInterval(() => {
  console.log("Running...");
}, 1000);

----------------------------------------------------------------------------------------------------------
<!-- 🔥 15 MOST ASKED DOM INTERVIEW QUESTIONS -->
<!-- 1️⃣ What is DOM? -->
DOM (Document Object Model) is a programming interface that allows JavaScript to access, modify, add, or delete HTML elements and change the content of a web page.

<!-- 🌍 Real-world Example -->
Think of DOM like:
HTML page = house
DOM = blueprint of house
JavaScript = person modifying house

<!--2️⃣ Difference between getElementById and querySelector? -->
getElementById selects by id only.
querySelector selects using any CSS selector.

<!-- 3️⃣ Difference between innerHTML and textContent? -->
innerHTML parses HTML.
textContent handles only text.

<!-- 4️⃣ What is event bubbling? -->
Event bubbles from child to parent.

<!-- 5️⃣ What is event capturing? -->
Event flows from parent to child.

<!-- 6️⃣ What is event delegation? -->
Attaching event listener to parent instead of multiple children.

<!-- 7️⃣ Difference between addEventListener and onclick? -->
addEventListener allows multiple handlers.
onclick supports only one.

<!-- 8️⃣ What is e.target? -->
The element that triggered the event.

<!-- 9️⃣ What is preventDefault()? -->
Prevents default browser behavior.

<!-- 🔟 What is stopPropagation()? -->
Stops event from bubbling.

<!-- 1️⃣1️⃣ Difference between NodeList and HTMLCollection? -->
NodeList can be static.
HTMLCollection is always live.
------------------------------------------------------------------------------------------------------------------------------
<!-- synchronous:- -->
Synchronous JavaScript executes code line by line, and each task must complete before the next one starts.

Real-world Example:-
Imagine you are standing in a bank queue. Until the person in front of you finishes their work, your turn will not come.
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
JavaScript has a single call stack, but it uses Web APIs and the Event Loop to handle asynchronous tasks in the background without blocking the main threa

!-- 2️⃣ setTimeout() -->
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

=========================================
<!-- 🔥 3️⃣ Promises -->
A Promise is an object that represents a future value — either resolved or rejected.
It has three states: 
1️⃣pending, 
2️⃣Resolved(fulfilled), and 
3️⃣Rejected. 
We use .then() for success and .catch() for error handling.”
<!-- 🌍 Real-world Example -->
Online payment
Success → then
Failed → catch

<!-- Promises handle asynchronous operations in a cleaner way than callbacks and avoid callback hell. -->


<!-- 
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
}); -->

🔹 then()
Runs when resolved.
<!-- 
promise.then(result => {
  console.log(result);
}); -->

🔹 catch()
Runs when rejected.
<!-- 
promise.catch(error => {
  console.log(error);
}); -->

🔹 finally()
Runs always.
<!-- 
promise.finally(() => {
  console.log("Done");
}); -->

--------------------------------------------------------------
🔥 4️⃣ Async / Await

async/await simplifies promise handling and improves readability by avoiding chaining.

🌍 Real-world Example
You order food → wait (await) → eat when ready.

?
-----------------------------------------------0-------------
🔥 5️⃣ Fetch API & AJAX

<!-- 🔹 What is AJAX? -->
AJAX allows sending and receiving data from server without refreshing page.


<!-- 🔹 Fetch API -->
Fetch API is a modern JavaScript method for making HTTP requests and works with promises.
Modern way to make HTTP requests.(short)

<!-- 
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
 -->

🔥 Using Async/Await:-
<!-- 
async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPost(); -->

🧠 Flow
fetch sends request
Server responds
Convert to JSON
Use data
-----------------------------------------------------------------------------------------------------------------------------
🔥 9️⃣ Error Handling in JavaScript



🔥 1️⃣ try, catch, finally:-
try-catch allows handling runtime errors without stopping program execution. The finally block runs regardless of whether an error occurred or not.

try...catch is used to handle runtime errors gracefully.

Real-world Example
Think like:

try → Try opening file
catch → If file not found → show error
finally → Close file connection

<!-- 
try {
  // code that may cause error
} catch (error) {
  // handle error
} finally {
  // always runs
}
 -->


🧠 Logic
try → execute risky code
catch → handle error
finally → always executes


<!-- 🔥 2️⃣ throw (Custom Errors) -->
throw is used to manually create and throw custom errors.


<!-- Q4: Difference between throw and console.log? -->
throw stops execution and sends error to catch block.
console.log only prints message.

------------------------------------------------------------------------------------------------------------------------------















Changing HTML & CSS:- 
EXAMPLE:_
<div id="box"></div>

* innerText = sirf text

<!-- document.getElementById("box").innerText = "<b>Hello</b>"; -->

OUTPUT:- <b>Hello</b>

innerHTML = HTML + text

<!-- document.getElementById("box").innerHTML = "<b>Hello</b>"; -->

OUTPUT:- Hello
-------------------------------------------------------------
🔶 3️⃣ Changing HTML & CSS:-
CSS
🔹 Change HTML content

element.innerHTML = "New text";
element.innerText = "New text";


🔹 Change CSS
element.style.color = "red";
element.style.backgroundColor = "yellow";

-------------------------------------------------------------------------------------------------
🔶 4️⃣ Events:-
An event is an action performed by the user on a web page, such as a click, typing, or form submission.
Examples:
click
change
submit
keypress

🔹 click Event:- 
<!-- 
button.onclick = function () {
  alert("Button clicked");
}; -->

🔹 change Event:-
<!-- 
input.onchange = function () {
  console.log(input.value);
}; -->

submit Event:-
👉 Form submit hone par
<!-- 
form.onsubmit = function () {
  alert("Form submitted");
}; -->

🔶 5️⃣ Event Listeners (Best Method ✅):-
👉 Multiple events handle kar sakte hain
<!-- 
button.addEventListener("click", function () {
  alert("Clicked");
});
 -->

🔶 6️⃣ Form Handling
👉 Form ke data ko JavaScript se read karna

HTML:-
<form id="myForm">
  <input type="text" id="name">
  <button>Submit</button>
</form>

JS:-
<!-- 
let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();   // page reload stop
  let name = document.getElementById("name").value;
  console.log(name);
}); -->

🔶 7️⃣ Validation Basics:-
👉 User ne sahi data bhara ya nahi check karna
🔹 Example: empty field validation
if (name === "") {
  alert("Name is required");
}

🔹 Length validation
if (name.length < 3) {
  alert("Name must be at least 3 characters");
}

 <!-- DOM + FORM LOGIC -->
 2️⃣1️⃣ Prevent form reload
event.preventDefault();

2️⃣2️⃣ Get input value
document.getElementById("name").value;

2️⃣3️⃣ Change text on button click
btn.addEventListener("click", () => {
  para.innerText = "Changed";
});
=====================================================================================================================================================
