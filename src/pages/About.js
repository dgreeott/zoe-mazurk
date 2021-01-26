import React, { Component } from "react";
import "../css/App.css";

import Footer from '../pages/Footer';
import Zoe from "../img/ZoeMazurk.jpg";



class About extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container mt-5 mb-5">
            <div className="row mt-4">
              <h1>A Little About Me</h1>
            </div>
            <hr className="mt-2"></hr>
            <div className="row">
              <div className="col-sm-6 ">
                <h3 className="aboutText" id="title">
                  My name is Zoë Mazurkiewicz
                </h3>
                <h5>
                  I'm currently working as an undergraduate student at Coe
                  College. I'm double majoring in Political Science and Art. I
                  moved to Iowa from Boulder, Colorado where I've lived most of
                  my life.
                </h5>
                <h5>
                  My favorite mediums are painting with acrylic and watercolor
                  as well as sketching. I prefer two-dimensional work the most
                  but I have experimented with sculpture classes which I found
                  challenging but beneficial to my learning experience as an art
                  student.
                </h5>
              </div>
              <div className="col-sm-6">
                <img src={Zoe} alt="zoe"></img>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        
      </>
    );
  }
}

export default About;
