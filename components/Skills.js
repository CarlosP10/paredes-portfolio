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

  const skillsList = [
    'Swift programming language',
    'Objective-C programming language',
    'UIKit framework',
    'Auto Layout',
    'Networking (RESTful APIs, JSON, XML)',
    'Multithreading and concurrency',
    'Git version control',
    'Unit testing and UI testing'
  ];
  const additionalSkillsList = [
    'App Store deployment and distribution',
    'Debugging and troubleshooting',
    'Design patterns (MVC, MVVM, etc.)',
    'Third-party API integration (RxSwift, RxCocoa)',
    'Custom UI development',
    'Agile development methodologies',
    'Collaboration and communication skills'
  ];

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="skills"
    >
      <div className="kura_tm_skills w-full h-auto clear-both float-left relative px-0 pt-[140px] pb-[150px]">
        <div className="container">
          <div className="skills_inner w-full h-auto clear-both float-left relative z-[3]">
            <div className="left w-full pr-[200px]">
              <div className="kura_tm_main_title w-full h-auto clear-both float-left">
                <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
                  Skills
                </span>
                <h3 className="font-extrabold uppercase text-white">
                  Programming Skills
                </h3>
              </div>
              <div
                className="dodo_progress mt-[40px] mb-[44px] wow fadeInUp left w-[50%] pr-[70px] "
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <ul className="skills">
                  {skillsList.map((item, index) => (
                    <li className="label uppercase" key={index}><span>•</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div
                className="dodo_progress mt-[40px] mb-[44px] wow fadeInUp right w-[50%] pr-[70px] "
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <ul className="skills">
                  {additionalSkillsList.map((item, index) => (
                    <li className="label uppercase" key={index}><span>•</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
