import Reply from "../Reply/Reply"

const ReplyList = (props) => {
    return ( 
        <div>
            {props.replies.map((reply) => {
                return(
                    <Reply user={reply.user.username} text={reply.text} />
                )
            })}
        </div>
     );
}
 
export default ReplyList;