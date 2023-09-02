"use client"
import "./globals.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  <div className="mt-32">
    <div>
      <h1 className="main-title flex text-8xl text-center font-medium mt-20 justify-center">
        About <h1 className="font-bold ml-10">me</h1>
      </h1>
    </div>

    <div className="mt-20 flex">
      <img
        className="w-96 h-96 rounded-t-full ml-96 mt-24"
        src="photo.jpg"
        alt="photo"
      />
      <div className="divText">
        <h1 className="text1">Hello, I'm Elian</h1>
          <p className="text2">
  A Full Stack Developer Junior <br />
  working from {result.main ? parseInt(result.main.temp - kelvin) : ""}°C
  <div className="flex align-center">
    Mar del Plata
    {weatherIcon && <img className="weatherIcon" src={weatherIcon} alt="Weather Icon" />}, Argentina
  </div>
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
  </div>
);

}

export default About;
