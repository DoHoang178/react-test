import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './Login'

function Profifes() {
  axios
      .post("https://test-react.agiletech.vn/auth/login", {
      })
      .then(function (response) {
        localStorage.setItem("accessToken", response?.data?.accessToken);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      });
  }, []);
  return (
    
   
      <div>
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
      </div>
  )
}

export default Profifes
