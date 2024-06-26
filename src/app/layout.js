"use client";
import Navbar from "@/components/navbar/page";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Prompt } from "next/font/google";
import Providers from "./providers";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";
import { es } from "../translations/es";
import { en } from "../translations/en";

i18next.init({
  interpolation: { escapeValue: false },
  resources: {
    es: {
      global: es.global,
    },
    en: {
      global: en.global,
    },
  },
  lng: "en",
});


const prompt = Prompt({
  weight: ["300", "500", "700"],
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

const metadata = {
  title: "Elian Rehbani | Portfolio",
  description: "Elian's portfolio created with NextJS",
  keywords:
    "Portfolio, Elian, Full Stack developer, Front end developer, Back end developer, Henry",
};

export default function RootLayout({ children }) {
  return (
    <html id="home" lang="en" className="!scroll-smooth" data-theme="dark">
      <head>
        <meta
          name="google-site-verification"
          content="otVZPuFaQ15hHkv10m2h0_P8L2Mj2KjkWfEa0CX4PKM"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="https://i.imgur.com/6iKBoMB.png" />
        <meta
          property="og:title"
          content="Elian Rehbani | Full Stack Dev"></meta>
        <meta
          property="og:description"
          content="Elian Rehbani | Portfolio"></meta>
        <meta
          property="twitter:image"
          content="https://i.imgur.com/6iKBoMB.png"
        />
        <meta property="twitter:title" content="Elian Full Stack Dev"></meta>
        <meta
          property="twitter:description"
          content="Elian Rehbani | Portfolio"></meta>
      </head>
      <body className={prompt.className}>
        <I18nextProvider i18n={i18next}>
          <Providers>
            <div className="background"></div>
            <div className="background2"></div>
            <Navbar />
            {children}
            <Analytics />
          </Providers>
        </I18nextProvider>
      </body>
    </html>
  );
}
