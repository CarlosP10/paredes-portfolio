"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Priceing from "@/components/Priceing";
import TimeLine from "@/components/TimeLine";
import Header from "@/layout/Header";
import KuraLayout from "@/layout/KuraLayout";
import MobileMenu from "@/layout/MobileMenu";

import dynamic from "next/dynamic";
import { useEffect } from "react";
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});
const News = dynamic(() => import("@/components/News"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});

const IndexDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <KuraLayout>
      {/* MOBILE MENU */}
      <MobileMenu dark={true} />
      {/* /MOBILE MENU */}
      {/* TOPBAR */}
      <Header dark={true} />
      {/* HERO */}
      <Hero />
      {/* /HERO */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* TIMELINE */}
      <TimeLine />
      {/* /TIMELINE */}
      {/* PRICING */}
      <Priceing />
      {/* /PRICING */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </KuraLayout>
  );
};
export default IndexDark;
