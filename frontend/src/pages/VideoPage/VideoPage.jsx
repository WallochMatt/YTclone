import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { useParams, useNavigate, useSearchParams, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CommentList from '../../components/CommentList/CommentList'
import CommentForm from "../../components/CommentForm/CommentForm";
import PrivateRoute from "../../utils/PrivateRoute";
import { Routes } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const VideoPage = (props) => {
    let navigate = useNavigate();

    const [user, token] = useAuth()

    const {videoId} = useParams();
    const [comments, setComments] = useState([{
        "user": {
            "id": 2,
            "password": "pbkdf2_sha256$390000$gI0A1VnV2GgMwQ0LPhEFDc$eTO83cZkKFNfFO8l5SFhrjugHfNohjAD5TfIiJPoumA=",
            "last_login": null,
            "is_superuser": false,
            "username": "turo",
            "first_name": "Arturo",
            "last_name": "Diaz",
            "email": "arturo@devcodecamp.com",
            "is_staff": false,
            "is_active": true,
            "date_joined": "2022-11-01T19:06:24.303564Z",
            "groups": [],
            "user_permissions": []
        },
        "user_id": 2,
        "video_id": "TJ5XsyPOv0o&t=88s",
        "text": "Woo Dancing!",
        "likes": 10,
        "dislikes": 0
    }]);

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
            <div><VideoPlayer videoId={videoId}/></div>
            <div>
                {props.selectedVideo.snippet.title}
                {props.selectedVideo.snippet.description}
            </div>
            <ul>
                {props.relatedVideos.map((video, index) => {
                    return(
                            <li key={index}>
                                <button onClick={(e) => handleClick(e, video)}><p>{video.snippet.title}</p>
                                <img src={video.snippet.thumbnails.medium.url} /></button>
                            </li>
                    )
                })}
            </ul>
            <div>
                {!user ?
                    <p>Please sign in or register to post</p> :
                    <CommentForm videoComments={videoComments} videoId={videoId} user={user} token={token}/>
                    // <Routes>
                    //     <Route 
                    //         path="/watch/:videoId" 
                    //         element={
                    //             <PrivateRoute>
                    //                 <CommentForm videoComments={videoComments} videoId={videoId} user={user} token={token}/>
                    //             </PrivateRoute>
                    //         }
                    //     />
                    // </Routes>
                }
                </div>
                <CommentList comments={comments} />
        </div>
    );
}

export default VideoPage;