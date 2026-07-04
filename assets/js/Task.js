
class Task{
    constructor(description, state){
        // i'll change this later
        this.id = Math.random() * 100
        this.description = description;
        this.state = state;
        this.creationDate = new Date();
    }
}