


import { useEffect, useState } from "react";
import { useFetch } from "../../Fetching/useFetch";
import Transition from "../../Transition/Transition";
import BannerSlider from "../../Shared/BannerSlider";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import SkeletonCardHome from "../Home/SkeletonCardHome";






const Menu = () => {

  const [url, setUrl] = useState(`http://localhost:5000/api/v1/menu`);
  const [sort,setSort] = useState('All')
  const [path,setPath] = useState('/menu')

  const { data, isFetching ,refetch} = useFetch(url);


  const handleFetch = (s)=>{
    setSort(s)
    
     if (s === "All") {
      setPath(`/menu`);
       setUrl(`http://localhost:5000/api/v1/menu`);

     }else{
      setPath(`/menu/${s}`);
       setUrl(`http://localhost:5000/api/v1/menu/${s}`);

     }
  }


useEffect(()=>{
  refetch()
},[url])



  console.log(data)
  console.log(url)
  const sortings = ['All','Ice-Cream','Faluda','Lassi','Drinks','Dessert','Combo']

  const handleSearch = (e)=>{
    e.preventDefault()
  }

  console.log(sort)

    return (
      <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
        <BannerSlider path={path}></BannerSlider>

        <div className="">
          <header className="text-gray-600 dark:text-gray-300 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex gap-5 flex-wrap items-center text-base justify-center">
                {sortings.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      handleFetch(s);
                    }}
                    className={`mr-5 p-2 ${
                      sort === s &&
                      "border-b dark:border-b-white border-b-black"
                    } dark:hover:text-white hover:text-gray-900`}
                  >
                    {s}
                  </button>
                ))}
              </nav>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  className="input input-bordered dark:placeholder:text-white w-full max-w-xs"
                />
                <button
                  type="submit"
                  className="text-2xl dark:text-white absolute top-[14px] right-2"
                >
                  <AiOutlineSearch />
                </button>
              </form>
            </div>
          </header>
        </div>
        <div className="grid grid-cols-3 gap-10 container mx-auto">
          {isFetching && <SkeletonCardHome w={true}></SkeletonCardHome>}
          {data?.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
        <Transition></Transition>
      </div>
    );
    
};

export default Menu;