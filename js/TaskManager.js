
export class TaskManager{
    constructor(){
        this.tasksList = [];
    }

    addTask(task){
        this.tasksList.push(task);
        let stringifiedListOfTasks = JSON.stringify(this.tasksList);
        localStorage.setItem("tasksStored", stringifiedListOfTasks);
    }

    removeTask(taskId){
        this.tasks.filter((task) => task.id !== taskId);
    }

    toggleStatus(task){
        task.isCompleted = !task.isCompleted;
    }

   /*  editTask(){
        return null;
    }*/

}