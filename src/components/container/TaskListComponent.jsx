import React from 'react';
import { PRIORITY } from '../../models/priority.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';

const TaskListComponent = () => {

    const defaultTask = new Task("Default", "This is the default task", new Date(2022, 10, 10), PRIORITY.NORMAL);
    
    const changeState = (id) => {
        console.log("Task id: ", id)
    }

    return (
        <section>
            <p>Your tasks:</p>
            <TaskComponent task={defaultTask} />
        </section>
    );
}

export default TaskListComponent;