
class TaskManager{
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    removeTask(taskId){
        this.tasks.filter((task) => task.id !== taskId);
    }
    getTasks(){
        
    }

}