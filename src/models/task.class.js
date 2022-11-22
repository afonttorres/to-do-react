import { PRIORITY } from "./priority.enum";

export class Task {
    name = "";
    description = "";
    createdAt = "";
    deadline = "";
    priority = PRIORITY.NORMAL;
    isCompleted = false;
    
    constructor(name, description, deadline, priority) {
        this.name = name;
        this.description = description;
        this.deadline = deadline.toDateString();
        this.priority = priority;
        this.createdAt = new Date().toDateString();
    }
}