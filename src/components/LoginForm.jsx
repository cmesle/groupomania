import { useForm } from 'react-hook-form'
import axios from 'axios';

import Button from './Button';
import '../styles/form.css'


function LoginForm() {

    const baseURL = "http://localhost:3001/api/auth/signup"
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // e.preventDefault()
        console.log(data)
        axios.post(baseURL, data)
            .then((res) => console.log(res.data))

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
                    value={'votreemailpro@groupomnania.com'}
                    {...register('email')}
                />
            </label>
            <label>mot de passe :
                <input
                    type="text"
                    name='password'
                    value={'votreMotDePasse1'}
                    {...register('password')}
                />
            </label>
            <Button name='créer mon compte' type='submit' />
        </form>
    )
}

export default LoginForm