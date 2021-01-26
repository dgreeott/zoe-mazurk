import React, { Component } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import "../css/App.css";

class Footer extends Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "#ffffff" }}>
      <footer>
        <div className="col-12 pt-2">
          <div className="row ">
            <div className="col-xl-8 col-md-4 col-sm-4 col-12">
              <div className="row">
                <h3 className="mb-md-0 m-4 bold-text text-light">Zoë Mazurkiewicz</h3>
                </div>
                <div className="row mt-3 mb-5">
                  <span className="mx-2">
                    <FaIcons.FaFacebook size={30} />
                  </span>
                  <span className="mx-2">
                    <FaIcons.FaLinkedin size={30} />
                  </span>
                  <span className="mx-2">
                    <FaIcons.FaInstagram size={30} />
                  </span>
                  <span className="mx-2">
                    <FaIcons.FaEnvelope size={30} />
                  </span>
                </div>
              
              </div>
            <div className="col-xl-2 col-md-4 col-sm-4 col-12 text-right mt-5">
              <a className="text-light" href="#" >Back to top</a>
            </div>
          </div>
        </div>
      </footer>
      </IconContext.Provider>
    );
  }
}

export default Footer;
