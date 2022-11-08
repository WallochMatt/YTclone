

const VideoPlayer = (props) => {
    let test= `https://www.youtube.com/embed/${props.videoId}?autoplay=1`

    

    return(
        <iframe id="ytplayer" type="text/html" width="854" height="480"
            src={test}
            frameBorder="0">
        </iframe>
    )

}

export default VideoPlayer