import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import LikePost from "../../components/LikePost"
import Button from "../../components/Button"
import "../../styles/gallery.css"


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
    const [post, setPost] = useState({})
    const [usersList, setUsersList] = useState([])
    const [author, setAuthor] = useState({})


    // function findingAuthor(authorId) {

    //     const filteredUserList = usersList.filter(user => (user._id === authorId))
    //     return (
    //         // console.log(
    //         filteredUserList[0].pseudo
    //     )
    //     // )
    // }

    useEffect(() => {
        axios.get(baseURL, requestOptions)
            .then((res) => setPost(res.data))
    }, [])
    const authorId = post.userId
    // console.log(authorId)
    useEffect(() => {
        console.log(authorId)
        axios.get('http://localhost:3001/api/auth/users')
            .then(res => (res.data))
            .then(array => (array.filter(user => user._id === authorId)))
            .then(array => setAuthor(array[0]))
            // .then(object => (object.pseudo))
            .then(thing => console.log(thing))
            .catch(console.error)
    }, [authorId])
    console.log(author)
    // const filteredUsersList = usersList.filter(user => (user._id === post.userId))
    // console.log(filteredUsersList[0])
    // const userObject = filteredUsersList[0]
    // console.log('userObject : ' + userObject)
    // const pseudo = filteredUsersList[0].pseudo
    // console.log(pseudo)

    // console.log(post)

    /* getting the author's pseudo */

    // const [usersList, setUsersList] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:3001/api/auth/users')
    //         .then(res => { setUsersList(res.data) })
    //         .then(() => usersList.filter(user => (user._id === post.userId)))
    //         .catch(console.error)
    // }, [])
    // console.log(filteredUserList)


    // function findingAuthor(authorId) {

    //     const filteredUserList = usersList.filter(user => (user._id === authorId))
    //     return (
    //         // console.log(
    //         filteredUserList[0].pseudo
    //     )
    //     // )
    // }
    // findingAuthor("63388514ea36a0e4c8ded604")

    /* deleting Post */

    const navigate = useNavigate()
    const navigateTo = '../gallery'
    const deletePost = (e) => {
        e.preventDefault()

        axios.delete(baseURL, requestOptions)
            .then(res => console.log(res))

        navigate(navigateTo)
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

                    <LikePost />
                    <Button type='button' name='fermer' navigateTo={navigateTo}
                    // onClick={(e) => {
                    //     e.preventDefault()
                    //     navigate(navigateTo)
                    // }
                    // }
                    />
                    {userId === post.userId && (
                        <div>
                            <Link to='../updatepost'>
                                <Button name='modifier' />
                            </Link>
                            <Link onClick={deletePost}>
                                <Button
                                    type='button'
                                    name='supprimer'
                                // onClick={
                                // console.log('clicked')
                                // deletePost
                                // }
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main >
    )
}

export default Post