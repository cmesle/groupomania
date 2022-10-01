import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import LikePost from "../../components/LikePost"
import Button from "../../components/Button"
import "../../styles/styledPost.css"


function Post(imageUrl, title, date, text) {

    const postId = useParams()
    const baseURL = `http://localhost:3001/api/post/${postId.id}`

    localStorage.setItem('PTU', `${postId.id}`)

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(baseURL)
            .then((res) => setPost(res.data))
    })


    // function deletePost(e) {
    //     e.preventDefault();
    //     console.log('Le lien a été cliqué.');
    // }


    const deletePost = (e) => {
        e.preventDefault()
        axios.delete(baseURL)
            .then(res => console.log(res))
    }

    return (
        <main>

            < div className="styledPost" >
                <div>author's name</div>
                <img src={post.imageUrl} alt='defaultPostImg' width='50%' />
                <div>
                    <h2>{post.title}</h2>
                    <div>{post.date}</div>
                    <div>{post.text}</div>
                    <LikePost />
                    {/* {authorId===requestAnimationFrame.auth && */}
                    <Link to='../newpost'>
                        <Button name='modifier' />
                    </Link>

                    <Link to={'../../gallery'} onClick={deletePost}>
                        <Button type='button' name='supprimer'
                        />
                    </Link>
                    {/* } */}
                </div>
            </div>
        </main >
    )
}

export default Post