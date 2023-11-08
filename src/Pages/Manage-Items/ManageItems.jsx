import axios from "axios";
import { useFetch } from "../../Fetching/useFetch";
import useContextData from "../../Hooks/useContextData";
import BannerSlider from "../../Shared/BannerSlider";
import Transition from "../../Transition/Transition";

import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Table from "./Table";

const ManageItems = () => {
 const {user} = useContextData()


  const url = `http://localhost:5000/api/v1/manage?email=${user.email}`;

  const { data, isFetching, refetch } = useFetch(url);

  console.log(url)
  console.log(data);
 
  console.log(isFetching)

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/menu/${id}`);
    await refetch()
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

export default ManageItems;
