const apikey = "";

const btn = document.getElementById("btn");
const cityInput = document.getElementById("cityInput");

const weathercard = document.getElementById("weathercard");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const condition = document.getElementById('condition');
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");

const loading = document.getElementById("loading");
const error = document.getElementById("error");

const historyList = document.getElementById("historyList");

const weatherIcons = {
    
};

// btn
btn.addEventListener("click", getwather);
// jab btn click hoga -> getweather() function run hoga. 

// ketpress 
input.addEventListener("keypress", (e) =>{
    if(e.key === "enter"){
        getwather();
    }
});
//if use enter press kare -> tab bhi weather fetch hoga 


function getweather(){
    const city = input.value.trim();
    if(city === "") return
}

// take the city name in User.
// if user name empty-> does not show 

loading.classList.remove("hidden");
  card.classList.add("hidden");
  error.classList.add("hidden");
