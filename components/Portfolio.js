"use client";
import { context } from "@/context/context";
import { kuraUtilit } from "@/utility";
import { portfolioSlider } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolio = () => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
  }, []);

  const contentSections = [
    {
      imageSrc: 'assets/img/thumbs/42-29.jpg',
      imgDataUrl: 'assets/img/portfolio/avocados.png',
      appName: 'Avocados',
      appDescription: 'The Avocados app is an iOS project developed in SwiftUI. I created an eye-catching user interface for an avocado recipes app, implementing nested scroll views, a custom tab view with icons, and light/dark mode support. I also optimized the app for iPad.',
      frameworks: ['SwiftUI']
    }, {
      imageSrc: 'assets/img/thumbs/42-29.jpg',
      imgDataUrl: 'assets/img/portfolio/pinch.png',
      appName: 'Pinch',
      appDescription: 'The Pinch & Zoom project delves into the development of advanced Pinch and Zoom features using SwiftUI gestures. Explore various gestures like long-press, double-tap, drag, and magnification, along with the integration of blur effects and SF Symbols for iconography. ',
      frameworks: ['SwiftUI']
    }, {
      imageSrc: 'assets/img/thumbs/42-29.jpg',
      imgDataUrl: 'assets/img/portfolio/nearMe.png',
      appName: 'NearMe',
      appDescription: ' NearMe utilizes iOS MapKit framework to enable users to discover nearby locations and obtain directions. Key features include location search, detailed map view, and integration with third-party apps for calling or navigation.',
      frameworks: ['UIKit', 'MapKit']
    }, {
      imageSrc: 'assets/img/thumbs/42-29.jpg',
      imgDataUrl: 'assets/img/portfolio/budgetApp.png',
      appName: 'StoreApp',
      appDescription: 'StoreApp is a small application developed as part of my portfolio, combining SwiftUI with a networking layer and implementing clean code practices for enhanced code readability. The app includes operations to consume a CRUD (Create, Read, Update, Delete) API, providing users with functionality to interact with a public API seamlessly.',
      frameworks: ['UIKit', 'SwiftUI', 'CoreData']
    },
    // Añade más objetos para cada sección adicional
  ];

  const { setPortfolioModal, modalToggle } = useContext(context);

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="portfolio"
    >
      <div className="kura_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[140px] pb-[138px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Portfolio
            </span>
            <h3 className="font-extrabold uppercase">Selected Works</h3>
          </div>
          <div className="kura_tm_hero w-full min-h-[70vh] float-left clear-both ">
            {contentSections.map((section, index) => (
              <div>
                {index % 2 === 0 ? (
                  <div className="content w-full min-h-[70vh] flex items-center relative">
                    <div className="left w-1/2 pr-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
                      <h3 className="job text-[35px] font-semibold leading-[1.4] uppercase mb-[25px]">
                        {section.appName}
                      </h3>
                      <div className="services w-full h-auto clear-both float-left mb-[35px]">
                        <p className="text-black text-sm small:text-lg inline-block py-[8px] px-0 relative transition-all duration-300">
                          {section.appDescription}
                        </p>
                        <div className="kura_tm_container_wrapper">
                          {section.frameworks.map((value) => (
                            <div className="kura_tm_container" >
                              <p className="bg-secondary-color text-white font-poppins py-2 px-4 rounded-full">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="right w-1/2 text-right pl-[70px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
                      <div className="image relative">
                        <img
                          className="min-w-full relative opacity-0"
                          src={section.imageSrc}
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                          data-img-url={section.imgDataUrl}
                        />
                        <div className="opacity-20 shape-portfolio" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="content portfolio w-full min-h-[70vh] flex items-center relative">
                    <div className="left w-1/2 text-right pr-[70px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
                      <div className="image relative">
                        <img
                          className="min-w-full relative opacity-0"
                          src={section.imageSrc}
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                          data-img-url={section.imgDataUrl}
                        />
                        <div className="opacity-20 shape-portfolio" />
                      </div>
                    </div>
                    <div className="right w-1/2 pl-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
                      <h3 className="job text-[35px] font-semibold leading-[1.4] uppercase mb-[25px]">
                        {section.appName}
                      </h3>
                      <div className="services w-full h-auto clear-both float-left mb-[35px]">
                        <p className="text-black text-sm small:text-lg inline-block py-[8px] px-0 relative transition-all duration-300">
                          {section.appDescription}
                        </p>
                        <div className="kura_tm_container_wrapper">
                          {section.frameworks.map((value) => (
                            <div className="kura_tm_container" >
                              <p className="bg-secondary-color text-white font-poppins py-2 px-4 rounded-full">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
