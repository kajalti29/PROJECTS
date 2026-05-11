
# 🔥 1. Reverse a String
```js
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); 
```

```js
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); 
```


```js
function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findLargest([10, 5, 20, 8]));
```


```js
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4]));
```
```js
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));
```

```js
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}
```

```js
function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
```

---

# 🔥 9. Flatten Nested Array

### 💻 Code:

```js
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]]]));
```

---

# 🔥 10. Find Second Largest Number

### 💻 Code:

```js
function secondLargest(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted[1];
}

console.log(secondLargest([10, 5, 20, 8]));
``


====================================================================================================


<!-- 🔥 1️⃣ Remove Duplicates from Array -->
<!-- function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4]));
// [1,2,3,4]
 -->
<!-- 🔥 2️⃣ Reverse a String (Very Common) -->
Loop from last to first.
<!-- 
function reverseString(str) {
  let result = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  
  return result;
}

console.log(reverseString("hello"));
// "olleh" -->

<!-- 🔥 3️⃣ Find Maximum Number in Array -->
Array
🧠 Logic:
Compare each element.
<!-- 
function findMax(arr) {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

console.log(findMax([10,5,20,8]));
// 20 -->

🔥 5️⃣ Count Frequency of Elements
🧠 Question:

Count how many times each element appears.
<!-- 
✅ Code:
function countFrequency(arr) {
  let result = {};
  
  for (let num of arr) {
    result[num] = (result[num] || 0) + 1;
  }
  
  return result;
}

console.log(countFrequency([1,2,2,3,3,3]));
// {1:1, 2:2, 3:3} -->

🔥 6️⃣ Check Palindrome
<!-- 
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
// true -->

✅ Reverse String
<!-- 
function reverse(str){
  return str.split("").reverse().join("");
} -->

✅ Flatten Array
<!-- 
function flatten(arr){
  return arr.flat(Infinity);
} -->

✅ Remove Duplicates
<!-- 
function removeDup(arr){
  return [...new Set(arr)];
} -->

--------------------------------------------------------
# 🔥 1️⃣ Reverse a String

### ✅ Logic:

Last se first tak loop karo.

```js
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("hello"));
// "olleh"
```

---

# 🔥 2️⃣ Check Palindrome

### ✅ Logic:

Reverse karo → compare karo.

```js
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
// true
```

---

# 🔥 3️⃣ Count Vowels

### ✅ Logic:

Har character check karo.

```js
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));
// 2
```

---

# 🔥 4️⃣ Check Anagram

👉 Same characters, same frequency.

```js
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === 
         str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));
// true
```

---

# 🔥 5️⃣ Remove Duplicates from String

```js
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("programming"));
// "progamin"
```

---

# 🔥 6️⃣ Find Longest Word

```js
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("I love JavaScript coding"));
// "JavaScript"
```

---

# 🔥 7️⃣ First Non-Repeating Character

```js
function firstNonRepeating(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcde"));
// "c"
```
==================================================================================================================================================================================
<!-- 1️⃣ Button Click Counter -->
Logic
Create a variable count
When button clicked → increase count
Update the text in DOM

<div class="btn"> 
    <p id="count">0</p>
    <button id="btn">Click</button>
</div>

<!-- 
let count = 0;

const btn = document.getElementById("btn");
const display = document.getElementById("count");

btn.addEventListener("click", function () {
  count++;
  display.innerText = count;
}); -->
----------------------------------------------------------
2️⃣ Toggle Dark Mode
Add/remove class on button click
CSS controls dark mode

<button id="toggle">Dark Mode</button>

<!-- 
const btn = document.getElementById("toggle");

btn.addEventListener('click', function(){
    document.body.classList.toggle('dark')
});   -->


body{
  background: white;
  color: black;
}

.dark{
  background: black;
  color: white;
}

-----------------------------------------------------------
<!-- 3️⃣ Show Input Value -->
Get value from input
Show it inside paragraph

<input id="name">
<button onclick="showName()">Submit</button>
<p id="result"></p>

<script>
function showName(){
  let value = document.getElementById("name").value;
  document.getElementById("result").textContent = value;
}
</script>

-----------------------------------------------------------
<!-- 4️⃣ Change Text on Button Click -->
Logic
Select element
Change text using JS

<p id="text">Hello</p>
<button onclick="changeText()">Change</button>

<script>
function changeText(){
  document.getElementById("text").textContent = "Welcome";
}
</script>
--------------------------------------------------------------
Map():-
map() JavaScript का array method है जो हर element पर function चलाकर नया transformed array return करता है।

map() is an array method that applies a function to each element and returns a new transformed array.

A real-life example of map() is updating product prices after adding tax or discount to every item in an array.
map() applies a function to each element and returns a new transformed array.
<!-- 
const prices = [100, 200, 300];
const finalPrices = prices.map(price => price + 18);
console.log(finalPrices); -->

O/P:-
[ 118, 218, 318 ]

<!-- 
const nums = [1, 2, 3, 4];
const result = nums.map(num => num * 2);
console.log(result); -->


<!-- reduce():- -->
reduce() is an array method used to reduce all array elements into a single value.
It can return:
Sum
Total
Count
Average
Object 
Array

<!-- Real-Life Example -->
A real-life example of reduce() is calculating the total bill amount of items in a shopping cart.

<!-- 
const cart = [500, 1000, 1500];
const totalBill = cart.reduce((acc, price) => acc + price, 0); 
console.log(totalBill);-->

array.reduce((accumulator, currentValue) => {
   return updatedValue;
}, initialValue);

<!-- 
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); -->

<!-- filter():- -->
filter() is an array method used to return only those elements that satisfy a condition.
It creates a new array with matching elements.
array.filter((value, index, array) => {
   return condition;
});
<!-- 
const nums = [10, 20, 30, 40];
const result = nums.filter(num => num > 20);
console.log(result); -->

Output
[30, 40]

👉 Only numbers greater than 20 are returned.

filter() का real-life example है shopping website में केवल expensive products या active users को दिखाना।

A real-life example of filter() is showing only expensive products or active users from a list based on a condition.

<!-- forEach():- -->
forEach() is an array method used to iterate over each element of an array.
It executes a function for every element but does not return a new array.

forEach() JavaScript का array method है जो array के हर element पर function execute करता है, लेकिन नया array return नहीं करता।

A real-life example of forEach() is displaying a list of students or users one by one.
<!-- 
const students = ["Kajal", "Rahul", "Aman"];

students.forEach(student => {
  console.log(student);
}); -->


<!-- find():- -->
find() is an array method used to return the first element that satisfies a given condition.

A real-life example of find() is searching for a specific user or product by ID from a list.

<!--
 const users = [
  { id: 1, name: "Kajal" },
  { id: 2, name: "Rahul" }
];
const user = users.find(u => u.id === 2);
console.log(user); -->

O/P:-
{ id: 2, name: "Rahul" }

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
-------------------------------------------------------------------------------------------------------
| find()                | filter()                      |
| --------------------- | ----------------------------- |
| Returns first element | Returns all matching elements |
| Returns single value  | Returns array                 |


--------------------------------------------------------------------------------------------------------------------------
<!-- Conditions in JavaScript:- -->
Conditions are used to make decisions in JavaScript.
They check whether something is:

true or false

and execute code accordingly.


## 1. `if`
 Executes code when the condition is true.

if (condition) {
   // code
}
<!-- 
let age = 18;

if (age >= 18) {
  console.log("Eligible");
} -->

## 2. `if...else`
👉 Executes one block if condition is true, otherwise another block.
if (condition) {

} else {

}
<!-- 
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
} -->

## 3. `else if`
👉 Used to check multiple conditions.

if () {
} else if () {

}
<!-- 
let marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("Fail");
} -->

## 4. Ternary Operator

👉 Short form of `if...else`.
condition ? true : false
<!-- 
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); -->

## 5. `switch`
👉 Used to compare multiple cases.

switch(value)
<!-- 

let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
} -->
-------------------------------------------------------------------------------------------
<!-- Loops in JavaScript:- -->
Loops are used to execute a block of code repeatedly until a condition becomes false.

<!-- 1. for Loop -->
👉 Used when number of iterations is known.
<!-- 
for (let i = 1; i <= 5; i++) {
  console.log(i);
} -->

Output
1
2
3
4
5

<!-- 2. while Loop -->
👉 Used when number of iterations is Unknown.
<!-- 
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
} -->

<!-- 3. do...while Loop -->
👉 Executes at least one time.
<!-- 
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5); -->

<!-- 4. for...of -->
👉 Used to iterate array values.
<!-- 
const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
} -->

<!-- 5. for...in -->
👉 Used to iterate object keys.
<!-- 
const user = {
  name: "Kajal",
  age: 21
};

for (let key in user) {
  console.log(key);
} -->


real-life example:-
const students = ["Kajal", "Rahul", "Aman"];

for (let student of students) {
  console.log(student);
}
----------------------------------------------------------------------

<!-- 8. DOM Manipulation ⭐ -->
DOM Manipulation means accessing and changing HTML elements using JavaScript.

<!-- 1. Select Element -->
<!-- By ID -->
document.getElementById("heading");
<!-- By Class -->
document.getElementsByClassName("box");
<!-- Query Selector -->
document.querySelector(".box");

<!-- 2. Change Text -->
document.getElementById("title").innerText = "Hello";

<!-- 3. Change HTML -->
document.getElementById("demo").innerHTML = "<h1>Hi</h1>";

<!-- 4. Change CSS -->
document.getElementById("box").style.color = "red";

<!-- 5. Add Event -->
button.addEventListener("click", () => {  
  alert("Button Clicked");});

<!-- 6. Create Element -->
const p = document.createElement("p");p.innerText = "New Paragraph";document.body.appendChild(p);
--------------------------------------------------------------
<!-- Events:- -->
Events are actions performed by the user or browser that JavaScript can detect and handle.

| Event   | Definition                        |
| ------- | --------------------------------- |
| click   | Triggered when element is clicked |
| change  | Triggered when value changes      |
| submit  | Triggered when form submits       |
| keydown | Triggered when key is pressed     |
| keyup   | Triggered when key is released    |

1. click Event:-
👉 Triggered when user clicks an element.
<!-- 
button.addEventListener("click", () => {
  console.log("Button Clicked");
}); -->

2. change Event
👉 Triggered when input/select value changes.
<!-- 
input.addEventListener("change", () => { 
   console.log("Value Changed");
   }); -->

Real-Life Example
Selecting country from dropdown.

3. submit Event
👉 Triggered when form is submitted.
<!-- 
form.addEventListener("submit", (e) => { 
   e.preventDefault(); 
  console.log("Form Submitted");
  }); -->
  
Real-Life Example
Login/Register form submission.

4. Keyboard Events
👉 Triggered when keyboard keys are pressed.

keydown
input.addEventListener("keydown", () => {
    console.log("Key Pressed");
    });

keyup
input.addEventListener("keyup", () => {  console.log("Key Released");});
-----------------------------------------------------------------------
<!-- ES6 Features in JavaScript -->
ES6 (ECMAScript 2015) introduced modern JavaScript features that make code shorter, cleaner, and easier to write.

<!-- 2. Template Literals -->
👉Template Literals Used to insert variables or dyanamic values inside strings using backticks ` `.

const name = "Kajal";
console.log(`My name is ${name}`); 
O/P:-
My name is Kajal.

<!-- 3. Destructuring -->
Destructuring is used to extract values from arrays or objects into variables.

<!-- Object Destructuring -->
const user = {
  name: "Kajal",
  age: 21
};

const { name, age } = user;

console.log(name);

<!-- Array Destructuring -->

const nums = [10, 20];

const [a, b] = nums;

<!-- 4. Spread Operator (...) -->
Spread operator is used to expand or copy arrays and objects.

const arr1 = [1, 2];

const arr2 = [...arr1, 3];

<!-- 5. Rest Operator (...) -->
Rest operator collects multiple arguments into a single array.

function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3);

-----------------------------------------------------------------------
<!-- 1. Event Bubbling in JavaScript -->
Event Bubbling means an event starts from the child element and bubbles up to the parent elements.

Real-Life Example
👉 Clicking a button inside a card also triggers card click event

Child → Parent → Grandparent

<div id="parent">
  <button id="child">Click</button>
</div>

document.getElementById("parent")
  .addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("child")
  .addEventListener("click", () => {
    console.log("Button Clicked");
});

O/P:-
Button Clicked
Parent Clicked
👉 First child executes, then parent.

<!-- Stop Event Bubbling -->
event.stopPropagation();


<!-- 2. Debouncing:- -->
Debouncing delays function execution until a certain time passes after the last event trigger.

<!-- Real-Life Example -->
👉 Search bar API calls.

Without debounce:

API calls on every keypress ❌

With debounce:

API call after user stops typing ✅
<!-- 
function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
} -->

<!-- 3. Throttling:- -->
Throttling limits function execution to once in a specified time interval.

========================================================================
ample 1

“Button click pe paragraph hide karo.”

Example 2

“Input me jo user type kare usko realtime show karo.”

Example 3

“Ek counter banao with + and - button.”

Example 4

“Todo app me delete functionality add karo.”

# Example 1

## Button Click Pe Paragraph Hide Karo

```html id="12yhq4"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hide Paragraph</title>
</head>
<body>

  <p id="para">Hello Kajal</p>

  <button id="btn">Hide</button>

  <script>

    let para = document.getElementById("para");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function () {

      para.style.display = "none";

    });

  </script>

</body>
</html>
```

---

# Example 2

## Input Me Jo User Type Kare Usko Realtime Show Karo

```html id="n0mvdf"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Realtime Input</title>
</head>
<body>

  <input type="text" id="input">

  <h1 id="text"></h1>

  <script>

    let input = document.getElementById("input");
    let text = document.getElementById("text");

    input.addEventListener("input", function () {

      text.innerText = input.value;

    });

  </script>

</body>
</html>
```

---

# Example 3

## Counter App (+ and - Button)

```html id="w2wzzv"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Counter</title>
</head>
<body>

  <h1 id="count">0</h1>

  <button id="plus">+</button>
  <button id="minus">-</button>

  <script>

    let count = 0;

    let number = document.getElementById("count");

    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");

    plus.addEventListener("click", function () {

      count++;
      number.innerText = count;

    });

    minus.addEventListener("click", function () {

      count--;
      number.innerText = count;

    });

  </script>

</body>
</html>
```

---

# Example 4

## Todo App Me Delete Functionality

```html id="fmr90u"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo</title>
</head>
<body>

  <input type="text" id="input">

  <button id="add">Add</button>

  <ul id="list"></ul>

  <script>

    let input = document.getElementById("input");
    let add = document.getElementById("add");
    let list = document.getElementById("list");

    add.addEventListener("click", function () {

      let li = document.createElement("li");

      li.innerText = input.value;

      let delBtn = document.createElement("button");

      delBtn.innerText = "Delete";

      delBtn.addEventListener("click", function () {

        li.remove();

      });

      li.appendChild(delBtn);

      list.appendChild(li);

      input.value = "";

    });

  </script>

</body>
</html>
```

---

# In 4 Examples Me Important DOM Concepts

| Concept          | Use                |
| ---------------- | ------------------ |
| getElementById   | element select     |
| addEventListener | event handling     |
| innerText        | text change        |
| value            | input value        |
| createElement    | new element banana |
| appendChild      | element add karna  |
| remove           | delete karna       |
| style.display    | hide/show          |

Ye sab fresher interviews me bahut common hain 🚀
