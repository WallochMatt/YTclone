import Comment from '../Comment/Comment'
import "./CommentList.css"

const CommentList = (props) => {
    return (  
        <div className='post-align'>
            {props.comments.slice(0).reverse().map((comment) => {
                return(
                    <Comment videoComments={props.videoComments} user={comment.user.username} text={comment.text} likes={comment.likes} dislikes={comment.dislikes} id={comment.id} />
                )
            })}
        </div>
    );
}

export default CommentList;