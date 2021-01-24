import React, { Component } from "react";
import "../css/About.css";

import Zoe from "../img/ZoeMazurk.jpg";

class About extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container justify-content-center">
            <div className="row justify-content-center m-3">
              <h1>A Little About Me</h1>
            </div>
            <div className="row">
              <div className="col-sm-6 ">
                <h4 className="aboutText">
                  My name is Zoë Mazurkiewicz and I'm currently working as an
                  undergraduate student at Coe College. I'm double majoring in
                  Political Science and Art. I moved to Iowa from Boulder,
                  Colorado where I've lived most of my life.
                  <br />
                </h4>
                <h4 className="aboutText">
                  My favorite mediums are painting with acrylic and watercolor
                  as well as sketching. I prefer two-dimensional work the most
                  but I have experimented with sculpture classes which I found
                  challenging but beneficial to my learning experience as an art
                  student.
                </h4>
              </div>
              <div className="col-sm-6">
                <img src={Zoe} alt="zoe"></img>
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default About;
