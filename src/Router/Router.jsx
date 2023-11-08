
import Root from "../Root/Root";

import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import ErrorPage from "../Pages/404/ErrorPage";
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';

import PrivateRouteForLoginSignUp from './../PrivateRoute/PrivateRouteForLoginSignUp';
import PrivateRouteForOthers from './../PrivateRoute/PrivateRouteForOthers';
import Cart from "../Pages/Cart/Cart";
import AddItem from "../Pages/Add-Item/Add-Item";
import ManageItems from "../Pages/Manage-Items/ManageItems";
import AddedByUser from "../Pages/AddedByUser/AddedByUser";
import HandleOrders from "../Pages/HandleOrders/HandleOrders";
import Menu from "../Pages/Menu/Menu";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import AddToCartPage from "../Pages/AddToCartPage/AddToCartPage";


  
const Router = () => {
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
            path: "/menu",
            element: (
              <AnimatePresence mode="wait" initial={false}>
                <Menu key={"/menu"}></Menu>
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
          {
            path: "/login",
            element: (
              <PrivateRouteForLoginSignUp>
                <AnimatePresence mode="wait" initial={false}>
                  <Login key={"/login"}></Login>
                </AnimatePresence>
              </PrivateRouteForLoginSignUp>
            ),
          },
          {
            path: "/register",
            element: (
              <PrivateRouteForLoginSignUp>
                <AnimatePresence mode="wait" initial={false}>
                  <Register key={"/register"}></Register>
                </AnimatePresence>
              </PrivateRouteForLoginSignUp>
            ),
          },
          {
            path: "/cart",
            element: (
              <PrivateRouteForOthers>
                <AnimatePresence mode="wait" initial={false}>
                  <Cart key={"/cart"}></Cart>
                </AnimatePresence>
              </PrivateRouteForOthers>
            ),
          },

          {
            path: "/add-item",
            element: (
              <PrivateRouteForOthers>
                <AnimatePresence mode="wait" initial={false}>
                  <AddItem key={"/add-item"}></AddItem>
                </AnimatePresence>
              </PrivateRouteForOthers>
            ),
          },
          {
            path: "/add-to-cart/:id",
            loader: ({ params }) =>
              fetch(
                `http://localhost:5000/api/v1/menu/item-details/${params.id}`
              ),
            element: (
              <PrivateRouteForOthers>
                <AnimatePresence mode="wait" initial={false}>
                  <AddToCartPage key={"/add-to-cart/:id"}></AddToCartPage>
                </AnimatePresence>
              </PrivateRouteForOthers>
            ),
          },
          {
            path: "/item/:id",
            loader: ({ params }) =>
              fetch(
                `http://localhost:5000/api/v1/menu/item-details/${params.id}`
              ),
            element: (
              <AnimatePresence mode="wait" initial={false}>
                <ItemDetails key={"/item-details/:id"}></ItemDetails>
              </AnimatePresence>
            ),
          },
          {
            path: "/manage-items",
            element: (
              <PrivateRouteForOthers>
                <AnimatePresence mode="wait" initial={false}>
                  <ManageItems key={"/manage-items"}></ManageItems>
                </AnimatePresence>
              </PrivateRouteForOthers>
            ),
          },
          {
            path: "/item-added-by-user",
            element: (
              <PrivateRouteForOthers>
                <AnimatePresence mode="wait" initial={false}>
                  <AddedByUser key={"/item-added-by-user"}></AddedByUser>
                </AnimatePresence>
              </PrivateRouteForOthers>
            ),
          },
          {
            path: "/manage-orders",
            element: (
              <PrivateRouteForOthers>
                <AnimatePresence mode="wait" initial={false}>
                  <HandleOrders key={"/manage-orders"}></HandleOrders>
                </AnimatePresence>
              </PrivateRouteForOthers>
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