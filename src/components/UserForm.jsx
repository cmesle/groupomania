import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from './Button';
import '../styles/form.css'


function UserForm({ baseURL, buttonName, navigateTo }) {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axios.post(baseURL, data)
            .then((res) => console.log(res.data))
        navigate(navigateTo)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {buttonName === 'créer mon compte' &&
                <label htmlFor='pseudo'>pseudo :
                    <input
                        type="text"
                        name='pseudo'
                        value={'votre pseudo'}
                        {...register('pseudo')}
                    />
                </label>
            }
            <label htmlFor='email professionnel'>email pro :
                <input
                    type="text"
                    name='email'
                    value={'votreemailpro@groupomnania.com'}
                    {...register('email')}
                />
            </label>
            <label htmlFor='mot de passe'>mot de passe :
                <input
                    type="text"
                    name='password'
                    value={'votreMotDePasse1'}
                    {...register('password')}
                />
            </label>
            <Button name={buttonName} type='submit' />
        </form>
    )
}

export default UserForm