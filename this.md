<!-- what is js ? -->
Javascript is a high-level, interprited and object-oriented programming language used to make websites interactive and dynamic.It work in the brower and also on the server.

<!-- Features -->

<!-- Lightweight – Simple aur fast. -->
<!-- Dynamic – Variables ka type run-time par decide hota hai. -->
<!-- Event-Driven – User actions par kaam karta hai. -->
<!-- Prototype-based – Classes ki jagah prototypes use karta hai. -->

---------------------------------------------------------------------------------------------------------------------

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

* Const :- Variable cannot be re-declared and cannot be update.

<!-- Example:-  const country = "India";
           console.log(country);   //India -->


* var :- 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
🟠 Functions :-

<!-- Functions -->
A function is a block of code that performs a specific task and can be reused.

<!-- 
function greet() {
  console.log("Hello World");
}

greet(); // function call 
-->

* Functions Basics:-

Syntax
<!--
 function functionName() {
  // code
} 
-->

* Why use functions?

* Code reuse
* Easy to read
* Easy to maintain
-----------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- Function Declaration  -->
Function Declaration means defining a function using the function keyword with a name.
✔ Hoisting supported (call before define)

Example:- 1
<!-- 
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7
 -->


Example:- 2
<!-- 
console.log(add(2, 3)); // 5

function add(a, b) {
    return a + b;
} -->

------------------------------------------------------------------------------------------------------------------------------------

Real Life Example (Samajhne ke liye)
🏠 Function Declaration

Jaise ghar pehle se bana ho

Jab chaaho use kar sakte ho

🏠 Function Expression

Jaise ghar baad me ban raha ho

Pehle use karoge to error

-----------------------------------------------------------------------------------------------------------------------------------------------------------

<!--Function Expression -->
Function Expression is a function stored in a variable and is not hoisted like function declarations.
<!-- 
console.log(add(2, 3)); // ❌ Error

const add = function(a, b) {
    return a + b;
}; -->

Example:-2
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 4));

-----------------------------------------------------------------------------------------------------------------------------------------------

<!-- Arrow Functions -->
An Arrow Function is a shorter and modern way to write a function in JavaScript using the => syntax. It is a type of function expression and does not have its own this.

Hindi:-
Arrow Function JavaScript me function likhne ka ek chhota aur modern tarika hota hai, jisme => (arrow) ka use hota hai. Ye ek function expression hota hai aur iska khud ka this nahi hota.

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

this:-
this refers to the object that is currently calling the function.
this us object ko refer karta hai jo function ko call kar raha hota hai.

Easy Example (Normal Function)

<!-- 
const student = {
    name: "Rahul",
    showName: function() {
        console.log(this.name);
    }
};

student.showName(); -->

🔍 Explanation

student object ne showName() call kiya
Isliye this = student
Output:
<!-- Rahul -->

---------------------------------------------------------------------------------------------------------------------------------------
<!-- Parameters  -->
A parameter is a variable used in a function definition to receive values.

function add(a, b) {
    return a + b;
}


<!-- Arguments -->
An argument is the actual value passed to a function when it is called.

add(3, 4);

<!-- Return Statement -->
The return statement is used to send a value back from a function and stop its execution.

Hindi
Return statement function se value wapas bhejne aur function ko stop karne ke liye use hota hai.
<!-- 
function add(a, b) {
    return a + b;
}

let result = add(3, 4);
console.log(result); // 7 -->

-------------------------------------------------------------------------------------------------------------------------------------------------------
<!-- Callback Functions -->
A callback function is a function that is passed as an argument to another function and is executed later.

Callback function ek aisa function hota hai jo kisi dusre function ko argument ke roop me pass kiya jata hai aur baad me call hota hai.
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

-----------------------------------------------------------------------------------------------------------------
<!-- IIFE (Immediately Invoked Function Expression) -->
IIFE is a function expression that is executed immediately after it is defined.

Basic Syntax:-
<!-- 
(function() {
    console.log("IIFE executed");
})(); -->

Arrow Function IIFE:-
<!-- 
(() => {
    console.log("Arrow IIFE");
})(); -->


IIFE is a function expression that runs immediately after creation.
====================================================================================================================================================================================================

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

🔹 7. slice() – Extract part (does NOT change original)
                Return a part of the array.
<!-- 
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);
console.log(neArr);   //[2, 3] 
-->

🔹 8. splice() – Add / Remove / replace elements (changes original)
<!-- 
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 4] -->

🔹 9. indexOf() – Find index
<!-- 
let arr = [10, 20, 30];
console.log(arr.indexOf(20)); // 1
 -->

 🔹 10. includes() – Check value exists or not
<!-- 
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true -->

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔹 11. forEach() – 
forEach() is used to run a function on each item of an array.
Hindi:
forEach() array ke har element par ek function chalata hai.
<!-- 
array.forEach(function(element, index, array) {
  // code
});

 -->
Parameters:

element → current value
index (optional) → position
array (optional) → original array

Example:- 1
<!-- 
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(items){
    console.log(item);
});
 -->

Output:-Apple
        Banana
        Mango

Example:- 2
<!-- 
let number = [10, 20, 30];

number.forEach(function(value, index) {
    console.log(index + " : " + value);
}); -->


Example:-3 Arrow function:-Arrow function ek short form hota hai function likhne ka.
<!-- 
let number =[10, 20, 30];

number.forEach((value, index) => {
    console.log(index + " : " +value);
}); -->

Output:
0 : 10
1 : 20
2 : 30
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🔹 12. map() – Create a new array
🧠 Syntax:-
<!-- 
let newArray = array.map((value, index) => {
    return newValue;
}); -->

Example:-1 
<!-- 
let arr = [1, 2, 3];

let newArr = arr.map(num => num * 2);
console.log(newArr);    //[2, 4, 6]
 -->

2️⃣ map() kya karta hai?

Array ke har element par function chalata hai
Naya array banata hai

3️⃣ num => num * 2 kya hai?
Ye arrow function hai
num → current value
num * 2 → jo value return hogi

👉 Iska matlab: har number ko 2 se multiply karo
<!-- 
Same code (normal function se)

let newArr = arr.map(function(num) {
    return num * 2;
}); -->
=======================================================================================================================
🔹 13. filter() – Filter values
English:
filter() creates a new array with elements that pass a test (condition).

Hindi:
filter() condition ke according values ko filter karke naya array banata hai.

<!-- 🧠 Syntax
let newArray = array.filter((value, index) => {
    return condition;   // true ya false
});

 -->

let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(num => num % 2 === 0);
 
console.log(even);  //[2, 4, 6]


<!-- : Numbers Greater Than 10 -->
let nums = [5, 12, 8, 20, 3];

let result = nums.filter(n => n > 10);

console.log(result);

Output:
[12, 20]

🔹 14. reduce() – Reduce an array to a single value.
reduce() array ki sab values ko mila kar ek hi value banata hai.
<!-- 
let result = array.reduce((accumulator, currentValue) => {
    return updatedValue;
}, initialValue);

 -->

accumulator (acc) → ab tak ka result
currentValue → current element
initialValue → starting value (optional but recommended)

Example:-1 Sum of Numbers
<!-- 
let number = [1, 2, 3, 4];

let sum = num.reduce((acc, cur) => {
    return acc + cur;
}, 0);

consolo.log(sum);  //10
 -->
 Step 1:                                     
acc = 0   // startValue                  
cur = 1
acc + cur = 1

Step 2:
acc = 1
cur = 2
acc + cur = 3

Step 3:
acc = 3
cur = 3
acc + cur = 6

Step 4:
acc = 6
cur = 4
acc + cur = 10

➡️ Final answer = 10


Example :- 2

Total price
<!-- 
let price = [100, 200, 50];

let total = price.reduce((acc, cur) => {
    return acc + cur;
}, 0);    //350
 -->

map / filter / reduce yaad rakhne ka trick

map → change karo
filter → choose karo
reduce → jod kar ek banao
-----------------------------------------------------------------------------------------------------------------------------------------------------------
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
🔹 21. every() – All true?

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

==============================================================================================================================================================

🟣 1️⃣ Objects in JavaScript
* Objects:- An object is a collection of key : value pairs.
<!-- 
let student = {
  name: "Kajal",
  age: 23,
  city: "Indore"
};
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

Hindi:
this current object ko refer karta hai.
<!-- 
let person = {
  name: "Kajal",
  age: 23,
  show() {
    console.log(this.name);
  }
};

person.show(); // Kajal -->

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

6️⃣ JSON (parse, stringify) :-

🔹 What is JSON?
JSON is a data format used to send and receive data.
JSON ek data format hai jo server aur client ke beech data transfer karta hai.

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

QUENTIONS:-
<!-- 1️⃣ What is an object in JavaScript? -->
An object is a collection of key-value pairs.

<!-- 2️⃣ How do you create an object? -->
let user = { name: "Kajal", age: 23 };

<!-- 3️⃣ How do you access object properties? -->
user.name;        // Dot notation
user["age"];     // Bracket notation

<!-- 4️⃣ Difference between dot and bracket notation? -->
| Dot           | Bracket        |
| ------------- | -------------- |
| Simple & fast | Dynamic keys   |
| No spaces     | Spaces allowed |

<!-- 5️⃣ What is an object method? -->
English: Function inside an object

<!-- 6️⃣ What is the this keyword? ⭐⭐ -->
English: Refers to the current object
let user = {
  name: "Kajal",
  show() {
    console.log(this.name);
  }
};
<!-- 7️⃣ What is object destructuring? -->
Hindi: Object se direct values nikalna
let { name, age } = user;

<!-- 🔟 Difference between object and array? -->
| Object    | Array       |
| --------- | ----------- |
| Key-value | Index-based |
| Unordered | Ordered     |

<!-- 1️⃣7️⃣ Is object mutable? -->
✅ Yes, objects are mutable.
=================================================================================================================================================================
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
===========================================================================================================================================================================
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
========================================================================================================================================================

🔴 DOM (Very Important):-
<!-- What is DOM -->
DOM (Document Object Model) is a programming interface that allows JavaScript to access, modify, add, or delete HTML elements and change the content of a web page.

Hindi:
DOM JavaScript ko HTML page ke elements ko access aur change karne deta hai.

HTML
<!-- <p id="text">Hello</p> -->

JavaScript
<!-- document.getElementById("text").innerText = "Hi"; -->

👉 Page par Hello → Hi ho jayega
----------------------------------------------------------
<!-- Why DOM is used? -->
👉 To make web pages dynamic and interactive.

| HTML                 | DOM                     |
| -------------------- | ----------------------- |
| Static               | Dynamic                 |
| Markup               | Programming interface   |
| Cannot change itself | Can be changed using JS |

<!-- What is document? -->
👉 document is the root object of DOM.

<!-- What is window? -->
👉 window is the global object in browser.

<!-- 8️⃣ What is DOM tree? -->
👉 Hierarchical structure of HTML elements (parent–child).
------------------------------------------------
<!-- Selecting Elements -->
JavaScript me HTML elements ko select karne ke liye methods use hote hain.

🔹 getElementById():-
👉 ID ke base par element select karta hai
HTML:-
<!-- <p id="para">Hello</p> -->
JS:-
<!-- 
let p = document.getElementById("para");
console.log(p); -->

🔹 querySelector():- 
👉 CSS selector ki tarah kaam karta hai.
<!-- 
document.querySelector("#para");   // id
document.querySelector(".box");    // class
document.querySelector("p");       // tag
 -->
-----------------------------------------------------------
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

🔶 ADVANCED JAVASCRIPT (INTERVIEW COMPLETE):-

🟢 1️⃣ Scope (Global, Local, Block)
<!-- 🔹 Scope kya hota hai? -->
Scope defines where a variable can be accessed in a program.
Hindi:-Scope batata hai ki variable ko kaha access (use) kar sakte hain.

Global → everywhere
Local → inside function
Block → inside { }

<!-- 🔹 Global Scope:- -->
👉 Variable poore program me access hota hai
<!-- 
let x = 10; // global

function show() {
  console.log(x);
}
show(); // 10
 -->

🟡 Local (Function) Scope:-
Variable function ke andar declare hota hai
Sirf usi function ke andar use hota hai.
<!-- 
function test() {
  let y = 5; // local
  console.log(y);
}
test();
// console.log(y); ❌ error
 -->
 NOTE:-
y sirf function ke andar zinda hai
Function ke bahar y exist hi nahi karta

🟣 Block Scope:-
{ } ke andar declare variable.
<!-- 
if (true) {
  let z = 20;
  console.log(z); // 20
}
// console.log(z); ❌ error -->

-----------------------------------------------------------------------------------------------------------------------
🟢 2️⃣ Hoisting (MOST ASKED 🔥):-
Hoisting is JavaScript’s behavior where variable and function declarations are moved to the top of their scope before execution.

HINDI:_Hoisting JavaScript ka behavior hai jisme declarations ko code run hone se pehle upar move kar diya jata hai.

| Type                 | Hoisting      |
| -------------------- | ------------- |
| `var`                | ✅ (undefined) |
| `let`                | ❌ (TDZ)       |
| `const`              | ❌ (TDZ)       |


🔹 Example 1: var Hoisting
<!-- 
console.log(a); // undefined
var a = 10; -->

👉 JavaScript ise aise samajhti hai:
<!-- 
var a;
console.log(a);
a = 10; -->

🔹 Example 2: let & const
<!-- 
console.log(b); // ❌ Error
let b = 20; -->

👉 Reason:
let aur const hoist to hote hain,
lekin Temporal Dead Zone (TDZ) me hote hain
isliye access nahi kar sakte.

🔹 Example 3: Function Hoisting
<!-- 
hello();

function hello() {
  console.log("Hello");
} -->

👉 Output:
Hello

<!-- TDZ (Temporal Dead Zone):- -->
Temporal Dead Zone is the time between variable hoisting and its initialization when the variable cannot be accessed.

👉 Ye wo time/area hota hai
jab let aur const variables declare hone se pehle
use nahi kiye ja sakte.
<!-- 
console.log(a); // ❌ Error (TDZ)
let a = 10; -->

👉 a exist karta hai,
lekin jab tak line let a = 10; run nahi hoti
tab tak access karna mana hai.
-------------------------------------------------------------------------------------------------------------------------
🟢 3️⃣ Closures (VERY IMPORTANT 🔥):-
Closure tab banta hai jab inner function, outer function ke variables ko access karta hai, even after outer function has finished.

HINDI:_
👉 Function apne outer (bahar ke) variables ko yaad rakhta hai, chahe outer function execute ho chuka ho.

<!-- Real Life Example 🧠 -->
Socho:
Tumhari diary (outer function)
Uske andar secret page (inner function)
Diary band ho gayi
Par secret page ko secret yaad hai 😄

Example:-
<!-- 
function outer() {
    let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

let result = outer();
result(); // 1
result(); // 2
result(); // 3
 -->

1️⃣ Outer function
2️⃣ Outer variable
3️⃣ Inner function return
Bas ✔️ itna yaad rakhna hai

-----------------------------------------------------------------------------------------------------------------------------------------------
🟢 4️⃣ Execution Context:-
👉 JavaScript code run hone se pehle Execution Context banta hai.
🔹 Types:

✔ Global Execution Context
✔ Function Execution Context

<!-- 🟢 5️⃣ Call Stack:- -->
Call Stack ek stack (LIFO) structure hai jo track karta hai
ki kaunsa function abhi run ho raha hai aur kaunsa baad me run hoga.
LIFO = Last In, First Out
<!-- 
function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();
 -->
 o/p:-   First
         Second

🟢 6️⃣ Memory Heap:-
Memory Heap mtlb Jahan objects & reference data store hote hain.

let obj = { name: "JS" };

<!-- 🟢 7️⃣ Event Loop (INTERVIEW FAVORITE 🔥🔥):- -->
👉 Event Loop asynchronous code ko handle karta hai.
(jaise setTimeout, promises, events)
<!-- 
console.log("start);

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End"); -->

o/p:-Start
     End
     Timeout


🟢 8️⃣ setTimeout:-
👉 Function ko delay ke baad run karta hai.
setTimeout runs a function once after a delay.
<!-- 
setTimeout(() => {
  console.log("Hello");
}, 2000); -->

🟢 9️⃣ setInterval:- 
👉 Function ko bar-bar run karta hai.
setInterval runs a function repeatedly at fixed intervals.
<!-- 
setInterval(() => {
  console.log("Hi");
}, 2000);

 -->
 o/p:-
Hi
Hi
Hi
...

Stop kaise kare?
🔹 clearTimeout
<!-- 
let t = setTimeout(() => {
  console.log("Hello");
}, 2000);

clearTimeout(t); -->

🔹 clearInterval
<!-- 
let i = setInterval(() => {
  console.log("Hi");
}, 2000);

clearInterval(i); -->

=========================================================================================================================================================
ASYNCHRONOUS JAVASCRIPT (INTERVIEW MUST)

🟢 2️⃣ Synchronous vs Asynchronous

🔹 Synchronous:-
👉 Line-by-line code execution (blocking).
<!-- 
console.log("A");
console.log("B");
console.log("C"); -->

0/p:- A B C

🔹 Asynchronous:-
Asynchronous means the code does not wait.
execute the code without waiting.

EXAMPLE:_ 1
<!-- 
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("c"); -->

o/p:-
A 
C
B

EXAMPLE:_2

<!-- console.log("Start");

setTmeout(() => {
    console.log("Async");
}, 1000);

console.log("End"); -->

Output:
Start
End
Async

---------------------------------------------------------------------------------------------------------------------------------------------------
🔵 Callbacks:-
A callback is a function passed as an argument to be executed after a task is completed.

HINDI:-
Callback ek function hota hai jo dusre function ke complete hone ke baad call hota hai.
<!-- 
function first(callback){
    console.log("First function done");
    callback();
}

function second(){
    console.log("Second function called");
}

first(second); -->

--------------------------------------------------Agar dono callback hote to aisa hota 👇
<!--
 function main(cb1, cb2) {
  cb1();
  cb2();
}

function one() {
  console.log("One");
}

function two() {
  console.log("Two");
}

main(one, two); -->

✔️ Yahan 2 callback functions hain → one, two
-------------------------------------------------------------------
🟢 4️⃣ Promises (VERY IMPORTANT 🔥):-
A Promise is an object that represents future success or failure.
A Promise is an object used to handle future results of an operation.
Hindi:-
Promise ek object hota hai jo future me
success (resolve) ya failure (reject) batata hai.

<!-- Promise States -->
✔ Pending
✔ Resolved
✔ Rejected
<!-- 
let promise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

 -->
Why Promises?
👉 To avoid callback hell
 ------------------------------------------------------------------------------------------------------------
🟢 5️⃣ async / await (MOST ASKED 🔥🔥):-
async → makes a function return a Promise

async function hello() {
  return "Hello";
}


await → waits for a Promise to resolve
async function show() {
  let result = await Promise.resolve("Done");
  console.log(result);
}
show();


<!-- Pizza Order Example -->
<!-- 
async function orderPizza() {
  console.log("Order placed");

  let pizza = await getPizza(); // wait
  console.log("Pizza received");

  console.log("Eating pizza");
} -->


📌 Matlab:

Order diya
Wait kiya pizza ke aane ka
Pizza mila
Khana shuru 😄

-------------------------------------------------------------------------------------------------------------------
🟢 6️⃣ Fetch API:-
👉 Server se data lane ke liye use hota hai.
Fetch → get data from server
<!-- 
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err)); -->

🔹 Fetch using async/await
<!-- 
async function fetchData() {
  let res = await fetch("https://api.example.com/data");
  let data = await res.json();
  console.log(data);
} -->

🟢 7️⃣ Error Handling (try-catch):-
👉 Error ko handle karne ke liye
<!-- 
try {
  let x = y + 10;
} catch (err) {
  console.log("Error occurred");
} -->

==========================================================================================================================================================================

<!-- ES6+ Features -->
ES6 (ECMAScript 2015) se JavaScript me new features aaye
jo code ko short, clean aur powerful banate hain.

1️⃣ Template Literals:- 
👉 String ko easy aur clean tarike se likhne ke liye.
<!-- 
❌ Old way
let name = "Rahul";
console.log("Hello " + name); 
-->
<!-- 
✅ ES6 way
let name = "Rahul";
console.log(`Hello ${name}`);
 -->
✔ Backtick ( ) use hota hai
✔ ${ } ke andar variable
🧠 Use: String + variable combine karna easy

EXAMPLE:-

<!-- let name = "Kajal";
let age = 22;

let msg = `My name is ${name} and my age is ${age}`;
console.log(msg);
 -->


Normal string:

"Sum is " + (a + b)

Template literal:

`Sum is ${a + b}`
----------------------------------------------------------------------------------------------------------

🟢 2️⃣ Spread Operator (...):-


| Spread                      | Rest                            |
| --------------------------- | ------------------------------- |
| Values ko **phailaata** hai | Values ko **collect** karta hai |
| Use while calling           | Use while defining              |
| `sum(...arr)`               | `function sum(...arr)`          |

🟢 2️⃣ Spread Operator (...):-
Array ya object ko expand karta hai.

Example (Array)
<!-- 
let a = [1, 2, 3];
let b = [...a, 4, 5];

console.log(b); // [1,2,3,4,5] -->

Example (Object)

<!-- let obj1 = { name: "A" };
let obj2 = { ...obj1, age: 20 };
 -->

------------------------------------------------------------------------
3️⃣ Rest Operator (...):-

👉 Multiple values ko ek array me collect karna
<!-- 
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30); -->

📌 Output:
[10, 20, 30]

-----------------------------------------------------------------------------------------------------------
4️⃣ Modules (import, export):-
👉 Code ko alag-alag files me todna.

👉 export se cheez bahar bhejte hain
👉 import se cheez andar le aate hain

📁 math.js
<!-- 
export function add(a, b) {
  return a + b;
} -->

📁 main.js
<!-- 
import { add } from "./math.js";
console.log(add(2, 3)); -->

-----------------------------------------------------------------------------------------------------------------
🟢 5️⃣ Default Parameters:-
Default Parameters ka matlab hota hai:
👉 Function ke parameter ko pehle se hi ek value de dena,
taaki agar user koi value pass na kare to function error na de aur default value use ho jaye.

Default parameters allow function parameters to have predefined values if no argument is passed.
<!-- 
function greet(name = "User") {
  console.log("Hello " + name);
}

greet();        // Hello User
greet("Kajal"); // Hello Kajal -->

---------------------------------------------------------------------------------------------------
Optional Chaining

🟢 Optional Chaining (?.):-

