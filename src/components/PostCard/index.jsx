import { Link } from "react-router-dom"

import styled from "styled-components"

import colors from "../../utils/style/colors"

import LikePost from "../LikePost"


const StyledCard = styled.div`
display: flex;
width: 27%;
padding: 10px;
border: 1px solid ${colors.tertiairy};
border-radius: 10px;
`

function PostCard({ id, imageUrl, title, date, text, author }) {

    return (
        <StyledCard>
            <Link to={`../post/${id}`}>
                <p>{author}</p>
                {imageUrl &&
                    <img src={imageUrl} alt='defaultPostImg' width='50%' />}
                <div>
                    <h2>{title}</h2>
                    <div>{date}</div>
                    {text &&
                        <div>{text}</div>
                    }
                    <LikePost />
                </div>
            </Link>
        </StyledCard >

    )
}

export default PostCard