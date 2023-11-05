
import Transition from "../../Transition/Transition";

import { Link } from "react-router-dom";
import Banner from "./Banner";
import Features from "./Features";


const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Transition></Transition>
    </div>
  );
};

export default Home;
