let count = 0;

let counter = document.getElementById("count");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");


//Increment
inc.addEventListener('click', function(){
    count++;
    counter.innerText = count;
});

//Decrement
dec.addEventListener('click', function(){
    count--;
    counter.innerText = count;
});

// Reset 
reset.addEventListener('click', function(){
    count = 0;
    counter.innerText = count;
})