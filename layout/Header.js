"use client";
import { kuraUtilit } from "@/utility";
import { useEffect, useState } from "react";

const Header = ({ dark }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    kuraUtilit.openNav(!isToggled);
  };

  useEffect(() => {
    kuraUtilit.audioSoundAndOpen();
    kuraUtilit.stickyNav();
    kuraUtilit.scrollToActiveNav();
  });
  return (
    <div className="kura_tm_topbar fixed top-0 left-0 right-0 z-[10] translate-y-[-100%] transition-all duration-[400ms]">
      <div className="wrapper w-full h-auto clear-both float-left transition-all duration-300">
        <div className="topbar_inner w-full h-auto clear-both flex items-center justify-between py-[30px] pr-[37px] pl-[50px] transition-all duration-300">
          <div className="logo">
            <a href="#">
              <img
                className="max-w-[70px] max-h-[70px]"
                src={
                  dark ? "assets/img/logo/icon.png" : "assets/img/logo/icon2.png"
                }
                alt=""
              />
            </a>
          </div>
          <div className="menu flex items-center">
            <div className="list pr-[40px]">
              <ul className="anchor_nav" id="anchor_nav">
                <li className="current mr-[20px] inline-block opacity-0 invisible relative left-[10px] transition-all duration-300">
                  <a
                    className="text-black font-poppins transition-all duration-300"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-[20px] inline-block opacity-0 invisible relative left-[10px] transition-all duration-300">
                  <a
                    className="text-black font-poppins transition-all duration-300"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="mr-[20px] inline-block opacity-0 invisible relative left-[10px] transition-all duration-300">
                  <a
                    className="text-black font-poppins transition-all duration-300"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="mr-[20px] inline-block opacity-0 invisible relative left-[10px] transition-all duration-300">
                  <a
                    className="text-black font-poppins transition-all duration-300"
                    href="#timeline"
                  >
                    Timeline
                  </a>
                </li>
                <li className="inline-block opacity-0 invisible relative left-[10px] transition-all duration-300">
                  <a
                    className="text-black font-poppins transition-all duration-300"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="trigger leading-[1]"
              onClick={() => toggleTrueFalse()}
            >
              <div
                className={`hamburger hamburger--slider ${
                  isToggled ? " is-active" : ""
                }`}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
