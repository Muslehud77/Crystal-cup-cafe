
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

  
const Router = () => {
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element: (
              <AnimatePresence mode="wait" initial={false}>
                <Home key={"/"}></Home>
              </AnimatePresence>
            ),
          },
          {
            path: "/about",
            element: (
              <AnimatePresence mode="wait" initial={false}>
                <About key={"/about"}></About>
              </AnimatePresence>
            ),
          },
          {
            path: "/contact",
            element: (
              <AnimatePresence mode="wait" initial={false}>
                <Contact key={"/contact"}></Contact>
              </AnimatePresence>
            ),
          },
        ],
      },
    ]);

    return (
    
        <RouterProvider router={router}></RouterProvider>
     
    );
};

export default Router;