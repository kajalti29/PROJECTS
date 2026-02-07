// 1️⃣ What is an array?
// An array is a collection of multiple values store in a single variables. 

// Why array instead of variables?
// → Because it reduces code repetition and makes data processing easier.

// 2️⃣ How do you access the first and last element of an array?
let arr = [10, 20, 30, 40];
console.log(arr[0]);              // first
console.log(arr[arr.length - 1]); // last


// 4️⃣ Does array index always start from 0? Why?
// Yes, because arrays are zero-based indexed to optimize memory access.

// 3️⃣ Difference between for loop and forEach() for arrays?
// 👉 The for loop provides more control over iteration, while forEach() is a simpler and cleaner way to loop through arrays.

// -------------------------------------------------------------------------
// 🔥 TOP ARRAY METHODS – REAL INTERVIEW QUESTIONS
// 1️⃣ push() & pop() (VERY COMMON)

// ❓ What does push() do?
// Push() add element at end.

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); 
// Output :- [1, 2, 3, 4]


// ❓ What does pop() do?
// Pop() remove element from end.

// let arr = [1, 2];
// arr.pop(); // 3
// console.log(arr); // [1,2,3]

// Does push() change original array?
// ✅ Yes (mutates array)

// ❓ Difference between push() and unshift()?

// Push() add element at end.
// unshift() add elements at start.

// let arr = [2, 3];
// arr.unshift(1); // [1,2,3]

// Which is slower: push or unshift?
// ✅ unshift() (re-indexing happens)

// ------------------------------------------------------------------------------------

// 3️⃣ forEach() :- 
// “forEach() is a JavaScript array method that runs a function once for each element of an array.”
// It does not return a new array.(only loop chalata hai)

array.forEach(function(element, index, array) {
   // logic
});

// let numbers = [1, 2, 3, 4];

// numbers.forEach(function(num) {
//     console.log(num);
// });

// ...............-------------------------------------------------------------------------------------------
// 4️⃣ map() (MOST IMPORTANT):-
// “map() creates a new array by applying a function to each element of an array.”

let nums = [1,2,3];
let square = nums.map(n => n * n);


// Does map() change original array?
// ❌ No

// -------------------------------------------

// 5️⃣ filter()
// “filter() creates a new array with elements that satisfy a given condition.”

// let arr = [1, 2, 3, 4, 5];

// let evenArr = arr.filter(function(num){
//     return num % 2 === 0;
// });

// console.log(evenArr);

// -------------------------------------------------

// 5️⃣ reduce() (LOGIC CHECK)
// To reduce array to a single value (sum, max, object, etc.)

// let arr = [1, 2, 3, 4];

// let sum = arr.reduce(function(acc, cur){
//     return acc + cur;
// }, 0);

// console.log(sum); //10

// --------------------------------------------------

// 7️⃣ find() & findIndex()

// find() → return the first matching value(elem)
// findIndex() → returns the index of the first matching elem.

let users = [10, 20, 30];
users.find(x => x > 15);      // 20
users.findIndex(x => x > 15); // 1

// -----------------------------------------------------------------
8️⃣ Difference between includes() and indexOf()

includes() → true / false
indexOf() → index / -1

<!-- includes() -->
👉 includes() check karta hai ki value array me exist karti hai ya nahi.
👉 Result: true ya false
<!-- 
let arr = [10, 20, 30];

arr.includes(20); // true
arr.includes(40); // false -->

<!-- 🔍 indexOf() -->
👉 indexOf() value ka index return karta hai.
👉 Agar value na mile → -1
<!-- 
let arr = [10, 20, 30];

arr.indexOf(20); // 1
arr.indexOf(40); // -1 -->

<!-- -------------------------------------------------------- -->

<!-- 9️⃣ slice() vs splice() (VERY COMMON TRICK) -->
👉 slice() does not modify the original array, while splice() modifies the original array.
<!-- 
arr.slice(1,3);
arr.splice(1,1); -->

<!-- Which methods mutate array? -->
👉 push, pop, shift, unshift, splice, sort

<!-- ✔️ Which do NOT mutate? -->
👉 map, filter, reduce, slice, find

<!-- ------------------------------------------------ -->

<!-- 5️⃣ Print all elements of an array -->
let arr = [1, 2, 3, 4];

for(let i = 1; i<= arr.length; i++){
    console.log(arr[i]); 
}

