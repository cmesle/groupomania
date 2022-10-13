import { Link, useOutletContext } from "react-router-dom"

import '../../styles/gallery.css'

import colors from "../../utils/style/colors"

import LikePost from "../LikePost"


function PostCard({ /*id, imageUrl, title, date, text, author*/ post }) {

    const [usersList] = useOutletContext()
    const author = usersList.filter(user => (user._id === post.userId))[0].pseudo

    return (
        <div className='post-card'>
            < Link to={`../post/${post._id}`} className='post-card--clickable'>

                {post.imageUrl &&
                    <img src={post.imageUrl} alt='defaultPostImg' width='50%' />}
                <div className="post-content">
                    <div className="post-identity">
                        <div className="">
                            <p>{author}</p>
                            <p className="post-date">{post.creationDate}</p>
                        </div>
                        <div>{post.title}</div>
                    </div>

                    {post.text &&
                        <div className="post-text">{post.text}</div>
                    }

                </div>
            </Link >
            <LikePost post={post} />
        </div >
    )
}

export default PostCard