import { useField, Field, ErrorMessage } from 'formik';

interface Props{
    name: string;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    [x:string]: any;
}


export const MySelect = ( {label, ...props } : Props) => {

    const [field, meta] = useField(props);

  return (
    <>
        <label htmlFor={ props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        <ErrorMessage name={props.name} component='span' className='error' />
    </>
  )
}
