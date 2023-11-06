import combo1 from '../../Assets/images/combo3.png'
import shape1 from '../../Assets/special/shape-1.png'

const Features = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="relative flex flex-col mx-auto lg:flex-row">
          <div className="flex text-black relative flex-col px-6 py-8  rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-[#FDD984]">
            <h3 className="text-3xl absolute top-5 p-2 pb-0 bg-white rounded-xl">
              Shop Now!
            </h3>
            <h3 className="text-6xl finura font-bold uppercase dark:bg-[white] bg-[#FDD984] p-2 rounded-xl max-w-md">
              Combo Meal
            </h3>
            <p className="finura text-xl">
              Enjoy a classic combo meal with a juicy burger, crispy golden
              French fries, and a refreshing Coke. Savor the perfect blend of
              flavors and textures in one convenient package, satisfying your
              cravings for a delicious and satisfying meal.
            </p>
            <img src={shape1} className=" h-80 absolute left-0 top-56" alt="" />
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
            <div className="flex dark:bg-[#FBA446] items-center justify-center p-4 md:p-8 lg:p-12">
              <img src={combo1} alt="" className="w-5/6 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
