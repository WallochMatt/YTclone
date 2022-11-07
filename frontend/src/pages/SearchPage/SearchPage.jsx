import { Link, useNavigate } from "react-router-dom"


const SearchPage = (props) => {

    let navigate = useNavigate();
        
    function handleClick(event, video){
        event.preventDefault();
        props.setSelectedVideo(video);
        navigate(`/watch/${video.id.videoId}`);
    }

    return (
        <div>
            <ul> 
                {props.videos.map((video, index) => {
                    return(                    
                            <li key="index">
                                <button onClick={(e) => handleClick(e, video)}><p>{video.snippet.title}</p>
                                <img src={video.snippet.thumbnails.medium.url} /></button>
                            </li>                    
                    )
                })}
            </ul>
        </div>
    )




}

export default SearchPage;