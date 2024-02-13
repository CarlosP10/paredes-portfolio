"use client";
import { kuraUtilit } from "@/utility";
import { jarallax, jarallaxVideo } from "jarallax";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    kuraUtilit.activeSkillProgress();
  }, []);

  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=7e90gBu4pas",
    });
  });

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="skills"
    >
      <div className="kura_tm_skills w-full h-auto clear-both float-left relative px-0 pt-[140px] pb-[150px]">
        <div className="container">
          <div className="skills_inner w-full h-auto clear-both float-left relative z-[3]">
            <div className="left w-[60%] pr-[200px]">
              <div className="kura_tm_main_title w-full h-auto clear-both float-left">
                <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
                  Skills
                </span>
                <h3 className="font-extrabold uppercase text-white">
                  Programming Skills
                </h3>
              </div>
              <div
                className="text w-full float-left mt-[40px] mb-[44px] wow fadeInUp"
                data-wow-duration=".7s"
              >
                <p className="text-[#bbb]">
                  For more than 20 years our experts have been accomplishing
                  enough with modern Web Development, new generation web and app
                  programming language.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">HTML &amp; CSS</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">WordPress</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="right w-[40%] absolute bg-cover right-0 top-0 bottom-[-220px] overflow-hidden"
              data-background-style="image"
            >
              {" "}
              {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
              <div
                className="my_video absolute inset-0 jarallax"
                data-speed={0}
                data-jarallax-video="https://www.youtube.com/watch?v=7e90gBu4pas"
              />
              <div
                className="my_image absolute inset-0 bg-no-repeat bg-cover bg-center jarallax"
                data-speed={0}
                data-img-url="assets/img/portfolio/2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
