// Storage.clear()



let taskInput = document.querySelector('#input-task');
let addTaskBtn = document.querySelector('#add-task-button');
let taskList = document.querySelector('#task-list');


let localStorageTaskList = JSON.parse(localStorage.getItem(`taskList`)) || [];
taskList.innerHTML = localStorageTaskList;
let deleteTaskBtn = document.querySelectorAll('.delete-btn');
let taskCheckBox = document.querySelectorAll(`.checkbox`);


// taskList.addEventListener('change', saveTasksToLocalStorage)

// let localStorage = [];
// localStorage.setItem('tasks', JSON.stringify(taskList));
//
console.log(localStorage)

addTaskBtn.addEventListener('click', addTask);

deleteTaskBtn.forEach(elem => {
    elem.addEventListener('click', deleteTask);
});



// function saveTasksToLocalStorage() {
//     console.log(`!`)
//     localStorage.setItem(`taskList`, JSON.stringify(`${taskList.innerHTML}`))
//     console.log(localStorage)
// }

function addTask() {
    let newTask = document.createElement('li');
    newTask.innerHTML=`<input type="checkbox" class="checkbox"> <span class="task">${taskInput.value}</span> \
 <button class="delete-btn"></button>`;
    taskList.appendChild(newTask);
    localStorage.setItem(`taskList`, JSON.stringify(`${taskList.innerHTML}`))
    deleteTaskBtn = document.querySelectorAll('.delete-btn');
    deleteTaskBtn.forEach(elem => {
        elem.addEventListener('click', deleteTask);
    });
    taskCheckBox = document.querySelectorAll(`.checkbox`);
    taskCheckBox.forEach(elem => {
        elem.addEventListener('change', markTask);
    });
    // localStorage.setItem(`taskList`, JSON.stringify(`${taskList.innerHTML}`))
        console.log(localStorage)

    // console.log(JSON.stringify(newTask))
    // localStorage.setItem(`${taskInput.value}`, JSON.stringify(`${newTask}`));
    // console.log(localStorage)
    // TODO
    // newTask.querySelector('.task').addEventListener( 'change', markTask);
    // console.log(newTask.querySelector('.task'))
}

function deleteTask() {
    taskList.removeChild(this.parentNode);
    localStorage.setItem(`taskList`, JSON.stringify(`${taskList.innerHTML}`))
    // console.log(localStorage)
}


// TODO

taskCheckBox.forEach(elem => {
    elem.addEventListener( 'change', markTask);
})
function markTask() {
    console.log(`dsaf`);
    if (this.checked) {
        this.parentNode.querySelector('.task').classList.add('strikethrough');
        // this.parentNode.querySelector('.task').setAttribute('checked');

    } else {
        this.parentNode.querySelector('.task').classList.remove('strikethrough');
        // this.checked = false;
    }
    localStorage.setItem(`taskList`, JSON.stringify(`${taskList.innerHTML}`))
}