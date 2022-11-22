import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Task } from '../../../models/task.class';
import { PRIORITY } from '../../../models/priority.enum';
import { DateMapper } from '../../../utils/mappers/date';


const TaskForm = ({ addTask }) => {

    const task = {
        name: "",
        description: "",
        deadline: "",
        priority: PRIORITY.NORMAL,
    };


    const add = (vals) => {
        let { name, description, deadline, priority } = vals;
        let date = new DateMapper().datelocalToDate(deadline);
        addTask(new Task(name, description, date, priority));
    }

    const taskValidationSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, "Name should contain at least 6 characters!")
                .max(20, "Name too long!")
                .required("Name is mandatory!"),
            description: Yup.string()
                .min(6, "Description should contain at least 6 characters!")
                .max(20, "Name too long!")
                .required("Description is mandatory!"),
            deadline: Yup.date()
                .required("Deadline is mandatory!"),
            priority: Yup.string()
                .oneOf([...Object.keys(PRIORITY).map(e => PRIORITY[e])], 'You should choose between: Normal, Urging or Blocking!')
                .required("is mandatory!")
        }
    )



    return (
        <div>
            <p>Add a task!</p>
            <Formik
                initialValues={task}
                validationSchema={taskValidationSchema}
                onSubmit={async (values, { resetForm }) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    add(values);
                    resetForm({ values: task })
                }}
            >
                {({ values, errors, touched, isSubmitting }) => {
                    return (
                        <Form className='col'>
                            {Object.keys(task).map((field, key) => (
                                <React.Fragment key={key}>
                                    <label htmlFor={field}>{field}</label>
                                    <Field
                                        id={field}
                                        name={field}
                                        type={field.includes("deadline") ? 'datetime-local' : 'text'}
                                    />
                                    {
                                        errors[field] && touched[field] && (
                                            <ErrorMessage
                                                name={field}
                                                render={
                                                    msg => (
                                                        <div>
                                                            <p>{msg}</p>
                                                        </div>
                                                    )
                                                }
                                            />
                                        )
                                    }
                                </React.Fragment>
                            ))}
                            <button type='submit' disabled={isSubmitting}>Add!</button>
                            {isSubmitting && 'Uploading your task'}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
}

export default TaskForm;
