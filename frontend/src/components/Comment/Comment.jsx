

const Comment = (props) => {
    return (
        <div>
            <p>User: {props.user}</p>
            <p>Comment: {props.text}</p>
            <p>Likes: {props.likes}</p>
            <p>Dislikes: {props.dislikes}</p>
        </div>
      );
}
 
export default Comment;