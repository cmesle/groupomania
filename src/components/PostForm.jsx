import { useState, useEffect /*, useRef*/ } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from '../components/Button';
import '../styles/App.css';


function PostForm({ titleToDisplay, buttonName }) {

    const PTU = localStorage.getItem('PTU')
    const token = localStorage.getItem('token')

    const baseURL = 'http://localhost:3001/api/post'
    const requestOptions = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        }
    }

    const [valuesToDisplay, setValuesToDisplay] = useState({})



    useEffect(() => {
        if (PTU === '0') {
            setValuesToDisplay({
                'titleValue': 'title',
                'textValue': 'text',
                'imgValue': 'coucou'
            })
        } else {
            axios.get(baseURL + '/' + PTU, requestOptions)
                .then((res) => {
                    setValuesToDisplay({
                        'postId': res.data._id,
                        'titleValue': res.data.title,
                        'textValue': res.data.text,
                        'imgValue': res.data.imageUrl
                    })

                })
        }
    }, [PTU])

    // const { title, setTitle } = useState()

    // const handleChange = (e) => {
    //     setTitle(e.target.value)

    //     const target = e.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    const [image, setImage] = useState()


    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => {
        delete data.file
        data = { ...data, image }

        if (PTU === '0') {
            axios.post(baseURL, data, requestOptions)
                .then((res) => console.log(res.data))
        } else {
            axios.put(baseURL + '/' + PTU, data, requestOptions)
                .then((res) => console.log(res.data))
        }
    }


    return (
        <main>
            <div className="">
                {titleToDisplay}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="postSubject">Titre du post</label>
                    <input
                        type="text"
                        id="postSubject"
                        name="postSubject"
                        defaultValue={valuesToDisplay.titleValue}
                        // onChange={handleChange}
                        {...register('title')} />
                </div>
                <div>
                    <label htmlFor="postText">Description</label>
                    <textarea
                        id="postText"
                        rows="5"
                        name="postText"
                        defaultValue={valuesToDisplay.textValue}
                        // onChange={handleChange}
                        {...register('text')}></textarea>
                </div>
                {(valuesToDisplay.imgValue && PTU !== '0') &&
                    <div>
                        <img src={valuesToDisplay.imgValue} alt='ah, encore un pb' />
                    </div>}
                <div>
                    <input type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0]
                            setImage(file)
                        }}
                    />
                </div>

                <Button name={buttonName} type='submit' />
                <Link to='/gallery'>
                    <Button name='annuler' type='button' />
                </Link>
            </form>
        </main >
    )
}

export default PostForm
