import React from "react";
import './globals.css'

function Contact() {
  return <div className="mt-40">
    <h1 className="main-title text-7xl flex justify-center">Contact</h1>
    <div className="text-white mt-28 flex justify-around contact-container">
      <div className="contact-items">
        <a target="_blank" href="https://www.linkedin.com/in/elian-rehbani-96113624b/"><img src="linkedin.svg" alt="Linkedin" className="w-20"/><p className="flex">Elian Rehbani</p></a>
      </div>
      <div className="contact-items">
        <a target="_blank" href="https://github.com/ERehbani"><img src="Github.svg" alt="Github" className="w-20"/><p className="flex">ERehbani</p></a>
      </div>
    <div className="contact-items">
      <a target="_blank" href="mailto:elianrhbn@gmail.com"><img src="gmail.svg" alt="Gmail" className="w-20"/><p className="flex">elianrhbn@gmail.com</p></a>
    </div>
    </div>
  </div>;
}

export default Contact;
