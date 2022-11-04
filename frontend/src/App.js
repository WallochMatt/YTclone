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
  const [videos, setVideos] = useState([        {
    "kind": "youtube#searchResult",
    "etag": "aJT0mrzdplLx5vD9HPsKvfia7kM",
    "id": {
        "kind": "youtube#video",
        "videoId": "JZqg7wxlJeY"
    },
    "snippet": {
        "publishedAt": "2022-11-03T17:43:49Z",
        "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
        "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 66",
        "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/JZqg7wxlJeY/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/JZqg7wxlJeY/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/JZqg7wxlJeY/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "Meowthemall",
        "liveBroadcastContent": "none",
        "publishTime": "2022-11-03T17:43:49Z"
    }
},])
  const [videoId, setVideoId] = useState('')


  
  async function getVideos(search){
    console.log("getVideos, search: ", search)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=&part=snippet`);
    console.log("getVideos response: ", response)
    setVideos(response.data.items);
  }
  


  function changeId(videoId){
    console.log('changeId function videoId', videoId)
    setVideoId(videoId)
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

        <Route path="/search" element={<SearchPage videos={videos} changeId={changeId} />}/>
        <Route path="/watch/:videoId" element={<VideoPage videos={videos} videoId={videoId}/>}/>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
