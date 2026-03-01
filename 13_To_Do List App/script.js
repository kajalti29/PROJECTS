const input = document.getElementById('input');
const add = document.getElementById('add');

add.addEventListener('click', () =>{
    element = document.createElement('p');
    element.innerText = input.value;
    document.body.appendChild(element);
});