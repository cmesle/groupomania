import { Link } from "react-router-dom"

import '../../styles/gallery.css'

import colors from "../../utils/style/colors"

import LikePost from "../LikePost"


function PostCard({ /*id, imageUrl, title, date, text, author*/ post }) {

    return (
        <div className='post-card'>
            < Link to={`../post/${post._id}`} >

                {post.imageUrl &&
                    <img src={post.imageUrl} alt='defaultPostImg' width='50%' />}
                <div className="post-content">
                    <div className="post-identity">
                        <div className="">
                            {/* <p>{author}</p> */}
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