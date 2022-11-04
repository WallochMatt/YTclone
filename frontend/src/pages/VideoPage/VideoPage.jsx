import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
    const {videoId} = useParams()
    console.log("before filter videos", props.videos)
    let selectedVideo = props.videos.filter(video => video.id.videoId === videoId)
    console.log("after filter video", selectedVideo)

    return ( 
        <div>
            <div><VideoPlayer video_id={videoId}/></div>
            <div>
                <p>{selectedVideo[0].snippet.title}</p>
                <p>{selectedVideo[0].snippet.description}</p>
            </div>
        </div>

    );
}

export default VideoPage;