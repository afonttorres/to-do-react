import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

function Status({ task, toggleCompleted }) {
    return (
        <div onClick={() => toggleCompleted(task)} id='status' className={task.isCompleted ? 'completed' : 'uncompleted'} />
    )
}

Status.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    toggleCompleted: PropTypes.func.isRequired,
}

export default Status