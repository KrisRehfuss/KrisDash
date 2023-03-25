import React from 'react'
import Link from 'next/link'

function Menu() {
   return (
      <div>
         <div className="text-pop dropdown dropdown-hover dropdown-end ">
            <label tabIndex={0} className="btn m-1">Click</label>
            <ul tabIndex={0} className="text-whiteish dropdown-content menu text-base p-2 shadow bg-base-100 rounded-box w-56">
               <li className=' text-whiteish '><a>Item 1</a></li>
               <li><a>Item 2</a></li>
            </ul>
         </div>




      </div>
   )
}

export default Menu