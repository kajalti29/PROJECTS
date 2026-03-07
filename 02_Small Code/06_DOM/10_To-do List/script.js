function addTask(){
    let input = document.getElementById("task")
    let li = document.createElement("li")

    li.textContent = input.value
 
    document.getElementById("list").appendChild(li)

    input.value = ""
}