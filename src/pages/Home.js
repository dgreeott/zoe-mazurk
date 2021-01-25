import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/App.css";

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

export const ArtData = [
  {
    id: "text1",
    text: "Watercolor",
    css: {margin: '5em 5em 5em 10em', transform: 'rotate(15deg)'}
  },
  {
    id: "text2",
    text: "Acrylic",
    css: {margin: '1em 5em 0em 5em', transform: 'rotate(15deg)'}
  },
  {
    id: "text3",
    text: "Sketching",
    css: {margin: '-3em 30em 8em 9em', transform: 'rotate(15deg)'}
  },
  {
    id: "text4",
    text: "Prefer two-dimensional work",
    css: {margin: '20em', transform: 'rotate(-15deg)'}
  },
  {
    id: "text5",
    text: "Experimented with sculptures",
    css: {margin: '2.5em', transform: 'rotate(15deg)'}
  },
];

class Home extends Component {
  render() {
    return (
      <>
        <div>
        {/*}
          {ArtData.map((item) => {
            return <h3 id={item.id} style={item.css}>{item.text}</h3>;
          })}
          */}
          <div className="container text-center" id="homepage">
            <h1 className="mb-4">Zo&#235; Mazurkiewicz</h1>
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
