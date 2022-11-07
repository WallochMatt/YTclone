import "./Comment.css"

const Comment = (props) => {
    return (
        <div className="blurb shadow">
            <p>User: {props.user}</p>
            <p>Comment: {props.text}</p>
            <div className="likes">
                <p>Likes: {props.likes}</p>
                <p>Dislikes: {props.dislikes}</p>
            </div>     
        </div>
    );
}
//^ Make thr
export default Comment;