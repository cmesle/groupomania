import { useContext } from 'react'
import { Link, useOutletContext } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Button from "../Button"
import LikePost from "../LikePost"

import '../../styles/gallery.css'
import { RefreshContext } from '../../utils/context'

function PostCard({ post/*, postsListRefresh*/ }) {

    const [usersList] = useOutletContext()
    const author = usersList.filter(user => (user._id === post.userId))[0].pseudo

    /* -------------------------------------------------------------------------BOUTONS */
    const baseURL = `http://localhost:3001/api/post/${post._id}`
    // console.log(baseURL)
    const token = localStorage.getItem('token')
    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token }
    }

    const userId = localStorage.getItem('user')

    const { incrementRefresh } = useContext(RefreshContext)
    const navigate = useNavigate()
    const navigateTo = '../gallery'
    const deletePost = (e) => {
        e.preventDefault()

        axios.delete(baseURL, requestOptions)
            .then(res => console.log(res))

        incrementRefresh()
        navigate(navigateTo)
    }

    const closePost = (e) => {
        e.preventDefault()
        navigate(navigateTo)
    }

    const modifyPost = (e) => {
        e.preventDefault()
        localStorage.setItem('PTU', post._id)
        navigate('../updatepost')
    }

    return (
        <div className='post-card'>
            < Link to={`../post/${post._id}`} className='post-card--clickable'>

                {post.imageUrl &&
                    <img src={post.imageUrl} alt='defaultPostImg' width='50%' />}
                <div className="post-content">
                    <div className="post-identity">
                        <div className="">
                            <p>{author}</p>
                            <p className="post-date">{post.creationDate}</p>
                        </div>
                        <div>{post.title}</div>
                    </div>

                    {post.text &&
                        <div className="post-text">{post.text}</div>
                    }

                </div>
            </Link >
            <div className='post-button'>
                <Button type='button' name='fermer' action={closePost}
                />
                {userId === post.userId && (
                    <div>
                        <Button type='button' name='modifier' action={modifyPost} />
                        <Button
                            type='button'
                            name='supprimer'
                            action={deletePost} />

                    </div>
                )}
            </div>
            <LikePost post={post} />
        </div >
    )
}

export default PostCard