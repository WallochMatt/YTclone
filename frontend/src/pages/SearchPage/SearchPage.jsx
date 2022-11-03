import SearchBar from "../../components/SearchBar/SearchBar";



const SearchPage = (props) => {




    return (
        <div>
            <ul> 
                {/* video being an item in the response */}
                {props.videos.map((video) => {
                    return(
                        <li>
                            <p>{video.snippet.title}</p>
                            <img src={video.snippet.thumbnails.medium.url} />
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )




}

export default SearchPage;