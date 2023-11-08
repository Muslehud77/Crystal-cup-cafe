import { Link } from "react-router-dom";


const Card = ({item}) => {

   const {_id, name, description, ingredients, makingProcedure, category, price_BTD, quantity, foodOriginCountry, addedBy, sellingCount, image, nameOfAdder} = item

    return (
      <Link to={`/menu/item-details/${_id}`}>
        <div className="flex mb-10 md:mb-0 justify-center items-center">
          <div className="group h-[500px] hover:shadow-xl rounded-md w-full relative overflow-hidden cursor-pointer">
            <div className="h-full w-full">
              <img
                src={image}
                className="h-full w-full transition-transform duration-500 group-hover:scale-125 object-cover group-hover:rotate-3"
                alt=""
              />
            </div>
            <div className="absolute transition-colors duration-500 inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute md:translate-y-[80%] inset-0 group-hover:translate-y-0 flex flex-col items-center transition-all duration-500 justify-center  text-center">
              <h1 className="text-3xl px-3 mt-60 md:mt-0 group-hover:mt-44 finura font-bold text-white">
                {name}
              </h1>
              <div className="text-white w-full h-full md:opacity-0 flex justify-end flex-col group-hover:opacity-100">
                <div className="text-right font-serif">
                  <p className="bg-black w-full py-1 pr-2">{category}</p>
                  <p className="bg-white text-black pr-2 text-xl py-1">
                    Available at {price_BTD}/-
                  </p>
                </div>
                {quantity > 0 && (
                  <span className="p-3 left-2 bottom-2 bg-opacity-80 tracking-widest blantick text-3xl rounded-[50%] w-32 h-32 absolute bg-red-500">
                    {quantity} left <br /> Hurry up!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Card;