const button = document.querySelector('.btn-add-icon')
const input = document.querySelector('.task-name')
const list = document.querySelector('.list-container')

let taskList = []

function addTask() {
    taskList.push({
        task: input.value,
        succed: false
    })

    input.value = ''

    showTask()
}

function showTask() {

let newLi = ''

taskList.forEach((item, index) => {
    newLi = newLi +
    `<li class="task ${item.succed && "done"}">
        <img src="assets/check-circle-svgrepo-com 1.png" alt="" onclick="taskSucced(${index})">
        <p>${item.task}</p>
        <img src="assets/trash-bin-trash-svgrepo-com 1.png" alt="" onclick="deleteTask(${index})">
    </li>`
})

list.innerHTML = newLi

localStorage.setItem('list', JSON.stringify(taskList))

}

function taskSucced(index) {
    taskList[index].succed = !taskList[index].succed

    showTask()
}

function deleteTask(index) {
    taskList.splice(index,1)

    showTask()
}

function loadTasks() {
    const localStorageTasks = localStorage.getItem('list')

    if(localStorageTasks) {
        taskList = JSON.parse(localStorageTasks)
    }
    showTask()
}

loadTasks()