// Contact.jsx

import React, { useRef, useState } from "react";
//import * as emailjs from "@emailjs/browser"; // Import the module using the correct syntax
import { sendForm } from "@emailjs/browser"; 
import styled, { createGlobalStyle } from "styled-components";
import "./Todo.css";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.darkMode ? "#0a0a0a" : "#c2bfbf")};
    color: ${(props) => (props.darkMode ? "#cccaca" : "#000")};
  }
`;
const Contact = () => {
    const form = useRef();
    const [darkMode, setDarkMode] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      sendForm(
        "service_0ipqym9",
        "template_4x1osm5",
        form.current,
        "yPE-wtDAi7vcV5kG3"
      ).then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  return (
    <StyledContactForm darkMode={darkMode}>
      <GlobalStyle darkMode={darkMode} />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <ToggleButton onClick={() => setDarkMode(!darkMode)}>
        <Slider darkMode={darkMode} />
      </ToggleButton>
    </StyledContactForm>
  );
};


export default Contact;
