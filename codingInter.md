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