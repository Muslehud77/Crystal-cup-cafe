import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Transition from '../../Transition/Transition';
import BannerSlider from '../../Shared/BannerSlider';

import { Helmet } from "react-helmet";

import { useContext, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextProvider/AuthContext";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useContextData from '../../Hooks/useContextData';
import { useEffect } from 'react';




  

  





const AddToCartPage = () => {
    const {user,goToTop,setCart,cartFetch} = useContextData()
    const item = useLoaderData()
    const capitalize = (array) => {
    return array.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });
};

    const url = "https://crystal-cup-server.vercel.app/api/v1/add-cart";

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const date = year + "/" + month + "/" + day;


 const navigate = useNavigate();

    const mutation = useMutation({
      mutationFn: async (toDo) => {
        const data = await axios.post(url, toDo, {
          withCredentials: true,
        });
        if (data.data.insertedId) {
           
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Added to cart`,
         
            showConfirmButton: false,
            timer: 1500,
          });
           goToTop()
          
        }
        return console.log(data.data);
      },
    });
   

    const [totalAmount, setTotalAmount] = useState(item?.price_BTD)

    const setTotal = (e)=>{
       const t = e.target.value*parseInt(item.price_BTD)
       setTotalAmount(t)
    }


    const addCart = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = item?.name
      const userName = user.displayName
      const email = user.email
      const quantity = form.quantity.value;
      const image = item?.image
      const price = item?.price_BTD
      const total = totalAmount
      const cart = {
        name,userName,email,quantity,image,price,date,total,category: item.category
      }


    if(item.addedBy===user.email){
      goToTop()
        navigate("/menu");
      return Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "You are not allowed to add this to your cart!",
      });
    
    }


      if(quantity <= parseInt(item.quantity)){
         const update = {
           quantity: parseInt(item?.quantity) - quantity,
           _id: item._id,
         };
           axios.patch("https://crystal-cup-server.vercel.app/api/v1/edit-product",update);
         mutation.mutate(cart);
         goToTop()
          navigate("/menu")
       if(user.email){
        cartFetch();
       }
      }else{
        Swal.fire({
          icon: "error",
          title: "Sorry",
          text: "We don't have enough quantity",
        });
        goToTop()
         navigate("/menu")
      }

  

    
   
    };



    return (
      <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cystal Cup | AddCart</title>
        </Helmet>
        <BannerSlider show={false} path={`/menu/add-to-cart`}></BannerSlider>

        <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-7xl finura  tracking-tight  ">Add to Cart</h2>
            <p className="mt-2 text-lg leading-8 "></p>
          </div>
          <form
            onSubmit={addCart}
            className="mx-auto  justify-center flex-col md:flex-row gap-10 flex mt-16 sm:mt-20"
          >
            <div className="md:grid w-3/4 gap-x-8 space-y-5 gap-y-6 md:space-y-0 md:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold leading-6 ">
                  Item Name
                </label>
                <div className="mt-2.5">
                  <input
                    readOnly
                    placeholder="Item Name"
                    type="text"
                    name="name"
                   
                    defaultValue={item?.name}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold leading-6 ">
                  Quantity
                </label>
                <div className="mt-2.5">
                  <input
                   required
                    placeholder="Quantity"
                    type="number"
                    name="quantity"
                    onChange={setTotal}
                    defaultValue='1'
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold leading-6 ">
                 Customer Name
                </label>
                <div className="mt-2.5">
                  <input
                  readOnly
                   defaultValue={user.displayName}
                    type="text"
                   
                  
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold leading-6 ">
                 Customer Email
                </label>
                <div className="mt-2.5">
                  <input
                  readOnly
                   defaultValue={user.email}
                    type="text"
                   
                  
                    className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

           
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 ">
                  Price Total
                </label>
                <div className="relative mt-2.5">
                  <input
                    required
                    placeholder="Price"
                    // required
                    readOnly
                    value={totalAmount}
                    type="number"
                    name="price_BTD"
                    className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span className="text-xl right-2 top-2.5 absolute">
                    <TbCurrencyTaka />
                  </span>
                </div>
              </div>

  
              <div className="col-span-2 mt-5">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </form>

       
        </div>

        <Transition></Transition>
      </div>
    );
};

export default AddToCartPage;