import { Link } from "react-router-dom"
import colors from "../../utils/style/colors"
import styled from "styled-components"
// import defaultPostImg from '../../assets/defaultPostImg.jpg'
import LikePost from "../LikePost"

const StyledCard = styled.div`
display: flex;
width: 27%;
padding: 10px;
border: 1px solid ${colors.tertiairy};
border-radius: 10px;
`

function PostCard({ id, imageUrl, title, date, text }) {


    return (
        // <Link to='../../pages/Post'>
        <StyledCard
        // onClick={() => {
        //     setPostId({ id })
        //     console.log(id)
        //     navigate(navigateTo)
        // }
        // }
        >
            <Link to={`../post/${id}`}>
                <p>author's name</p>
                <img src={imageUrl} alt='defaultPostImg' width='50%' />
                <div>
                    <h2>{title}</h2>
                    <div>{date}</div>
                    <div>{text}</div>
                    <LikePost />
                </div>
            </Link>
        </StyledCard >

    )
}

export default PostCard