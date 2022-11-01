import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { RefreshContext } from '../../utils/context'
import Button from '../Button/Button';
import iconDel from '../../assets/icon-del.avif'
import './postForm.css'




function PostForm({ titleToDisplay, buttonName, navigateTo }) {

    // const PTU = localStorage.getItem('PTU')
    // const params = useParams()
    const PTU = useParams().id
    const PTULocal = localStorage.getItem('PTU')
           // console.log(PTU)
    const token = localStorage.getItem('token')
    const { toggleRefresh } = useContext(RefreshContext)
    const [imageUrl, setImageUrl] = useState()
    const baseURL = 'http://localhost:3001/api/post'
    const requestOptions = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        }
    }
    const { register, handleSubmit, reset } = useForm({
        title: '',
        text: ''
    })
    const { userRole } = useOutletContext()

    useEffect(() => {

        if (PTULocal === '0') {
            reset({
                title: '',
                text: ''
            })
        } else {
            axios.get(baseURL + '/' + PTULocal, requestOptions)
                .then((res) => {
                    if (!res.data.imageUrl) {
                        reset({
                            title: `${res.data.title}`,
                            text: `${res.data.text}`
                        })
                    } else {
                        reset({
                            title: `${res.data.title}`,
                            text: `${res.data.text}`,
                            imageUrl: `${res.data.imageUrl}`
                        })
                        setImageUrl(res.data.imageUrl)
                    }

                })
        }
    }, [PTU])

    /*----------------------------------------------------------------------- IMAGE UPLOAD */
    // const [image, setImage] = useState()
    const [imageURI, setImageURI] = useState()

    const readURI = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (ev) {
                setImageURI(ev.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const handleImageChange = (e) => {
        // readURI(e)

        setImageUrl(e.target.files[0])
        // setImageUrl(image)

    }

    const handleDeleteImage = (e) => {
        // setImage(null)
        setImageUrl(undefined)
    }
    const navigate = useNavigate()
    const handleCancel = (e) => {
        e.preventDefault()
        localStorage.setItem('PTU', '0')
        navigate(navigateTo)
    }
// console.log('image', image)
console.log('imageUrl ',imageUrl)

    async function onSubmit(data) {
        data = { ...data, imageUrl, userRole }
        if (PTULocal === '0') {
            await axios.post(baseURL, data, requestOptions)
        } else {
            await axios.put(baseURL + '/' + PTU, data, requestOptions)
        }
        toggleRefresh()
        navigate(navigateTo)
    }


    return (
        <main>
            <h1 className='postForm__titre'>
                {titleToDisplay}
            </h1>
            <form id='postForm' onSubmit={handleSubmit(onSubmit)}>
                <div id='postForm__content'>
                    <div className='postForm__content-inputs'>
                        <label htmlFor="title">titre de votre publication</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            {...register('title')} />

                    </div>
                    <div className='postForm__content-inputs'>
                        <label htmlFor="text">votre publication</label>
                        <textarea
                            id="text"
                            // rows="20"
                            cols="40"
                            name="text"
                            {...register('text')}></textarea>
                    </div>
                </div>

                <div id='postForm__buttons'>
                    <div id='postForm__image-button'>
                        <label htmlFor='choose-image' className='button'>{(imageUrl||imageURI) ? "modifier l'image" : "ajouter une image"}</label>
                        <input
                            id='choose-image'
                            style={{ display: 'none' }}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {(imageUrl || imageURI) &&
                                <Button 
                                    className='test'
                                    type='button'
                                    icon={iconDel}
                                    action={handleDeleteImage}/>
                        }
                    </div>
                    <Button name={buttonName} type='submit' />
                    <Button
                        name='annuler'
                        type='button'
                        action={handleCancel}
                    />
                </div>

                <div id='postForm__image'>
                    <img src={imageUrl ? imageUrl : imageURI} alt={((imageUrl && PTU !== '0') || imageURI) && ""} width='100%' />
                </div>

            </form>
        </main >
    )
}

export default PostForm
