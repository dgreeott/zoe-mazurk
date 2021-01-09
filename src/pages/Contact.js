import React, { Component } from "react";
import axios from "axios";
import { Button } from "../components/Button";

import "../css/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      muessage: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sucess") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    return (
      <>
      <div className="section">
        <div className="container-fluid justify-content-center">
          <div className="row justify-content-center m-4">
            <div className="container-fluid text-center">
              <h1 className="title" id="contact">
                CONTACT ME!
              </h1>
              <h6>I WILL GET BACK TO YOU AS SOON AS POSSIBLE!</h6>
            </div>
            <div className="container-fluid w-50">
              <div className="row mt-4">
                <div className="col-sm text-center">
                  <form
                    id="contactForm"
                    onSubmit={this.submitEmail.bind(this)}
                    method="POST"
                  >
                    <div className="formGroup">
                      <h5>NAME</h5>
                      <input
                        placeholder="Name"
                        id="name"
                        type="text"
                        className="formControl rounded m-4"
                        required
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}
                      />
                    </div>
                    <div className="formGroup">
                      <h5>EMAIL</h5>
                      <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        className="formControl rounded m-4"
                        aria-describedby="emailHelp"
                        required
                        value={this.state.email}
                        onChange={this.onEmailChange.bind(this)}
                      />
                    </div>
                    <div className="formGroup">
                      <h5>MESSAGE</h5>
                      <input
                        placeholder="Message"
                        id="message"
                        type="text"
                        className="formMessage rounded m-4"
                        required
                        value={this.state.message}
                        onChange={this.onMsgChange.bind(this)}
                      />
                    </div>
                    <div className="text-center">
                      <Button className="contactButton">SUBMIT</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Contact;
