import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"

// class LikePost extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { like: '' }
//     }

//     componentDidMount() {

//     }
//     componentWillUnmount() {

//     }

//     render() {
//         return (
//             <p className='post-rate'
//                 onClick={ratePost}
//             >👍<span>
//                     {postLikes}
//                 </span></p >
//         )
//     }
// }
function LikePost({ post }) {
    const user = localStorage.getItem('user')
    const [postLikes, setPostLikes] = useState()
    const [like, setLike] = useState()
    const baseURL = `http://localhost:3001/api/post/${post._id}`
    const token = localStorage.getItem('token')
    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token }
    }

    // const [alreadyLiked, setAlreadyLiked] = useState()
    console.log(post)
    console.log('post.usersLiked', post.usersLiked)
    const alreadyLiked = ((post.usersLiked).findIndex(userId => userId === user))

    const ratePost = () => {
        const requestData = {
            'userId': user,
            'like': like
        }

        if (alreadyLiked === -1) {
            setLike("1")
            requestData.like = like
        } else if (alreadyLiked === 0) {
            setLike("0")
            requestData.like = like
        } else { console.log('error in rating') }


        axios.post(baseURL + `/like`, requestData, requestOptions)
            .then(res => console.log(res.data))
    }

    return (
        <p className='post-rate'
            onClick={ratePost}
        >👍<span>
                {post.likes}
            </span></p >
    )
}

export default LikePost 