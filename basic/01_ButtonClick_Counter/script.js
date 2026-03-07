let count = 0;

const btn = document.getElementById("btn");
const display = document.getElementById("count");

btn.addEventListener("click", function () {
  count++;
  display.innerText = count;
});


// let count = 0;

// document.getElementById("btn").addEventListener("click", function(){
//   count++;
//   document.getElementById("count").textContent = count;
// });
