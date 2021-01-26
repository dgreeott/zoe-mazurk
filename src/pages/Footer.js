import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import "../css/App.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="row my-5 justify-content-center py-5">
          <div class="col-11">
            <div class="row ">
              <div class="col-xl-6 col-md-4 col-sm-4 col-12">
                <div className="row">
                  <h3 class=" mb-md-0 mb-5 bold-text">Zoë Mazurkiewicz</h3>
                  </div>
                  <div class="row ">
              <div class="col-xl-8 col-md-4 col-sm-4 col-auto">
                <p class="social  bold-text">
                  {" "}
                  <span class="mx-2">
                    <FaIcons.FaFacebook size={30} />
                  </span>{" "}
                  <span class="mx-2">
                    <FaIcons.FaLinkedin size={30} />
                  </span>{" "}
                  <span class="mx-2">
                    <FaIcons.FaInstagram size={30} />
                  </span>{" "}
                  <span class="mx-2">
                    <FaIcons.FaEnvelope size={30} />
                  </span>{" "}
                </p>
              </div>
            </div>
                
              </div>
              <div class="col-xl-3 col-md-4 col-sm-4 col-12">
                <h6 class="mb-3 mb-lg-4 bold-text">
                  <b>MENU</b>
                </h6>
                <ul class="list-unstyled">
                  <li>Home</li>
                  <li>Gallery</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div class="col-xl-3 col-md-4 col-sm-4 col-12">
                <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5">
                  <b>ADDRESS</b>
                </h6>
                <p class="mb-1">605, RATAN ICON BUILDING</p>
                <p>SEAWOODS SECTOR</p>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
