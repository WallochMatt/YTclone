import axios from "axios";
import "./Comment.css"
import { useEffect, useState } from "react";
import ReplyList from "../ReplyList/ReplyList";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {
    const [replies, setReplies] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        console.log("Use Effect")
        getReplies();
    }, []);

    async function getReplies(){
        console.log("Comment ID", props.id);
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/${props.id}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        } )
        setReplies(response.data);
    }

    return (
        <div className="blurb shadow">
            <p>User: {props.user}</p>
            <p>Comment: {props.text}</p>
            <div className="likes">
                <p>Likes: {props.likes}</p>
                <p>Dislikes: {props.dislikes}</p>
            </div>     
            {!user ?
                <p>Please sign in or register to view replies</p>:
                <ReplyList replies={replies} />
            }
        </div>
    );
}

export default Comment;