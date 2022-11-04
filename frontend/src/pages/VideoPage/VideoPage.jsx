import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoPage = (props) => {
    let navigate = useNavigate()
    const {videoId} = useParams();
    console.log("before filter video", props.videos);
    console.log('before filter videoId', videoId)
     
    useEffect(() => {
        console.log('useEffect videoId', videoId)
        props.getRelatedVideos(videoId);
        
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

    return ( 
        <div>
            <div><VideoPlayer video_id={videoId}/></div>
            <div>
                {props.selectedVideo.snippet.title}
                {props.selectedVideo.snippet.description}
            </div>
            <ul>
                {props.relatedVideos.map((video) => {
                    return(
                            <li>
                                <button onClick={(e) => handleClick(e, video)}><p>{video.snippet.title}</p>
                                <img src={video.snippet.thumbnails.medium.url} /></button>
                            </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default VideoPage;