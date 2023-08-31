import Navbar from "@/components/navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-20 mx-auto">
        <h1 className="main-title text-8xl text-center font-medium mx-auto">
          Hi. I’m Elián <h1>A Full Stack Dev.</h1>
          {/* <h1>A Full Stack Dev.</h1> */}
        </h1>
        <p className="w-2/6 text-white text-center justify-center font-light mx-auto mt-10">
          I love designing intuitive interfaces and developing efficient
          solutions for all kinds of problems both front-end and back-end.
        </p>
      </div>

      <div className="">
        <h2 className="text-8xl mt-44 ml-32 h-32 main-title">My Projects</h2>
      </div>
      <div className="mt-10">
        <div className="square-show">
          <h2 className="title-show">Talent Forge, a course platform</h2>
          <div className="icons">
            <img className="svg-icon" src="React.svg" alt="React" />
            <img className="svg-icon" src="tailwind.svg" alt="Tailwind" />
            <img className="svg-icon" src="firebase.svg" alt="Firebase" />
            <img
              className="svg-icon"
              src="mercadopago.svg"
              alt="Mercado Pago"
            />
            <img className="svg-icon" src="mongodb.svg" alt="Mongo DB" />
            <img className="svg-icon" src="Git.svg" alt="Git" />
            <img className="svg-icon" src="Nodejs.svg" alt="NodeJS" />
          </div>
          <img
            className="image-show"
            src="Talent_forge.png"
            alt="Talent Forge"
          />
        </div>
        <div className="square-show2">
          <h2 className="title-show">Web with API Countries</h2>
          <div className="icons">
            <img className="svg-icon" src="React.svg" alt="React" />
            <img className="svg-icon" src="Redux.svg" alt="Redux" />
            <img className="svg-icon" src="PostgreSQL.svg" alt="PostgreSQL" />
            <img className="svg-icon" src="Nodejs.svg" alt="NodeJS" />
            <img className="svg-icon" src="Nodemon.svg" alt="Nodemon" />
            <img className="svg-icon" src="CSS.svg" alt="CSS" />
            <img className="svg-icon" src="axios.svg" alt="Axios" />
            <img className="svg-icon" src="express-color.svg" alt="ExpressJS" />
            <img className="svg-icon" src="Git.svg" alt="Git" />
          </div>
          <img
            className="image-show"
            src="Web_with_api_countries.png"
            alt="Countries API"
          />
        </div>
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
