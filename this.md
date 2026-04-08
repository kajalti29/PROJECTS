------------------------------------------
<!-- IMPORTANTE -->
<!-- 1️⃣1️⃣ What is typeof operator? -->
It is used to check the data type of a variable.
typeof 10;      // "number"
typeof "hi";    // "string
-------------------------------------------------------------------------
----------------------------------------------------------
--------------------------------------------------------------------------------------------------


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
