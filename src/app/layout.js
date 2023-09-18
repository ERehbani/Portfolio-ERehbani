import Navbar from "@/components/navbar/page";
import "./globals.css";
import { Prompt } from "next/font/google";
import Providers from "./providers";
import Head from "next/head";

const prompt = Prompt({
  weight: ["300", "500", "700"],
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Elian Rehbani | Portfolio",
  description: "Elian's portfolio created with NextJS",
  keywords:
    "Portfolio, Elian, Full Stack developer, Front end developer, Back end developer, Henry",
};

export default function RootLayout({ children }) {
  return (
    <html id="home" lang="en" className="!scroll-smooth" data-theme="dark">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MKDDY2QNRT"></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-MKDDY2QNRT');
        </script>
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
        <Providers>
          <div className="background"></div>
          <div className="background2"></div>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
