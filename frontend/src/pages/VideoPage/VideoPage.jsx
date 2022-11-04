import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
    const {videoId} = useParams()
    return ( 
        <VideoPlayer video_id={videoId}/>
    );
}

export default VideoPage;