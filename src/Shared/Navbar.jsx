import { Link, NavLink, useLocation } from "react-router-dom";
import User from "./User";
import ResponsiveNav from "./ResposiveNav";
import useContextData from "../Hooks/useContextData";
import logo from '../Assets/logo.png'

import DarkToggle from "./DarkToggle";
const Navbar = () => {
const {pathname} = useLocation()
  const {user} = useContextData()

  
const active =
  "relative text-white rounded text-black uppercase text-xs  py-1 px-2 hover:tracking-[0.25em] hover:text-white hover:bg-black shadow-[0_0_30px_white] duration-300 tracking-[0.1em]";
const pending =
  "relative text-white rounded text-black uppercase text-xs  py-1 px-2 hover:tracking-[0.25em] hover:text-black hover:bg-white  hover:shadow-[0_0_65px_white] duration-300 tracking-[0.1em]";
const idle =
  "relative text-white rounded text-black uppercase text-xs  py-1 px-2 hover:tracking-[0.25em] hover:text-black hover:bg-white  hover:shadow-[0_0_65px_white] duration-300 tracking-[0.1em]";

const links = (
  <>
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
      to={"/"}
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
      to={"/menu"}
    >
      Menu
    </NavLink>
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
      to={"/contact"}
    >
      Contact
    </NavLink>
  </>
);


  return (
    <div>
     
      <div className="navbar absolute top-0 z-50 bg-black bg-opacity-10 dark:bg-opacity-20 shadow-lg backdrop-blur-sm h-16">
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
             {
              links
             }
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
