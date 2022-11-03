// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

import React, { useEffect, useState } from 'react';














function App() {
  const [videos, setVideos] = useState([])


  
  async function getVideos(search){
    console.log("getVideos, search: ", search)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=`);
    console.log("getVideos response: ", response)
    setVideos(response.data.items);
  }
  






  return (
    <div>
      <Navbar getVideos={getVideos} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="/search" element={<SearchPage videos={videos}/>}/>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
