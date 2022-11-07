// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import keys from "./API_Keys.json"
import { useNavigate }  from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

import React, { useState } from 'react';


function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  
  const [relatedVideos, setRelatedVideos] = useState([]);

  let navigate = useNavigate();

  
  async function getVideos(search){
    console.log("getVideos, search: ", search)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${keys.googleAPIKey}&part=snippet&maxResults=12`);
    console.log("getVideos response: ", response)
    setVideos(response.data.items);
    navigate('/search')
  }

  async function getRelatedVideos(videoId){
    console.log("getRelatedVideos parameter", videoId)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${keys.googleAPIKey}&part=snippet`)
    console.log('setRelatedVideos change', relatedVideos)
    setRelatedVideos(response.data.items)
  }


  return (
    <div>
      <Navbar getVideos={getVideos}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage getVideos={getVideos} videos={videos} setSelectedVideo={setSelectedVideo} setVideos={setVideos}/>
            </PrivateRoute>
          }
        />

        <Route path="/search" element={<SearchPage setSelectedVideo={setSelectedVideo} videos={videos} />}/>
        <Route path="/watch/:videoId" element={<VideoPage selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} videos={videos} getRelatedVideos={getRelatedVideos} relatedVideos={relatedVideos} getVideos={getVideos}/>}/>

        <Route path="/register" element={<RegisterPage getVideos={getVideos}/>} />
        <Route path="/login" element={<LoginPage getVideos={getVideos}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
