
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

<!-- 
const nums = [1, 2, 3, 4];
const result = nums.map(num => num * 2);
console.log(result); -->


A real-life example of map() is updating product prices after adding tax or discount to every item in an array.
map() applies a function to each element and returns a new transformed array.

const prices = [100, 200, 300];
const finalPrices = prices.map(price => price + 18);
console.log(finalPrices);

O/P:-
[ 118, 218, 318 ]

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


