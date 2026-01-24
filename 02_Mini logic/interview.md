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




