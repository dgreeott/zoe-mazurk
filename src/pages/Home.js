import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../components/Button';

import "../css/App.css";

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
    cName: "btn",
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
                    <li key={index} className="header m-5">
                      <Button>
                      <Link className={item.cName} to={item.url}>
                        {item.title} 
                      </Link>
                      </Button>
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
