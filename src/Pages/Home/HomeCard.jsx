
import { Link } from 'react-router-dom';

const HomeCard = ({item}) => {

   

   
     const { _id, name, category, price_BTD, color, image} = item;
     
   console.log(item)
    return (
      <>
        <Link
          className="flex justify-center items-center"
          to={`/menu/item-details/${_id}`}
        >
          <div
            className={`w-10/12 mb-5 md:group-hover:scale-90  md:group-hover:blur-sm md:hover:!blur-none hover:!scale-110 transition-all duration-500 hover:cursor-pointer `}
          >
            <img
              className="h-[500px] w-full rounded  object-cover object-center mb-6"
              src={image}
              alt="content"
            />
            <div className="rounded overflow-hidden">
              <h3 className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black">
                {price_BTD}/-
              </h3>
              <h3 className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black">
                {category}
              </h3>
              <h2
                style={{ backgroundColor: `${color}` }}
                className={`text-lg rounded-b dark:text-white  bg-opacity-40 p-2 text-gray-900 font-semibold  title-font mb-4 `}
              >
                {name}
              </h2>
            </div>
          </div>
        </Link>
      </>
    );
};

export default HomeCard;