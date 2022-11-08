import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import Badge from './Badge';
import Status from './Status';


const TaskComponent = ({ task }) => {
    return (
        <article>
            <p>{task.name}</p>
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