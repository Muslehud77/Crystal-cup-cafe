


import { useEffect, useState } from "react";
import { useFetch } from "../../Fetching/useFetch";
import Transition from "../../Transition/Transition";
import BannerSlider from "../../Shared/BannerSlider";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import SkeletonCardHome from "../Home/SkeletonCardHome";


import { Helmet } from "react-helmet";





const Menu = () => {

  
  const [sort,setSort] = useState('All')
  const [path,setPath] = useState('/menu')





  const [url, setUrl] = useState(`https://crystal-cup-server.vercel.app/api/v1/menu?page=1&size=9`);
  const { data, isFetching, refetch } = useFetch(url);


  const count = data?.count || 50
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const pagesCount = Math.ceil(count / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

     const pages = [...Array(pagesCount).keys()].map(
       (pageNumber) => pageNumber + 1
     );

    const perPageItems = (e) => {
      setItemsPerPage(e.target.value);
      setCurrentPage(1);
    };
   

  useEffect(() => {
    if (sort === "All") {
      setPath(`/menu`);
      setUrl(
        `https://crystal-cup-server.vercel.app/api/v1/menu?page=${currentPage}&size=${itemsPerPage}`
      );
    } else {
      setPath(`/menu/${sort}`);
      setUrl(
        `https://crystal-cup-server.vercel.app/api/v1/menu/${sort}?page=${currentPage}&size=${itemsPerPage}`
      );
    }
     refetch();
  
  }, [url,pagesCount, currentPage]);


const toTop = ()=>{
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
}

  const handleFetch = (s)=>{
     setCurrentPage(1);
    if (s === "All") {
      setPath(`/menu`);
      setUrl(
        `https://crystal-cup-server.vercel.app/api/v1/menu?page=${currentPage}&size=${itemsPerPage}`
      );
    } else {
      setPath(`/menu/${s}`);
      setUrl(
        `https://crystal-cup-server.vercel.app/api/v1/menu/${s}?page=${currentPage}&size=${itemsPerPage}`
      );
    }
    setSort(s)
    refetch();
    
  }


useEffect(() => {
  refetch();
}, [url, pagesCount, currentPage]);



 
  const sortings = ['All','Ice-Cream','Faluda','Lassi','Drinks','Dessert','Combo']

  const handleSearch = (e)=>{
    e.preventDefault()
  }



    return (
      <div className="bg-patternLight dark:bg-patternDark overflow-hidden">
        <BannerSlider path={path}></BannerSlider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cystal Cup | Menu</title>
        </Helmet>
        ;
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
        <div className="md:grid grid-cols-3 gap-10 container mx-auto">
          {isFetching ? (
            <SkeletonCardHome w={true}></SkeletonCardHome>
          ) : (
            data?.data.map((item) => <Card key={item._id} item={item}></Card>)
          )}
        </div>
        <div className="flex justify-center my-10">
          <div className="join border-none">
            {currentPage !== 1 && (
              <button
                onClick={() => {
                  setCurrentPage(currentPage !== 1 && currentPage - 1);
                  toTop();
                }}
                className={`join-item outline-0 btn btn-md ${
                  currentPage === 1 && "hidden"
                }`}
              >
                prev
              </button>
            )}
            {pages.map((page, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(page);
                  toTop();
                }}
                className={`join-item ${
                  currentPage === page && "btn-active"
                } outline-0 btn btn-md`}
              >
                {page}
              </button>
            ))}
            <select
              onChange={perPageItems}
              defaultValue={itemsPerPage}
              className="join-item outline-0 btn btn-md"
            >
              <option value="6">06</option>
              <option value="9">09</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <button
              onClick={() => {
                setCurrentPage(
                  currentPage !== pagesCount ? currentPage + 1 : currentPage
                );
                toTop();
              }}
              className="join-item outline-0 btn btn-md"
            >
              next
            </button>
          </div>
        </div>
        <Transition></Transition>
      </div>
    );
  
    
};

export default Menu;