fetch("https://jsonplaceholder.typicode.com/posts")
.then(response = response.json())
.then(data => {
    console.log(data);   //API data
})
.catch(error => {
    console.log("Error:", error);
});
