import axios from "axios";
import "./Comment.css"
import { useEffect, useState } from "react";
import ReplyList from "../ReplyList/ReplyList";
import useAuth from "../../hooks/useAuth";
import ReplyForm from '../ReplyForm/ReplyForm';

const Comment = (props) => {
    const [likes, setLikes] = useState(props.likes)
    const [dislikes, setDislikes] = useState(props.dislikes)
    const [thumbsUp, setThumbsUp] = useState({
        video_id: `${props.videoId}`,
        text: `${props.text}`,
        likes: likes,
    })
    const [thumbsDown, setThumbsDown] = useState({
        video: `${props.videoId}`,
        text: `${props.text}`,
        dislikes: dislikes,
    })
    const [replies, setReplies] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        console.log("Use Effect")
        getReplies();
    }, []);

    async function getReplies(){
        console.log("Comment ID", props.id);
        let response = await axios.get(`http://3.129.45.197:8000/api/replies/${props.id}/`,  {
            headers: {
                Authorization: "Bearer " + token
            }
        } )
        setReplies(response.data);
    }

    async function addLikes(){
        setLikes(likes + 1)
        console.log(likes)
        setThumbsUp({
            ...thumbsUp,
            likes: likes + 1
        })
        console.log("inside async addLikes function", thumbsUp)
        let response = await axios.put(`http://3.129.45.197:8000/api/comments/user/${props.id}/`, thumbsUp, {
            headers: {
                Authorization: "Bearer " + token
            }
        } )
        if(response.status === 200){
            props.videoComments()
        }
        
    }

    async function addDislikes(){
        setDislikes(dislikes + 1)
        setThumbsDown({
            ...thumbsDown,
            dislikes: dislikes + 1
        })
        console.log("inside async addDislikes function", thumbsDown)
        let response = await axios.put(`http://3.129.45.197:8000/api/comments/user/${props.id}/`, thumbsDown, {
            headers: {
                Authorization: "Bearer " + token
            }
        } )
        if(response.status === 200){
        props.videoComments()
        }
        
    }

    return (
        <div className="blurb shadow">
            <p>User: {props.user}</p>
            <p>Comment: {props.text}</p>
            <div className="likes">
                <button onClick={addLikes} className="text-spacing" >Likes: {likes}</button>
                <button onClick={addDislikes} >Dislikes: {dislikes}</button>
            </div>     
            {!user ?
                <p></p>:
                <div>
                    <div>
                        <ReplyList replies={replies} />
                    </div>
                    <div>
                        <ReplyForm getReplies={getReplies} id={props.id} token={token} />
                    </div>
                </div>
            }
        </div>
    );
}

export default Comment;