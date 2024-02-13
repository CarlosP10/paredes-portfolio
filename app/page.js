import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Priceing from "@/components/Priceing";
import TimeLine from "@/components/TimeLine";
import Header from "@/layout/Header";
import KuraLayout from "@/layout/KuraLayout";
import MobileMenu from "@/layout/MobileMenu";

import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});
const News = dynamic(() => import("@/components/News"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});

const Index = () => {
  return (
    <KuraLayout>
      {/* MOBILE MENU */}
      <MobileMenu />
      {/* /MOBILE MENU */}
      {/* TOPBAR */}
      <Header />
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
      <Contact />
      {/* /CONTACT */}
    </KuraLayout>
  );
};
export default Index;
