import { Link, useParams } from "react-router-dom"
import colors from "../../utils/style/colors"
import styled from "styled-components"
import defaultPostImg from '../../assets/defaultPostImg.jpg'
import LikePost from "../LikePost"
import { useState } from "react"

const StyledCard = styled.div`
display: flex;
width: 27%;
padding: 10px;
border: 1px solid ${colors.tertiairy};
border-radius: 10px;
`

function PostCard({ _id, imageUrl, title, date, text }) {
    const [postId, setPostId] = useState('')
    const navigateTo = 'http://localhost/3001/api/post'
    return (
        // <Link to='../../pages/Post'>
        <StyledCard onClick={() => {
            setPostId({ _id })
            console.log(postId)
            // navigate(navigateTo)
        }
        }>
            <img src={imageUrl} alt='defaultPostImg' width='50%' />
            <div>
                <h2>{title}</h2>
                <div>{date}</div>
                <div>{text}</div>
                <LikePost />
            </div>

        </StyledCard >
        // </Link>
    )
}

export default PostCard