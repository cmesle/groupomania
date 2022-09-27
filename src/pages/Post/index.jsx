import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

import colors from "../../utils/style/colors"

import LikePost from "../../components/LikePost"
import Button from "../../components/Button"
import { PostToUpdateContext } from "../../utils/context"



const StyledPost = styled.div`
display: flex;
flex-direction: column;
width: 27%;
padding: 10px;
border: 1px solid ${colors.tertiairy};
border-radius: 10px;
`

function Post(imageUrl, title, date, text) {

    const postId = useParams()
    const baseURL = `http://localhost:3001/api/post/${postId.id}`

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(baseURL)
            .then((res) => setPost(res.data))
    }, [baseURL])

    return (
        <main>

            < StyledPost >
                <div>author's name</div>
                <img src={post.imageUrl} alt='defaultPostImg' width='50%' />
                <div>
                    <h2>{post.title}</h2>
                    <div>{post.date}</div>
                    <div>{post.text}</div>
                    <LikePost />
                    {/* {authorId===requestAnimationFrame.auth && */}
                    <Link to=''>
                        <PostToUpdateContext.Consumer>
                            {(context) => (
                                <Button name='modifier' onClick={(context) => {
                                    context.setPostToUpdate(post)
                                    console.log(context.postToUpdate)
                                }} />
                            )}
                        </PostToUpdateContext.Consumer>
                    </Link>
                    <Button name='supprimer' />
                    {/* } */}
                </div>
            </StyledPost>


        </main >
    )
}

export default Post