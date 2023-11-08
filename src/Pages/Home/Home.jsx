
import Transition from "../../Transition/Transition";

import Combo from "./Combo";
import BestSelling from "./BestSelling";
import Delivery from './Delivery';
import BannerSlider from "../../Shared/BannerSlider";

import { Helmet } from "react-helmet";


const Home = () => {

  return (
    <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cystal Cup | Home</title>
      </Helmet>
      <BannerSlider show={true}></BannerSlider>
      {/* <Banner></Banner> */}
      <BestSelling></BestSelling>
      <Combo></Combo>
      <Delivery></Delivery>
      <Transition></Transition>
    </div>
  );
};

export default Home;
