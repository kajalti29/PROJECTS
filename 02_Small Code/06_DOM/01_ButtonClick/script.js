let count = 0;

let btn = document.getElementById("btn");
let display = document.getElementById("count");

btn.addEventListener("click", function() {
    count++;
    display.textContent = count;
});