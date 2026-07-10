
class Task{
    constructor(description){
        this.id = crypto.randomUUID();
        this.description = description;
        this.isCompleted = false;
        this.creationDate = new Date();
    }
    // cambia el estado de la tarea true/false
    toggleStatus(){
        this.isCompleted = !this.isCompleted;
    }

    //cambia la descripcion de la tarea
    editDescription(newDesc){
        this.description = newDesc;
    }
}

export default Task;