let input = document.getElementById("input");
let addBtn = document.getElementById("add");
let list = document.getElementById("list");

addBtn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
});