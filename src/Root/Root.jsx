
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Root = () => {
  return (
    <SkeletonTheme baseColor="#31313188" highlightColor="#52525294">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </SkeletonTheme>
  );
};

export default Root;
