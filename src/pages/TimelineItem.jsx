// TimelineItem.jsx
import React from 'react';
import { FaSuitcase } from "react-icons/fa";

   const TimelineItem = ({ title, company, time, description, side }) => {
      const sideClass = side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';
      return (
         <div className={`md:px-24 my-12 flex ${sideClass} items-center`}>
            <div className="w-1/2 md:px-4 px-2 py-2 md:text-right">
               <p className="md:text-xl text-sm text-slate-700 font-bold">{title}</p>
               <p className="text-slate-500 text-sm">{company}</p>
               <p className="text-gray-500 text-sm">{time}</p>
            </div>
            <div className="z-10">
               <div className="Round p-2 bg-green-400">
                  <FaSuitcase className='w-4 h-4 text-white' />

               </div>
            </div>
            <div className="w-1/2  text-coal px-4 py-2 text-left">
               <p className='md:text-base text-xs'>{description}</p>
            </div>
         </div>
      );
   };


export default TimelineItem;