// Select elements once which used Repeatedly (Avoid repeated DOM calls)
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// Load tasks from localStorage (array format)
document.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(tasks);

    // Hide delete button if no tasks
    if (tasks.length === 0) {
        deleteAllBtn.style.display = "none";
    }
});

// Adding Task
addBtn.addEventListener("click", () => {
    const taskText = input.value;

    if (taskText === "") return;

    const tasks = getTasks();
    tasks.push(taskText);
    saveTasks(tasks);

    input.value = "";
    renderTasks(tasks);
});

// Render Tasks (Important function)
function renderTasks(tasks) {
    taskContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "item";

        const span = document.createElement("span");
        span.innerText = task;

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.addEventListener("click", () => {
            input.value = task;
            deleteTask(index);
        });

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTask(index);
        });

        const btnDiv = document.createElement("div");
        btnDiv.className = "btn-div";
        btnDiv.append(editBtn, deleteBtn);

        div.append(span, btnDiv);
        taskContainer.append(div);
    });

    deleteAllBtn.style.display = tasks.length ? "block" : "none";
}

// Get tasks from localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Save tasks
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete single task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks(tasks);
}

// Delete all tasks
deleteAllBtn.addEventListener("click", () => {
    localStorage.removeItem("tasks");
    renderTasks([]);
});