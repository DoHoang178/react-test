import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  var x = localStorage.getItem("accessToken");

  console.log("x", x);

  const DisplayButton = () => {
    if (!x || x === "undefined") {
      return (
        <Link to={"/login"}>
          <button className="signIn">Sign In</button>
        </Link>
      );
    } else {
      return (
        <div>
          <Link to={"/profile"}>
            <button className="signIn" style={{ marginRight: "20px" }}>Profile</button>
          </Link>

          <button className="signIn">Log out</button>
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
