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

🌐 API Handling in React (MUST MASTER)

<!-- 1. What is API? -->
API stands for Application Programming Interface. It acts as a bridge that allows different software applications to communicate and exchange data.

<!-- 2. what is Fetch() -->
"fetch() is used to send a request to an API and get data from the server.

<!-- What are REST  -->
REST methods are HTTP methods used to perform CRUD operations between frontend and backend.

<!-- 2. REST API Basics -->
REST me different HTTP methods hote hain:
| Method | Use             | 
| ------ | --------------- |
| GET    | Data fetch      |
| POST   | New data create |
| PUT    | Update data     |
| DELETE | Remove data     |

useEffect:-
UseEffect is a React Hook is used to handle side effects like API call, Timer, Event listener, DOM Update.

If you call an API directly inside the component body:
```js id="k7v9yx"
fetch("API")
```
then the API will be called on every render of the component ❌

This can cause:
* unnecessary API requests
* performance issues
* infinite re-rendering

That’s why `useEffect()` is used to control when the API call should run.
