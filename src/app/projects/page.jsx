"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { projectNative, projects } from "./projects";
import "./globals.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t: t2 } = useTranslation("global");

  const projects = [
    {
      title: "Ooink.me",
      icons: [
        {
          src: "/nextjs-dark.png",
          alt: "Next",
          classname: "svg-icon",
          span: {
            span: "NextJS",
            classname: "tooltip3 left-9",
          },
        },
        {
          src: "/tailwind-dark.png",
          alt: "Tailwind",
          classname: "svg-icon",
          span: {
            span: "TailwindCSS",
            classname: "tooltip3 left-24",
          },
        },
        {
          src: "/nextui-dark.png",
          alt: "NextUI",
          classname: "svg-icon",
          span: {
            span: "NextUI",
            classname: "tooltip3 left-[12rem]",
          },
        },
        {
          src: "/vercel-dark.png",
          alt: "Vercel",
          classname: "svg-icon",
          span: {
            span: "Vercel",
            classname: "tooltip3 left-64",
          },
        },
        {
          src: "/prisma-dark.png",
          alt: "Prisma",
          classname: "svg-icon",
          span: {
            span: "Prisma",
            classname: "tooltip3 left-[21rem]",
          },
        },
        {
          src: "/git-dark.png",
          alt: "Git",
          classname: "svg-icon",
          span: {
            span: "Git",
            classname: "tooltip3",
          },
        },
        {
          src: "/nodejs-dark.png",
          alt: "NodeJS",
          classname: "svg-icon",
          span: {
            span: "NodeJS",
            classname: "tooltip3",
          },
        },
      ],

      description: t2("projects.project1.description"),

      divLink: "webGithub max-lg:justify-center max-lg:-ml-5 flex",
      links: [
        {
          href: "http://ooink.me/",
          id: "web-link",
          button: {
            classname: "button-visit",
            image: {
              src: "/web-light.svg",
              alt: "Web",
              width: 36,
              classname:
                "links-projects w-9 justify-center mr-2 max-sm:mr-1 max-sm:-mt-1",
            },
          },
          text: {
            classname: "mt-1 text-link",
            text: "Visit",
          },
        },
        {
          href: "https://github.com/ERehbani/ooink.me",
          id: "web-link",
          classname: "",
          button: {
            classname: "button-visit",
            image: {
              src: "/Github.svg",
              alt: "Github",
              width: 36,
              classname: "links-projects w-9 justify-center mr-2",
            },
          },
          text: {
            classname: "text-link flex flex-col justify-center",
            text: "View code",
          },
        },
      ],
      images: [
        {
          src: "/Projects/Web Projects/OG2.webp",
          alt: "Ooink.me",
          width: 600,
          classname: "image-show",
        },
      ],
    },
    {
      title: t2("projects.project2.title"),
      icons: [
        {
          src: "/reactjs-dark.png",
          alt: "React",
          classname: "svg-icon",
          span: {
            span: "ReactJS",
            classname: "tooltip1",
          },
        },
        {
          src: "/tailwind-dark.png",
          alt: "Tailwind",
          classname: "svg-icon",
          span: {
            span: "TailwindCSS",
            classname: "tooltip1 left-28",
          },
        },
        {
          src: "/firebase-dark.png",
          alt: "Firebase",
          classname: "svg-icon",
          span: {
            span: "Firebase",
            classname: "tooltip1 left-56",
            id: "firebase",
          },
        },
        {
          src: "/mercado-pago-dark.png",
          alt: "Mercado Pago",
          classname: "svg-icon",
          span: {
            span: "Mercado Pago",
            classname: "tooltip1 left-72",
            id: "mp",
          },
        },
        {
          src: "/mongodb-dark.png",
          alt: "Mongo DB",
          classname: "svg-icon",
          span: {
            span: "MongoDB",
            classname: "tooltip1",
            id: "mongodb",
          },
        },
        {
          src: "/git-dark.png",
          alt: "Git",
          classname: "svg-icon",
          span: {
            span: "Git",
            classname: "tooltip1",
            id: "git",
          },
        },
        {
          src: "/nodejs-dark.png",
          alt: "NodeJS",
          classname: "svg-icon",
          span: {
            span: "NodeJS",
            classname: "tooltip1",
          },
        },
      ],

      description: t2("projects.project2.description"),

      divLink: "webGithub max-lg:justify-center max-lg:-ml-5 flex",
      links: [
        {
          href: "https://deploy-front-end-git-main-shakkus.vercel.app/home",
          id: "web-link",
          button: {
            classname: "button-visit",
            image: {
              src: "/web-light.svg",
              alt: "Web",
              width: 36,
              classname:
                "links-projects w-9 justify-center mr-2 max-sm:mr-1 max-sm:-mt-1",
            },
          },
          text: {
            classname: "mt-1 text-link",
            text: "Visit",
          },
        },
        {
          href: "https://github.com/Shakkus/TalentForgeFrontEnd",
          id: "web-link",
          classname: "",
          button: {
            classname: "button-visit",
            image: {
              src: "/Github.svg",
              alt: "Github",
              width: 36,
              classname: "links-projects w-9 justify-center mr-2",
            },
          },
          text: {
            classname: "text-link flex flex-col justify-center",
            text: "View code",
          },
        },
      ],
      images: [
        {
          src: "/Projects/Web Projects/Talent_forge.png",
          alt: "Talent Forge",
          width: 600,
          classname: "image-show",
        },
      ],
    },
    {
      title: t2("projects.project3.title"),
      icons: [
        {
          src: "/reactjs-dark.png",
          alt: "React",
          classname: "svg-icon",
          span: {
            span: "ReactJS",
            classname: "tooltip2",
          },
        },
        {
          src: "/redux-dark.png",
          alt: "Redux",
          classname: "svg-icon",
          span: {
            span: "Redux",
            classname: "tooltip2",
          },
        },
        {
          src: "/postgresql-dark.png",
          alt: "PostgreSQL",
          classname: "svg-icon",
          span: {
            span: "SQL",
            classname: "tooltip2",
          },
        },
        {
          src: "/nodejs-dark.png",
          alt: "NodeJS",
          classname: "svg-icon",
          span: {
            span: "NodeJS",
            classname: "tooltip2",
          },
        },
        {
          src: "/nodemon-dark.png",
          alt: "Nodemon",
          classname: "svg-icon",
          span: {
            span: "Nodemon",
            classname: "tooltip2",
          },
        },
        {
          src: "/css-dark.png",
          alt: "CSS",
          classname: "svg-icon",
          span: {
            span: "CSS",
            classname: "tooltip2",
          },
        },
        {
          src: "/axios-dark.png",
          alt: "Axios",
          classname: "svg-icon",
          span: {
            span: "Axios",
            classname: "tooltip2",
          },
        },
        {
          src: "/expressjs-dark.png",
          alt: "Express",
          classname: "svg-icon",
          span: {
            span: "ExpressJS",
            classname: "tooltip3",
            id: "express",
          },
        },
        {
          src: "/git-dark.png",
          alt: "Git",
          classname: "svg-icon",
          span: {
            span: "Git",
            classname: "tooltip2",
            id: "git2",
          },
        },
      ],

      description: t2("projects.project3.description"),

      divLink: "webGithub max-lg:justify-center max-lg:-ml-5 flex",
      links: [
        {
          href: "https://github.com/ERehbani/PI-COUNTRIES",
          id: "web-link",
          classname: "",
          button: {
            classname: "button-visit",
            image: {
              src: "/Github.svg",
              alt: "Github",
              width: 36,
              classname: "links-projects w-9 justify-center mr-2",
            },
          },
          text: {
            classname: "text-link flex flex-col justify-center",
            text: "View code",
          },
        },
      ],
      images: [
        {
          src: "/Projects/Web Projects/web_api_countries.png",
          alt: "Countries API",
          width: 600,
          classname: "image-show",
        },
      ],
    },
  ];

  const projectNative = [
    {
      title: t2("projects.project4.title"),
      icons: [
        {
          src: "/react-native-dark.png",
          alt: "React Native",
          classname: "svg-icon",
          span: {
            span: "React Native",
            classname: "tooltip1 left-9",
            id: "expense_rn",
          },
        },
      ],
      description: t2("projects.project4.description"),
      divLink: "webGithub mt-5 max-lg:justify-center max-lg:-ml-5 flex",
      links: {
        href: "https://github.com/ERehbani/Planificador-Gastos",
        id: "github-link",
        classname: "",
        button: {
          classname: "button-visit",
          image: {
            src: "/Github.svg",
            alt: "Github",
            width: 36,
            classname: "links-projects w-9 justify-center mr-2",
          },
        },
        text: {
          classname: "text-link flex flex-col justify-center",
          text: "View code",
        },
      },
      images: [
        {
          src: "/Projects/Planificator/Planificator1.webp",
          alt: "Planificator",
          width: 163,
        },
        {
          src: "/Projects/Planificator/Planificator3.webp",
          alt: "Planificator",
          width: 163,
        },
        {
          src: "/Projects/Planificator/Planificator4.webp",
          alt: "Planificator",
          width: 163,
        },
      ],
    },
    {
      title: t2("projects.project5.title"),
      icons: [
        {
          src: "/react-native-dark.png",
          alt: "React Native",
          classname: "svg-icon",
          span: {
            span: "React Native",
            classname: "tooltip4 left-9",
            id: "weather_rn",
          },
        },
      ],
      description: t2("projects.project5.description"),
      divLink: "webGithub mt-5 max-lg:justify-center max-lg:-ml-5 flex",
      links: {
        href: "https://github.com/ERehbani/GestorCitas-ReactNative",
        id: "github-link",
        classname: "",
        button: {
          classname: "button-visit",
          image: {
            src: "/Github.svg",
            alt: "Github",
            width: 36,
            classname: "links-projects w-9 justify-center mr-2",
          },
        },
        text: {
          classname: "text-link flex flex-col justify-center",
          text: "View code",
        },
      },

      images: [
        {
          src: "/Projects/Quote/quotes2.webp",
          alt: "Planificator",
          width: 163,
        },
        {
          src: "/Projects/Quote/quotes3.webp",
          alt: "Planificator",
          width: 163,
        },
        {
          src: "/Projects/Quote/quotes4.webp",
          alt: "Planificator",
          width: 163,
        },
      ],
    },
    {
      title: t2("projects.project6.title"),
      icons: [
        {
          src: "/react-native-dark.png",
          alt: "React Native",
          classname: "svg-icon",
          span: {
            span: "React Native",
            classname: "tooltip4 -mt-16 left-10",
            id: "weather_rn",
          },
        },
        {
          src: "/open-weather-dark.png",
          alt: "Open Weather",
          classname: "svg-icon",
          span: {
            span: "Open Weather",
            classname: "tooltip4 -mt-16 left-28",
          },
        },
      ],
      description: t2("projects.project6.description"),
      divLink: "webGithub mt-5 max-lg:justify-center max-lg:-ml-5 flex",
      links: {
        href: "https://github.com/ERehbani/Weather-App",
        id: "github-link",
        classname: "",
        button: {
          classname: "button-visit",
          image: {
            src: "/Github.svg",
            alt: "Github",
            width: 36,
            classname: "links-projects w-9 justify-center mr-2",
          },
        },
        text: {
          classname: "text-link flex flex-col justify-center",
          text: "View code",
        },
      },

      images: [
        {
          src: "/Projects/Weather/weatherApp1.webp",
          alt: "Planificator",
          width: 163,
        },
        {
          src: "/Projects/Weather/weatherApp2.webp",
          alt: "Planificator",
          width: 163,
        },
        {
          src: "/Projects/Weather/weatherApp3.webp",
          alt: "Planificator",
          width: 163,
        },
      ],
    },
  ];

  return (
    <div>
      <div>
        <h2 className="secondary-title h-28 flex text-7xl text-center font-medium mt-20 justify-center">
          {t2("projects.title")}
        </h2>
      </div>
      <div>
        {projects.map((item, index) => (
          <div className="square-show" key={index}>
            <div className="info-show pl-5">
              <h2 className="title-show flex -ml-5">{item.title}</h2>
              <div className="icons">
                {item.icons?.map((item, index) => (
                  <div key={index} className="div-icons mt-4">
                    <button
                      // data-balloon-pos="up"
                      aria-label={item.span.span}
                      className="tooltip">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={0}
                        className="svg-icon"
                      />
                    </button>
                  </div>
                ))}
              </div>
              <p className="description-show -ml-5 ">{item.description}</p>
              <div className={`${item.divLink} -ml-5`}>
                {item.links?.map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} id={item.id} target="_blank">
                      <div className="button-visit mr-5">
                        <Image
                          src={item?.button?.image?.src}
                          alt={item?.button?.image?.alt}
                          width={item?.button?.image?.width}
                          height={0}
                          className={item?.button?.image?.classname}
                        />
                        <p className={item.text.classname}>{item.text.text}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-container">
              {item.images?.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={0}
                    className={item.classname}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {projectNative.map((item, index) => (
          <div key={index} className="square-show-phone">
            <div className="info-show">
              <h2 className="title-show flex max-[1440px]:text-center">{item.title}</h2>
              <div className="icons">
                {item.icons.map((item, index) => (
                  <div key={index} className="div-icons">
                    <button 
                    // data-balloon-pos="up"
                     aria-label={item.span.span}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={0}
                        className="svg-icon"
                      />
                    </button>
                    {/* <span
                      className={item.span.classname}
                      id={item.span.id && item.span.id}>
                      {item.span.span}
                    </span> */}
                  </div>
                ))}
              </div>
              <p className="description-show">{item.description}</p>
              <div className={item.divLink}>
                <Link id={item.links.id} target="_blank" href={item.links.href}>
                  <div className="button-visit">
                    <Image
                      src={item.links.button.image.src}
                      alt={item.links.button.image.alt}
                      width={36}
                      height={0}
                      className={item.links.button.image.classname}
                    />
                    <p className={item.links.text.classname}>
                      {item.links.text.text}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div key={index} className="phone-container">
              {item.images.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={0}
                  className="phone-show"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
