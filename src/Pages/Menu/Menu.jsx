


import { useState } from "react";
import { useFetch } from "../../Fetching/useFetch";
import Transition from "../../Transition/Transition";
import BannerSlider from "../../Shared/BannerSlider";





const Menu = () => {

  const [url, setUrl] = useState("http://localhost:5000/api/v1/menu");

  const { data, isLoading } = useFetch(url);

  console.log(data)

    return (
      <div>
       <BannerSlider></BannerSlider>
        <Transition></Transition>
      </div>
    );
    
};

export default Menu;