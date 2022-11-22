import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const RemoveBtn = ({ task, removeTask }) => {
    return (
        <i id='remove-btn' onClick={() => removeTask(task)} className='bi bi-trash3-fill'></i>
    );
};


RemoveBtn.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    removeTask: PropTypes.func.isRequired,
};


export default RemoveBtn;
