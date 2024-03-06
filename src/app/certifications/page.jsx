import React from "react";
import "./globals.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Certifications() {

  const { t: t2 } = useTranslation("global")
  return (
    <div>
      <div className="mt-32">
        <h1 className="secondary-title text-7xl text-center font-medium mt-10 justify-center">
          {t2("about.Certifications")}
        </h1>
      </div>

      <div>
        <div className="image-certificate-container">
          <Image
            src="/Certificates/HenryCertificate.PNG"
            alt="Henry Certificate"
            className="image-certificate-henry shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            width={666}
            height={0}
          />
        </div>
        <div className="description-container">
          <b className="description-certificate">
            Full Stack Developer by Henry
          </b>
        </div>
      </div>

      <div>
        <div className="image-certificate-container">
          <Image
            src="/Certificates/EnglishCertificate.png"
            alt="English Certificate"
            className="image-certificate-english shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
            width={370}
            height={0}
          />
        </div>
        <div className="description-container">
          <b className="description-certificate">English B1 by EFSET</b>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
