//axios call 
import React, { useState } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        props.getVideos(search)
    }

    return ( 
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Search</label>
                <input value={search} onChange={(event) => setSearch(event.target.value)}></input>
            </div>
        </form>
    )
}

export default SearchBar;