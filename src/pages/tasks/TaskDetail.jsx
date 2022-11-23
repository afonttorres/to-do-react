import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {

    const { id } = useParams();

    return (
        <div>
            <h1>This will be the task detail page by id param: {id}</h1>
        </div>
    );
}

export default TaskDetail;
