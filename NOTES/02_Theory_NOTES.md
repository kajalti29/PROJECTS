<!--1. What is JavaScript? -->
“JavaScript is a programming language used both on the frontend and backend. .
On the frontend, it helps in handling user interactions and updating the UI dynamically, and on the backend we can use it with Node.js to build APIs and servers.”

<!-- Example: -->
“In my projects, I have used JavaScript to fetch data from APIs and update the UI.”

<button onclick="changeText()">Click me</button>
<p id="text">Hello</p>

<script>
function changeText() {
  document.getElementById("text").innerText = "Changed!";
}
</script>
“Here JavaScript is handling user interaction and updating the UI.”

For example, on button click, it can update content dynamically using DOM manipulation without reloading the page.”

2. API Example (BEST for interview)
<!-- 
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  }); -->
  “Here I’m using JavaScript to fetch data from an API.”


✅ 3. Backend Example (Node.js basic)
<!-- 
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.listen(3000); -->

“This code creates a basic server using Node.js and Express.
First, we import Express and create an app.
Then we define a GET route for the homepage, where the server sends a response ‘Hello from server’.
Finally, we start the server on port 3000.”

OR:-
When you click a button and a popup appears.

HTML:-
<button id="btn">Click Me</button>

JS:-
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  alert("Button Clicked");
}); 
-----------------------------------------------------------
<!--Uses of JavaScript -->
Makes websites interactive
Handles button clicks & user actions
Used for form validation
Updates UI without page reload
Works on backend (Node.js)
Used for APIs (fetch/send data)
Helps build real-time apps (chat, notifications)

<!-- 3.How JavaScript Works in Browser -->
“Basically, when a web page loads, HTML provides the structure and CSS handles the styling.
Then the JavaScript engine in the browser runs the code and can dynamically update the page using the DOM, so users can see changes contend without page reloading.”

<!--4. why called “JavaScript scripting language"  -->
“JavaScript is called a scripting language because it runs directly in the browser and controls the behavior of the web page.
For example, handling user actions, form validation, or updating content in real time.”

<!-- 5. JavaScript Features (Short Points) -->
Interpreted – runs directly, no compilation needed
Dynamically typed – no need to define variable types
Platform independent – works on any browser/system
Event-driven – responds to user actions (click, input)
Client & server side – runs in browser and with Node.js
Object-oriented – supports objects and classes.

<!-- 6. Is JavaScript Single-Threaded?  -->
Yes, JavaScript is single-threaded because it has only one call stack and can execute one task at a time.

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
👉 Output runs line by line (synchronously)

<!-- 7. What is Call Stack in JavaScript -->
“Call Stack manages function execution in JavaScript using LIFO, where the last called function executes first.”

“First, first() is called and added to the stack.
Then inside it, second() is called and pushed on top.
second() executes and prints ‘Hello’.
After that, second() is removed, then first() is removed.”
<!-- 
function first() {
  second();
}

function second() {
  console.log("Hello"); 
}

first(); -->
first() is called
then second() is called
prints Hello
then functions are removed from stack
----------------------------------------------------------------------------------------------------------------------
<!-- 8. What is a Variable ? -->
“A variable a container is used to store data in a program, so we can use or change it later.”

<!-- Real-Life Example -->
“It’s like a container or a box where we keep values.”
<!-- 
let name = "kajalti";
const age = 22;
var city = "Mumbai";

console.log(name, age, city); 
-->

naming rules:-
1] A variable name can start only with - a letter, underscore_ and dollar($).
2] Cannot start with a number.
3] No spaces allowed.
4] Cannot use reserved keywords.
5] Variable names are case-sensitive.

<!-- 9. Difference between var, let, and const? -->
 Var:- 
 var is a function-scoped variable declaration keyword introduced in ES5. It allows both re-declaration and reassignment. It is hoisted and initialized with undefined.

🌍 Real-Life Example: 
A company notice board.
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
A classroom whiteboard.
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
A government law.
Once created, it cannot be changed.
<!-- 
const country = "India";

country = "USA"; // Error -->
👉 You cannot change it.
-----------------------------------------------------------------------------------------
<!-- 10. What is Scope? -->
Scope defines where a variable can be accessed in a program.

There are three types of scope in JavaScript: global, function, and block scope.

1️⃣. Global Scope:-
 Global scope means the variable can be accessed anywhere.
 "Like the sun — The sun light is visible in all places." ☀️
<!--
let x = 10;   // global variable

function show() {
  console.log(x);
}

show();      // 10
console.log(x); // 10 -->

2️⃣ Function Scope:-
Function scope means it is only accessible inside the function, mainly with var.
“Like your bedroom — it is used only inside your room, not outside.”
<!-- 
function test() {
  var a = 10;
  console.log(a); // ✅
}
// console.log(a); ❌ -->

3. Block Scope:-
Block scopemeans it is only accessible inside the block, let or const are block scope.
“The exam hall question paper is used only inside the exam hall.”
<!-- 
if (true) {
  let x = 5;
  console.log(x); // ✅
}
// console.log(x); ❌ -->

-----------------------------------------------------------------------------------------
<!-- 11.What is a Data Type: -->
“A data type defines the what kind of value a variable can hold, like numbers, text, or true/false.”

There are two categrery:-
1. Primitive 
2. Non-Primitive 

1️⃣ Primitive Data Types:- 
“Primitive types are basic values like numbers, strings, and booleans. They are stored directly and immutable.”
<!-- 
let name = "Rahul";    // String
let age = 22;           // Number
let isActive = true;    // Boolean
let x;                  // Undefined
let y = null;           // Null
let id = Symbol("id");  // Symbol
let big = 123456789n;   // BigInt -->

2️⃣ Non-Primitive (Reference) Data Types:-
“Non-primitive types are objects, arrays, or functions. They can store multiple values and are accessed by reference.”
<!-- 
let person = {name: "Rahul", age: 22}; // Object
let numbers = [1,2,3];                 // Array
function greet() { console.log("Hi");} // Function -->


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
Means: value is not defined.

5️⃣ Null:-
Represents an empty value (intentionally).
<!-- let data = null; -->

6️⃣ BigInt:-
Used to store very large numbers.
<!-- let bigNumber =  12345678901234567890n; -->
n at the end is required.

7️⃣ Symbol:-
Used to create unique values (advanced use). 
<!-- let id = Symbol("id"); -->

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
-------------------------------------------------------------------------
<!-- 🔥 JavaScript Operators:- -->
operators are specia symbol used to peform operation on value & variable.
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
Logical operators are used to combine multiple conditions.

Operator	Meaning
&& → both must be true 
|| → at least one true
! → reverse the result

“Logical AND (&&) returns true only when both conditions are true, while Logical OR (||) returns true if at least one condition is true.”
<!-- 
let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age < 18 || age > 60); // false
console.log(!true); // false -->
Login, signup, eligibility check.

5️⃣ Unary Operators:-
Work on a single operand.
Example: ++, --

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
--------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------
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
-------------------------------------------------------------------------------------------------------------------------------------------------
 <!-- Conditions in JavaScript (Full):- -->
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

# 4️⃣ Ternary Operator (Short Condition)
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

-----------------------------------------------------------------------------------
<!--What are loops? -->
Loops are used to repeat a block of code multiple times until a condition is false.

<!-- 🔹 1️⃣ for loop:- -->
for loop is used when the number of iterations is known.

for (initialization; condition; increment/decrement) {
  // code to rune
}
<!-- 
for (let i = 1; i <= 5; i++) {
  console.log(i);
 }
Output: 1 2 3 4 5 -->

<!-- 🔹 2️⃣ while loop:- -->
while loop is used when the number of iterations is unknown and depends on a condition.

while (condition) {
  // code to run 
}
<!--  
 let i = 1;
 while (i <= 5) {
   console.log(i);
   i++;
 }
Output: 1 2 3 4 5 -->


<!-- 3️⃣ do...while loop:- -->
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
break → stop loop immediately.
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

=================================================================================================================================================
ARRAYS IN JAVASCRIPT
<!--1. What is Array? -->
“An array is a collection of multiple values stored in a single variable.”
It is a Mutable and Index starts from 0.
<!-- let numbers = [10, 20, 30, 40]; -->

Why we use Array:-
👉 Multiple values store karne ke liye
👉 Code clean aur easy banane ke liye

<!-- 🔹 3. Index (Very Important) -->

👉 Array index 0 se start hota hai
<!-- 
let arr = [10, 20, 30];

console.log(arr[0]); // 10
console.log(arr[1]); // 20 -->

METHODS:-
🔥 slice(start, end) = start se uthao, end se pehle tak
slice() returns a new array without changing the original array.
<!-- 
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4); 
console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] -->

Index:   0       1        2        3
Value: ["Apple","Banana","Mango","Orange"]

🔥 splice() – 
splice() changes the original array by adding, removing, or replacing elements.
<!-- 
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 4] -->


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
reduce() is an array method reduce to a single value (like sum, total, or result).

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
------------------------------------------------------------------------------------------------------------------
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

🔹6. concat() – Merges two or more array(Join arrays)
<!-- 
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);      //[1, 2, 3, 4] -->

🔹 7. indexOf() – Find index
<!-- 
let arr = [10, 20, 30];
console.log(arr.indexOf(20)); // 1
 -->
 
 🔹 8. includes() – Check value exists or not.
 Ye value true or false me deta hai.
<!-- 
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true -->

🔹9. sort() – Sort array
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

🔹 10. reverse() – Reverse array
<!-- 
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
 -->

🔹 11. join() – Convert array to string
<!-- 
let arr = ["Hello", "World"];
console.log(arr.join(" ")); // Hello World
 -->

🔹 12. find() – Find first match
<!-- 
let arr = [10, 20, 30];
let result = arr.find(num => num > 15);
console.log(result); // 20 -->


🔹 13. findIndex() – Index of first match
<!-- 
let arr = [10, 20, 30];
console.log(arr.findIndex(num => num > 15)); // 1 -->

🔹 14. some() – At least one true?
Returns true if at least one element matches.
<!-- 
let numbers = [1, 2, 3];

console.log(numbers.some(num => num > 2)); 
// true -->

🔹15. every() – All true?
Returns true if all elements match.
<!-- 
let numbers = [1, 2, 3];

console.log(numbers.every(num => num > 0));
// true -->

-----------------------------------------------------------

### 1️⃣9️⃣ What is array destructuring?
Array destructuring means taking values from an array and storing them in variables.

Array destructuring ka matlab hai array ke values ko directly variables me nikal lena, bina index use kiye.
<!-- 
let arr = [10, 20, 30];
let [a, b, c] = arr;
console.log(a); // 10 
console.log(b); // 20
console.log(c); // 30 -->
-----------------------------------------------------------------------------------------------------------------
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
-------------------------------------------------------------
1️⃣ Objects in JavaScript
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

<!--Accessing Object Properties -->
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
// Delhi ✅ -->

 JSON (parse, stringify) :-
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

 JSON.parse():-
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
----------------------------------------------------------------------------------------------------------
FUNCTION:-
<!-- Functions -->
A function is a block of code that performs a specific task and can be reused whenever needed.”

“It’s like a machine — you give input, it does some work, and gives output.”
<!-- 
function greet() {
  console.log("Hello");
}
greet(); -->
In this example, we define a function called greet, and when we call it, it prints ‘Hello’.
So instead of writing the same code again, we can just call the function.”

<!-- "Why do we use functions in JavaScript?" -->
* Avoid repetition 
* Organize code
* Improve readability 

<!--👉Real use: -->
Event handling
API calls
Reusable logic

<!--What are Parameter vs Argument ? -->
“Parameters are the variables defined in a function, and arguments are the actual values we pass calling the function.”

“In function add(a, b), a and b are parameters.
When we call add(2, 3), 2 and 3 are arguments.”
<!-- 
function add(a, b) {   // a, b → parameters
  console.log(a + b);
}
add(2, 3);  // 2, 3 → arguments -->

“In this example, a and b are parameters defined in the function.
When we call the function with add(2, 3), the values 2 and 3 are arguments.”

<!--👉 What is Return Keyword ? -->
“Return is used to send a value back from a function.”

“For example, the function calculates a sum and returns the result, which we can store or use later.”
<!-- 
function sum(a, b) {
  return a + b;
}
let result = sum(2, 3);
console.log(result); // 5 -->

<!-- Anonymous Function-->
“An anonymous function is a function without a name.
<!-- 
const greet = function(){
  console.lo("HI");
};

greet(); -->

“This is an anonymous function because it doesn’t have a name.
It is assigned to a variable and then called using that variable.”

<!-- 22. What is recursion? -->
Function calling itself.
----------------------------------------------------------------------------------------------------------------
<!-- 1️⃣ Function Declaration vs Function Expression -->
✅ Function Declaration :-
“A function declaration is defined using the function keyword with a name, and it is hoisted, so we can call it before its definition.

“ for example Function Declaration is like a pre-defined rule”
<!--                          
function greet() {
  console.log("Hello");
}
greet(); -->

“This is a function declaration where the function is defined with a name.
It is hoisted, so we can call it even before its definition.”

✅ Function Expression :-
A function expression is a function stored inside a variable, and it is not hoisted, so we can call it only after it is defined.”

"For Example Function Expression is like an appointment letter — valid only after it is assigned.””
<!-- 
const greet = function() {
  console.log("Hello");
};

greet(); -->
This is a function expression where a function is assigned to a variable.
It is not hoisted like function declaration, so we cannot call it before defining it.”
--------------------------------------------------------------------------
<!--1️⃣ Difference Between normal Function and Arrow Function. -->
A normal function has its own this and arguments object, and it can be used as a constructor with the new keyword.

“Normal function is like a person working independently.
It has its own this.”

✅ Normal Function
<!-- 
function greet(name) { 
  return "Hello " + name;
} -->

An arrow function does not have its own this and arguments object and it cannot be used as a constructor.

“Arrow function is like a child using parent’s help.
It doesn’t have its own this, it uses the parent’s this.”

✅ Arrow Function
<!-- 
const greet = (name) => {
  return "Hello " + name;
}; -->
--------------------------------------------------------------------------
🔥 Arrow Function :-
“An arrow function is a shorter way to write a function in javaScript using the => syntax.
It does not have its own this and instead, it uses the this value from its parent scope.”

That’s why arrow functions are very useful in callbacks and asynchronous code because it helps us avoid losing the correct this value.”

<!-- For Example:- -->
“Arrow function is like a child using parent’s help.
It doesn’t have its own this, it uses the parent’s this.”

<!-- const add = (a, b) => a + b; -->

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

<!-- Callback Functions -->
“A callback function is a function that is passed as an argument to another function and is executed after that function completes its task.”
OR:-
“Callback is a function passed to another function and executed later.”
<!-- Real-World Example: -->
“Like an online order — first payment is done, then we get a confirmation message.
So the confirmation comes after the task is completed, just like a callback function.”
<!-- 
function greet(name) {
    console.log("Hello " + name);
}
function processUser(callback) {
    callback("Rahul");
}
processUser(greet); -->

“Here, we pass the greet function as a callback to another function.
After the task is done, it calls the callback and prints the message.”

<!-- Why Callbacks Are Important? -->
Event handling
API calls
setTimeout / setInterval 
Asynchronous programming

<!-- 🔥 4️⃣ What is Closure? -->
A closure is a function that remembers variables from its outer scope even after the outer function has finished execution. It is used for data hiding and private variables.

<!-- Real-life example -->
“Closure is used when we want to keep data private and maintain state.”
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
“Here, the outer function returns the inner function.
Even after the outer function is executed, the inner function still remembers the count variable.

So every time we call counter(), the value increases.
This happens because of closure.”

<!-- 🔹 Why do we use Closure? -->
Data hiding
Private variables
Counters
Used in callbacks and event handlers

<!-- 👉 If they ask: Why use closure? -->
“We use closures for data privacy and to maintain state without using global variables.”

<!-- ✅ 3️⃣ Higher Order Function (HOF) -->
“A higher-order function is a function that either takes another function as an argument or returns a function.”

<!-- Example:- -->
“Like a washing machine — you choose a mode like quick wash or heavy wash, and the behavior changes.
Similarly, a higher-order function changes its behavior based on the function we pass.”

<!--
function calculate(a, b, operation) {
  return operation(a, b);
}
function add(x, y) {
  return x + y;
}
console.log(calculate(5, 3, add)); // 8 -->

“Here, calculate is a higher-order function because it takes another function as a parameter.
We pass add function as an argument, and it performs the operation.”

<!-- IIFE (Immediately Invoked Function Expression) -->
👉 IIFE is a function that runs immediately after it is defined.

🔹 Basic Syntax
<!-- ✅ Normal IIFE -->
<!-- 
(function () {
  console.log("IIFE executed"); 
})(); -->
“Here, the function is defined and executed immediately without calling it separately.”


<!-- ✅ Arrow Function IIFE -->
(() => {
  console.log("Arrow IIFE executed");
})();

🎯 Why We Use IIFE:-
To avoid global variable pollution
To create a private scope

<!-- ✅What is Pure Function vs Impure Function --> 
“A pure function is a function that always returns the same output for the same input and does not have any side effects. 
<!-- 
function add(a, b) {
  return a + b;
} -->

<!--Impure Function -->
“An impure function is a function that does not always return the same output for the same input
<!-- 
let count = 0;

function increase() {
  count++;
}s
    
increase();
console.log(count); // 1
 -->

<!-- Why are pure functions preferred? -->
Because:
Easy to test
No side effects 
Better performance optimization 
DOM change  
API call karna 
Console log karna
write File

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

=====================================================================
3. ES6 Features (Modern JavaScript)
<!-- What is ES6 Features? -->
ES6 (ECMAScript 2015) is a version of JavaScript that introduced new features to make coding easier, cleaner, and more powerful.
These features are called ES6 features.

<!-- 🔥 Examples of ES6 Features -->
let and const
Arrow functions 
Template literals 
Destructuring
Spread and Rest operator
Promises
Async/Await
Modules (import/export)

<!-- 🎯 Why ES6 is Important? -->
👉 Because:-
Code becomes shorter and cleaner
Easier to understand
Helps in writing modern applications (React, APIs, etc.)


<!-- 🔥3. Template Literals ? -->
“Template literals allow embedding variables inside strings using backticks.”

👉 Real-life Example:
Like filling a form message:
“Hello Kajal, your order is ready”

<!-- 
let name = "kajalti";
console.log(`Hello ${name}`); -->

👉 Why use?
Easy string interpolation
Multi-line strings

<!-- 🔥 4. Destructuring  -->
“Destructuring is used to extract values from arrays or objects into variables.”

👉 Real-life Example:
You get a student record, but you only need name and marks.

<!--
 const student = { name: "Kajal", marks: 90 };

const { name, marks } = student; -->

“Destructuring is like picking only required data from a large object.”

👉 Why use?
Cleaner code
Easy data access

<!-- 🔥 5. Spread & Rest Operator (...) -->

👉 Spread (expand values):-
“Spread is used to expand elements, 
👉 Real-life Example:
Copying notes from one notebook to another.
<!-- 
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
 -->

👉 Rest (collect values):-
Rest is used to collect multiple values.”
👉 Real-life Example:
Teacher collects marks of all students in one list.
<!-- 
function sum(...numbers){
  return numbers.reduce((a, b) => a + b);
} -->

<!-- 🔥 6. What is a Promise? -->
A Promise is an object that represents a future value — either resolved or rejected.
It has three states: pending, resolve, and rejected.
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

👉 Why use?
Avoid callback hell
Better async handling

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

<!-- 🔥 5. Async / Await ⭐ -->
👉 Cleaner way to handle promises.
👉 Real-life Example:
You wait for food delivery before eating.
<!-- 
async function eatFood() {
  let food = await foodOrder;
  console.log(food);
} -->

👉 Meaning:
Code waits until task is complete.
<!-- 
async function getData() {
  let res = await fetch("api");
  console.log(res);
} -->

👉 Why use?
Looks like normal code
Easier to read

<!-- 🔥 6. Modules (import / export) -->
“Modules are like separate files that we can reuse when needed.”
👉 Real-life Example:
Different subjects in different books 📚
You use only the required one.
<!-- 
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./math.js"; -->
================================================================================================================
<!--7. What is the difference between synchronous and asynchronous? -->
🔹 1. Synchronous (Sync):-
Synchronous Javascript execute Code runs line by line.
👉 Next task starts only after previous task is finished

<!--Real-life Example:- -->
👉 Like standing in a queue 🧍‍♂️
First person finishes → then next person
No skipping
<!-- 
console.log("Start");
console.log("Task 1");
console.log("End");
-->
👉 Output: 
Start 
Task 1
End 

🔹 2. Asynchronous (Async):-
“Asynchronous Javascript code allows multiple tasks to run without blocking the execution.”


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
===================================================================================================================
<!-- 🔹 Difference Between call(), apply(), and bind() -->
Ye teen methods this ko control karte hain.

✅ 1️⃣ call():-
call() calls the function immediately and passes arguments one by one.
Example:-
👉 You use your friend’s phone and call someone immediately. 
<!-- 
function greet(city) {
  console.log(this.name + " from " + city);
}

greet.call({ name: "Kajalti" }, "Delhi"); -->
o/p :- Kajalti from Delhi

✅ apply():-
apply() calls the function immediately but passes arguments as an array.
(Arguments array me deta hai).
Example:-
👉 You use your friend’s phone and call immediately,
but you pass details as a list

<!-- greet.apply({ name: "Kajalti" }, ["Delhi"]); -->

✅ bind():- 
bind() does not call the function immediately. It returns a new function with a fixed this value that can be called later.
Example:-
👉 You take your friend’s phone,
but call later

<!-- 
const newFunc = greet.bind({name: "Kajalti"}, "Delhi");
newFunc(); -->

----------------------------------------------------------------------------------------------------------------
<!--What is Lexical Scope -->
👉 Lexical scope means a function can use variables from where it is written, not where it is called.
It can access variables from its parent scope.
This is decided at the time of writing the code.”

<!-- Example: User Login System -->
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


<!--What is Execution Context? -->
“Execution Context is an environment where JavaScript code is executed.”
Hindi:-
Execution Context ek environment hota hai jahan JavaScript code execute hota hai.


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
------------------------------------------------------------------------------------------------------------------------
✅ 1️⃣ Call Stack:-
👉 Call Stack runs code line by line.
👉 Works on LIFO (Last In First Out).


✅ 2️⃣ Event Loop:-
👉 Event Loop waits for stack to be empty and then runs async tasks.


✅ 3️⃣ Microtasks:-
👉 High priority tasks


✅ 4️⃣ Macrotasks
👉 Low priority tasks
👉 Microtasks ke baad run hote hain

------------------------------------------------------------------
7️⃣ DOM (Frontend Interviews):-
<!-- What is DOM -->
DOM (Document Object Model) is a programming interface that allows JavaScript to access, modify, add, or delete HTML elements and change the content of a web page.

<!--Real-world Example -->
When you click Like button on Instagram, JavaScript updates the DOM to change the icon color.  

HTML
<!-- <p id="text">Hello</p> -->

JavaScript
<!-- document.getElementById("text").innerText = "Hi"; -->


✅ 2️⃣ Selecting Elements

👉 Elements ko select karna sabse basic aur important hai
Methods:
document.getElementById()
document.getElementsByClassName()
document.querySelector() ⭐
document.querySelectorAll()

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
---------------------------------------------------------