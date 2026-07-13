
export class Ui {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }

    renderTasks(parentDiv) {
        let taskDiv = document.createElement("div");
        for (const task of this.taskManager.tasksList) {
            taskDiv.classList.add("task");
            taskDiv.innerHTML = `
            <p>ID: ${task.id}</p>
            <p>${task.description}</p>
            <div style="display:flex; justify-content: space-between;">
                <p>Status: ${!task.isCompleted ? "Pending" : "Done"}</p>
                <p>Date: ${task.creationDate.toLocaleDateString()}</p>
            </div>
            <div>
                <button class="btn btn-success">complete</button>
                <button class="btn btn-danger">delete</button>
            </div>
        `
    }
    
    parentDiv.appendChild(taskDiv);
    }

}