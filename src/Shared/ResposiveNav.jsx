import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import User from "./User";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/Io";
import { MdContactSupport, MdFastfood } from "react-icons/Md";
import { FaMicroblog } from "react-icons/Fa";
import useContextData from "../Hooks/useContextData";
import { Link, NavLink } from "react-router-dom";

export default function ResponsiveNav() {

  const {user,logout} = useContextData()


  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const active =
  "block  mt-3 rounded-lg flex justify-between items-center bg-gray-100 px-4  py-2 text-xl font-medium text-gray-700";
const pending =
  "block  mt-3 rounded-lg flex justify-between items-center px-4  py-2 text-xl font-medium text-gray-700";
const idle =
  "block  mt-3 rounded-lg flex justify-between items-center px-4  py-2 text-xl font-medium text-gray-700";


//   onClick={toggleDrawer(anchor, false)}

  const list = (anchor) => (
    <Box>
      <div className="flex h-screen overflow-hidden w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="flex mt-5 flex-col items-center justify-center">
            {user ? (
              <User hide={true}></User>
            ) : (
              <Link
                onClick={toggleDrawer(anchor, false)}
                to={"/login"}
                className="text-2xl"
              >
                <IoIosLogIn />
              </Link>
            )}
            <div className="w-10 h-[1px] bg-gray-600 mt-2"></div>
          </div>
          <div
            onClick={toggleDrawer(anchor, false)}
            className="flex justify-center"
          >
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? active : isPending ? pending : idle
              }
              to={"/"}
            >
              <AiOutlineHome />
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? active : isPending ? pending : idle
              }
              to={"/menu"}
            >
              <MdFastfood />
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? active : isPending ? pending : idle
              }
              to={"/blog"}
            >
              <FaMicroblog />
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? active : isPending ? pending : idle
              }
              to={"/contact"}
            >
              <MdContactSupport />
            </NavLink>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          {user && (
            <button
              onClick={logout}
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          )}
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="p-2 mr-2 text-white text-2xl" onClick={toggleDrawer(anchor, true)}><AiOutlineMenu/></button>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
