"use client";
import { context } from "@/context/context";
import { kuraUtilit } from "@/utility";
import { newsSlider } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const blogData = [
  {
    id: 1,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/1.jpg",
    description: [
      "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 2,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/2.jpg",
    description: [
      "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 3,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/3.jpg",
    description: [
      "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    id: 4,
    title: "Diversification of digital marketing stategies",
    date: "02 June, 2022",
    author: "John Smith",
    img: "assets/img/news/4.jpg",
    description: [
      "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const News = () => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
  }, []);

  const { modalToggle, setBlogModal } = useContext(context);

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="news"
    >
      <div className="kura_tm_news w-full h-auto clear-both float-left py-[140px] px-0">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              News
            </span>
            <h3 className="font-extrabold uppercase">Latest News</h3>
          </div>
          <div
            className="news_list w-full h-auto clear-both float-left pt-[92px] wow fadeInUp"
            data-wow-duration=".7s"
          >
            <Swiper {...newsSlider} className="swiper-container">
              {blogData.map((blog) => (
                <SwiperSlide className="swiper-slide" key={blog.id}>
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url={blog.img}
                        style={{ backgroundImage: `url(${blog.img})` }}
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-0 left-0 pr-[40px] pb-[40px] pl-[49px] transition-all duration-300">
                      <span className="font-poppins mb-[6px] inline-block">
                        {blog.date}
                      </span>
                      <h3 className="text-[20px] font-bold">{blog.title}</h3>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="kura_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current currentNews" />
                  <span className="pagination_progress">
                    <span className="all allNews">
                      <span />
                    </span>
                  </span>
                  <span className="total totalNews" />
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
export default News;
