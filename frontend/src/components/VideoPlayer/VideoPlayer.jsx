

const VideoPlayer = (props) => {
    console.log('videoPlayer video_id', props.video_id)
    let test= `https://www.youtube.com/embed/${props.video_id}?autoplay=1`

    

    return(
        <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={test}
            frameborder="0">
        </iframe>
    )

}

export default VideoPlayer