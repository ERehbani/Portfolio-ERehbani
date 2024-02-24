import React from "react";
import About from "./about/page";
import "./globals.css";
import Projects from "./projects/page";
import Footer from "@/components/footer/page";
import Contact from "./contact/page";
import JobExperience from "./jobExperience/page";

export default function Home() {
  return (
    <div className="h-36">
      <div className="mt-52 mx-auto">
        <h1 className="main-title text-8xl text-center font-medium mx-auto">
          Hi. I’m Elián <br />A Full Stack Dev.
        </h1>
        {/* https://github.com/atomiks/tippyjs-react */}
        <p className="main-p w-2/6 text-center justify-center font-light mx-auto mt-10  text-lg">
          I love designing intuitive interfaces and developing efficient
          solutions for all kinds of problems both front-end and back-end.
        </p>
      </div>

      <div>
        <JobExperience />
      </div>

      <div className="mb-40" id="about"></div>
      <div>
        <About />
      </div>

      <div  id="projects"></div>
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
