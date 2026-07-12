
export class Task{
    constructor(description){
        this.id = crypto.randomUUID();
        this.description = description;
        this.isCompleted = false;
        this.creationDate = new Date();
    }
}

