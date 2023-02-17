import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const handleLogout = () => {
    console.log("logout");
    axios
      .post("https://test-react.agiletech.vn/auth/login")
      .then(function (response) {
        localStorage.removeItem("accessToken");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const DisplayButton = () => {
    if (!accessToken) {
      return (
        <Link to={"/login"}>
          <button className="signIn">Sign In</button>
        </Link>
      );
    } else {
      return (
        <div>
          <Link to={"/profile"}>
            <button className="signIn" style={{ marginRight: "20px" }}>
              Profile
            </button>
          </Link>

          <button className="signIn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container container-nav">
        <div className="logo">
          <div className="logo1"></div>
          <div className="logo2"></div>
        </div>

        <DisplayButton />
      </div>
    </div>
  );
}

export default NavBar;
