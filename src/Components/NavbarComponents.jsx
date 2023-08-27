import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSafeFill } from "react-icons/bs";
import { TbHome, TbTruckDelivery } from "react-icons/tb";
import {
  MdFastfood,
  MdFavorite,
  MdHelp,
  MdRestoreFromTrash,
  MdShoppingBasket,
} from "react-icons/md";
import { FaShoppingBasket, FaUserFriends, FaWallet } from "react-icons/fa";
import { data } from "../data/data";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { actionType } from "../redux/actionType";
import Basket from "./Basket";

function NavbarComponents() {
  const navigate = useNavigate();
  const [{ basket, total, foodItems }, dispatch] = useStateValue();
  const [showBasket, setShowBasket] = useState(false);
  const [nav, setNav] = useState(false);

  function searchEngineHandler(event) {
    data.filter((item) => item.name);
    console.log(event.target.value);
  }

  const clearAll = () => {
    dispatch({
      type: actionType.CLEAR_BASKET,
    });
    localStorage.setItem("foods", JSON.stringify([]));
  };

  return (
    <div
      className="max-w-[1640px] mx-auto flex 
      justify-between items-center p-4 bg-gray-100 shadow-lg sticky top-0 z-50"
    >
      {/* left-bar  */}
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu className="font-bold pr-3" size={40} />
        </div>

        <h1 className="hidden md:block text-3xl sm:text-3xl lg:text-4xl text-blue-500">
          Gebetta
          <span className="font-bold text-orange-500">Foods</span>
        </h1>

        <div className="hidden lg:flex rounded-full p-1 bg-gray-200 items-center text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2 ">Pickup</p>
        </div>
      </div>

      {/*  It is for search bar*/}

      <div
        className="bg-gray-300 rounded-full flex items-center 
          px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={25} className="font-bold" />
        <input
          name="searchEngine"
          type="text"
          onChange={searchEngineHandler}
          className="bg-transparent p-2 w-full
                   focus:outline-none"
        />
      </div>

      {/*SHOPPING CART BUTTON  */}

      <div
        className="relative cursor-pointer"
        onClick={() => setShowBasket(!showBasket)}
      >
        <MdShoppingBasket size={20} className="text-blue-500 " />
        <div className="-top-2 left-3 bg-orange-500 flex items-center justify-center absolute w-4 h-4 rounded-full">
          <p className="text-white text-sm font-semibold">{basket?.length}</p>
        </div>
      </div>

      {/* MOBILE MENU OVERLAYS */}
      <div
        className={`fixed  top-0  w-[300px] h-screen  z-10 duration-300 overflow-y-scroll bg-white  ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="sticky top-0 z-30 bg-white shadow-sm">
          <AiOutlineClose
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setNav(!nav)}
          />
          <h2 className="text-2xl p-4 text-blue-500 font-bold">
            Gebetta
            <span className="text-orange-500"> Foods</span>
          </h2>
        </div>
        <nav>
          <ul className="flex flex-col px-4 text-gray-500 font-semibold shadow-sm">
            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <TbHome size={25} className="mr-4" />
              Home
            </li>

            <li
              className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500"
              onClick={() => navigate("/foods")}
            >
              <MdFastfood size={25} className="mr-4" />
              Foods
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>

            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>

            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>

            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>

            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>

            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <BsFillSafeFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-gray-700 duration-500">
              <FaUserFriends size={25} className="mr-4" />
              Invite a friend{" "}
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex gap-2 items-center justify-center">
          <li>
            <Link
              to="login"
              className="border font-semibold px-4 py-2 rounded-md bg-green-400"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* VIEW ORDER COMPONNT */}
<Basket showBasket={showBasket} setShowBasket={setShowBasket}/>
    </div>
  );
}

export default NavbarComponents;
