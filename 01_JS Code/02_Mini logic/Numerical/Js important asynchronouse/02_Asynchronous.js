console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 2000);

console.log("End");


// Output:// Start
// End
// Middle (after 2 seconds)