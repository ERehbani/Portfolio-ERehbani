"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectNative, projects } from "./projects";
import "./globals.css";

function Projects() {
  return (
    <div>
      <div className="">
        <h2
          className="secondary-title h-28 flex text-7xl text-center font-medium mt-20 justify-center">
          My Projects
        </h2>
      </div>
      <div className="">
        {projects.map((item, index) => (
          <div className="square-show" key={index}>
            <div className="info-show pl-5">
              <h2 className="title-show flex -ml-5">{item.title}</h2>
              <div className="icons">
                {item.icons?.map((item, index) => (
                  <div key={index} className="div-icons mt-4">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={50}
                      height={0}
                      className="svg-icon"
                    />
                    
                    <span
                      className={item.span.classname}
                      id={item.span.id && item.span.id}>
                      {item.span.span}
                    </span>
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
              <h2 className="title-show flex">{item.title}</h2>
              <div className="icons">
                {item.icons.map((item, index) => (
                  <div key={index} className="div-icons">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={36}
                      height={0}
                      className={item.classname}
                    />
                    <span
                      className={item.span.classname}
                      id={item.span.id && item.span.id}>
                      {item.span.span}
                    </span>
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
