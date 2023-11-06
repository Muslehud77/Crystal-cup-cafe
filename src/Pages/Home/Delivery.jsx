import Lottie from 'react-lottie-player';
import animation from '../../Assets/deliveryAnimation.json'
import owner from '../../Assets/owner.png'
const Delivery = () => {
    return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <Lottie play animationData={animation} />
              <h1 className="text-7xl dark:text-white finura text-center">
                Stay Home We Deliver!
              </h1>
              <div className="flex flex-col sm:flex-row mt-10 dark:text-white">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 overflow-hidden rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img src={owner} alt="" />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 dark:text-white text-gray-900 text-lg">
                      Amelia Stone
                    </h2>
                    <span>Owner</span>
                    <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      Amelia Stone, a culinary enthusiast, opened Crystal Cup, a
                      fine dining restaurant, showcasing her gourmet expertise,
                      earning local acclaim.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    Amelia Stone, the owner of Crystal Cup restaurant, embarked
                    on his culinary journey with a lifelong love for fine dining
                    and exquisite cuisine. After honing his culinary skills
                    through years of experience in renowned restaurants, he
                    decided to open his own establishment. Crystal Cup started
                    as a small, intimate eatery, offering a carefully crafted
                    menu of gourmet dishes. Daniel's passion for creating
                    delightful dining experiences quickly earned the restaurant
                    a stellar reputation in the local food scene. Today, Crystal
                    Cup is a culinary gem, known for its exquisite dishes and
                    Daniel's commitment to providing a memorable dining
                    experience.
                  </p>
                  <a className="text-purple-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Delivery;