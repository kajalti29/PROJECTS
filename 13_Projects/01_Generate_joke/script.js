async function getjoke(){
    let response = await fetch("https://api.chucknorris.io/jokes/random")
    let data = await response.json()

    document.getElementById("joke").innerText = data.value

}