<!-- 1️⃣ What is a string in JavaScript? -->
A string is a sequence of characters used to represent text and is enclosed in quotes.
<!-- let name = "Kajal"; -->

<!-- 2️⃣ Are strings mutable or immutable?
 -->
 Strings are immutable in JavaScript.
 String ko directly change nahi kar sakte, nayi string banti hai.
<!-- 
let str = "hi";
str[0] = "H";
console.log(str); // hi (no change)
 -->

<!-- 3️⃣ Difference between string and array? -->
| String           | Array           |
| ---------------- | --------------- |
| Immutable        | Mutable         |
| Text data        | Any data        |
| No direct change | Change possible |

<!-- 4️⃣ How do you find length of a string? -->
str.length

<!-- 5️⃣ How do you access characters in a string? -->
str[0]
str.charAt(1)

<!-- 6️⃣ What happens if index is out of range? -->
Returns undefined.
-----------------------------------------------------------------------------------

<!-- 🔹 PART 2: STRING METHODS – REAL INTERVIEW -->

<!-- 1️⃣1️⃣ split() (VERY IMPORTANT) -->
Used to convert string → array.
<!-- "hi how are you".split(" "); -->

1️⃣2️⃣ replace()
"hello world".replace("world","JS");

----------------------------------------------------------------------------------------------------------------
<!-- 🔹 PART 3: STRING PROGRAMMING QUESTIONS (MOST ASKED) -->
<!-- 1️⃣ Reverse a string -->

let str = "hello";
let rev = "";

for(let i = str.length - 1; i >= 0; i--){
  rev += str[i];
}
console.log(rev);

