import React, { useState } from "react";
import { Button } from "../components/Button";

import "../css/Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="container w-50">
            <div className="row text-center">
            <div className="col-sm justify-content-center">
            <h1 className="title m-5" id="contact">
                Contact Me
              </h1>
            </div>
              
              <div className="row text-center">
                <h6>I will get back to you as soon as possible!</h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm text-center">
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    className="formControl"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    className="formControl"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea className="formMessage" id="message" required />
                </div>
                <div className="text-center">
                  <Button className="contactButton">{status}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
