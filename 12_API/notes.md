<!-- what is API ? -->
API (Application Programming Interface) is a way for frontend and backend to communicate.

<!-- API Integration ka basic flow  -->
Request bhejo (fetch)
Server response deta hai (JSON data)
Data ko UI me show karo


Method 1: fetch() (Most Important)
✅ Simple Example
<!--
 fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data); // API data
  })
  .catch(error => {
    console.log("Error:", error);
  }); -->

🧠 Samjho step by step
fetch() → API call
.then(response.json()) → data convert to JSON
.then(data) → actual data milta hai
.catch() → error handle

💻 Method 2: async / await (Best Practice 🔥)
<!-- 
async function getData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData(); -->