

const VideoPlayer = (props) => {

    let test= `https://www.youtube.com/embed/${props.playVideo}?autoplay=1`


    return(
        <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={test}
            frameborder="0">
        </iframe>
    )

}

export default VideoPlayer