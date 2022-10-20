import React from 'react'
import axios from "axios"
import { useState } from "react"

import thumbsUpOff from '../assets/thumbsUp-off.avif'
import thumbsUpOn from '../assets/thumbsUp-on.avif'


function LikePost({ post }) {
    const user = localStorage.getItem('user')
    const [postLikes, setPostLikes] = useState(post.likes)
    const baseURL = `http://localhost:3001/api/post/${post._id}`
    const token = localStorage.getItem('token')
    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token, 'Cache-Control': 'no-cache' }
    }
    const [alreadyLiked, setAlreadyLiked] = useState(((post.usersLiked).findIndex(userId => userId === user)))

    async function ratePost() {
        const requestData = {
            'userId': user,
            'like': ''
        }
        if (alreadyLiked === -1) {
            requestData.like = "1"
        } else {
            requestData.like = "0"
        }

        await axios.post(baseURL + `/like`, requestData, requestOptions)

        await axios.get(baseURL, requestOptions)
            .then(res => {
                setPostLikes(res.data.likes)
                setAlreadyLiked(((res.data.usersLiked).findIndex(userId => userId === user)))
            })
        console.log(alreadyLiked)
    }

    // const ratePost = () => {
    //     const requestData = {
    //         'userId': user,
    //         'like': ''
    //     }

    //     if (alreadyLiked === -1) {
    //         requestData.like = "1"
    //     } else {
    //         requestData.like = "0"
    //     }

    //     axios.post(baseURL + `/like`, requestData, requestOptions)
    //         .then(
    //             axios.get(baseURL, requestOptions)
    //                 .then(res => {
    //                     setPostLikes(res.data.likes)
    //                     console.log('posLikes', postLikes)
    //                     setAlreadyLiked(((res.data.usersLiked).findIndex(userId => userId === user)))
    //                     console.log('alreadyLiked', alreadyLiked)
    //                 })
    //         )

    //     setRateTrigger(rateTrigger === 'off' ? 'on' : 'off')

    // }

    return (
        <p className='post__rate'
            onClick={ratePost}
        >
            {alreadyLiked ? <img src={thumbsUpOff} alt='' width='100%' /> : <img src={thumbsUpOn} alt='' width='100%' />}
            <span>
                {postLikes}
            </span></p >
    )
}

export default LikePost 