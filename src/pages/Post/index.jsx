import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import LikePost from "../../components/LikePost"
import Button from "../../components/Button"
import "../../styles/gallery.css"

function Post() {

    const postId = useParams()

    const baseURL = `http://localhost:3001/api/post/${postId.id}`
    console.log(baseURL)
    const token = localStorage.getItem('token')
    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token }
    }

    const userId = localStorage.getItem('user')

    localStorage.setItem('PTU', `${postId.id}`)

    /* fetching Post properties */
    const [post, setPost] = useState({})
    const [usersList, setUsersList] = useState([])
    const [author, setAuthor] = useState({})

    useEffect(() => {
        axios.get(baseURL, requestOptions)
            .then((res) => setPost(res.data))
    }, [])


    /* deleting Post */

    const navigate = useNavigate()
    const navigateTo = '../gallery'

    const deletePost = (e) => {
        e.preventDefault()

        axios.delete(baseURL, requestOptions)
            .then(res => console.log(res))

        navigate(navigateTo)
    }

    const closePost = (e) => {
        e.preventDefault()
        navigate(navigateTo)
    }

    const modifyPost = (e) => {
        e.preventDefault()
        navigate('../updatepost')
    }

    return (
        <main>
            < div className="styledPost" >
                <div className="post-content">
                    <div className="post-identity">
                        <div className="">
                            <p>
                                {post.userId}
                                {/* {findingAuthor(post.userId)} */}
                            </p>
                            <p className="post-date">{post.creationDate}</p>
                        </div>
                        <div>{post.title}</div>
                    </div>

                    {post.text &&
                        <div className="post-text">{post.text}</div>
                    }

                    {post.imageUrl &&
                        <img src={post.imageUrl} alt='defaultPostImg' width='50%' />
                    }

                    {/* <LikePost postId={post._id} /> */}
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
            </div>
        </main >
    )
}

export default Post