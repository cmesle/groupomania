import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import axios from 'axios';

import Button from './Button';
import '../styles/App.css'
import '../styles/userForm.css'
import eye_icon from '../assets/eye_icon.png'

import { pseudoRegex, emailRegex, passwordRegex } from '../utils/regex'


function UserForm({ baseURL, buttonName, navigateTo }) {

    const [showPassword, setShowPassword] = useState('show')
    const toggleShowPassword = () => {
        setShowPassword(showPassword === 'show' ? 'hide' : 'show')
    }

    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm({
        mode: 'onChange'
    })
    const { isValid, isDirty, isSubmittedSuccessfully, errors } = formState
    // console.log(isValid)
    async function onSubmit(data) {

        const user = (user, token) => {
            localStorage.setItem('user', `${user}`)
            localStorage.setItem('token', `${token}`)
        }
        await axios.post(baseURL, data)
            .then(res => user(res.data.userId, res.data.token))

        navigate(navigateTo)


    }

    return (
        <form className="userForm" onSubmit={handleSubmit(onSubmit)} >
            <div id='userFormInputs-wrapper'>
                {buttonName === 'créer mon compte' &&
                    <div>
                        <label htmlFor='pseudo'>pseudo : </label>
                        <input
                            type="text"
                            name='pseudo'
                            {...register('pseudo', {
                                required: true,
                                pattern: {
                                    value: pseudoRegex,
                                    message: 'seulement des lettres et des chiffres svp'
                                }
                            })}
                        />
                        <p className='signup-help'>
                            <span>ex : votre nom et votre service</span></p>
                        {errors.pseudo && errors.pseudo.type === "required" && (
                            <p role="alert" className='error-message'>champ obligatoire</p>)}
                        {errors.pseudo && errors.pseudo.type === "pattern" && (
                            <p role="alert" className='error-message'>{errors.pseudo.message}</p>)}
                    </div>

                }
                <div>
                    <label htmlFor='email professionnel'>email professionnel : </label>
                    <input
                        type="text"
                        name='email'
                        size='30'
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: emailRegex,
                                message: 'cet email n\'a pas le format requis'
                            }
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    <p className='signup-help'>votreemailpro@groupomania.com</p>
                    {errors.email && errors.email.type === "required" && (
                        <p role="alert" className='error-message'>champ obligatoire</p>)}
                    {errors.email && errors.email.type === "pattern" && (
                        <p role="alert" className='error-message'>{errors.email.message}</p>)}
                </div>
                <div>
                    <div id='passwordWrapper'>

                        <label htmlFor='mot de passe'>mot de passe : </label>
                        <span className='input'>
                            <input
                                type={showPassword === 'show' ? "password" : "text"}
                                name='password'
                                size='15'
                                style={{ border: 'none' }}
                                {...register('password', {
                                    required: true,
                                    pattern: {
                                        value: passwordRegex,
                                        message: 'ce mot de passe n\'a pas le format requis'
                                    }
                                })}
                            />
                            <img src={eye_icon} alt='montrer / cacher le mot de passe' width='100%' onClick={toggleShowPassword} />
                        </span>

                    </div>
                    <p className='signup-help'>
                        min: 8 car., 1 majuscule, 1 minuscule, 1 chiffre
                    </p>
                    {errors.password && errors.password.type === "required" && (
                        <p role="alert" className='error-message'>champ obligatoire</p>)}
                    {errors.password && errors.password.type === "pattern" && (
                        <p role="alert" className='error-message'>{errors.password.message}</p>)}
                </div>

            </div>
            <Button name={buttonName} /*disabled={isValid}*/ type='submit' />


        </form >
    )
}

export default UserForm