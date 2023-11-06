import img1 from '../../Assets/images/blue ocen juice.jpg'
import img2 from '../../Assets/images/coffee.jpg'
import img3 from "../../Assets/images/mangoShake.jpg";
import img4 from "../../Assets/images/kitcatFaluda.jpg";
import { Link } from 'react-router-dom';
import shape1 from '../../Assets/special/shape-7.png'
const BestSelling = () => {
    return (
      <section className="text-gray-600 body-font dark:bg-[#1F2937] relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 relative w-full mb-6 lg:mb-0 group">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
                className=" finura relative z-10 text-7xl font-medium title-font mb-2 text-gray-900 dark:text-white"
              >
                Crystal Cup's Flavorful Gems
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
          <div className="flex flex-wrap -m-4 group">
            <div className="xl:w-1/4 md:w-1/2 p-4 group-hover:blur-sm hover:!blur-none hover:scale-110 transition-all duration-500 hover:cursor-pointer ">
              <Link to={"/menu"}>
                <div className=" p-6 rounded-lg lg:pt-28">
                  <img
                    className="h-full rounded w-full object-cover object-center mb-6"
                    src={img4}
                    alt="content"
                  />
                  <div className="rounded overflow-hidden">
                    <h3 className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black">
                      200TK
                    </h3>
                    <h2 className="text-lg rounded-b dark:text-white  bg-[#DCAF85] bg-opacity-40 p-2 text-gray-900 font-semibold  title-font mb-4">
                      Kitakat Faluda
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 group-hover:blur-sm hover:!blur-none hover:scale-110 transition-all duration-500 hover:cursor-pointer ">
              <Link to={"/menu"}>
                <div className=" p-6 rounded-lg ">
                  <img
                    className="h-full rounded w-full object-cover object-center mb-6"
                    src={img1}
                    alt="content"
                  />
                  <div className="rounded overflow-hidden">
                    <h3 className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black">
                      120TK
                    </h3>
                    <h2 className="text-lg rounded-b dark:text-white  bg-[#056CF4] bg-opacity-40 p-2 text-gray-900 font-semibold  title-font mb-4">
                      Blue Ocean Lemonade
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 group-hover:blur-sm hover:!blur-none hover:scale-110 transition-all duration-500 hover:cursor-pointer ">
              <Link to={"/menu"}>
                <div className=" p-6 rounded-lg lg:pt-28">
                  <img
                    className="h-full rounded w-full object-cover object-center mb-6"
                    src={img2}
                    alt="content"
                  />
                  <div className="rounded overflow-hidden">
                    <h3 className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black">
                      120TK
                    </h3>
                    <h2 className="text-lg rounded-b dark:text-white  bg-[#EC8E5A] bg-opacity-40 p-2 text-gray-900 font-semibold  title-font mb-4">
                      Cold Coffee
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 group-hover:blur-sm hover:!blur-none hover:scale-110 transition-all duration-500 hover:cursor-pointer ">
              <Link to={"/menu"}>
                <div className=" p-6 rounded-lg ">
                  <img
                    className="h-full rounded w-full object-cover object-center mb-6"
                    src={img3}
                    alt="content"
                  />
                  <div className="rounded overflow-hidden">
                    <h3 className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black">
                      110TK
                    </h3>
                    <h2 className="text-lg rounded-b dark:text-white  bg-[#F1AB00] bg-opacity-40 p-2  text-gray-900 font-semibold  title-font mb-4">
                      Mango Shake
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BestSelling;