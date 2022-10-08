import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { FilterContext } from '../../utils/context'

import styled from 'styled-components'
import PostCard from '../../components/PostCard'

const StyledPostsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
function Gallery() {

    const [postsList, setPostsList] = useState([])
    const { filter } = useContext(FilterContext)
    const user = localStorage.getItem('user')

    useEffect(() => {
        const token = localStorage.getItem('token')
        const requestOptions = {
            headers: { 'Authorization': 'Bearer ' + token }
        }
        axios.get('http://localhost:3001/api/post', requestOptions)
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

    useEffect(() => {
        filter === 'myPosts' ?
            setPostsList(postsList.filter(function (el) {
                return el.userId === user
            }))
            : setPostsList(postsList)
    }, [filter])

    /* getting the author's pseudo */
    const [usersList, setUsersList] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/api/auth/users')
            .then(res =>
                setUsersList(res.data))
    }, [])

    function findingAuthor(authorId) {
        const filteredUserList = usersList.filter(user => (user._id === authorId))
        return (filteredUserList[0].pseudo)
    }

    // const shortDate = postsList.creationDate
    // console.log(shortDate)

    return (
        <main>
            <h1>Affichage de tous les posts</h1>

            <StyledPostsContainer isFilter={filter === 'allPosts'}>
                {/*
                mettre ici l'appel au context :
                if (postFilter = 'myPosts') {
                {postsList.filter.map}
                */}
                {
                    postsList.map((post) => (
                        <PostCard
                            key={post._id}
                            id={post._id}
                            author={findingAuthor(post.userId)}
                            imageUrl={post.imageUrl}
                            title={post.title}
                            date={post.creationDate}
                            text={post.text}
                        />
                    ))
                }
            </StyledPostsContainer>

        </main >
    )
}

export default Gallery