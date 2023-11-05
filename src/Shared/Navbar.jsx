import { Link, useLocation } from "react-router-dom";
import User from "./User";
import ResponsiveNav from "./ResposiveNav";
import useContextData from "../Hooks/useContextData";
import logo from '../Assets/logo.png'

import DarkToggle from "./DarkToggle";
const Navbar = () => {
const {pathname} = useLocation()
  const {user} = useContextData()

  return (
    <div>
      <div className="navbar  relative z-50 bg-black bg-opacity-10 dark:bg-opacity-20 shadow-lg backdrop-blur-sm h-16">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <ResponsiveNav></ResponsiveNav>
          </div>
          <img src={logo} className="w-12" alt="" />
          <div className="ml-10 hidden lg:flex">
            <ul
              className={`${
                pathname === "/" && "text-white"
              } menu  gap-5 menu-horizontal px-1`}
            >
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <DarkToggle></DarkToggle>
          {user ? (

              <User></User>
          ) : (
            <Link
              to={"/login"}
              className="flex  p-2 items-center gap-x-2 font-medium   md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 text-white "
              href="#"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
