<!-- 🔥 1. What is JavaScript? -->
JavaScript is a high-level, interpreted programming language used to add interactivity and dynamic behavior to web pages.
It run in the browser and on the server(node.js).
It allows us to handle events, manipulate the DOM, validate forms, and fetch data from APIs.
<!-- For example: -->
When you click a button and a popup appears.
<!-- 
button.addEventListener("click", function() {
  alert("Button Clicked");
}); -->

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

🌍 Real-Life Example:sd
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
------------------------------------------------------------------------
17. What is typeof?
Operator used to check data type.

18. What is isNaN()?
Checks if value is NaN.

19. What is parseInt()?
Converts string to integer.

20. What is parseFloat()?
Converts string to decimal number.

21. What is Boolean()?
Converts value into boolean.

24. What is the difference between alert, prompt, confirm?
alert → show message
prompt → input
confirm → yes/no

25. What is console.log()?
Prints output in browser console.
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
--------------------------------------------------
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

-----------------------------------------------------------------------
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
"TDZ is like a booked movie seat — it exists, but you can't use it until the movie starts."
<!-- 
console.log(a); // ❌ ReferenceError
let a = 10; -->


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

<!-- 33. What is recursion? -->
Function calling itself.

<!-- 42. What is currying? -->
Transforming a function with multiple arguments into multiple nested functions.
<!-- 
function add(a) {
  return function(b) {
    return a + b;
  }
} -->

<!-- 41. What is pure function? -->
A pure function is a function that always returns the same output for the same input and does not modify external variables.
<!-- 
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 -->
✔ Same input → same output


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
Reduces array to single value.
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

### 1️⃣9️⃣ What is array destructuring?
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
=======================================================================================================
2️⃣ this Keyword 🔥 (Very Important)

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
================================================================================================================
4️⃣ Asynchronous JavaScript 🔥🔥🔥
Very important for frontend jobs:

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
setTimeout executes a function once after a specified delay,
<!-- 
setTimeout(() => {
  console.log("Hello Kajalti");
}, 2000); -->


<!-- setInterval -->
setInterval executes a function repeatedly at fixed intervals
until it is cleared.
<!-- 
setInterval(() => {
  console.log("Running every 2 seconds");
}, 2000); -->

<!-- 🛑 Stop Karne Ka Tarika -->
Dono ko clearTimeout() aur clearInterval() se stop karte hain.
1. 
const timer = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(timer);


2. 
const interval = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

<!-- 🔥 8. What is a Promise? -->
A Promise is an object that represents a future value — either resolved or rejected.
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

✅ Promise Syntax
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
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


=================================================
<!-- What is Lexical Scope -->
Lexical scope means a function can use variables from the place where it was created (written in the code).
<!-- 
function outer() {
  let count = 10;

  function inner() {
    console.log(count);
  }

  return inner;
}

const fn = outer();
-->

🌍 Real-world Example
Think of scope like rooms in a house:
People inside room can access main hall
But main hall cannot access inside private room

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


<!-- 🔥 4️⃣ Prototype & Prototypal Inheritance -->
JavaScript uses prototype-based inheritance, where objects inherit properties and methods from other objects.

<!-- 🌍 Real-world Example -->
Think of prototype like:
All students share same syllabus.
Instead of giving each student separate syllabus copy.

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
================================================================================================================
7️⃣ DOM (Frontend Interviews):-
Since tum frontend bana rahi ho:
DOM selection methods
Event bubbling
Event delegation
addEventListener
Debouncing / Throttling

<!--🔥 6️⃣ DOM (Document Object Model) -->
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
=============================================================================================
7️⃣ DOM (Frontend Interviews)
Since tum frontend bana rahi ho:
DOM selection methods
Event bubbling
Event delegation
addEventListener
Debouncing / Throttling

<!-- 1️⃣ Event Bubbling:-
 -->
Event Bubbling means the event starts from the target element and bubbles up to its parent elements.
Event bubbles from child to parent.

Simple language me:
👉 Event pehle child pe chalega
👉 Fir parent
👉 Fir grandparent
👉 Upar ki taraf move karega

<!-- 🔥 6. What is Event Delegation? -->
Event Delegation is attaching a single event listener to a parent element to handle events of its children.

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- 
document.getElementById("parent").addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    console.log("Button clicked");
  }
}); -->
👉Ye delegation hai
👉 Dynamic elements ke liye best method

<!-- 3️⃣ addEventListener -->
addEventListener is used to attach an event handler to an element.
<!-- 
element.addEventListener("click", function() {
  console.log("Clicked");
}); -->


<!-- 🔥 12. What is Debouncing? -->
Debouncing is a technique that delays the execution of a function until a certain time has passed since the last event trigger.
Hindi:-
Debouncing ek technique hai jisme function tab execute hota hai jab event trigger hona band ho jata hai ek fixed delay ke baad.

Simple language me:

👉 User typing kar raha hai
👉 Har keypress par API call nahi karenge
👉 Thoda rukne ke baad hi call karenge

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

<!-- 🔥 15. What is localStorage? -->
Local Storage is a client-side web storage mechanism that stores data in key-value pairs in the browser with no expiration time.

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
============================================================================================
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

 ============================================================================================
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
==============================================================================================