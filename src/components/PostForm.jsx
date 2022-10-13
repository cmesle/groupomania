import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from '../components/Button';
import '../styles/App.css';


function PostForm({ titleToDisplay, buttonName, navigateTo }) {

    const PTU = localStorage.getItem('PTU')
    const token = localStorage.getItem('token')

    const baseURL = 'http://localhost:3001/api/post'
    const requestOptions = {
        headers: {
            'Content-Type':
                // 'text/html; charset=utf-8',
                'multipart/form-data',
            'Authorization': 'Bearer ' + token
        }
    }

    // const [valuesToDisplay, setValuesToDisplay] = useState({})
    const { register, handleSubmit, reset } = useForm({
        title: '',
        text: ''
    })
    useEffect(() => {
        if (PTU === '0') {
            reset({
                title: 'now',
                text: 'or never'
            })
        } else {
            axios.get(baseURL + '/' + PTU, requestOptions)
                .then((res) => {
                    reset({
                        postId: `${res.data._id}`,
                        title: `${res.data.title}`,
                        text: `${res.data.text}`,
                        image: `${res.data.imageUrl}`
                    })
                })
        }
    }, [PTU])

    const [image, setImage] = useState()

    const navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(image)
        // delete data.file
        data = { ...data, image }

        if (PTU === '0') {
            axios.post(baseURL, data, requestOptions)
                .then((res) => console.log(res.data))
        } else {
            axios.put(baseURL + '/' + PTU, data, requestOptions)
                .then((res) => console.log(res.data))
        }
        navigate(navigateTo)
    }


    return (
        <main>
            <div className="">
                {titleToDisplay}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titre du post</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        {...register('title')} />
                </div>
                <div>
                    <label htmlFor="text">Description</label>
                    <textarea
                        id="text"
                        rows="5"
                        name="text"
                        {...register('text')}></textarea>
                </div>
                {/* {(valuesToDisplay.imgValue && PTU !== '0') &&
                    <div>
                        <img src={valuesToDisplay.imgValue} alt='ah, encore un pb' />
                    </div>} */}
                <div>
                    <input type="file"
                        accept="image/*"
                        onChange={e => { setImage(e.target.files[0]) }}
                    />
                </div>

                <Button name={buttonName} type='submit' />
                <Button
                    name='annuler'
                    type='button'
                    action={e => {
                        e.preventDefault()
                        navigate(navigateTo)
                    }}
                />
            </form>
        </main >
    )
}

export default PostForm
