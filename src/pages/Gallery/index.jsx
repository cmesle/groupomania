
import { useState, useEffect, useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import { FilterContext, RefreshContext } from '../../utils/context'

import PostCard from '../../components/PostCard'

import '../../styles/gallery.css'

function Gallery() {

    const [postsList, setPostsList] = useState([])
    const { refresh } = useContext(RefreshContext)
    const { filter } = useContext(FilterContext)
    const user = localStorage.getItem('user')
    const userRole = useOutletContext()[1]

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

    // postsList.sort((a, b) => {
    //     if (a.creationDate < b.creationDate) {
    //         return 1
    //     }
    //     if (a.creationDate < b.creationDate) {
    //         return -1
    //     }
    //     return 0
    // })


    return (


        <main>
            {!postsList[0] ? (
                (userRole === 'admin')? (
                    <div className='postsContainer'><h1>pas encore de publication</h1></div>) : (
                        <div className='postsContainer'><h1>un peu vide, non ? Publiez !</h1></div>
                ))
            : ((
                <div className='postsContainer'>
                    {postsList.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                        />
                    ))}
                </div>) 
            )}
        </main >

    )
}

export default Gallery