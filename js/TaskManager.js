
export class TaskManager{
    constructor(){
        this.tasksList = [];
    }

    addTask(task){
        this.tasksList.push(task);
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