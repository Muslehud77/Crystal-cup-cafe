


import axios from "axios";
import { useFetch } from "../../Fetching/useFetch";
import useContextData from "../../Hooks/useContextData";
import BannerSlider from "../../Shared/BannerSlider";
import Transition from "../../Transition/Transition";

import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Swal from "sweetalert2";


const Cart = () => {
  const {user,setCart,cart,cartFetch,cartLoading} = useContextData()







const totalAmount = cart?.reduce((a,d)=>{
return a+d?.total
},0)
const totalQuantity = cart?.reduce((a,d)=>{
return a + parseInt(d?.quantity);
},0)

useEffect(()=>{
    if (user.email) {
      cartFetch();
    }
},[])

const handleDelete =async (id)=>{
 await axios.delete(`https://crystal-cup-server.vercel.app/api/v1/cart/${id}`)
 await Swal.fire({
   position: "center",
   icon: "success",
   title: "Successfully removed from cart",
   showConfirmButton: false,
   timer: 1500,
 });
 await cartFetch()
}


    return (
      <div className="">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cystal Cup | Cart</title>
        </Helmet>
        <BannerSlider path={"/cart"} show={false}></BannerSlider>
        {cartLoading ? (
          <div className="absolute top-0 mb-20 place-items-stretch h-[100vh] w-full">
            <div className="skeleton wave info" />
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto my-10">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Customer Info</th>
                    <th>Order Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item) => (
                    <tr className="" key={item?._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="">
                            <div className=" w-16 h-10">
                              <img src={item?.image} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item?.name}</div>
                            <div className="text-sm opacity-50">
                              {item?.category}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {item?.userName}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {item?.email}
                        </span>
                      </td>
                      <td>{item?.date}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.price}/-</td>
                      <td>{item?.total}/-</td>
                      <th>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="btn btn-ghost btn-sm"
                        >
                          Remove
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
                {/* foot */}

                <tfoot className="border-2 border-black">
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>{totalQuantity}</th>
                    <th></th>
                    <th className="text-md">{totalAmount}/-</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        <Transition></Transition>
      </div>
    );
    
};

export default Cart;