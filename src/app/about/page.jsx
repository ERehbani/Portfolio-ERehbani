import React from "react";
import "./globals.css";

function About() {
  return (
    <div>
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
          <h1 className="text1">Hello, i'm Elian</h1>
          <h2 className="text2">
            A Full Stack Developer Junior working from Mar del Plata, Argentina
          </h2>
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
