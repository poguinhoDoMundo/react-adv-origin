import { useFormik, Formik, Form, FormikErrors, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components tutorial</h1>

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
                   <label htmlFor="firstName">First Name</label>
                   <Field type="text" name="firstName" />
                   <ErrorMessage name="firstName" component="span" />
  
                   <label htmlFor="lastName">First Name</label>
                   <Field type="text" name="lastName" />
                   <ErrorMessage name="lastName" component="span" /> 
                   
                   <label htmlFor="email">Email</label>
                   <Field type="email" name="email" />
                   <ErrorMessage name="email" component="span" />

                   <label htmlFor="jobType">Job Type</label>
                   <Field as="select" name="jobType">
                          <option value="">Select a job type</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="manager">Manager</option>
                   </Field>
                   <ErrorMessage name="jobType" component="span" />

                   <label >
                        <Field type="checkbox" name="terms" />
                        Accept Terms and Conditions
                   </label>
                   <ErrorMessage name="terms" component="span" />


                  
                   <button type="submit">Submit</button>
                </Form>  
  
          )}

        </Formik>

        
    </div>
  )
}
