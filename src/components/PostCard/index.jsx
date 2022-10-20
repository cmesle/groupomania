import { useState, useContext } from 'react'
import { useOutletContext } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Button from "../Button"
import LikePost from "../LikePost"

import { RefreshContext } from '../../utils/context'
import '../../styles/gallery.css'

import iconPostModif from '../../assets/icon-post-modif.avif'
import iconPostDelete from '../../assets/icon-post-del.avif'

function PostCard({ post }) {

    const [openPost, setOpenPost] = useState('closed')
    const [usersList] = useOutletContext()
    const userRole = useOutletContext()[2]

    console.log(usersList)
    console.log(usersList.filter(user => (user._id === post.userId))[0].pseudo)
    // const author = usersList.filter(user => (user._id === post.userId))[0].pseudo

    const postCreationDate = new Date(post.creationDate)
        .toLocaleDateString('fr-FR')

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

    const modifyPost = (e) => {
        e.preventDefault()
        localStorage.setItem('PTU', post._id)
        navigate(`../updatepost/${post._id}`)
    }

    return (
        <div className={openPost === 'closed' ? 'post-card' : 'post-card--open'}>
            <div
                className={openPost === 'closed' ? 'post-card__clickable' : 'post-card__clickable--open'}
                onClick={handleOpenPost}>

                {post.imageUrl &&
                    <img className="post-card__img" src={post.imageUrl} alt='defaultPostImg' width='100%' />}
                <div className={(openPost === 'open') && post.imageUrl ? 'post-content--open' : ((openPost === 'open') && !post.imageUrl) ? 'post-content' : 'post-content'}>
                    <div className='post__header'>
                        <div className="post__identity">
                            <div className="post__identity__who-when">
                                {/* <p>{author}</p> */}
                                <p className="post__identity__date">le {postCreationDate}</p>
                            </div>
                            <div className='post__post__title'>{post.title}</div>
                        </div>
                        <div className='post__button'>
                            {(userRole === 'admin' || userId === post.userId) && (
                                <>
                                    <Button type='button' icon={iconPostModif} name='modifier' action={modifyPost} />
                                    <Button type='button' icon={iconPostDelete} name='supprimer' action={deletePost} />
                                </>
                            )}
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