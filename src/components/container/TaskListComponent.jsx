import React, { useState, useEffect } from 'react';
import { PRIORITY } from '../../models/priority.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/TaskForm';
import TaskComponent from '../pure/TaskComponent';

const TaskListComponent = () => {

    const selectPriority = (index) => {
        let key = index > Object.keys(PRIORITY).length - 1 ? 0 : index;
        return Object.keys(PRIORITY).filter((e, i) => i === key);
    }

    const creacteDefaultTask = (i) => {
        return new Task(
            `Name ${i + 1}`, `Description ${i + 1}`, new Date(2022, 10, Math.floor(Math.random() * (30 - 1) + 1)), PRIORITY[selectPriority(i)]
        )
    }

    const [tasks, setTasks] = useState(new Array(5).fill(null).map((e, i) => creacteDefaultTask(i)));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [tasks]);

    const toggleCompleted = (task) => {
        let tempTasks = [...tasks];
        tempTasks[tasks.indexOf(task)].isCompleted = !task.isCompleted;
        setTasks(tempTasks);
    }

    const removeTask = (task) => {
        setTasks(tasks.filter((t, i) => tasks.indexOf(task) !== i));
    }

    const addTask = (task) => {
        let tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    console.log(tasks)
    return (
        
        <main>
            <section className='col' style={{ width: '90%', margin: '0 auto' }}>
                <p>Your tasks:</p>
                {loading ? <h1>Your tasks are loading</h1> :
                    tasks.map((t, k) => (
                        <TaskComponent
                            key={k}
                            task={t}
                            toggleCompleted={toggleCompleted}
                            removeTask={removeTask}
                        />
                    ))
                }
            </section>
            <TaskForm addTask={addTask} />
        </main>
    );
}

export default TaskListComponent;