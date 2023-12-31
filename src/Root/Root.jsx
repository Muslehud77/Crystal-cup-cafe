
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <SkeletonTheme baseColor="#31313188" highlightColor="#52525294">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div>
        <Toaster />
      </div>
    </SkeletonTheme>
  );
};

export default Root;
