import React from "react";
import ContactForm from "../contact/index";

import "../css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <h1>Contact</h1>
          </div>
          <div className="row">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
