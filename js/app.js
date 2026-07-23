import { Ui } from "./UI.js";
import { TaskManager } from "./TaskManager.js";
import { Task } from "./Task.js"

const taskManager = new TaskManager;
const ui = new Ui(taskManager);

const allTasks = document.querySelector(".showTasks");
const deleteBtn = document.querySelector(".deleteBtn");

document.getElementById("newTaskForm").addEventListener("submit", (e) => {
    e.preventDefault();

})
