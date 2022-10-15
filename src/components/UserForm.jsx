import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import axios from 'axios';

import Button from './Button';
import '../styles/form.css'


function UserForm({ baseURL, buttonName, navigateTo }) {

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    // const [user, setUser] = useState()

    async function onSubmit(data) {

        const user = (user, token) => {
            localStorage.setItem('user', `${user}`)
            localStorage.setItem('token', `${token}`)
        }
        await axios.post(baseURL, data)
            .then(res => user(res.data.userId, res.data.token))

        navigate(navigateTo)


    }

    // const onSubmit = (data) => {

    //     const user = (user, token) => {
    //         localStorage.setItem('user', `${user}`)
    //         localStorage.setItem('token', `${token}`)
    //     }
    //     axios.post(baseURL, data)
    //         .then(res => user(res.data.userId, res.data.token))
    //         .then(navigate(navigateTo))


    // }


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {buttonName === 'créer mon compte' &&
                <label htmlFor='pseudo'>pseudo :
                    <input
                        type="text"
                        name='pseudo'
                        defaultValue={'votre pseudo'}
                        {...register('pseudo')}
                    />
                </label>
            }
            <label htmlFor='email professionnel'>email pro :
                <input
                    type="text"
                    name='email'
                    // defaultValue={'votreemailpro@groupomania.com'}
                    {...register('email')}
                />
            </label>
            <label htmlFor='mot de passe'>mot de passe :
                <input
                    type="text"
                    name='password'
                    // defaultValue={'votreMotDePasse1'}
                    {...register('password')}
                />
            </label>
            <Button name={buttonName} type='submit' />
        </form>
    )
}

export default UserForm