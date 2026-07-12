
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

    toggleStatus(task){
        task.isCompleted = !task.isCompleted;
    }

    editTask(){
        return null;
    }

    searchTaskByTitle(taskTitle){
        let taskByTitle = this.tasks.filter((task) => task.title == taskTitle)
        return taskByTitle;
    }
}