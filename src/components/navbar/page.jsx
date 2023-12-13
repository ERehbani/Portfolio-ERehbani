"use client";
import React, { useState } from "react";
import "./globals.css";
import Link from "next/link";
import ThemeSwitcher from "@/app/ThemeSwitcher";

function Navbar() {
  // const [ max, setMax ] = useState(0)

  // useEffect(() => {
  //   setMax(window.innerWidth)
  // }, [])

  return (
    <div className="navbar-container">
      <div className="navbar-border mx-auto">
        <div className="navbar">
          <div className="navlist flex justify-around py-5">
            <button className="bookmarkBtn">
              <Link href="#home">
                <span className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
              </Link>
              <p className="IconContainer">Home</p>
            </button>

            <button className="bookmarkBtn">
              <Link href="#projects">
                <span className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
              </Link>
              <p className="ml-1 IconContainer">Projects</p>
            </button>

            <button className="bookmarkBtn">
              <Link href="#about">
                <span className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-circle">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                  </svg>
                </span>
              </Link>
              <p className="IconContainer">About</p>
            </button>
            <button className="bookmarkBtn">
              <Link href="#contact">
                <span className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
              </Link>
              <p className="IconContainer">Contact</p>
            </button>
          </div>
        </div>

        <div className="navbar2 absolute right-20 flex">
          <div>{/* <h3 className="text-white">EN</h3> */}</div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
