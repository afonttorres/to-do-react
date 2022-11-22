import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is mandatory!"),
        password: Yup.string()
            .required("Password is mandatory!")
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }

    const placeholders = {
        email: 'example@gmail.com',
        password: 'Password1234'
    }

    const style = {
        height: '100vh',
        width: '85%',
        margin: 'auto'
    }

    return (
        //vers official
        <div className='col' style={style}>
            <h4 className='title' >LOGIN FORMIK</h4>
            <Formik
                initialValues={initialCredentials}

                //Yup validation Schema
                validationSchema={loginSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', JSON.stringify(values))
                }}
            >

                {/*Obtaining props from Formik*/}
                {props => {
                    const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;

                    return (
                        <Form className='col' style={{ height: 'fit-content', minHeight: '30%' }}>
                            {Object.keys(initialCredentials).map((field, key) => (
                                <React.Fragment key={key}>
                                    <label htmlFor={field}>{field}</label>
                                    <Field id={field}
                                        name={field}
                                        type={field === 'email' ? 'email' : 'password'}
                                        placeholder={placeholders[field]} />

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
                            <button type='submit' disabled={isSubmitting}>Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
}

export default LoginFormik;
