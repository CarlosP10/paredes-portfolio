"use client";
import { context } from "@/context/context";
import { useContext } from "react";

const Hero = () => {
  const experienceYears = new Date().getFullYear() - 2020;
  const numberOfApps = 7;

  const { setServiceModal, modalToggle } = useContext(context);

  const handleDownloadCV = async () => {
    const cvUrl = 'assets/cv/CV_CParedes_en_2024.pdf';

    try {
        const response = await fetch(cvUrl);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', 'mi_cv.pdf');

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Error downloading CV:', error);
    }
};

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="home"
    >
      <div className="kura_tm_hero w-full min-h-[100vh] float-left clear-both bg-[#f9f9f9]">
        <div className="container min-h-full">
          <div className="content w-full min-h-[100vh] flex items-center relative">
            <div className="left w-1/2 pr-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <h4 className="name inline-block mb-[16px] text-secondary-color font-poppins font-medium">
                Carlos Paredes 🇸🇻
              </h4>
              <h3 className="job text-[45px] font-semibold leading-[1.4] mb-[25px]">
                iOS Developer
              </h3>
              <div className="services w-full h-auto clear-both float-left mb-[35px]">
                <p className="text-black text-sm small:text-lg inline-block py-[8px] px-0 relative transition-all duration-300">
                  As an iOS developer, I bring creativity and precision to every line of code. With a deep
                  understanding of Swift and Objective-C, I specialize in crafting user-centric, high-performance applications.
                  From concept to deployment, I excel in delivering seamless and visually appealing iOS experiences.
                  Let's turn your ideas into captivating mobile solutions
                </p>
              </div>
              <div className="short_info w-full h-auto clear-both float-left">
                <ul>
                  <li className="mr-[50px] mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">{experienceYears}+</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li className="mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">{numberOfApps}+</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        {numberOfApps === 1 ? 'App' : 'Apps'}
                        <br />
                        Maintained/Created
                      </span>
                    </div>
                  </li>
                  <li className="mb-[15px] py-0 inline-block" onClick={handleDownloadCV}>
                    <div className="list_inner flex items-center cv">
                      <img
                        className="min-w-[50px] relative clickable_element"
                        src="assets/img/svg/file-cv.svg"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] clickable_element relative top-[-3px] text-[14px]">
                        Download CV
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 text-right pl-[200px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <div className="image relative">
                <img
                  className="min-w-full relative opacity-0"
                  src="assets/img/thumbs/3-4.jpg"
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                  data-img-url="assets/img/hero/me.JPG"
                />
                <div className="shape" />
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img
                  className="svg"
                  src="assets/img/svg/down-arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
