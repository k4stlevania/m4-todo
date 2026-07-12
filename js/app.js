import { Ui } from "./UI.js";
import { TaskManager } from "./TaskManager.js";
import { Task } from "./Task.js"

const taskManager = new TaskManager;
const ui = new Ui(taskManager)

const tasksDiv = document.querySelector(".showTasks");

document.getElementById("newTaskForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const taskDescription = document.getElementById("taskDescription").value.trim();

    console.log(taskDescription);
    const taskToAdd = new Task(taskDescription);
    taskManager.addTask(taskToAdd);
    ui.renderTasks(tasksDiv);
})