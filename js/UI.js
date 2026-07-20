
export class Ui {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }
    renderTasks() {
        
            taskDiv.innerHTML = `
            <p>ID: ${task.id}</p>
            <p>${task.description}</p>
            <div style="display:flex; justify-content: space-between;">
                <p>Status: ${!task.isCompleted ? "Pending" : "Done"}</p>
                <p>Date: ${task.creationDate.toLocaleDateString()}</p>
            </div>
            <div>
                <button class="btn btn-success completeBtn" data.id="${task.id}">complete</button>
                <button class="btn btn-danger deleteBtn" data.id="${task.id}">delete</button>
            </div>
            `;
    }
     
}