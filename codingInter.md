
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