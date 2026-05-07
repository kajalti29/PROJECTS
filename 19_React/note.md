<!-- Performance Optimization in React -->
Performance optimization ka matlab hai React app ko fast, smooth, aur less re-rendering banana.

React me mostly performance issue aata hai:

Unnecessary re-renders
Heavy calculations
Large component trees
Large API/data rendering

<!--What is re-render? -->
Jab bhi component ka data change hota hai, React us component ko dobara run karta hai.

" Whenever state or props change → component re-renders"
Example:- Counter App

<!-- 1. React.memo() -->
React.memo() component ko re-render hone se bachata hai agar props same ho.

<!-- 2. useMemo() -->
Heavy calculation ko cache/memoize karta hai.

<!-- 3. useCallback() -->
Function ko memoize karta hai.

<!-- 4. Lazy Loading -->
Component ko tab load karo jab zarurat ho.
Normal import:
<!-- import About from "./About"; -->
--------------------------------------------------------------


