import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { MyCheckBox, MySelect, MyTextInput } from '../components/index';

export const FormikAbstract = () => {

  return (
    <div>
        <h1>Formik Components Abstractation tutorial</h1>

        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={values => {
                console.log('Form data', values);
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                terms: Yup.boolean()
                    .oneOf([true], 'You must accept the terms and conditions')
                    .required('Required'),
                jobType: Yup.string()
                    .notOneOf(['manager'], 'Invalid job type')
                    .required('Required')            
            })
        }>

            { (formik) => (
                <Form>
                   <MyTextInput 
                    name='firstName' 
                    label='First Name' 
                    placeholder='Diego' />

                    <MyTextInput 
                    name='lastName' 
                    label='Last Name' 
                    placeholder='Arias' />

                    <MyTextInput 
                    name='email' 
                    label='Email' 
                    placeholder='abc@cba.com' />

                   <MySelect label='Job Type'  name="jobType">
                          <option value="">Select a job type</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="manager">Manager</option>
                   </MySelect>

                   <MyCheckBox label="Terms and Conditions" name="terms" />


                   <button type="submit">Submit</button>
                </Form>  
  
          )}

        </Formik>
    </div>
  )
}
