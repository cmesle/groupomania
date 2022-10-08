import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import LikePost from "../../components/LikePost"
import Button from "../../components/Button"
import "../../styles/styledPost.css"


function Post(/*imageUrl, title, date, text*/) {

    const postId = useParams()
    const baseURL = `http://localhost:3001/api/post/${postId.id}`

    const token = localStorage.getItem('token')
    const requestOptions = {
        headers: { 'Authorization': 'Bearer ' + token }
    }


    const userId = localStorage.getItem('user')


    localStorage.setItem('PTU', `${postId.id}`)

    /* fetching Post properties */
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get(baseURL, requestOptions)
            .then((res) => setPost(res.data))
    }, [])

    /* deleting Post */
    const deletePost = (e) => {
        e.preventDefault()
        axios.delete(baseURL)
            .then(res => console.log(res))
    }

    /* getting the author's pseudo */
    const [usersList, setUsersList] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/api/auth/users')
            .then(res =>
                setUsersList(res.data))
    }, [])

    function findingAuthor(authorId) {

        const filteredUserList = usersList.filter(user => (user._id === authorId))
        return (
            // console.log(
            filteredUserList[0].pseudo)
        // )
    }
    // findingAuthor("63388514ea36a0e4c8ded604")

    return (
        <main>
            < div className="styledPost" >
                <div>
                    {post.userId}

                    {/* {findingAuthor(post.userId)} */}
                </div>
                {post.imageUrl &&
                    <img src={post.imageUrl} alt='defaultPostImg' width='50%' />
                }
                <div>
                    <h2>{post.title}</h2>
                    <div>{post.date}</div>
                    {post.text &&
                        <div>{post.text}</div>
                    }
                    <LikePost />
                    {/* {userId === author.userId && ( */}
                    <>
                        <Link to='../updatepost'>
                            <Button name='modifier' />
                        </Link>
                        <Link to={'../../gallery'} onClick={deletePost}>
                            <Button type='button' name='supprimer' />
                        </Link>
                    </>
                    {/* )} */}
                </div>
            </div>
        </main >
    )
}

export default Post