const todoList = document.getElementById("todoList")
const titleInp = document.getElementById("titleInp")
const priorityInp = document.getElementById("priorityInp")
const dateInp = document.getElementById("dateInp")
const submit = document.getElementById("submit")

function displayTasks() {
    fetch('http://localhost:8080/todo')
    .then((response) => response.json())
    .then((tasksList) => {
        const showtasks = tasksList.map((task, index) => {
            return `
            <h1>${task.title}</h1>
            <div>${task.priority}</div>
            <div>${task.date}</div>
            <button onclick="deleteTask(${index})">delete</button>
            <button onclick="editTask(${index})">Edit</button>
            `
        })
        todoList.innerHTML = showtasks.join('')
    })
}

displayTasks()

async function addTask(t, p, d) {
    const body = {
        title: t,
        priority: p,
        date: d
    }

    const request = await fetch('http://localhost:8080/todo', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
    })
}

submit.addEventListener('click', () => {
    const title = titleInp.value
    const priority = priorityInp.value
    const date = dateInp.value
    addTask(title, priority, date)
    displayTasks()
})

async function editTask(index) {
    const response = await fetch(`http://localhost:8080/todo/${index}`)
    const task = await response.json()
    let editForm = `
    <label>Update ${index.title}: </label>
    <input id="updatedTitle">
    <input id="updatedPriority">
    <input id="updatedDate">
    <button id="updateBttn"> 
    `
    const updatedTitle = document.getElementById("updatedTitle")
    const updatedPriority = document.getElementById("updatedPriority")
    const updatedDate = document.getElementById("updatedDate")
    const updateBttn = document.getElementById("updateBttn")

    updateBttn.addEventListener('click', ()=> {
        const updatedBody = {
            title: updatedTitle.value,
            priority: updatedPriority.value,
            date: updatedDate.value
        }
    })
}
async function deleteTask(index) {
    const response = await fetch(`http://localhost:8080/todo/${index}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    if (data.success) {
      displayTasks()
    } else {
      console.error(data.message)
    }
}

