import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models

import { User } from '../../../models/user.class';
import { ROLE } from '../../../models/role.enum';


const RegisterForm = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLE.USER
    }

    const placeholders = {
        username: 'example10',
        email: 'example10@gmail.com',
        password: 'Password1234',
        confirm: 'Password1234',
        role: 'User'
    }

    const types = {
        username: 'text',
        email: 'email',
        password: 'password',
        confirm: 'password',
        role: 'text'
    }

    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, "Username should contain at least 6 characters!")
                .max(15, "Username too long!")
                .required("Username is mandatory!"),
            email: Yup.string()
                .email("Wrong email format")
                .required("Email is mandatory!"),
            role: Yup.string()
                .oneOf([...Object.keys(ROLE).map(e => ROLE[e])], "You must select a role: User / Admin")
                .required("Role is mandatory!"),
            password: Yup.string()
                .min(8, "Password should contain at least 8 characters!")
                .max(20, "Password should contain a maximum of 20 characters!")
                .matches(regex)
                .required("Password is mandatory!"),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Passwords mush match!"
                    )
                })
                .required("You must confirm the password!")
        }
    )

    const submit = (values) => {
        alert("User registered!")
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values, errors, touched, isSubmitting }) => {
                    return (
                        <Form>
                            {Object.keys(initialValues).map((field, key) => (
                                <React.Fragment>
                                    <label htmlFor={field}>{field}</label>
                                    <Field
                                        id={field}
                                        name={field}
                                        placeholder={placeholders[field]}
                                        type={types[field]}
                                    />
                                    {
                                        errors[field] && touched[field] && (
                                            <ErrorMessage
                                                name={field}
                                                render={
                                                    msg =>
                                                        <div className='error'>
                                                            <p>{msg}</p>
                                                        </div>
                                                } />
                                        )
                                    }
                                </React.Fragment>

                            ))}
                            <button type='submit' disabled={isSubmitting}>Sign up</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                        </Form>)
                }}
            </Formik>
        </div>
    );
}

export default RegisterForm;
