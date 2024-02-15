import Preloader from "@/layout/Preloader";
import "@css/custom.css";
import "@css/dark.css";
import "@css/main.css";
import "@css/modalboxes.css";
import "@css/plugins.css";
import { Mulish, Poppins } from "next/font/google";
import "./globals.css";
import State from "/context/context";

/** google fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});

/** Font family */
const fontFamily = `${mulish.variable} ${poppins.variable}`;

export const metadata = {
  title: "C Paredes | iOS ",
  description: "Generated by create next app, I'm iOS Developer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={fontFamily}>
        <Preloader />
        <State>{children}</State>
      </body>
    </html>
  );
}