
export class Ui{
    constructor(taskManager){
        this.taskManager = taskManager;
    }

    renderTasks(parentDiv){
       for(const task of this.taskManager.tasksList){
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `
            <p>ID: ${task.id}</p>
            <p>${task.description}</p>
            <div>
                <p>Status: ${!task.isCompleted ? "Pending" : "Done"}</p>
                <p>${task.creationDate.toLocaleDateString()}</p>
            </div>
        `
        parentDiv.appendChild(taskDiv);
       }
    }
}