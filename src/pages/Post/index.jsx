import LikePost from "../../components/LikePost"
function Post(imageUrl, title, date, text) {

    return (
        <main>
            <img src={imageUrl} alt='defaultPostImg' width='50%' />
            <div>
                <h2>{title}</h2>
                <div>{date}</div>
                <div>{text}</div>
                <LikePost />
            </div>
        </main>
    )
}

export default Post