import React, { useState, useEffect } from 'react';
import { PRIORITY } from '../../models/priority.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';

const TaskListComponent = () => {

    const defaultTask = new Task("Default", "This is the default task", new Date(2022, 10, 10), PRIORITY.NORMAL);
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // console.log("Tasks state has been modified");
        setLoading(false);
        // return ()=>{
        //     console.log("TasksListComponent is about to unmount")
        // }
    }, [tasks]);

    const toggleCompleted = (id) => {
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