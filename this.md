
----------
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
-----------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------
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

-----------------------------------------------------------

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
-------------------------------------------------------------
<!-- Q: What is event bubbling? -->
Event bubbles from child to parent elements.


-------------------------------------------------------------
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
-------------------------------------------------------------




------------------------------------------------------------


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
-------------------------------------------------------------
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

-------------------------------------------------------------------------------------------------------------------------

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
