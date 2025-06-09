import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik, FormikErrors } from 'formik';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const  validate = (  values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName) {
            errors.firstName = 'First Name is required';
        }
        else if (values.firstName.length > 15) {
            errors.firstName = 'First Name must be 15 characters or less';  
        }

        if (!values.lastName) {
            errors.lastName = 'Last Name is required';
        }
        else if (values.lastName.length > 15) {
            errors.lastName = 'Last Name must be 15 characters or less';  
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;

    }

    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log('Form data', values);
        },
        validate: validate
    });


  return (
    <div>
        <h1>Formik basic tutorial</h1>

        <form onSubmit={ handleSubmit} noValidate>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
            />

            {  (touched.firstName && errors.firstName) && <span>{errors.firstName}</span> }


            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                onChange={handleChange}
                onBlur={handleBlur}
                value= {values.lastName}
            />
            { (touched.lastName && errors.lastName) && <span>{errors.lastName}</span> }

            <label htmlFor="firstName">Email</label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            { (touched.email && errors.email) && <span>{errors.email}</span> }

            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}
