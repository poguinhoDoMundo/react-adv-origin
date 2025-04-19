import { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/styles.css'


export const RegisterPage = () => {

    const [ registerData, setRegisterData ] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2 } = registerData;

    const onChange = ( event: ChangeEvent<HTMLInputElement> ) =>{

        const {name, value} = event.target;

        setRegisterData( {
            ...registerData,
            [name]:value });
    }

    const onSubmit = ( event:FormEvent<HTMLFormElement> ) =>{
        
        event.preventDefault();

        console.log( registerData );
    }

  return (
    <div>


        <form noValidate onSubmit={ ev => onSubmit(ev) }>
            <h3>Register page</h3>
            
            <input 
                type="text"
                placeholder='Nombre'
                name='name'
                value={ name }
                onChange={ (ev)=> onChange(ev) }
            />

            <input 
                type="email"
                placeholder='Correo electronico'
                value={email}
                name='email'
                onChange={ (ev)=> onChange(ev) }
            />

            <input 
                type="password"
                placeholder='Password'
                value={password1}
                name='password1'
                onChange={ (ev)=> onChange(ev) }
            />

            <input 
                type="password"
                placeholder='Repeat password'
                value={password2}
                name="password2"
                onChange={ (ev)=> onChange(ev) }
            />

            <button type="submit">
                Create
            </button>

        </form>


    </div>
  )
}