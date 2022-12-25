import "./contactMe.css";
import flecha from "./flecha.png";
import emailjs from '@emailjs/browser';

import React, { useRef } from "react";
console.log(emailjs);

const Contact = () => {
  const form = useRef();


  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_otnnsz4",
        "template_kse57bh",
        e.target,
        "yfVnptrpAtg26ijh-"
      )
      .then(
        (result ) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section className="wholeContact">
      <div className="contact">
        <h1 className="contactWord">CONNECT WITH ME</h1>
        <form>
          <input
            type="text"
            id="EMAIL"
            name="EMAIL"
            placeholder="EMAIL"
          ></input>
          <textarea
            className="text-area"
            rows={20}
            cols={20}
            placeholder="ENTER YOUR MESSAGE"
          ></textarea>
          <button className="flecha">
            <span>SEND MESSAGE</span>
            <img src={flecha} alt="Flecha" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
