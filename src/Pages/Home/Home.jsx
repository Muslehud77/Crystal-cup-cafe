
import Transition from "../../Transition/Transition";

import { Link } from "react-router-dom";
import Banner from "./Banner";
import Features from "./Features";
import BestSelling from "./BestSelling";
import Delivery from './Delivery';


const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <BestSelling></BestSelling>
      <Features></Features>
      <Delivery></Delivery>
      <Transition></Transition>
    </div>
  );
};

export default Home;
