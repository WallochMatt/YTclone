import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import keys from "../../API_Keys.json"
import "./HomePage.css"

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  let navigate = useNavigate();
  let username

  
  function handleClick(event, video){
    event.preventDefault();
    props.setSelectedVideo(video);
    navigate(`/watch/${video.id.videoId}`);
  }
    
    async function getHomeVids(){
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=trending&key=${keys.googleAPIKey}&part=snippet&maxResults=12`)
      props.setVideos(response.data.items)
    }
  
  useEffect(() => {
    getHomeVids()

  }, []);

  return (
    <div>
      <h1 className="home-text">Welcome To uToob! Check Out What's Trending!</h1>
      <ul className="wrapper"> 
                {props.videos.map((video, index) => {
                    return(                    
                            <li key={index} >
                                <button className="button1" onClick={(e) => handleClick(e, video)}><p className="order">{video.snippet.title}</p>
                                <img className="imgtag" src={video.snippet.thumbnails.medium.url} /></button>
                            </li>                    
                    )
                })}
            </ul>
    </div>
  );
};

export default HomePage;
