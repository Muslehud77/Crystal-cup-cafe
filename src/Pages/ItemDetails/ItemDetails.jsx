import { Link, useLoaderData } from "react-router-dom";
import BannerSlider from "../../Shared/BannerSlider";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Transition from "../../Transition/Transition";


const ItemDetails = () => {
    const item = useLoaderData()

    const [orderQuantity, setOrderQuantity] = useState()

 
    console.log(item);
    return (
      <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cystal Cup | {item?.category || "item"}</title>
        </Helmet>
        <BannerSlider show={false} path={`/menu/${item?.name}`}></BannerSlider>
        <div>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  className="lg:w-1/2 w-full h-full lg:h-auto object-cover object-center rounded"
                  src={item?.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-md w-min px-2 py-1 rounded bg-black dark:text-black dark:bg-white  title-font text-white tracking-widest">
                    {item?.category}
                  </h2>
                  <span className="dark:text-white">
                    Origin {item?.foodOriginCountry}
                  </span>
                  <h1 className="text-gray-900 dark:text-white font-serif text-3xl title-font font-medium mb-1">
                    {item?.name}
                  </h1>

                  <p className="leading-relaxed dark:text-white">
                    {item?.description}
                  </p>
                  <div className="mt-2 dark:text-white">
                    <div
                      tabIndex={0}
                      className="collapse collapse-arrow border border-base-300 bg-base-200"
                    >
                      <div className="collapse-title font-serif text-xl font-medium">
                        Ingredients
                      </div>
                      <div className="collapse-content">
                        <ul className="list-disc pl-2">
                          {item?.ingredients.map((i, idx) => (
                            <li key={idx}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="collapse collapse-arrow border border-base-300 bg-base-200 mt-2"
                    >
                      <div className="collapse-title font-serif text-xl font-medium">
                        Making Procedure
                      </div>
                      <div className="collapse-content">
                        <ol className="list-decimal pl-2">
                          {item?.makingProcedure.map((i, idx) => (
                            <li key={idx}>{i}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 dark:text-white">
                    Added by : {item?.nameOfAdder}
                  </p>
                  <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex dark:text-white">
                      <span className="mr-3 dark:text-white">
                        Quantity Left :
                      </span>
                      {item?.quantity}
                    </div>
                  </div>

                  <div className="flex">
                    <span className="title-font dark:text-white font-medium text-2xl text-gray-900">
                      {item?.price_BTD}/- BTD
                    </span>
                    <Link
                      to={`/add-to-cart/${item?._id}`}
                      className="flex ml-auto btn outline-none text-white bg-purple-500 border-0 py-2 px-6 hover:bg-purple-600 rounded"
                    >
                      Order Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Transition></Transition>
      </div>
    );
};

export default ItemDetails;