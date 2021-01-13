import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar sticky-top">
          <div className="col-sm-3">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div>
          <div className="col-sm-9 text-right">
            <Link to="/cart" className="menu-bars-cart">
              <AiIcons.AiOutlineShoppingCart size={40} />
            </Link>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="nameText center mt-5">
              <h4>Zo&#235; Mazurkiewicz </h4>
            </div>
            <div className="row">
            <div className="col-sm-12">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </div>
            </div>
            <div className="socialIcon">
              <div className="row">
                <div className="col-sm-6 center">
                  <FaIcons.FaInstagram size={40} />
                </div>
                <div className="col-sm-6 center">
                  <AiIcons.AiOutlineMail size={40} />
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
