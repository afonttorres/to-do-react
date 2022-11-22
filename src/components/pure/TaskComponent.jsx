import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import Badge from './Badge';
import Status from './Status';
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        // console.log("Task created")
        // return () =>{
        //     console.log("Task "+task.name+" is about to unmount")
        // }
    }, [task]);

    return (
        <article>
            <p className='task-name'>{task.name}</p>
            <p>{task.description}</p>
            <Badge priority={task.priority} />
            <span>{task.deadline}</span>
            <span>{task.createdAtd}</span>
            <Status status={task.isCompleted} />
        </article>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;