import React from 'react'
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import M from '../../public/drawing2.svg'


function Nav() {
  return (
    // Nav Start
    <div className="Nav Round flex justify-between items-center h-20 ">
      {/* Logo */}

      <div className="FlexCenter cursor-pointer ml-4 text-center text-gray-300 font-bold text-xl">
        <Image className="md:ml-[260px] mr-1 w-16" src={M} alt="M Logo" />
        Wine<span className="ml-1 text-indigo-500"> Match </span>
      </div>

      <div className="FlexCenter  text-2xl mr-4 text-gray-500 BoxFit space-x-4 ">
        <AiOutlineStar className="NavItem" />
        <BsSun className="NavItem" />
        <GiHamburgerMenu  />
      </div>
    </div>
  );
}

export default Nav