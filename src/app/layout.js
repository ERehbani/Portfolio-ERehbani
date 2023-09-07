import Navbar from "@/components/navbar/page";
import "./globals.css";
import { Prompt } from "next/font/google";
import Providers from "./providers";
import Head from "next/head";
const open_graph_img = require('../../public/open_graph.png')

const prompt = Prompt({
  weight: ["300", "500", "700"],
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Elian's portfolio",
  description: "Elian's portfolio created with NextJS",
  keywords: "Portfolio, Elian, Full Stack developer, Front end developer, Back end developer, Henry"
  // AGUANTE EL TOTK
};


export default function RootLayout({ children }) {
  return (
    <html id="home" lang="en" className="!scroll-smooth" data-theme="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content={open_graph_img}/>
        <meta property="og:title" content="Elian Full Stack Dev"></meta>
        <meta property="og:description" content="Elian's Portfolio" />
        <meta property="twitter:image" content={open_graph_img}/>
        <meta property="twitter:title" content="Elian Full Stack Dev"></meta>
        <meta property="twitter:description" content="Elian's Portfolio"></meta>
      </Head>
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
