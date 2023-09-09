"use client"
import "./globals.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Certifications from "../certifications/page";
import Image from "next/image";

function About() {

const [ result, setResult ] = useState({}) 


useEffect(() => {
  const consultWeather = async() => {
      const appid = 'ae222c77a8713a698205fe736baa9e5b';
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=mar%20del%20plata,argentina&appid=${appid}`);

    setResult(data);
  } catch (error) {
  }
  }
  consultWeather()
}, [])

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
    track: "Dead Man Walking",
    artist: "Grant",
    icon: "https://i.scdn.co/image/ab67616d00001e029e6efbf87d6460f4d7a387e0",
    link: "https://open.spotify.com/intl-es/track/4ZPwjq0CdxbWFNycxnSUJc"
  },
  {
    track: "Tearing Me Up",
    artist: "Bob Moses",
    icon: "https://i.scdn.co/image/ab67616d00001e02ba8914058d8b4021a538ea1e",
    link: "https://open.spotify.com/intl-es/track/2HBanw3xVQSWrdOtPfjsnK"
  },
  {
    track: "Beautiful Liar",
    artist: "Monsta X",
    icon: "https://i.scdn.co/image/ab67616d00001e02303c2dba413b58c5137c69c4",
    link: "https://open.spotify.com/intl-es/track/1F6qqwgyBjcIMzen8RrOXQ?si=cd9f4fd253b840eb"
  },
  {
    track: "All Night",
    artist: "(G)I-DLE",
    icon: "https://i.scdn.co/image/ab67616d00001e0282dd2427e6d302711b1b9616",
    link: "https://open.spotify.com/intl-es/track/1abAIeSQCbdPcxWgiwDOmL?si=50aa9e2e23f4407c"
  },
  {
    track: "Love Brand New",
    artist: "Bob Moses",
    icon: "https://i.scdn.co/image/ab67616d00001e02560adce2969a4b70f345d289",
    link: "https://open.spotify.com/intl-es/track/3lpoFakL5hsleW3EdYNdxL?si=bc1a2c284db145a6"
  },
  {
    track: "Nave Espacial",
    artist: "Liu & Samantha Machado",
    icon: "https://i.scdn.co/image/ab67616d00001e021953659153357ff72129ef66",
    link: "https://open.spotify.com/intl-es/track/709F4UQ2uKplKvcD88xffa?si=b55da90562ae42c2"
  },
  {
    track: "Hanging On",
    artist: "Bob Moses",
    icon: "https://i.scdn.co/image/ab67616d00001e02560adce2969a4b70f345d289",
    link: "https://open.spotify.com/intl-es/track/7wmp28Lvr13qbPpFFALAMt?si=0083f0b7a8044310"
  },
  {
    track: "Queencard",
    artist: "(G)I-DLE",
    icon: "https://i.scdn.co/image/ab67616d00001e0282dd2427e6d302711b1b9616",
    link: "https://open.spotify.com/intl-es/track/4uOBL4DDWWVx4RhYKlPbPC?si=45022899153f4d37"
  },
  {
    track: "Fils de Joie",
    artist: "Stromae",
    icon: "https://i.scdn.co/image/ab67616d00001e0231d6b27ffaa0b2f89234698a",
    link: "https://open.spotify.com/intl-es/track/6w2jx3gzQAtoKP22czcANv?si=c0acc36d72c34e0a"
  },
  {
    track: "Creepin'",
    artist: "Metro Boomin",
    icon: "https://i.scdn.co/image/ab67616d00001e0213e54d6687e65678d60466c2",
    link: "https://open.spotify.com/intl-es/track/2dHHgzDwk4BJdRwy9uXhTO?si=51bec6b07ae54ada"
  },
  {
    track: "Rendezvous",
    artist: "Years & Years",
    icon: "https://i.scdn.co/image/ab67616d00001e029f1764fbbd2ddd22efbf1e8c",
    link: "https://open.spotify.com/intl-es/track/2H1qec30juJRXHbnvYzG85?si=2614d27b55ed4371"
  },
  {
    track: "CAEN LAS ESTRELLAS",
    artist: "Nicki Nicole & YSY A",
    icon: "https://i.scdn.co/image/ab67616d00001e026e8a008910b112a83be0de44",
    link: "https://open.spotify.com/intl-es/track/3M4netHXzaZnamkdGr72xb?si=a784c121d98c4576"
  },
  {
    track: "Live in the Moment",
    artist: "Portugal. The Man",
    icon: "https://i.scdn.co/image/ab67616d00001e02af52c228c9619ff6298b08cd",
    link: "https://open.spotify.com/intl-es/track/60eOMEt3WNVX1m1jmApmnX?si=a87e1654749746b0"
  },
  {
    track: "Disorder",
    artist: "RIOT",
    icon: "https://i.scdn.co/image/ab67616d00001e0282322271fb9261dec9fee0e3",
    link: "https://open.spotify.com/intl-es/track/6P83H1EWbEcXrxcSqgs6wc?si=b051b9edaa724a7d"
  },
  {
    track: "Inner Light",
    artist: "Elderbrook & Bob Moses",
    icon: "https://i.scdn.co/image/ab67616d00001e02a63745282e4fea8542af977d",
    link: "https://open.spotify.com/intl-es/track/40tPP3K10yMZxwnT65REKj?si=990b21ade1f34065"
  },
  {
    track: "Do It All Again",
    artist: "Punctual & Jordan Shaw",
    icon: "https://i.scdn.co/image/ab67616d00001e0248a280c9975ed09b734b5191",
    link: "https://open.spotify.com/intl-es/track/6BwPstqf4RoRMbDidFWNxE?si=a6f3bc366e1f4cc0"
  },
  {
    track: "GOTTASAEDAE",
    artist: "BewhY",
    icon: "https://i.scdn.co/image/ab67616d00001e025e08b785de700455475b9425",
    link: "https://open.spotify.com/intl-es/track/5nJvKQsFRmCp2i7EiKjZDg?si=022c9e34176641d2"
  }
];

const getRandomSong = (array) => {
  const randomIndex = Math.floor((Math.random() * array.length));
  return array[randomIndex];
}

const randomSong = getRandomSong(songsOnRepeat)


return (
  <div className="">
    <div>
      <h1 className="main-title flex text-7xl text-center font-medium mt-20 justify-center max-lg:mb-5">
        About me
      </h1>
    </div>

    <div className="mt-20 justify-center flex max-lg:mt-5 max-lg:block">
        <div className="imageAbout-container">
          {/* <img
        className="imageAbout"
        src="photo.jpg"
        alt="photo"
      /> */}
      <Image src="/photo.jpg" alt='Photo' className='imageAbout' width={384} height={0} />
      <div className="onRepeat">
      <Image  className="onRepeat-logo" src="/spotify.svg" alt="spotify" width={60} height={0} />
      <div className="onRepeat-container">
        <div className="onRepeat-info">
          <Image src={randomSong.icon} alt="Song" width={60} height={0} className="onRepeat-icon object-contain"/>
          <div className="onRepeat-info-text">
            <p className="onRepeat-track">{randomSong.track} by</p>
            <p className="onRepeat-artist">{randomSong.artist}</p>
          </div>
        </div>
      </div>
      </div>
        </div>
      <div className="divText">
        <h1 className="text1">Hello, I'm Elian</h1>
          <h3 className="text2">
  A Full Stack Developer Junior <br />
  working from {result.main ? parseInt(result.main.temp - kelvin) : ""}°C
  <b className="flex align-center max-lg:text-lg max-lg:w-fit my-0 mx-auto">
    Mar del Plata
    {weatherIcon && (<picture><img className="weatherIcon" src={weatherIcon} alt="." /></picture>)}, Argentina
    
  </b>
</h3>
        <h3 className="text3">
          I started my path as a Full Stack programmer in 2023 learning the
          basics with NodeJS and then taking care of the Front especially with
          ReactJS which gave me the possibility to create both individual and
          group projects. Likewise, taking advantage of ReactJS tools, I am
          expanding to mobile with React Native
        </h3>
      </div>
    </div>

          <h1 className="text-7xl text-center font-medium mx-auto secondary-title max-lg:mt-4">
        Languages
      </h1>
      <div className="grid-container">
        <div className="item-languages">
          {/* <img src="React.png" alt="React" /> */}
          <Image src="/React.png" alt="React" width={70} height={64}/>
          <p>ReactJS</p>
        </div>
        <div className="item-languages">
          {/* <img src="React-Native.png" alt="React Native" /> */}
          <Image src="/React-Native.png" alt="React Native" width={83} height={72} />
          <p>React Native</p>
        </div>
        <div className="item-languages">
          {/* <img src="Redux.png" alt="Redux" /> */}
          <Image src="/Redux.png" alt="Redux" width={78} height={75}/>
          <p>Redux</p>
        </div>
        <div className="item-languages" id="expressjs">
          {/* <img src="Express.png" alt="Express" /> */}
          <Image src="/Express.png" alt="Express" width={78} height={43}/>
          <p>ExpressJS</p>
        </div>
        <div className="item-languages" id="next">
          {/* <img src="Next.png" alt="Next" /> */}
          <Image src="/Next.png" alt="Next" width={78} height={78}/>
          <p>NextJS</p>
        </div>
        <div className="item-languages">
          {/* <img src="nodejs.png" alt="Nodejs" /> */}
          <Image src="/nodejs.png" alt="NodeJS" width={70} height={78}/>
          <p>NodeJS</p>
        </div>
        <div className="item-languages">
          {/* <img src="sql.png" alt="PostgreSQL" /> */}
          <Image src="/sql.png" alt="PostgreSQL" width={76} height={79}/>
          <p>PostgreSQL</p>
        </div>
        <div className="item-languages">
          {/* <img src="git.png" alt="Git" /> */}
          <Image src="/git.png" alt="Git" width={78} height={79}/>
          <p>Git</p>
        </div>
        <div className="item-languages">
          {/* <img src="html.png" alt="HTML" /> */}
          <Image src="/html.png" alt="HTML" width={68} height={0}/>
          <p>HTML</p>
        </div>
        <div className="item-languages">
          {/* <img src="css.png" alt="CSS" /> */}
          <Image src="/css.png" alt="CSS" width={69} height={0} />
          <p>CSS</p>
        </div>
        <div className="item-languages">
          {/* <img src="tailwind.png" alt="Tailwind" /> */}
          <Image src="/tailwind.png" alt="Tailwind" width={79} height={79}/>
          <p>TailwindCSS</p>
        </div>
      </div>

      <h1 className="max-lg:mt-9 text-7xl text-center font-medium mx-auto main-title3">
        Softwares
      </h1>
      <div className="grid-container2">
        <div className="item-languages" id="figma">
          {/* <img src="Figma.svg" alt="Figma" /> */}
          <Image src="Figma.svg" alt="Figma" width={49} height={0} />
          <p>Figma</p>
        </div>
        <div className="item-languages" id="vscode">
          {/* <img src="VSCode.svg" alt="VSCode" /> */}
          <Image src="/VSCode.svg" alt="VSCode" width={71} height={0} />
          <p>VSCode</p>
        </div>
        <div className="item-languages" id="github">
          {/* <img src="Github.svg" alt="Github" className="w-16"/> */}
          <Image src="/Github.svg" alt="Github" width={64} height={0}/>
          <p>Github</p>
        </div>
        <div className="item-languages" id="insomnia">
          {/* <img src="Insomnia.svg" alt="Insomnia" /> */}
          <Image src="/Insomnia.svg" alt="Insomnia" width={71} height={0}/>
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
