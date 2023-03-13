import React from 'react'
import { BiSearch } from "react-icons/bi";


function SearchBar() {
  return (
      <div className="Search mb-36  w-screen p-4 FlexCenter">
        <div className=" FlexCenter lg:w-2/4 items-center justify-center Round BoxFit">
          <input
            className="focus:outline-0 ClearDrop lg:w-2/4 w-3/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 text-sm font-light  text-white px-4"
            type="text"
          />
          <BiSearch className="h-8 w-8 p-2 mx-4 cursor-pointer rounded-full bg-Purpp" />
        </div>
      </div>
  );
}

export default SearchBar