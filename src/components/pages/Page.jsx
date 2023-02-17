import React from "react";
import "./Page.css";
import { data } from "./data";


function page() {
  return (
    <div>
      <div className="container container-page">
        <div className="col-6">
          <h1>Save your data storage here.</h1>
          <p>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className="Learn">Learn more</button>
        </div>
      </div>
      <div className="container" style={{ alignItems: "center" }}>
        <div className="row">
          <div className="col-5 features">
            <h1>Features</h1>
            <p>
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
            </p>
          </div>
        </div>
      </div>
      <div className="container container-card">
        <div className="row">
          {data.map((course, index) => {
            return (
              <div className="col-6 pageCard" key={index}>
                <div>
                  <div className="Pcard">
                    <img src={course.image2} alt="asd" className="bg-card" />
                    <img src={course.image1} alt="asd" className="logo-card" />
                  </div>
                  <div className="info">
                    <h2>{course.tag}</h2>
                    <p>
                      {course.infomation}
                    </p>
                    <h4>Learn more</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
