
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import useContextData from "../Hooks/useContextData";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";


export default function User({hide}) {
    const {user,logout,cart} = useContextData()
    
    const cartCount = (
      <div className="relative">
        <AiOutlineShoppingCart />
        <p className="text-xs absolute bg-red-500 rounded-full -top-1 -right-2 text-white px-[4px]">{cart.length > 0 ? cart.length : ''}</p>
      </div>
    );

  const [state, setState] = React.useState({
   right: false,
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

//    onClick={toggleDrawer(anchor, false)}

const handleLogout = ()=>{
    logout()
}

const active =
  "block rounded-lg flex justify-between items-center bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700";
const pending =
  "block rounded-lg flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700";
const idle =
  "block rounded-lg flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700";

const links = (
  <>
    <NavLink
      onClick={toggleDrawer("right", false)}
      to={"/cart"}
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
    >
      Cart <span className="text-xl"> {cartCount}</span>
    </NavLink>

    <hr />
    <NavLink
      onClick={toggleDrawer("right", false)}
      to={"/add-item"}
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
    >
      Add Item
      <AiOutlineArrowRight className="text-xl" />
    </NavLink>
    <NavLink
      onClick={toggleDrawer("right", false)}
      to={"/manage-items"}
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
    >
      Items added by me <AiOutlineArrowRight className="text-xl" />
    </NavLink>
   
    <NavLink
      onClick={toggleDrawer("right", false)}
      to={"/"}
      className={({ isActive, isPending }) =>
        isActive ? active : isPending ? pending : idle
      }
    >
      Handle Orders <AiOutlineArrowRight className="text-xl" />
    </NavLink>
  </>
);

  const list = (anchor) => (
    <Box className="w-80">
      <div className="flex w-80  h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <h5 className="font-semibold text-xl p-3 rounded-lg text-white bg-black">Hello! {user?.displayName}</h5>

          <ul  className="mt-6 space-y-2">
           {links}
          </ul>
        </div>

        <div className="sticky bg-white inset-x-0 bottom-0 border-t border-gray-100">
          <div className="flex justify-between pr-5">
            <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
              <img
                alt="Man"
                src={user?.photoURL}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {user?.displayName}
                  </strong>

                  <span> {user?.email}</span>
                </p>
              </div>
            </div>
            <button onClick={()=>toggleDrawer(anchor, false), handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
               
              >
                <path
                  
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            className="flex flex-row-reverse dark:bg-gray-700 shadow-2xl backdrop-blur-3xl text-white hover:cursor-pointer gap-4 rounded-full justify-center items-center"
            onClick={toggleDrawer(anchor, true)}
          >
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>

            {!hide && (
              <Link to={"/cart"} className="text-2xl ml-4">
                {cartCount}
              </Link>
            )}
          </div>
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