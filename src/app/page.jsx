"use client";
import React from "react";
import About from "./about/page";
import "./globals.css";
import Projects from "./projects/page";
import Footer from "@/components/footer/page";
import Contact from "./contact/page";
import JobExperience from "./jobExperience/page";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t: t2, i18n } = useTranslation("global");


  return (
    <div className="h-36">
      <div className="mt-52 mx-auto">
        <h1 className="main-title text-8xl text-center font-medium mx-auto">
          {t2("header.title")} <br />
          {t2("header.title2")}
        </h1>

        

        {/* https://github.com/atomiks/tippyjs-react */}
        <p className="main-p w-2/6 text-center justify-center font-light mx-auto mt-10  text-lg">
          {t2("header.description")}
        </p>
      </div>

      <div>
        <JobExperience />
      </div>

      <div className="mb-40" id="about"></div>
      <div>
        <About />
      </div>

      <div id="projects"></div>
      <div>
        <Projects />
      </div>

      <div className="mb-40" id="contact">
        <div>
          <Contact />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
