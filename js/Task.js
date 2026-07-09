
class Task{
    constructor(description){
        this.id = crypto.randomUUID();
        this.description = description;
        this.isCompleted = false;
        this.creationDate = new Date;
    }
    toggleStatus(){
        this.isCompleted = !this.isCompleted;
    }

    editDescription(newDesc){
        this.description = newDesc;
    }
}