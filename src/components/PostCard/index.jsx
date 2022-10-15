import { useContext } from 'react'
import { useOutletContext } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Button from "../Button"
import LikePost from "../LikePost"

import '../../styles/gallery.css'
import { RefreshContext } from '../../utils/context'
import { useState } from 'react'

function PostCard({ post }) {

    const [openPost, setOpenPost] = useState('closed')
    const [usersList] = useOutletContext()
    const userRole = useOutletContext()[2]

    const author = usersList.filter(user => (user._id === post.userId))[0].pseudo

    const preDate = post.creationDate
    const date = preDate.substring(0, 10)

    const handleOpenPost = () => {
        openPost === 'closed' ? setOpenPost('open') : setOpenPost('closed')
    }

    /* -------------------------------------------------------------------------BOUTONS */
    const baseURL = `http://localhost:3001/api/post/${post._id}`

    const token = localStorage.getItem('token')
    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token }
    }

    const userId = localStorage.getItem('user')

    const { toggleRefresh } = useContext(RefreshContext)
    const navigate = useNavigate()
    const navigateTo = '../gallery'

    async function deletePost(e) {
        e.preventDefault()
        await axios.delete(baseURL, requestOptions)
            .then(res => console.log(res))
        await toggleRefresh()
        navigate(navigateTo)
    }

    // const closePost = (e) => {
    //     e.preventDefault()
    //     navigate(navigateTo)
    // }

    const modifyPost = (e) => {
        e.preventDefault()
        localStorage.setItem('PTU', post._id)
        navigate('../updatepost')
    }

    return (
        <div className={openPost === 'closed' ? 'post-card' : 'post-card--open'}>
            <div className='post-card--clickable' onClick={handleOpenPost}>

                {post.imageUrl &&
                    <img src={post.imageUrl} alt='defaultPostImg' width='100%' />}
                <div className={openPost === 'closed' ? 'post-content' : 'post-content--open'}>
                    <div className="post-identity">
                        <div className="">
                            <p>{author}</p>
                            <p className="post-date">{date/*post.creationDate*/}</p>
                        </div>
                        <div>{post.title}</div>
                        <div className='post-button'>
                            {/* {openPost === 'open' &&
                    <Button type='button' name='fermer' action={closePost}
                    />
                } */}

                            {/* <div> */}
                            {(userRole !== 'admin' && userId === post.userId) && (
                                <Button type='button' name='modifier' action={modifyPost} />)}
                            {(userRole === 'admin' || userId === post.userId) && (
                                <Button
                                    type='button'
                                    name='supprimer'
                                    action={deletePost} />
                            )}
                            {/* </div> */}
                        </div>
                    </div>

                    {post.text &&
                        <div className={openPost === 'closed' ? 'post-text' : 'post-text--open'}>
                            {post.text}
                        </div>
                    }

                </div>
            </div>


            {userRole !== 'admin' &&
                <LikePost post={post} />
            }
        </div >
    )
}

export default PostCard