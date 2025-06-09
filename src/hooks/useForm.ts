import { ChangeEvent, useState } from "react";


export const useForm = <T>( initState: T ) => {


     const [ formData, setFormData ] = useState( initState );
        const onChange = ( event: ChangeEvent<HTMLInputElement> ) =>{
    
            const {name, value} = event.target;
    
            setFormData(prev => ({
                ...prev,
                [name]:value 
            }));
        }

  return{
    //propperties
    formData: formData,

    //Method
    onChange
  }
}
