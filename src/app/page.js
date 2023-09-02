import React from "react";
import About from "./about/page";
import './globals.css'
import Projects from "./projects/page";


export default function Home() {
  return (
    <div className="h-36">
      <div className="mt-40 mx-auto">

        <h1 className="main-title text-8xl text-center font-medium mx-auto">
          Hi. I’m Elián <h1>A Full Stack Dev.</h1>
          {/* <h1>A Full Stack Dev.</h1> */}
        </h1>
        <p className="w-2/6 text-white text-center justify-center font-light mx-auto mt-10">
          I love designing intuitive interfaces and developing efficient
          solutions for all kinds of problems both front-end and back-end.
        </p>
      </div>

        <div id="projects">
          <Projects/>
        </div>

      <div id="about">
        <About/>
      </div>

      <h1 className="text-8xl text-center font-medium mx-auto main-title2">
        Languages
      </h1>
      <div className="grid-container">
        <div className="item-languages">
          <img src="React.png" alt="React" />
          <p>ReactJS</p>
        </div>
        <div className="item-languages">
          <img src="React-Native.png" alt="React Native" />
          <p>React Native</p>
        </div>
        <div className="item-languages">
          <img src="Redux.png" alt="Redux" />
          <p>Redux</p>
        </div>
        <div className="item-languages">
          <img src="Express.png" alt="Express" />
          <p>ExpressJS</p>
        </div>
        <div className="item-languages">
          <img src="Next.png" alt="Next" />
          <p>NextJS</p>
        </div>
        <div className="item-languages">
          <img src="nodejs.png" alt="Nodejs" />
          <p>NodeJS</p>
        </div>
        <div className="item-languages">
          <img src="sql.png" alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </div>
        <div className="item-languages">
          <img src="git.png" alt="Git" />
          <p>Git</p>
        </div>
        <div className="item-languages">
          <img src="html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="item-languages">
          <img src="css.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="item-languages">
          <img src="tailwind.png" alt="Tailwind" />
          <p>TailwindCSS</p>
        </div>
      </div>

      <h1 className="text-8xl text-center font-medium mx-auto main-title3">
        Softwares
      </h1>
      <div className="grid-container2">
        <div className="item-languages">
          <img src="Figma.svg" alt="Figma" />
          <p>Figma</p>
        </div>
        <div className="item-languages">
          <img src="VSCode.svg" alt="VSCode" />
          <p>VSCode</p>
        </div>
        <div className="item-languages">
          <img src="Github.svg" alt="Github" />
          <p>Github</p>
        </div>
        <div className="item-languages">
          <img src="Insomnia.svg" alt="Insomnia" />
          <p>Insomnia</p>
        </div>
      </div>
    </div>
  );
}
