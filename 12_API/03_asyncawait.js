async function getData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await response.jspn();
        console.log(data);
    }catch(error){
        console.log("Error:", error);
    }
}
getData();  

