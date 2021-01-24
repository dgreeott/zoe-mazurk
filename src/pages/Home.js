import React, { Component } from "react";
import { Link } from "react-router-dom";

import Particles from "react-tsparticles";

import "../css/Home.css";

export const PageItems = [
  {
    title: "GALLERY",
    url: "/gallery",
    cName: "btn m-2",
  },
  {
    title: "ABOUT",
    url: "/about",
    cName: "btn m-2",
  },
  {
    title: "CONTACT",
    url: "/contact",
    cName: "btn m-2",
  },
];

class Home extends Component {
  render() {
    return (
      <>
        
        <div className="container text-center" id="homepage">
          <h1 className="mb-4">Zo&#235; Mazurkiewicz</h1>
          <div className="box justify-content-center">
        <div className="row">
            <ul className="headerList">
              {PageItems.map((item, index) => {
                return (
                  <li key={index} className="header">
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
        </div>
        </div>

        
          
      </>
    );
  }
}

export default Home;
