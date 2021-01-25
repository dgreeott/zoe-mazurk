import React from "react";
import ContactForm from "../contact/index";

import "../css/App.css";

const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <h1>Contact</h1>
          </div>
          <hr className="mt-2"></hr>
          <div className="row">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
