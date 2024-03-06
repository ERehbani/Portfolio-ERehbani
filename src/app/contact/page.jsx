import React from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Contact() {

  const {t: t2 } = useTranslation("global")

  return (
    <div className="mt-40">
      <h1 className="secondary-title text-7xl flex justify-center">{t2("about.Contact")}</h1>
      <div className="text-white mt-28 flex justify-around contact-container">
        <div className="contact-items" id="linkedin">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/elian-rehbani-96113624b/">
            <Image src="/linkedin.svg" alt="Linkedin" width={80} height={0} />
            <p className="flex">Elian Rehbani</p>
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
        <div className="contact-items" id="fiverr">
          <Link target="_blank" href="https://es.fiverr.com/elinrhbn">
            <Image src="/fiverr.svg" alt="Fiverr" width={80} height={0} />
            <p className="flex">elinrhbn</p>
          </Link>
        </div>
        <div className="contact-items" id="upwork">
          <Link
            target="_blank"
            href="https://www.upwork.com/freelancers/~01cb5ee7641e3347f8">
            <Image src="/upwork.svg" alt="Upwork" width={80} height={0} />
            <p className="flex">Elian Rehbani</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
