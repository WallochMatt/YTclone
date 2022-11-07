import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { useParams, useNavigate, useSearchParams, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CommentList from '../../components/CommentList/CommentList'
import CommentForm from "../../components/CommentForm/CommentForm";

import useAuth from "../../hooks/useAuth";
import "./VideoPage.css";


const VideoPage = (props) => {
    let navigate = useNavigate();

    const [user, token] = useAuth()

    const {videoId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        props.getRelatedVideos(videoId);
        videoComments();
        console.log(videoId)
        
    }, []);

    function handleClick(event, video){
        event.preventDefault();
        props.setSelectedVideo(video);
        console.log("video we want passed", video);
        navigate(`/watch/${video.id.videoId}`);
    }
    //function gets called when a video thumbnail is clicked on
    //this function calls props.setSelectedVideo and passes current video object in
    //then calls navigate() to take user to `/watch/${video.id.videoId}`

    async function videoComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/open/${videoId}/`);
        setComments(response.data);
    }


    return ( 
        <div>
            <div className="side-by-side">

                <div>
                    <div className="player-place"><VideoPlayer videoId={videoId}/></div>
                    <div className="title-align">
                        {props.selectedVideo.snippet.title} <br/>
                        {props.selectedVideo.snippet.description}
                    </div>
                    <div className="post-align">
                        {!user ?
                            <p>Please sign in or register to post</p> :
                            <CommentForm videoComments={videoComments} videoId={videoId} user={user} token={token}/>
                        }
                    </div>
                    <CommentList comments={comments}/>
                </div>



                <ul className="suggestions">
                    {props.relatedVideos.map((video, index) => {
                        return(
                                <li key={index}>
                                    <button className="vid-space" onClick={(e) => handleClick(e, video)}><p className="order">{video.snippet.title}</p>
                                    <img src={video.snippet.thumbnails.medium.url} /></button>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default VideoPage;