import { useField, Field, ErrorMessage } from 'formik';


interface Props{
    name: string;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    [x:string]: any;
}


export const MyCheckBox = ( {label, ...props } : Props) => {

    const [field, meta] = useField({...props, type:'checkbox'});

  return (
    <>
        <label>
            <input type='checkbox' {...field} {...props} />
            {label}
        </label>        
        <ErrorMessage name={props.name} component='span' className='error' /> 
    </>
  )
}
