import Comment from '../Comment/Comment'

const CommentList = (props) => {
    return (  
        <div>
            {props.comments.map((comment) => {
                return(
                    <Comment user={comment.user.username} text={comment.text} likes={comment.likes} dislikes={comment.dislikes} />
                )
            })}
        </div>
    );
}
 
export default CommentList;