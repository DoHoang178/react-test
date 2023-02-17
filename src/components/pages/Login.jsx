import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("https://test-react.agiletech.vn/auth/login", {
        username: value,
      })
      .then(function (response) {
        localStorage.setItem("accessToken", response?.data?.accessToken);
        console.log(localStorage.getItem("accessToken"));
        if(localStorage.getItem("accessToken") !== undefined){
                  navigate("/");
        }

      })
      .catch(function (error) {
        console.log(error);
      });

  };
//var x = ;
  // console.log("x", x)
  // const linkButton =() =>{
  //   if (!x || x === "undefined") {
  //     <Navigate to="/login"/>
  //   }
  //   else {
  //     <Navigate to="/page"/>
  //   }
  // }
  const [data, setData] = useState("");

  useEffect(() => {
    var xToken = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${xToken}` },
    };

    axios
      .get("https://test-react.agiletech.vn/posts", config)
      .then(function (response) {
        setData(response?.data?.posts);
        // console.log("res", response);
      });
  }, []);

  console.log("data", data);

  return (
    <>
      <div className="container login-container">
        <h1>Sign In</h1>
        <div>
          <label for="username">Username: </label> <br></br>
          <input id="username" onChange={onChange}></input>
        </div>

        <button className="signIn" onClick={handleLogin}>
          Sign In
        </button>
      </div>

      {/* <div>
        <div>title: </div>
        <div>mo ta: </div>
        <div>tag: </div>
        {data &&
          data?.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.description}</div>
                {item?.tags.map((m, index) => {
                  return (
                    <div key={index}>
                      <div>{m}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div> */}
    </>
  );
}
