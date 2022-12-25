import "./contactMe.css";
import flecha from "./flecha.png";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [currentHeight, setHeight] = useState("5rem");
  const [messageSent,setMessageSent]=useState('SEND')

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_otnnsz4",
        "template_kse57bh",
        form.current,
        "yfVnptrpAtg26ijh-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent("Message sent, will reply asap!")
        },
        (error) => {
          console.log(error.text);
          setMessageSent("There was an error please try again")
        }
      );
  }


  let checkHeight = () => {
    let textArea = document.getElementsByClassName("text-area");

    let textAreaHeight = textArea[0].scrollHeight;

    if (textAreaHeight > 50) {
      setHeight(`${textAreaHeight / 10}rem`);
    }
  };

  return (
    <section className="wholeContact">
      <div className="contact">
        <h1 className="contactWord">CONNECT WITH ME</h1>
        <form className="contact" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            id="EMAIL"
            name="user_email"
            placeholder="EMAIL"
          ></input>
          <textarea
            className="text-area"
            name="message"
            rows={20}
            cols={20}
            placeholder="ENTER YOUR MESSAGE"
            onChange={() => {
              checkHeight();
            }}
            style={{ height: `${currentHeight}` }}
          ></textarea>
          <input type="submit" value={messageSent} className="flecha"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
