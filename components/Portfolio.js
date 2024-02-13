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
          <div
            className="portfolio_list w-full h-auto clear-both float-left pt-[92px] gallery_zoom wow fadeInUp"
            data-wow-duration=".7s"
          >
            <Swiper {...portfolioSlider} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Magic Art
                      </h3>
                      <span className="font-poppins">Vimeo</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] popup-vimeo"
                      href="https://vimeo.com/337292310"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Bona Green
                      </h3>
                      <span className="font-poppins">Youtube</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Leo Dandora
                      </h3>
                      <span className="font-poppins">Soundcloud</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Folio Grasia
                      </h3>
                      <span className="font-poppins">Detail</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal("item");
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Viva Mercury
                      </h3>
                      <span className="font-poppins">Image</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] zoom"
                      href="assets/img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Santa Onera
                      </h3>
                      <span className="font-poppins">Image</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] zoom"
                      href="assets/img/portfolio/6.jpg"
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="kura_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current portfolio_cureent" />
                  <span className="pagination_progress">
                    <span className="all">
                      <span />
                    </span>
                  </span>
                  <span className="total" />
                </div>
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
