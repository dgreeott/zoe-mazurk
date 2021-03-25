import React from "react";
import ContactForm from "../../contact/index";



const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="container mt-5 mb-5">
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
