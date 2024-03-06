"use client";
import "./globals.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Certifications from "../certifications/page";
import Image from "next/image";
import Link from "next/link";
import { technologies } from "./technologies";
import { useTranslation } from "react-i18next";

function About() {
  const [result, setResult] = useState({});
  const {t: t2} = useTranslation("global")

  useEffect(() => {
    const consultWeather = async () => {
      const appid = "ae222c77a8713a698205fe736baa9e5b";
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=mar%20del%20plata,argentina&appid=${appid}`
        );

        setResult(data);
      } catch (error) {}
    };
    consultWeather();
  }, []);

  const { main } = result;

  if (main && main.temp) {
  } else {
  }

  const kelvin = 273.15;
  let weatherIcon = null;
  if (result && result.weather && result.weather.length > 0) {
    weatherIcon = `https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
  }

  const songsOnRepeat = [
    {
      track: "Brad Pitt",
      artist: "COIN",
      icon: "https://i.scdn.co/image/ab67616d00001e029f31a0f29ae2e2c6d0782102",
      link: "https://open.spotify.com/intl-es/track/7KpQCCnBbJiEuThRrVLCrb",
    },
    
    {
      track: "Creepin'",
      artist: "Metro Boomin",
      icon: "https://i.scdn.co/image/ab67616d00001e0213e54d6687e65678d60466c2",
      link: "https://open.spotify.com/intl-es/track/2dHHgzDwk4BJdRwy9uXhTO?si=51bec6b07ae54ada",
    },
    {
      track: "Rendezvous",
      artist: "Years & Years",
      icon: "https://i.scdn.co/image/ab67616d00001e029f1764fbbd2ddd22efbf1e8c",
      link: "https://open.spotify.com/intl-es/track/2H1qec30juJRXHbnvYzG85?si=2614d27b55ed4371",
    },
    {
      track: "Your Lover",
      artist: "Jane & The Boy",
      icon: "https://i.scdn.co/image/ab67616d00001e02651eca6ade65058fc6cf2f50",
      link: "https://open.spotify.com/intl-es/track/0AeGvs90gW3pZyjFyFOZdJ",
    },
    {
      track: "Missing You",
      artist: "SG Lewis",
      icon: "https://i.scdn.co/image/ab67616d00001e02623b593ab9bf0399a0aea2bd",
      link: "https://open.spotify.com/intl-es/track/35xgGlWw63Vml5VMUxU2xy",
    },
    {
      track: "Nothing New",
      artist: "The Strike",
      icon: "https://i.scdn.co/image/ab67616d00001e020ad9b58c5c2c6a204ee8cc75",
      link: "https://open.spotify.com/intl-es/track/3FvlayEQ7rHflEnZCt1zdH",
    },
    {
      track: "Vampire Disco",
      artist: "Friday Pilots Club",
      icon: "https://i.scdn.co/image/ab67616d00001e02fd754e85db47aa3868149e85",
      link: "https://open.spotify.com/intl-es/track/10euvsoL7wJqromh3lErtP",
    },
  
  ];

  const getRandomSong = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const randomSong = getRandomSong(songsOnRepeat);

  return (
    <div>
      <div>
        <h1 className="main-title flex text-7xl text-center font-medium mt-14 justify-center max-lg:mb-5">
          {t2("about.Title")}
        </h1>
      </div>

      <div className="mt-20 justify-center flex max-lg:mt-5 max-lg:block">
        <div className="imageAbout-container">
          <Image
            src="/photo.jpg"
            alt="Photo"
            className="imageAbout"
            width={384}
            height={0}
          />
          <div className="onRepeat">
            <Image
              className="onRepeat-logo"
              src="/spotify.svg"
              alt="spotify"
              width={60}
              height={0}
            />
            <div className="onRepeat-container">
              <div className="onRepeat-info">
                <Image
                  src={randomSong.icon}
                  alt="Song"
                  width={60}
                  height={0}
                  className="onRepeat-icon object-contain shadow-xl rounded-sm"
                />
                <div className="onRepeat-info-text">
                  <p className="onRepeat-track">{randomSong.track} by</p>
                  <p className="onRepeat-artist">{randomSong.artist}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divText">
          <div className="flex items-center gap-5 max-lg:flex-col">
            <h1 className="text1">{t2("about.Hello")}</h1>
            <p className="bg-[#1db954] w-fit h-fit p-2 rounded-3xl text-sm">
             {t2("about.Free")}
            </p>
          </div>
          <div className="text-white mt-28 justify-around contact-container-about">
            <div>
              <div className="contact-items-about" id="linkedin">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/elian-rehbani-96113624b/">
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin"
                    width={50}
                    height={0}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-items-about" id="github">
                <Link target="_blank" href="https://github.com/ERehbani">
                  <Image src="/Github.svg" alt="Github" width={50} height={0} />
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-items-about" id="gmail">
                <Link target="_blank" href="mailto:elianrhbn@gmail.com">
                  <Image src="/gmail.svg" alt="Gmail" width={50} height={0} />
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-items-about" id="fiverr">
                <Link target="_blank" href="https://es.fiverr.com/elinrhbn">
                  <Image src="/fiverr.svg" alt="Fiverr" width={50} height={0} />
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-items-about" id="upwork">
                <Link
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~01cb5ee7641e3347f8">
                  <Image src="/upwork.svg" alt="Upwork" width={50} height={0} />
                </Link>
              </div>
            </div>
          </div>
          <h3 className="text2">
            {t2("about.Title1")} <b>{t2("about.Title2")}</b> <br />
           {t2("about.Title3")}{" "}
            {result.main ? parseInt(result.main.temp - kelvin) : ""}°C
            <p className="flex align-center max-lg:text-lg max-lg:w-fit my-0 mx-auto max-sm:text-sm">
              Mar del Plata
              {weatherIcon && (
                <picture>
                  <img className="weatherIcon" src={weatherIcon} alt="." />
                </picture>
              )}
              , Argentina 🇦🇷
            </p>
          </h3>
          <div className="max-lg:w-8/12 max-lg:my-0 max-lg:mx-auto max-sm:mx-0">
            <h3 className="text3">
             {t2("about.Description")}
            </h3>
          </div>
          <div className="download">
            <div className="button-download-container">
              <div className="buttons-container">
                <Link
                  href="/CV/CV_EN.pdf"
                  target="_blank"
                  className="button-download">
                  <Image
                    src="/file.svg"
                    alt="file"
                    width={20}
                    height={0}
                    className="mr-2"
                    id="file"
                  />
                  View CV in english
                </Link>
                <Link
                  href="/CV/CV_ES.pdf"
                  target="_blank"
                  className="button-download">
                  <Image
                    src="/file.svg"
                    alt="file"
                    width={20}
                    height={0}
                    className="mr-2"
                    id="file"
                  />
                  Ver CV en español
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-7xl text-center font-medium mx-auto secondary-title max-lg:mt-4">
        {t2("about.Technologies")}
      </h1>
      <div className="2xl:flex block w-[80%] mx-auto justify-around my-5">
        <div className="mx-auto">
          <h2 className="text2 text-center">Frontend</h2>
          <div className="grid-container">
            {technologies.frontend.map((tech, index) => (
              <div className="item-languages" key={index}>
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  width={tech.width}
                  height={tech.height}
                />
                <p>{tech.imageName}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="text-white w-[40%] 2xl:rotate-90 2xl:m-[-50px] 2xl:mt-96 md:max-2xl:my-10 md:max-2xl:mx-auto max-sm:my-5 max-sm:mx-auto" />

        <div>
          <h2 className="text2 text-center">Backend</h2>
          <div className="grid-container">
            {technologies.backend.map((tech, index) => (
              <div className="item-languages" key={index}>
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  width={tech.width}
                  height={tech.height}
                />
                <p>{tech.imageName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="max-lg:mt-9 text-7xl text-center font-medium mx-auto main-title3">
        Software
      </h1>
      <div className="grid-container2">
        <div className="item-languages" id="figma">
          <Image src="Figma.svg" alt="Figma" width={49} height={0} />
          <p>Figma</p>
        </div>
        <div className="item-languages" id="vscode">
          <Image src="/VSCode.svg" alt="VSCode" width={71} height={0} />
          <p>VSCode</p>
        </div>
        <div className="item-languages" id="github">
          <Image src="/Github.svg" alt="Github" width={64} height={0} />
          <p>Github</p>
        </div>
        <div className="item-languages" id="insomnia">
          <Image src="/Insomnia.svg" alt="Insomnia" width={71} height={0} />
          <p>Insomnia</p>
        </div>
      </div>

      <div>
        <Certifications />
      </div>
    </div>
  );
}

export default About;
