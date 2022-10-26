import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from '../components/Button';
import '../styles/App.css';
import '../styles/postForm.css'
// import styles from '../styles/PostForm.module.css';
import { RefreshContext } from '../utils/context'
import {useOutletContext} from 'react-router-dom'


function PostForm({ titleToDisplay, imageInputName, buttonName, navigateTo }) {

    const PTU = localStorage.getItem('PTU')
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
    const userRole = useOutletContext()[1]

    useEffect(() => {
        if (PTU === '0') {
            reset({
                title: '',
                text: ''
            })
        } else {
            axios.get(baseURL + '/' + PTU, requestOptions)
                .then((res) => {
                    if (!res.data.imageUrl) {
                        reset({
                            // postId: `${res.data._id}`,
                            title: `${res.data.title}`,
                            text: `${res.data.text}`,
                        })
                    } else {
                        reset({
                            // postId: `${res.data._id}`,
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
    const [image, setImage] = useState()
    const [imageName, setImageName] = useState()
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
        readURI(e)

        setImage(e.target.files[0])
        setImageUrl(image)
        setImageName(e.target.files[0].name)
    }

    // const handleDeleteImage = (e) => {
    //     setImage(null)
    //     setImageUrl(null)
    // }


    const navigate = useNavigate()

    async function onSubmit(data) {
        data = { ...data, image, userRole }
        if (PTU === '0') {
            await axios.post(baseURL, data, requestOptions)
                // .then((res) => console.log(res.data))
        } else {
            await axios.put(baseURL + '/' + PTU, data, requestOptions)
                // .then((res) => console.log(res.data))
        }
        toggleRefresh()
        navigate(navigateTo)
    }


    return (
        <main>
            <h1 className="postForm__titre">
                {titleToDisplay}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='postForm__content'>
                    <div className='postForm__content-inputs'>
                        <label htmlFor="title">titre</label>
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
                <div className='postForm__image'>
                    {/* {((imageUrl && PTU !== '0') || imageURI) && */}
                    {/* <div> */}
                    <img src={imageUrl ? imageUrl : imageURI} alt={((imageUrl && PTU !== '0') || imageURI) && ""} width='100%' />
                    {/* </div> */}
                    {/* // } */}
                </div>

                <div className='postForm__buttons'>
                    <div className='postForm__image-button'>
                        <label htmlFor='choose-image' className='button'>{imageInputName}</label>
                        <input
                            id='choose-image'
                            style={{ display: 'none' }}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <div id='image-name'>{imageName}</div>
                    </div>
                    {/* {(imageUrl || image) &&
                        <Button 
                            name="supprimer l'image"
                            type='button'
                            action={handleDeleteImage}/>
                    } */}
                    <Button name={buttonName} type='submit' />
                    <Button
                        name='annuler'
                        type='button'
                        action={(e) => {
                            e.preventDefault()
                            navigate(navigateTo)
                        }}
                    />
                </div>
            </form>
        </main >
    )
}

export default PostForm
