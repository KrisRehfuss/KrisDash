import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

import M from "../../public/Engine.png";

function Nav() {
  return (
    // Nav Start

    <div className="Nav antialiased shadow-2xl shadow-Redd ">
      {/* Logo */}
      <div className="NameShadow FlexCenter ml-4 h-full m-0 text-center text-coal font-bold text-xl">
        <Image className=" mr-3 w-12" src={M} alt="M Logo" />
        Kris<span className="ml-1 text-Redd"> Rehfuss </span>
      </div>

      {/* Search Bar */}
      <div className=" lg:flex items-center justify-center Round h-full">
        <input
          className="hidden ClearDrop lg:w-3/4 w-1/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 text-sm font-light  text-white px-4"
          type="text"
        />
        <BiSearch className="hidden h-8 w-8 p-2 mx-4 cursor-pointer rounded-full bg-Purpp" />
      </div>

      {/* Icons */}
      <div className="FlexCenter h-full  text-2xl mr-4 text-Redd  space-x-4 ">
        <div className=" NavItem p-2">
          <a href="https://www.krisrehfuss.com" alt="home">
            <AiOutlineHome />{" "}
          </a>
        </div>

        <div className=" NavItem p-2">
          <a href="https://www.thesunsarc.com">
            <BsSun className="hover:animate-spin hover:text-yellow-500" />
          </a>
        </div>

        <div className="mt-1 p-2 Round cursor-pointer hover:text-Aero">
          <a href="https://chat.openai.com/chat" alt="OpenAI">
            <BsChatLeft className="w-5 " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
