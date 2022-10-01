import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from '../../components/Button';
import '../../styles/App.css';


function NewPost() {

    const PTU = localStorage.getItem('PTU')
    const baseURL = 'http://localhost:3001/api/post'


    if (PTU !== 0) {
        axios.get(baseURL + '/' + PTU)
            .then(res => console.log(res.data))
    }


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
        PTU === '0' ? (
            <main>
                <>
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
                            />
                        </div>

                        <Button name='publier' type='submit' />
                        <Link to='/gallery'>
                            <Button name='annuler' type='button' />
                        </Link>
                    </form>
                </>
            </main >
        ) : (
            <main>
                <>
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
                            />
                        </div>

                        <Button name='enregistrer' type='submit' />
                        <Link to='/gallery'>
                            <Button name='annuler' type='button' />
                        </Link>
                    </form>
                </>
            </main >
        )
    )
}

export default NewPost
