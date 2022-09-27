import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import styled from 'styled-components'
import PostCard from '../../components/PostCard'

const StyledPostsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
function Gallery() {

    const [postsList, setPostsList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/post')
            .then((res) => setPostsList(res.data))
    }, [])

    postsList.sort((a, b) => {
        if (a.creationDate < b.creationDate) {
            return 1
        }
        if (a.creationDate < b.creationDate) {
            return -1
        }
        return 0
    })

    const shortDate = postsList.creationDate
    console.log(shortDate)
    return (
        <main>
            <h1>Affichage de tous les posts</h1>

            <StyledPostsContainer>
                {postsList.map((post) => (
                    <PostCard
                        key={post._id}
                        id={post._id}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        date={post.creationDate}
                        text={post.text}
                    />
                ))}
            </StyledPostsContainer>

        </main >
    )
}

export default Gallery