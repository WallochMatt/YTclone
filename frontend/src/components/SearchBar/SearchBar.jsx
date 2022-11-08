//axios call 
import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = (props) => {

    const [search, setSearch] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        props.getVideos(search)
    }

    return ( 
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input placeholder='Search' className='searchinput' value={search} onChange={(event) => setSearch(event.target.value)}></input>
            </div>
        </form>
    )
}

export default SearchBar;