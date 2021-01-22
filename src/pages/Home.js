import React, { Component } from "react";
import { Link } from "react-router-dom";

import Particles from "react-tsparticles";

import "../css/Home.css";

export const PageItems = [
  {
    title: "GALLERY",
    url: "/gallery",
    cName: "btn",
  },
  {
    title: "ABOUT",
    url: "/about",
    cName: "btn",
  },
  {
    title: "CONTACT",
    url: "/contact",
    cName: "btn btn-outline-dark",
  },
];

class Home extends Component {
  render() {
    return (
      <>
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#232323",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
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
