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




===================================================================================================================================
------------------------
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
