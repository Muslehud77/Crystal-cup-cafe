import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Assets/images/banner image.jpg";
import { AiOutlineArrowRight } from 'react-icons/ai';



const Banner = () => {
    return (
      <div className="h-screen dark:bg-[#1F2937]  flex justify-center items-center container mx-auto">
        <div className="text-3xl md:text-7xl max-h-screen space-y-2 shadow-2xl bg-black bg-opacity-30 p-10 backdrop-blur-sm text-center text-white finura relative z-20">
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            Raise Your Glass
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            to Crystal Cup's
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
          >
            {" "}
            Faluda Delights
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-anchor-placement="top-bottom"
            className="flex justify-center items-center "
          >
            <Link
              to={"/menu"}
              className="font-serif text-xl outline outline-[1px] px-12 py-3 mt-2 rounded-full hover:outline-0  text-white group relative flex justify-center items-center overflow-hidden"
            >
              <span className="absolute left-0 w-0 h-full transition-all bg-[#C14616] opacity-100 group-hover:w-full group-hover:top-0 duration-500 ease"></span>
              <span className="relative">Grab Your Cup</span>{" "}
              <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <img
          data-aos="zoom-in-up"
          src={banner}
          className="absolute top-0 h-screen object-cover"
          alt=""
        />
        <div className="h-screen hidden dark:flex w-screen absolute top-0 bg-black opacity-40"></div>
      </div>
    );
};

export default Banner;