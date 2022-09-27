import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from '../../components/Button';
import '../../styles/App.css';

import { Link } from 'react-router-dom';


const baseURL = 'http://localhost:3001/api/post'

function NewPost() {

    const [image, setImage] = useState()

    const { register, handleSubmit } = useForm()
    const requestOptions = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }

    const onSubmit = (data) => {
        delete data.file
        data = { ...data, image }

        axios.post(baseURL, data, requestOptions)
            .then((res) => console.log(res.data))
    }

    return (
        <main>
            <div className="">
                Nouvelle publication
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="postSubject">Titre du post</label>
                    <input type="text" id="postSubject" name="postSubject" {...register('title')} />
                </div>
                <div>
                    <label htmlFor="postText">Description</label>
                    <textarea id="postText" rows="5" name="postText" {...register('text')}></textarea>
                </div>
                <div>
                    <input type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0]
                            setImage(file)
                        }}
                    // console.log(image)
                    // const newUrl = URL.createObjectURL(image)
                    // {
                    // image &&
                    // < img src={newUrl} style={{ maxHeight: '100px', display: 'block', marginTop: '10px', border: '1px solid black' }
                    // } alt="" />
                    // }
                    // }}
                    />
                </div>

                <Button name='publier' type='submit' />
                <Link to='/gallery'>
                    <Button name='annuler' type='button' />
                </Link>
            </form>

        </main >
    )
}

export default NewPost
