import React, { Component } from "react";
import "../css/App.css";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-lg-start">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-md-0">
              <h4 className="text-light">Menu</h4>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-light">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    <a
                      className="icons-footer"
                      href="mailto:drake.greeott@gmail.com"
                      target="__blank"
                    >
                      <i class="fas fa-envelope"></i>
                    </a>
                    <a
                      className="icons-footer"
                      href="https://www.linkedin.com/in/drakegreeott/"
                      target="__blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a
                      className="icons-footer"
                      href="https://github.com/dgreeott"
                      target="__blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-md-0"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
