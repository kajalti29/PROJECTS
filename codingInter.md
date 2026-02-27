<!-- 🔥 1️⃣ Remove Duplicates from Array -->
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4]));
// [1,2,3,4]

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

--