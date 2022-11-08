import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const Navbar = (props) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();


  
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>uToob</b>
          </Link>
        </li>
        <li>
          <SearchBar getVideos={props.getVideos} changeId={props.changeId} />
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <div>
              <button className="loginButton" onClick={() => navigate("/login")}>Login</button>
              <button onClick={() => navigate("/register")}>Register</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
