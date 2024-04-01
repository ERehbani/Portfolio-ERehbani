import { useTheme } from "next-themes";
import React, { useState } from "react";
import Image from "next/image";
import "./ThemeSwitcher.css";
import { useTranslation } from "react-i18next";

function ThemeSwitcher() {
  const { t: t2, i18n } = useTranslation("global");
  const { theme, setTheme } = useTheme();
  const [lastPressed, setLastPressed] = useState("en");
  const [esPressed, setEsPressed] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLastPressed(language);
    if (language === "es") {
      setEsPressed(true);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col -mt-3">
      <div className="">
        <div className="flex justify-around rounded-full  h-[32px] w-[61.7px] mr-20 border bg-[#fae8ff] max-lg:hidden">
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
                className="object-cover rounded-full w-6 h-6"
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
                className="object-cover rounded-full w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="switch-container -top-[52px] ml-[150px]">
        <label className="switch ">
          <input
            type="checkbox"
            onClick={toggleTheme}
            readOnly={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
