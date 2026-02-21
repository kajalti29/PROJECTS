const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');
const list = document.getElementById('taskList');  

addBtn.addEventListener('click', function() {
    if(input.value == "") return; // Prevent adding empty tasks

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function() {
        list.removeChild(li);
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = ''; // Clear input after adding task
} );