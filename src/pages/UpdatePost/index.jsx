// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import axios from 'axios'

// import Button from '../../components/Button';
import '../../styles/App.css';
import PostForm from '../../components/PostForm';
import { useEffect } from 'react';


function UpdatePost() {
    const token = localStorage.getItem('token')

    const baseURL = 'http://localhost:3001/api/post'
    const PTU = localStorage.getItem('PTU')

    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token }
    }

    useEffect(() => {
        axios.get(baseURL + '/' + PTU, requestOptions)
        // .then(res => console.log(res.data))
    }, [])
    return <PostForm
        titleToDisplay='Modifier votre publication'
        imageInputName='modifier limage'
        buttonName='enregistrer'
        navigateTo={'../../gallery'} />
}

export default UpdatePost
