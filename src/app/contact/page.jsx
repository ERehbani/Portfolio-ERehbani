import React from "react";
import './globals.css'
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return <div className="mt-40">
    <h1 className="secondary-title text-7xl flex justify-center">Contact</h1>
    <div className="text-white mt-28 flex justify-around contact-container">
      <div className="contact-items" id="linkedin">
        <Link target="_blank" href="https://www.linkedin.com/in/elian-rehbani-96113624b/">
        <Image src="/linkedin.svg" alt="Linkedin" width={80} height={0}/><p className="flex">Elian Rehbani</p>
        </Link>
      </div>
      <div className="contact-items" id="github">
        <Link target="_blank" href="https://github.com/ERehbani">
        <Image src="/Github.svg" alt="Github" width={80} height={0} />
        <p className="flex">ERehbani</p>
        </Link>
      </div>
    <div className="contact-items" id="gmail">
      <Link target="_blank" href="mailto:elianrhbn@gmail.com">
      <Image src="/gmail.svg" alt="Gmail" width={80} height={0} />
      <p className="flex">elianrhbn@gmail.com</p>
      </Link>
    </div>

    </div>
     <div className="download">
       <h3 className="download-title">View CV</h3>
    <div className="button-download-container">
      <div className="buttons-container">
        <Link href="/CV_ES.pdf" target="_blank" className="button-download">ES</Link>
        <Link href="/CV_EN.pdf" target="_blank" className="button-download">EN</Link>
      </div>
    </div>
     </div>
  </div>;
}

export default Contact;

