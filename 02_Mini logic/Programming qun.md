<!-- ✅ 1. Reverse a Number -->

Question: 1234 → 4321
% 10 → last digit deta hai
reverse * 10 → digits ko left shift karta hai
Math.floor(num / 10) → last digit remove

while loop isliye use kiya gaya kyunki hume number ke digits tab tak process karne hain jab tak number zero na ho jaye, aur digits ki count pehle se known nahi hoti.

The while loop is used because we need to process the digits of the number until it becomes zero, and the number of digits is not known in advance.
<!-- 
let num = 12345;
let rev = 0;

while (num > 0) {
  let lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num / 10);
}

console.log(rev); -->


🔁 Count Digits in Number
<!-- 
let num = 12345;
let count = 0;

while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}

console.log(count); -->
