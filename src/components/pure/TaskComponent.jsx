import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import Badge from './Badge';
import Status from './Status';
import '../../styles/task.scss'
import RemoveBtn from './RemoveBtn';

const TaskComponent = ({ task, toggleCompleted, removeTask }) => {

    useEffect(() => {
        // console.log("Task created")
        // return () =>{
        //     console.log("Task "+task.name+" is about to unmount")
        // }
    }, [task]);

    const style = {
        justifyContent: 'space-between',
        width: '100%',
        margin: '0 auto',
        gap: '2.5%'
    }

    return (
        <article className='row' style={style}>
            <Status task={task} toggleCompleted={toggleCompleted} />
            <p className='task-name'>{task.name}</p>
            <p>{task.description}</p>
            <Badge priority={task.priority} />
            <span>{task.deadline}</span>
            <span>{task.createdAt}</span>
            <RemoveBtn task={task} removeTask={removeTask}/>
        </article>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired
};


export default TaskComponent;