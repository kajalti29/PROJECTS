let count = 0;

let counteDisplay =document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function(){
    count++;
    counteDisplay.textContent = count;
});

resetBtn.addEventListener("click", function(){
    count = 0;
    counteDisplay.textContent = count;
});