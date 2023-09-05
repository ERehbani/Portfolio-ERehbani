"use client"
import "./globals.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Certifications from "../certifications/page";

function About() {

const [ result, setResult ] = useState({}) 


useEffect(() => {
  const consultWeather = async() => {
      const appid = 'ae222c77a8713a698205fe736baa9e5b';
  try {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=mar%20del%20plata,argentina&appid=${appid}`);
    console.log(data); // Agrega esta línea para verificar la respuesta
    setResult(data);
  } catch (error) {
    console.log(error);
  }
  }
  consultWeather()
}, [])

const { main } = result;

if (main && main.temp) {
  console.log(main.temp);
} else {
  console.log("No se pudo obtener la temperatura");
}
  

const kelvin = 273.15;
let weatherIcon = null;

if (result && result.weather && result.weather.length > 0) {
  weatherIcon = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;
}

return (
  <div className="">
    <div>
      <h1 className="main-title flex text-7xl text-center font-medium mt-20 justify-center">
        About <b className="font-bold ml-10">me</b>
      </h1>
    </div>

    <div className="mt-20 justify-center flex max-lg:mt-5 max-lg:block">
        <div className="imageAbout-container">
          <img
        className="imageAbout"
        src="photo.jpg"
        alt="photo"
      />
        </div>
      <div className="divText">
        <h1 className="text1">Hello, I'm Elian</h1>
          <p className="text2">
  A Full Stack Developer Junior <br />
  working from {result.main ? parseInt(result.main.temp - kelvin) : ""}°C
  <b className="flex align-center max-lg:text-lg max-lg:w-fit my-0 mx-auto">
    Mar del Plata
    {weatherIcon && <img className="weatherIcon" src={weatherIcon} alt="Weather Icon" />}, Argentina
  </b>
</p>
        <h3 className="text3">
          I started my path as a Full Stack programmer in 2023 learning the
          basics with NodeJS and then taking care of the Front especially with
          ReactJS which gave me the possibility to create both individual and
          group projects. Likewise, taking advantage of ReactJS tools, I am
          expanding to mobile with React Native
        </h3>
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
        <div className="item-languages" id="expressjs">
          <img src="Express.png" alt="Express" />
          <p>ExpressJS</p>
        </div>
        <div className="item-languages" id="next">
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

      <h1 className="max-lg:mt-9 text-8xl text-center font-medium mx-auto main-title3">
        Softwares
      </h1>
      <div className="grid-container2">
        <div className="item-languages" id="figma">
          <img src="Figma.svg" alt="Figma" />
          <p>Figma</p>
        </div>
        <div className="item-languages" id="vscode">
          <img src="VSCode.svg" alt="VSCode" />
          <p>VSCode</p>
        </div>
        <div className="item-languages" id="github">
          <img src="Github.svg" alt="Github" className="w-16"/>
          <p>Github</p>
        </div>
        <div className="item-languages" id="insomnia">
          <img src="Insomnia.svg" alt="Insomnia" />
          <p>Insomnia</p>
        </div>
      </div>

      <div>
        <Certifications/>
      </div>
  </div>
);

}

export default About;
