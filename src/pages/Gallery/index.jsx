import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { FilterContext } from '../../utils/context'

import PostCard from '../../components/PostCard'

// import styled from 'styled-components'
// const StyledPostsContainer = styled.div`

// `


function Gallery(props) {

    const [postsList, setPostsList] = useState([])
    const { filter } = useContext(FilterContext)
    const user = localStorage.getItem('user')

    useEffect(() => {
        const token = localStorage.getItem('token')
        const requestOptions = {
            headers: { 'Authorization': 'Bearer ' + token }
        }

        axios.get('http://localhost:3001/api/post', requestOptions)
            .then((res) => {
                filter === 'myPosts' ? (
                    setPostsList(res.data.filter(function (el) {
                        return el.userId === user
                    }))
                ) : (setPostsList(res.data))
            })
    }, [filter])

    postsList.sort((a, b) => {
        if (a.creationDate < b.creationDate) {
            return 1
        }
        if (a.creationDate < b.creationDate) {
            return -1
        }
        return 0
    })

    /* getting the author's pseudo */
    const [usersList, setUsersList] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/api/auth/user')
            .then(res =>
                setUsersList(res.data))
    }, [])

    function findingAuthor(authorId) {
        const filteredUserList = usersList.filter(user => (user._id === authorId))
        return (filteredUserList[0].pseudo)
    }

    // function convertingDate(date) {
    //     const shortdate = date.toDateString()
    //     return shortdate
    // }

    return (
        <main>
            {/* <StyledPostsContainer isFilter={filter === 'allPosts'}> */}
            <div className='postsContainer'>
                {postsList.map((post) => (
                    <PostCard
                        key={post._id}
                        // id={post._id}
                        // author={findingAuthor(post.userId)}
                        // imageUrl={post.imageUrl}
                        // title={post.title}
                        // date={post.creationDate}
                        // text={post.text}
                        post={post}
                    />
                ))}
            </div>
            {/* </StyledPostsContainer> */}

        </main >
    )
}

export default Gallery