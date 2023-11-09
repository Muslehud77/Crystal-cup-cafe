import axios from "axios";
import { useFetch } from "../../Fetching/useFetch";
import useContextData from "../../Hooks/useContextData";
import BannerSlider from "../../Shared/BannerSlider";
import Transition from "../../Transition/Transition";

import { Helmet } from "react-helmet";

import Table from "./Table";
import Swal from "sweetalert2";

const ItemsAddedByMe = () => {
 const {user} = useContextData()


  const url = `https://crystal-cup-server.vercel.app/api/v1/manage?email=${user?.email}`;

  const { data, isFetching, refetch } = useFetch(url);

  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
       axios.delete(`https://crystal-cup-server.vercel.app/api/v1/menu/${id}`)
       refetch()
      }
    });

   
  };

  return (
    <div className="mb-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cystal Cup | Cart</title>
      </Helmet>
      <BannerSlider path={"/manage"} show={false}></BannerSlider>
      {isFetching ? (
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
                  <th>User Info</th>
                  <th>Quantity Sold</th>
                  <th>Quantity Left</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <Table
                    handleDelete={handleDelete}
                    item={item}
                    key={item._id}
                  ></Table>
                ))}
              </tbody>
              {/* foot */}

             
            </table>
          </div>
        </div>
      )}

      <Transition></Transition>
    </div>
  );
};

export default ItemsAddedByMe;
