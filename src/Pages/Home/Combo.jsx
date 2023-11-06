import combo1 from '../../Assets/images/combo3.png'
import combo2 from '../../Assets/images/combo2.png'
import shape1 from '../../Assets/special/shape-1.png'

import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Combo = () => {
  return (
    <div>
      <section
        className={` dark:text-gray-100 md:flex bg-patternLight dark:bg-patternDark`}
      >
        <div className="relative flex flex-col md:w-1/2 ">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="flex  text-black relative flex-col px-6 py-8  rounded-sm sm:p-8 lg:p-12 backdrop-blur-sm"
          >
            <h3
              data-aos="zoom-in-up"
              data-aos-delay="1500"
              className="text-3xl font-serif absolute -top-1 md:top-4 dark:bg-[black] dark:text-white p-2 pb-0 bg-white rounded-xl"
            >
              Combo Offer!
            </h3>
            <h3 className="text-5xl finura font-bold uppercase bg-[#FBA446] dark:bg-[white] p-2 rounded-xl ">
              The Ultimate Burger Bliss
            </h3>
            <p className="finura  text-xl dark:text-white">
              Enjoy a classic combo meal with a juicy burger, crispy golden
              French fries, and a refreshing Coke. Savor the perfect blend of
              flavors and textures in one convenient package, satisfying your
              cravings for a delicious and satisfying meal.
            </p>
            <img
              src={shape1}
              className=" h-80 z-0 opacity-50 absolute left-0 top-56"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="flex relative flex-col items-center md:pl-44 justify-center">
              <img src={combo1} alt="" className="" />
          
            </div>
          </div>
        </div>
        <div className='relative hidden dark:bg-gray-300 md:flex z-10 w-1 bg-black rotate-12'></div>
        <div className="relative md:mt-10 ml-10 flex flex-col md:w-1/2">
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="flex  text-black relative flex-col px-6 py-8  rounded-sm sm:p-8 lg:p-12 backdrop-blur-sm"
          >
            <h3 className="text-5xl finura font-bold uppercase bg-[#FBA446] dark:bg-[white] p-2 rounded-xl ">
              The Spicy Chicken Delight
            </h3>
            <p className="finura text-xl dark:text-white">
              Try our "Spicy Chicken Delight Combo" for a mouthwatering
              experience. Enjoy the zing of our expertly seasoned spicy chicken
              paired with crispy fries. Refresh with a side salad and quench
              your thirst with a cold Coke.
            </p>
            <img
              src={shape1}
              className=" h-80 z-0 opacity-50 absolute rotate-180 right-0 top-56"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="flex relative items-center md:pr-44 justify-center">
              <img src={combo2} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <Link
          to={"/menu"}
          className="font-serif w-4/6 md:w-2/6 text-xl outline-black dark:outline-white hover:text-white outline outline-[1px] px-12 py-3 mt-2 rounded-full hover:outline-0   group relative flex justify-center items-center overflow-hidden"
        >
          <span className="absolute left-0 h-0 w-full transition-all bg-[#FBA446] opacity-100 group-hover:h-full group-hover:top-0 duration-500 ease"></span>
          <span className="relative">Combo Offer @230/-</span>{" "}
          <span className="absolute right-0 w-8 mt-[1px] flex items-center justify-start duration-500 transform translate-x-full group-hover:translate-x-0">
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Combo;
