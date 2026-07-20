
export class Ui {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }
    renderTasks(parentDiv) {
        let stored = JSON.parse(localStorage.getItem("tasksStored"));
        for(const task of stored){
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task")
            taskDiv.innerHTML = `
            <p>ID: ${task.id}</p>
            <p>${task.description}</p>
            <div style="display:flex; justify-content: space-between;">
                <p>Status: ${!task.isCompleted ? "Pending" : "Done"}</p>
                
            </div>
            <div>
                <button class="btn btn-success completeBtn" data.id="${task.id}">complete</button>
                <button class="btn btn-danger deleteBtn" data.id="${task.id}">delete</button>
            </div>
            `;
            parentDiv.appendChild(taskDiv);
        }
    }
     
}