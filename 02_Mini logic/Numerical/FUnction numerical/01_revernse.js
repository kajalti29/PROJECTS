// function reverseNumber(num) {
//   let rev = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return rev;
// }
// Perfect 👍
// Main **wahi numerical codes** jo interview me aate hain, **har ek ka logic + code (function ke saath)** simple Hindi me de rahi hoon.
// Tum bas isko padh lo—**direct interview ready** 💯

// ---

// # 🔢 INTERVIEW NUMERICAL CODES (with LOGIC)

// ---

// ## 1️⃣ Reverse a Number

// ### 🧠 Logic:

// * Last digit nikalte hain (`% 10`)
// * Reverse banane ke liye `rev * 10 + digit`
// * Last digit remove karte hain (`/ 10`)
// * Jab tak number 0 na ho

// ### 💻 Code:

// ```js
// function reverseNumber(num) {
//   let rev = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return rev;
// }
// ```

// ---

// ## 2️⃣ Palindrome Number

// ### 🧠 Logic:

// * Original number ko save kar lo
// * Number ko reverse karo
// * Dono equal hain → palindrome

// ### 💻 Code:

// ```js
// function isPalindrome(num) {
//   let original = num;
//   let rev = 0;

//   while (num > 0) {
//     rev = rev * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }

//   return original === rev;
// }
// ```

// ---

// ## 3️⃣ Sum of Digits

// ### 🧠 Logic:

// * Har baar last digit nikalo
// * Usko sum me add karo
// * Digit remove karo

// ### 💻 Code:

// ```js
// function sumOfDigits(num) {
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }
// ```

// ---

// ## 4️⃣ Even or Odd

// ### 🧠 Logic:

// * Number 2 se divide ho jaaye → even
// * Nahi ho → odd

// ### 💻 Code:

// ```js
// function isEven(num) {
//   return num % 2 === 0;
// }
// ```

// ---

// ## 5️⃣ Prime Number

// ### 🧠 Logic:

// * 1 ya usse chhota → prime nahi
// * 2 se √n tak divide check karo
// * Ek bhi divide hua → not prime

// ### 💻 Code:

// ```js
// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }
// ```

// ---

// ## 6️⃣ Factorial

// ### 🧠 Logic:

// * 1 se n tak multiply
// * Result store karte jao

// ### 💻 Code:

// ```js
// function factorial(n) {
//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }

//   return fact;
// }
// ```

// ---

// ## 7️⃣ Fibonacci Series

// ### 🧠 Logic:

// * Har number = pichhle do numbers ka sum

// ### 💻 Code:

// ```js
// function fibonacci(n) {
//   let a = 0, b = 1;

//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }
// ```

// ---

// ## 8️⃣ Divisible by 5

// ### 🧠 Logic:

// * Remainder 0 → divisible

// ### 💻 Code:

// ```js
// function isDivisibleBy5(num) {
//   return num % 5 === 0;
// }
// ```

// ---

// ## 🗣️ INTERVIEW GOLDEN RULE ⭐

// 👉 **Numerical question = function + loop + logic explanation**

// Agar interviewer bole:

// > “Explain logic”

// Tum bolo:

// > “I extract digits using modulo and reduce the number using division.”

// ---

// ## 📌 Next Step (Strong Preparation)

// Agar chaho to next hum:

// * 🔟 **Top 10 numerical questions (mock interview style)**
// * ❓ **Interviewer question → tum answer → main correct karungi**

// Bas bolo: **“mock start”** 💪😊
// // 