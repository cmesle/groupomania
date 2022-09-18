import colors from "../../utils/style/colors"
import styled from "styled-components"
import defaultPostImg from '../../assets/defaultPostImg.jpg'
import LikePost from "../LikePost"

const StyledCard = styled.div`
display: flex;
width: 27%;
padding: 10px;
border: 1px solid ${colors.tertiairy};
border-radius: 10px;
`

function PostCard() {
    return (
        <StyledCard>
            <img src={defaultPostImg} alt='defaultPostImg' width='50%' />
            <div>
                <h2>Titre du Post</h2>
                <div>Texte du post</div>
                <LikePost />
            </div>

        </StyledCard>
    )
}

export default PostCard