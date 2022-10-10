import { Link } from "react-router-dom"

import '../../styles/gallery.css'

import colors from "../../utils/style/colors"

import LikePost from "../LikePost"


function PostCard({ id, imageUrl, title, date, text, author }) {

    return (
        <Link to={`../post/${id}`} className='post-card'>
            {/* <div className='postCard'> */}
            {imageUrl &&
                <img src={imageUrl} alt='defaultPostImg' width='50%' />}
            <div className="post-content">
                <div className="post-identity">
                    <div className="">
                        <p>{author}</p>
                        <p className="post-date">{date}</p>
                    </div>
                    <div>{title}</div>
                </div>

                {text &&
                    <div className="post-text">{text}</div>
                }
                <LikePost />

            </div>
            {/* </div > */}
        </Link>
    )
}

export default PostCard