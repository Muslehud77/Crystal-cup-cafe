
import { Link } from 'react-router-dom';
import shape1 from '../../Assets/special/shape-7.png'
import {  useFetch } from '../../Fetching/useFetch';
import HomeCard from './HomeCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SkeletonCardHome from './SkeletonCardHome';
import { useEffect } from 'react';


const BestSelling = () => {
const url = "http://localhost:5000/api/v1/best-selling";



const {data,isFetching} = useFetch(url,'best-selling');

    return (
      <section className="text-gray-600 body-font mb-10  relative">
        <div className="container px-5 py-16  mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 relative w-full mb-6 lg:mb-0 group">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
                className=" finura relative z-10 text-7xl font-medium title-font mb-2 text-gray-900 dark:text-white"
              >
                Crystal Cup's Flavorful Gems #bestSelling
              </h1>
              <img src={shape1} className="absolute top-10 right-5" alt="" />
              <div className="h-1 w-20 bg-[#C13B0B] rounded group-hover:w-56 transition-all duration-500"></div>
            </div>
            <p className="lg:w-1/2  w-full leading-relaxed  text-black finura text-xl dark:text-white">
              "Crystal Cup's Flavorful Libations" is a beverage paradise. Our
              expert mixologists have artfully concocted a range of drinks
              bursting with exquisite flavors. From enticing cocktails to
              refreshing mocktails, each glass is a work of liquid art. "Crystal
              Cup" guarantees a memorable sipping experience, where taste and
              presentation harmonize in every pour.
            </p>
          </div>
          <div className="md:grid  grid-cols-3 flex flex-col justify-center group mt-28">
            {isFetching && <SkeletonCardHome></SkeletonCardHome>}
           
            {data?.map((item) => (
              <HomeCard key={item._id} item={item}></HomeCard>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to={"/menu"}
            className="font-serif w-3/6 md:w-2/6 text-xl outline-black dark:text-white dark:outline-white hover:text-white outline outline-[1px] px-12 py-3 mt-2 rounded-full hover:outline-0   group relative flex justify-center items-center overflow-hidden"
          >
            <span className="absolute left-0 h-0 w-full transition-all bg-[#FBA446] opacity-100 group-hover:h-full group-hover:top-0 duration-500 ease"></span>
            <span className="relative">Our offerings</span>{" "}
            <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
        
      </section>
    );
};

export default BestSelling;