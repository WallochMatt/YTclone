import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"

const VideoPage = (props) => {
    return ( 
        <VideoPlayer playVideo={props.playVideo}/>
    );
}

export default VideoPage;