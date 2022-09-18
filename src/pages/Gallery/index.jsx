import styled from 'styled-components'
import Post from '../../components/Post'

const StyledPostsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
function Gallery() {
    return (
        <main>
            <h1>Affichage de tous les posts</h1>
            <StyledPostsContainer>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </StyledPostsContainer>
        </main>
    )
}

export default Gallery