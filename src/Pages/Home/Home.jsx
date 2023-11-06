
import Transition from "../../Transition/Transition";

import { Link } from "react-router-dom";
import Banner from "./Banner";
import Combo from "./Combo";
import BestSelling from "./BestSelling";
import Delivery from './Delivery';


const Home = () => {

  return (
    <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
      <Banner></Banner>
      <BestSelling></BestSelling>
      <Combo></Combo>
      <Delivery></Delivery>
      <Transition></Transition>
    </div>
  );
};

export default Home;
