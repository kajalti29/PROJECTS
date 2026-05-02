
async function getWeather() {
  let city = document.getElementById("city").value;

  let apiKey = "1234567890abcdef";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404") {
      document.getElementById("result").innerText = "City not found!";
      return;
    }

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let condition = data.weather[0].main;

    document.getElementById("result").innerHTML =
      `🌡️ Temperature: ${temp}°C <br>
       💧 Humidity: ${humidity}% <br>
       🌥️ Condition: ${condition}`;

  } catch (error) {
    document.getElementById("result").innerText = "Error fetching data!";
  }
}