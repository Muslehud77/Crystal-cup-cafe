import React from 'react';
import BannerSlider from '../Shared/BannerSlider';
import Transition from '../Transition/Transition';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
      <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cystal Cup | Blog</title>
        </Helmet>
        <BannerSlider></BannerSlider>
        <div className="">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Data Binding
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      One way data binding
                    </h1>
                    <p className="leading-relaxed mb-3">
                      One-way data binding is a programming concept in which
                      data flows in a single direction, typically from a data
                      source to a UI element. Changes in the data source are
                      reflected in the UI, but not the other way around.
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      NPM
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      NPM in Node js
                    </h1>
                    <p className="leading-relaxed mb-3">
                      NPM (Node Package Manager) is the default package manager
                      for Node.js, used to install, manage, and distribute
                      JavaScript libraries and packages for building web
                      applications and server-side software.
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      MongoDB vs mySQL
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Difference Between MongoDB and MySQL
                    </h1>
                    <p className="leading-relaxed mb-3">
                      MongoDB is a NoSQL database that stores data in flexible,
                      JSON-like documents and is well-suited for handling
                      unstructured or semi-structured data, while MySQL is a
                      relational database that uses structured tables and is
                      great for structured data with predefined schemas. The
                      choice between them depends on the specific requirements
                      of your project.
                    </p>
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

export default Blog;