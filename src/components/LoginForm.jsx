import { useForm } from 'react-hook-form'
import LoginInput from "./LoginInput";
import Button from './Button';

import '../styles/form.css'

function LoginForm() {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>pseudo :
                <input
                    type="text"
                    name='pseudo'
                    value={'votre pseudo'}
                    {...register('pseudo')}
                />
            </label>
            <label>email pro :
                <input
                    type="text"
                    name='email'
                    value={'votre email pro'}
                    {...register('email')}
                />
            </label>
            <label>mot de passe :
                <input
                    type="text"
                    name='password'
                    value={'votre mot de passe'}
                    {...register('password')}
                />
            </label>
            <Button name='créer mon compte' />
        </form>
    )
}

export default LoginForm