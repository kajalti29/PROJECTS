<!-- 🔍 Step-by-Step HTML Logic -->
HTML:- 
1️⃣ Container (Main Box)
<div class="container">
👉“I used a container to structure and center the application UI.”

2️⃣ Heading:-
<h1>Weather App</h1>

3️⃣ Search Box (Input + Button):-
<input type="text" id="cityInput" placeholder="Enter city name">
<button id="btn">Search</button>
👉“I take user input using an input field and trigger API calls on button click.”

4️⃣ Toggle Button (Dark/Light Mode):-
<button id="toggleMode">Toggle</button>
👉 Theme change karne ke liye
💡 Concept: UI interaction 

5️⃣ Loading + Error Messages:-
<div id="loading" class="hidden">Loading...</div>
<div id="error" class="hidden">City not found</div>
👉 “I used conditional UI elements to show loading and error states.”

6️⃣ Weather Card (Main Output Section) ⭐:-
<div class="weather-card hidden" id="weatherCard">
show the API data.

Iske andar kya hai:
<h2 id="cityName"></h2>
<img id="icon">  
<p id="temp"></p>
<p id="condition"></p>
<p id="humidity"></p>
<p id="wind"></p>
👉 “I created placeholders in HTML and dynamically update them using JavaScript.”

7️⃣ Search History Section:-
<div class="history">
👉 Previous searches dikhane ke liye
Show the previous searches.

<ul id="historyList"></ul>
👉 JS yaha list add karega
Js add the list.

<button onclick="clearHistory()">Clear History</button>
Dynamic list rendering
LocalStorage integration

🧠 Simple Flow (HTML POV):-
👉 Input → Button → Loading → Data show → History update
--------------------------------------------
JavaScript:-

1️⃣ API Key + DOM Elements:-
<!--
 const apiKey = "....";
const btn = document.getElementById("btn"); -->
👉“I accessed all required DOM elements using getElementById to dynamically update the UI.”

2️⃣ Event Handling (User Action):-
<!-- btn.addEventListener("click", getWeather); -->

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

👉 “I handled user interaction using event listeners for both button click and Enter key.”

3️⃣ Main Function (getWeather) ⭐:-
<!-- 
function getWeather() {
  const city = input.value.trim(); -->
👉 User input liya


❗ Input Validation
<!--
if (city === "") {
  alert("Please enter city name");
  return;
} -->

👉 Empty input check
💡 Concept: Validation

4️⃣ Loading & UI Reset:-
<!-- 
loading.classList.remove("hidden");
card.classList.add("hidden");
error.classList.add("hidden"); -->

Loading show
Old data hide 
Error hide

💡 Concept:
UI state management

5️⃣ API Call (MOST IMPORTANT) 🔥:-
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(res => res.json())

👉 API call → response → JSON

👉 “I used the Fetch API with Promises to retrieve real-time weather data.”

6️⃣ Data Handling + Error Check:-
<!-- 
if (data.cod !== 200) {
  error.classList.remove("hidden");
  return;
} -->
👉 Agar city wrong hai → error show

7️⃣ UI Update (Dynamic Data):-
cityName.innerText = data.name;
temp.innerText = `Temp: ${data.main.temp} °C`;
👉 Data screen pe show

8️⃣ ⭐ Weather Icon Logic:-
const iconCode = data.weather[0].icon;
icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

👉 API → icon code → image show

9️⃣ Error Handling (catch):-
<!-- 
.catch(() => {
  loading.classList.add("hidden");
  error.classList.remove("hidden");
}); -->

👉 Network error → error show

🔟 Dark Mode Toggle:-
document.body.classList.toggle("dark");

