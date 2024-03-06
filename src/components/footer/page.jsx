"use client";
import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

function Footer() {
  const { theme, setTheme } = useTheme("light");
  const { t: t2, i18n } = useTranslation("global");
  const [lastPressed, setLastPressed] = useState("en");
  const [esPressed, setEsPressed] = useState(false);

  const toggleTheme = () => {
    // Cambia el tema entre "light" y "dark" alternativamente
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(language);
    setLastPressed(language);
    if (language === "es") {
      setEsPressed(true);
    }
  };

  return (
    <div className="footer mt-32 max-lg:mt-16">
      <footer className="min-lg:mx-auto h-fit flex justify-around items-center">
        <div className="w-[100%] flex justify-around items-center max-lg:py-7 py-14 max-sm:text-xs">
          <h1 className="text-white font-thin min footer-name">
            Elian Rehbani
          </h1>
          <div className="dark-mode-mobile flex min-lg:gap-5 min-lg:mr-5">
            {theme === "light" ? (
              <Image
                src="/sun.svg"
                alt="sun"
                width={24}
                height={0}
                onClick={toggleTheme}
                readOnly={theme === "dark"}
              />
            ) : (
              <Image
                src="/moon.svg"
                alt="sun"
                width={24}
                height={0}
                onClick={toggleTheme}
                readOnly={theme === "light"}
              />
            )}
            <div className="h-full w-11 my-auto ml-2">
              <div className="flex justify-around rounded-full h-[32px] w-[61.7px] max-lg:h-[16px] max-lg:w-[40px] mr-20 bg-[#fae8ff] min-lg:hidden">
                <div
                  className={`rounded-s-full flex items-center justify-center focus-within:bg-[${
                    esPressed ? "#0b0014" : "#fae8ff"
                  }] transition-all duration-300 w-full`}>
                  <button onClick={() => changeLanguage("es")}>
                    <Image
                      src="/spain.jpg"
                      alt="Spanish"
                      width={50}
                      height={0}
                      className="object-cover rounded-full w-6 h-6 max-lg:w-3 max-lg:h-3"
                    />
                  </button>
                </div>
                <div
                  className={`bg-[${
                    lastPressed === "en" ? "#0b0014" : "#fae8ff"
                  }] rounded-e-full flex items-center justify-center active:bg-[#0b0014] focus-within:bg-[#0b0014] transition-all duration-300 w-full`}>
                  <button onClick={() => changeLanguage("en")}>
                    <Image
                      src="/gbFlag.png"
                      alt="English"
                      width={50}
                      height={50}
                      className="object-cover rounded-full w-6 h-6 max-lg:w-3 max-lg:h-3"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="max-lg:flex max-lg:justify-between max-lg:w-2/4"> */}
          <h2 className="text-white font-thin">Made with NextJS</h2>
          <div className="flex justify-between ">
            <Link
              href="https://www.linkedin.com/in/elian-rehbani-96113624b/"
              target="_blank">
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                className="max-lg:w-6"
                width={48}
                height={0}
              />
            </Link>
            <Link href="https://github.com/ERehbani" target="_blank">
              <Image
                src="/Github-dark.svg"
                alt="Github"
                width={48}
                height={0}
                className="ml-3 w-12 max-lg:w-6"
              />
            </Link>
          </div>
        </div>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default Footer;
