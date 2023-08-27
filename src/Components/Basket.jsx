import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { actionType } from "../redux/actionType";
import { data } from "../data/data";
import ItemsInBasket from "./ItemsInBasket";

function Basket({ showBasket, setShowBasket }) {
  const navigate = useNavigate();
  const [{ basket, foodItems,total }, dispatch] = useStateValue();

  const clearAll = () => {
    dispatch({
      type: actionType.CLEAR_BASKET,
    });
    localStorage.setItem("foods", JSON.stringify([]));
  };

  
  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(basket));
  }, [basket]);

  return (
    <div
      className={`fixed  top-0 w-full md:w-[400px] h-screen  z-10 duration-300 overflow-y-scroll bg-white shadow-lg  ${
        showBasket ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="sticky top-0 z-30 bg-white shadow-sm ">
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setShowBasket(!showBasket)}
        />
        <div className="p-3">
          <div className="grid ">
            <div className="flex gap-7">
              <h2 className="text-2xl text-blue-500 font-semibold ">
                Your
                <span className="text-orange-500">
                  {" "}
                  Basket({basket.length})
                </span>
              </h2>
          {basket.length > 0 && (<button
            className="px-4 py-1 rounded border"
            onClick={clearAll}
          >
            Clear All
          </button>)}
            </div>
            {/* <p className="text-blue-500 font-bold">
             Total <span className="text-orange-500"> ${total}</span>
            </p> */}
          </div>
        </div>
      </div>

{/* BAKET ITEMS HERE */}
      <div className="">
       <ItemsInBasket />
      </div>

      <div className="flex flex-col  items-center w-full  p-4">
        {basket.length > 0 && (
          <>
            <button className="px-4 py-2 mt-2 rounded  bg-yellow-500 w-full font-bold">
              Check Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Basket;
