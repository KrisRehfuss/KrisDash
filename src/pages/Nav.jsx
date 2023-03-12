import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import M from "../../public/engine.png";

function Nav() {
  return (
    // Nav Start
    
    <div className="Nav shadow-2xl shadow-Redd ">

      {/* Logo */}
      <div className=" FlexCenter ml-4 h-full m-0   text-center text-gray-300 font-bold text-xl">
        <Image className=" mr-3 w-12" src={M} alt="M Logo" />
        Kris<span className="ml-1 text-Purpp"> Rehfuss </span>
      </div>

      {/* Search Bar */}
      <div className="hidden lg:flex items-center justify-center Round h-full">
        <input className=" ClearDrop lg:w-3/4 w-1/4 Shadow bg-Logo bg-opacity-60  focus:border-0 rounded-full p-2 text-sm font-light  text-white px-4" type="text" />
        <BiSearch className="h-8 w-8 p-2 mx-4 cursor-pointer rounded-full bg-Purpp" />

      </div>

      {/* Icons */}
      <div className="FlexCenter h-full  text-2xl mr-4 text-Redd  space-x-4 ">
        <div className=" NavItem p-2">
          <AiOutlineStar />
        </div>
        <div className=" NavItem p-2">
          <BsSun />
        </div>
        <div className=" NavItem p-2">
          <GiHamburgerMenu />
        </div>
      </div>


    </div>
  );
}

export default Nav;
