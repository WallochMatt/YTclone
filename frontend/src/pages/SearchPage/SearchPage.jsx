import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom"


const SearchPage = (props) => {

    function handleClick(event, videoId){
        event.preventDefault()
        props.changeId(videoId)
    }


    return (
        <div>
            <ul> 
                {/* video being an item in the response */}
                {props.videos.map((video) => {
                    console.log(video)
                    return(
                        <Link to='/watch' onClick={(event) => handleClick(event, video.id.videoId)}>
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