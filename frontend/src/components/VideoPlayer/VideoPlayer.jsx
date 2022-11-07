

const VideoPlayer = (props) => {
    console.log('videoPlayer videoId', props.videoId)
    let test= `https://www.youtube.com/embed/${props.videoId}?autoplay=1`

    

    return(
        <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={test}
            frameBorder="0">
        </iframe>
    )

}

export default VideoPlayer