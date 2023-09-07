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
        <meta property="og:image" content="/open_graph.png"/>
        <meta property="twitter:image" content="/open_graph.png"/>
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
