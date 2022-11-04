import { Link, Navigate } from "react-router-dom"


const SearchPage = (props) => {

    // function handleClick(event, videoId){
    //     console.log('handleClick videoId', videoId)
    //     event.preventDefault()
    //     props.changeId(videoId)
    //     Navigate('/watch')
    // }


    return (
        <div>
            <ul> 
                {/* video being an item in the response */}
                {props.videos.map((video) => {
                    console.log(video)
                    return(
                        <Link to={`/watch/${video.id.videoId}`} >
                            {/* <li onClick={(event) => handleClick(event, video.id.videoId)}> */}
                            <li>
                                <p>{video.snippet.title}</p>
                                <img src={video.snippet.thumbnails.medium.url} />
                            </li>
                        </Link> 
                    )
                })}
            </ul>
        </div>
    )




}

export default SearchPage;