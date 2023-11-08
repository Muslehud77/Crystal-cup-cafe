import cover1 from '../Assets/cover/cover (1).jpg'
import cover2 from '../Assets/cover/cover (1).png'
import cover3 from '../Assets/cover/cover (2).jpg'
import cover4 from '../Assets/cover/cover (3).jpg'
import cover5 from '../Assets/cover/cover (3).png'
import cover6 from '../Assets/cover/cover (4).jpg'
import cover7 from '../Assets/cover/cover (5).jpg'
import cover8 from '../Assets/cover/cover (6).jpg'
import logo from '../Assets/logo.png'


import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";




import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'




const BannerSlider = ({path,show}) => {

    const {pathname} = useLocation()



    return (
      <div className=" w-full ">
        <div className="relative w-full ">
          <Swiper
            spaceBetween={0}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            className="mySwiper"
          >
           {
            show === false ? '' : <><SwiperSlide>
              <div className="relative flex items-center">
                <img className={`${pathname === '/' && '!h-screen'} transition-all duration-500`} src={cover8} />
                <div className="absolute left-5 md:left-20 md:mb-10 flex-col">
                  <img
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className="!w-20 !h-20 md:!h-44 md:!w-44"
                    src={logo}
                    alt=""
                  />
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white finura  md:text-5xl"
                  >
                    Savor the Elegance <br /> Crystal Cup Dining Experience
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex items-center">
                <img className={`${pathname === '/' && '!h-screen'} transition-all duration-500`} src={cover7} />
                <div className="absolute left-5 md:left-20 md:mb-10 flex-col">
                  <img
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className="!w-20 !h-20 md:!h-44 md:!w-44"
                    src={logo}
                    alt=""
                  />
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white finura  md:text-5xl"
                  >
                    Indulge in Culinary Brilliance <br /> at Crystal Cup
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex items-center">
                <img className={`${pathname === '/' && '!h-screen'} transition-all duration-500`} src={cover6} />
                <div className="absolute left-20 md:left-44 md:mb-20 flex-col">
                  <img
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className="!w-20 !h-20 md:!h-44 md:!w-44"
                    src={logo}
                    alt=""
                  />
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white finura  md:text-5xl"
                  >
                    Indulge in Culinary Brilliance <br /> at Crystal Cup
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex justify-center items-center">
                <img className={`${pathname === '/' && '!h-screen'} transition-all duration-500`} src={cover5} />
                <div className="absolute ">
                  <img
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className="!w-20 !h-20 md:!h-44 md:!w-44"
                    src={logo}
                    alt=""
                  />
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white finura text-2xl md:text-5xl"
                  >
                    Where Flavor Meets Luxury <br /> Crystal Cup Restaurant
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex  items-center">
                <img className={`${pathname === '/' && '!h-screen'} transition-all duration-500`} src={cover4} />
                <div className="absolute left-10 md:left-20">
                  <img
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                    className="!w-20 !h-20 md:!h-44 md:!w-44"
                    src={logo}
                    alt=""
                  />
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white finura text-2xl md:text-5xl"
                  >
                    Crystal Cup <br /> A Gem of Gourmet Delights
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex justify-center items-center">
                <img className={`${pathname === '/' && '!h-screen'} transition-all duration-500`} src={cover3} />
                <div className="absolute  top-16">
                  <div className="flex justify-center">
                    <img
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="1000"
                      className="!w-20 !h-20 md:!h-44 md:!w-44"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white text-center finura text-2xl md:text-5xl"
                  >
                    Discover Exquisite Dining <br /> at Crystal Cup
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex justify-center items-center">
                <img
                  className={`${
                    pathname === "/" && "!h-screen"
                  } transition-all duration-500`}
                  src={cover1}
                />
                <div className="absolute ">
                  <div className="flex justify-center">
                    <img
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="1000"
                      className="!w-20 !h-20 md:!h-44 md:!w-44"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white text-center finura text-2xl md:text-5xl"
                  >
                    Your Table, Your Adventure <br /> Crystal Cup's Menu
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide></>
           }




            <SwiperSlide>
              <div className="relative flex justify-center items-center">
                <img
                  className={`${
                    pathname === "/" && "!h-screen"
                  } transition-all duration-500`}
                  src={cover2}
                />
                <div className="absolute ">
                  <div className="flex justify-center">
                    <img
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="1000"
                      className="!w-20 !h-20 md:!h-44 md:!w-44"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="text-white text-center finura text-2xl md:text-5xl"
                  >
                    Raise Your Glass to Fine Dining <br />
                    at Crystal Cup
                  </h2>
                  {pathname === "/" && (
                    <Link
                      to={"/menu"}
                      className="font-serif md:text-xl outline outline-[1px] px-10 md:px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
                    >
                      <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
                      <span className="relative">
                        Explore Our Delectable Menu
                      </span>{" "}
                      <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                        <AiOutlineArrowRight />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {path && (
            <div className="text-black  p-2 font-serif shadow-[0_0_65px_white]  rounded  absolute bottom-5 bg-white  right-10 z-10">
              {path}
            </div>
          )}
        </div>
      </div>
    );
};

export default BannerSlider;