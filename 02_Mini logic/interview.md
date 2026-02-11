1️⃣ What is a variable in JavaScript?
<!-- 
2️⃣ How many ways can we declare variables in JavaScript? -->
There are three ways:
var
let
const

<!-- 4️⃣ Can we redeclare a variable using let? -->

Answer:
No, let cannot be redeclared in the same scope.


<!-- 5️⃣ Can var be redeclared? -->

Answer:
Yes, var can be redeclared.

<!-- 6️⃣ When do we use const? -->

Answer:
We use const when the value should not change.

7️⃣ Can we change the value of a const variable?

Answer:
No, a const variable cannot be reassigned.

<!-- 8️⃣ What is scope in JavaScript? -->

Answer:
Scope defines where a variable can be accessed.

var → function scope

let, const → block scope

---------------------------------------------------------------------------------------------------
<!-- data type and operaters -->
1️⃣ What are data types in JavaScript?

<!-- 2️⃣ How many data types are there in JavaScript? -->

Answer:
There are two categories:
* Primitive data types
* Non-primitive (Reference) data types

<!-- 3️⃣ What are primitive data types in JavaScript? -->

Answer:
Primitive data types are:
Number
String
Boolean
Undefined
Null
BigInt
Symbol

<!-- 🔟 What are non-primitive data types? -->

Answer:
Non-primitive data types are:
* Object
* Array
* Function

<!-- 1️⃣1️⃣ What is typeof operator? -->
It is used to check the data type of a variable.

typeof 10;      // "number"
typeof "hi";    // "string"

<!-- 1️⃣ What are operators in JavaScript? -->
Operators are symbols used to perform operations on values or variables.

<!-- 2️⃣ Types of operators in JavaScript? -->
Arithmetic operators
Assignment operators
Comparison operators
Logical operators
Unary operators
Ternary operator

============================================================================================================================================
<!-- 1️⃣ What is a conditional statement in JavaScript? -->

<!-- What are the types of conditional statements in JavaScript? -->

if
if–else
else if
switch
Ternary operator

<!-- 3️⃣ What is the difference between if–else and ternary operator? -->
Runs one block if condition is true, otherwise another block.
Ternary operator is a shorthand for simple conditions

<!-- age > 18 ? "Adult" : "Minor"; -->

<!-- 4️⃣ What is switch statement? -->
Used when comparing one value with many cases.

<!-- 5️⃣ Difference between == and === in conditions? -->
== checks value only
=== checks value and type (preferred)

<!-- 6️⃣ What is a loop in JavaScript? -->
Types of loops in JavaScript?
for
while
do–while
for...of
for...in

<!-- 8️⃣ Difference between for and while loop? -->
Used when you know the number of iterations.
Used when number of iterations is not known.

<!-- Difference between while and do–while? -->
while checks condition first
do–while runs at least once

<!-- What is break statement? -->
break stops the loop immediately.

<!-- 1️⃣1️⃣ What is continue statement? -->
continue skips the current iteration and moves to the next one.


===========================================================================================================================================================================







// Operators Question
// + with string
"5" + 3 // "53"

// In JavaScript, the + operator performs string concatenation if any one of the operands is a string.
// So, the number 3 is automatically converted into a string "3", and then both strings are joined together.

// - with string
"5" - 3 // 2

1 + 2 + "3" // "33"

"1" + 2 + 3 // "123"
// In both cases, when the + operator encounters a string, it converts the other operand to a string and concatenates them.
// --------------------------------------------------

0 == false
0 === false
true
false
// Why? == type conversion, === strict.
// --------------------------------------------------
null == undefined
null === undefined
Output:
true
false
// Why? == type conversion, === strict.
// The == operator compares only values, not data types.
// --------------------------------------------------

true + true // 2
true + false // 1
false + false // 0
// In JavaScript, true is treated as 1 and false as 0 when used in arithmetic operations.
// --------------------------------------------------

==================================================================================================================
condition statement":-
1. <!-- 
if (5 > 10) {
  console.log("Yes");
} else {
  console.log("No");
} -->
Output: No

2. 
<!-- if ("" ) {
  console.log("True");
} else {
  console.log("False");
} -->
Output: False

3. 
👉 empty string is falsy
<!-- 
if ("false") {
  console.log("Truthy");
}
// Output: Truthy -->
 
4. 
<!--
if ([]) {
  console.log("Truthy");
}
// Output: Truthy 😲 -->

5. <!-- if ([]) console.log("Yes"); -->
Output: Yes
👉 Array empty hai, par truthy hai

<!-- 6. if ({}) console.log("Object"); -->
✅ Output: Object

7. 
<!-- if ("0") console.log("Run"); -->
✅ Output: Run
👉 String empty nahi hai → truthy

8. 
<!-- 
Boolean(0)        // false
Boolean("")       // false
Boolean("Hello")  // true
Boolean([])       // true
Boolean(null)     // false -->

9. 
<!-- 
if (" ") {
  console.log("True");
} -->
Output: True
👉 space is a truthy string

10. 

============================================================================================================
<!-- 🔹 5️⃣ Check Leap Year -->
<!-- 
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
} -->

“A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.”

<!-- Step 1️⃣ – year % 4 === 0 -->

Agar year 4 se divide ho jaye (remainder 0 aaye)
👉 to wo leap year ho sakta hai.

Example:
2024 % 4 = 0 ✅

<!-- Step 2️⃣ – year % 100 !== 0 -->

Lekin agar year 100 se divide ho raha hai
👉 to wo normally leap year nahi hota.

Example:
1900 % 100 = 0 ❌
Isliye 1900 leap year nahi hai.

<!-- 🔹 Step 3️⃣ – year % 400 === 0 -->

Agar year 400 se divide ho jaye
👉 to wo leap year hoga (even if 100 se divisible ho).

Example:
2000 % 400 = 0 ✅
Isliye 2000 leap year hai.


8️⃣ Divisible by 5 and 11
<!-- 
let num = 55;

if (num % 5 === 0 && num % 11 === 0) {
  console.log("Divisible by 5 and 11");
} else {
  console.log("Not divisible");
}

-->

🔹 9️⃣ Check Character is Vowel or Consonant
<!-- 
let ch = "a";

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  console.log("Vowel");
} else {
  console.log("Consonant");
} -->
===================================================================================================================================

# 🔹 1️⃣ Print Numbers 1 to 10

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
📌 Basic syntax check karne ke liye puchte hain.

🔹 2️⃣ Print Even Numbers (1 to 20)

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
🔹 3️⃣ Reverse a Number 🔥 (Very Common)
let num = 1234;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(reverse); // 4321
```

---

# 🔹 4️⃣ Palindrome Number 🔥🔥

```js
let original = 121;
let num = original;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}

if (original === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
```

---

# 🔹 5️⃣ Factorial of a Number 🔥🔥

```js
let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
}

console.log(fact); // 120
```

---

# 🔹 6️⃣ Prime Number Check 🔥🔥🔥 (Interview Favorite)

```js
let num = 7;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime ? "Prime" : "Not Prime");
```

---

# 🔹 7️⃣ Fibonacci Series 🔥

```js
let n = 6;
let a = 0, b = 1;

for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
```

---

# 🔹 8️⃣ Sum of Digits

```js
let num = 123;
let sum = 0;

while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log(sum); // 6
```

---

# 🔹 9️⃣ Pattern Printing 🔥🔥

### Star Pattern

```js
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "* ";
  }
  console.log(star);
}
```

Output:

```
*
* *
* * *
* * * *
* * * * *
```

---

# 🔟 Count Vowels in a String
let str = "javascript";
let count = 0;

for (let char of str) {
  if ("aeiou".includes(char)) {
    count++;
  }
}
console.log(count);
===================================================================================================================


