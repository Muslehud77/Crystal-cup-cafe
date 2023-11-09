import { useContext, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextProvider/AuthContext";
import Transition from "../../Transition/Transition";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const capitalize = (array) => {
  return array.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });
};

const EditItem = () => {
  const { dark, user } = useContext(AuthContext);
  const [img, setImg] = useState(null);
    const navigate = useNavigate()
  const data = useLoaderData()

  const base64 = (e) => {
    const reader = new FileReader();
    const isPresent = e.target.files.length;
    if (isPresent) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImg(reader.result);
      };
    }
  };
  const url = `https://crystal-cup-server.vercel.app/api/v1/modify/${data?._id}`;

  const mutation = useMutation({
    mutationFn: async (toDo) => {
      const data = await axios.patch(url, toDo, {
        withCredentials: true,
      });
     
      if (data.data.modifiedCount>0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Edited Sucessfully`,
          text: `As User : ${user?.displayName} Email : ${user?.email}`,
          showConfirmButton: false,
          timer: 1500,

        });
        navigate('/manage-items')
      }
      return console.log(data.data);
    },
  });

  const EditItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const ingredients = capitalize(form.ingredients.value.split(","));
    const makingProcedure = capitalize(form.makingProcedure.value.split(","));
    const category = form.category.value;
    const quantity = form.quantity.value;
    const foodOriginCountry = form.foodOriginCountry.value;
    const image = img ? img : form.image.value;

    const price_BTD = form.price_BTD.value;
    const product = {
      name,
      description,
      ingredients,
      makingProcedure,
      category,

      quantity,
      foodOriginCountry,
      image,
      price_BTD,
      nameOfAdder: user?.displayName,
      addedBy: user?.email,
      
    };

    mutation.mutate(product);
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cystal Cup | Edit</title>
      </Helmet>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-[#65C9C0] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-7xl finura  tracking-tight  ">Edit {data?.name}</h2>
        <p className="mt-2 text-lg leading-8 "></p>
      </div>
      <form
        onSubmit={EditItem}
        className="mx-auto justify-center flex-col md:flex-row gap-10 flex mt-16 sm:mt-20"
      >
        <div>
          <div className=" items-center justify-center md:w-96">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              {img ? (
                <img src={img}></img>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
              )}

              <input
                id="dropzone-file"
                accept="image/*"
                name="file"
                type="file"
                className="hidden"
                onChange={base64}
              />
            </label>
          </div>
          {img && (
            <button
              onClick={() => setImg(null)}
              className="btn btn-error text-white w-full mt-3 "
            >
              Remove
            </button>
          )}
          {!img && (
            <div className="mt-2">
              <label className="block text-center text-sm font-semibold leading-6 ">
                OR
              </label>
              <div className=" mt-2.5">
                <input
                  defaultValue={data?.image}
                  placeholder="URL"
                  type="photo"
                  name="image"
                  className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
        </div>
        <div className="md:grid gap-x-8 space-y-5 gap-y-6 md:space-y-0 md:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 ">
              Item Name
            </label>
            <div className="mt-2.5">
              <input
                required
                // required
                defaultValue={data?.name}
                placeholder="Item Name"
                type="text"
                name="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 ">
              Country
            </label>
            <div className="mt-2.5">
              <input
                required
                // required
                placeholder="Food origin country
"
                defaultValue={data?.foodOriginCountry}
                type="text"
                name="foodOriginCountry"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Category
            </label>
            <select
              name="category"
              defaultValue={data?.category}
              className={`select select-bordered ${
                dark && "bg-[#3B3B3B]"
              }  w-full  mt-1 block rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            >
              <option>Ice Cream</option>
              <option>Faluda</option>
              <option>Lassi</option>
              <option>Drinks</option>
              <option>Dessert</option>
              <option>Combo</option>
            </select>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 ">
              Quantity Availave
            </label>
            <div className=" mt-2.5">
              <input
                defaultValue={data?.quantity}
                required
                placeholder="100"
                // required
                type="number"
                name="quantity"
                className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-semibold leading-6 ">
              Price
            </label>
            <div className="relative mt-2.5">
              <input
                defaultValue={data?.price_BTD}
                required
                placeholder="Price"
                // required
                type="number"
                name="price_BTD"
                className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span className="text-xl right-2 top-2.5 absolute">
                <TbCurrencyTaka />
              </span>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Ingredients
            </label>
            <div className=" mt-2.5">
              <input
                required
                defaultValue={data?.ingredients.toString()}
                placeholder="Ingredients (put Comma ',' after each ingredient)"
                name="ingredients"
                className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Making Procedure
            </label>
            <div className=" mt-2.5">
              <input
                required
                // required
                defaultValue={data?.makingProcedure.toString()}
                placeholder="Making Procedure (put Comma ',' after each procedure)"
                name="makingProcedure"
                className="block w-full rounded-md border-0 px-3.5 py-2   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="description"
                defaultValue={data?.description}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Description..."
              />
            </div>
          </div>
          <div className="col-span-2 mt-5">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Item
            </button>
          </div>
        </div>
      </form>

      <Transition></Transition>
    </div>
  );
};

export default EditItem;
