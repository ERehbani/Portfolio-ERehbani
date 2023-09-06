import React from "react";
import './globals.css'
import Image from "next/image";

function Contact() {
  return <div className="mt-40">
    <h1 className="main-title text-7xl flex justify-center">Contact</h1>
    <div className="text-white mt-28 flex justify-around contact-container">
      <div className="contact-items" id="linkedin">
        <a target="_blank" href="https://www.linkedin.com/in/elian-rehbani-96113624b/"><Image src="/linkedin.svg" alt="Linkedin" width={80} height={0}/><p className="flex">Elian Rehbani</p></a>
      </div>
      <div className="contact-items" id="github">
        <a target="_blank" href="https://github.com/ERehbani">
<Image src="/Github.svg" alt="Github" width={80} height={0} /><p className="flex">ERehbani</p></a>
      </div>
    <div className="contact-items" id="gmail">
      <a target="_blank" href="mailto:elianrhbn@gmail.com"><Image src="/gmail.svg" alt="Gmail" width={80} height={0} /><p className="flex">elianrhbn@gmail.com</p></a>
    </div>
    </div>
  </div>;
}

export default Contact;

