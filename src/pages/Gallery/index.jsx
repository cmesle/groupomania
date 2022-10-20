import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { FilterContext, RefreshContext } from '../../utils/context'

import PostCard from '../../components/PostCard'


function Gallery() {

    const [postsList, setPostsList] = useState([])
    const { refresh } = useContext(RefreshContext)
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
    }, [filter, refresh])

    postsList.sort((a, b) => {
        if (a.creationDate < b.creationDate) {
            return 1
        }
        if (a.creationDate < b.creationDate) {
            return -1
        }
        return 0
    })


    return (


        <main>
            <div className='postsContainer'>
                {postsList.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                    />
                ))}
            </div>
        </main >

    )
}

export default Gallery