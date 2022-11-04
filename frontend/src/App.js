// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

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
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({})
  
  const [relatedVideos, setRelatedVideos] = useState([])


  
  async function getVideos(search){
    console.log("getVideos, search: ", search)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyD9JBQue8uxCq1KJdzzpFlCi5_m6dBZMrg&part=snippet`);
    console.log("getVideos response: ", response)
    setVideos(response.data.items);
  }

  async function getRelatedVideos(videoId){
    console.log("getRelatedVideos parameter", videoId)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyD9JBQue8uxCq1KJdzzpFlCi5_m6dBZMrg&part=snippet`)
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
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="/search" element={<SearchPage setSelectedVideo={setSelectedVideo} videos={videos} />}/>
        <Route path="/watch/:videoId" element={<VideoPage selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} videos={videos} getRelatedVideos={getRelatedVideos} relatedVideos={relatedVideos} />}/>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
