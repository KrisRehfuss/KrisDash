import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ data }) => {
   return (
      <div className="relative mx-auto p-4">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 bg-gray-300 h-full"></div> {/* This creates the vertical line */}
         </div>
         {data.map((item, index) => (
            <TimelineItem
               key={index}
               title={item.title}
               company={item.company}
               time={item.time}
               description={item.description}
               side={index = 'left'} // Alternate sides
            />
         ))}
      </div>
   );
};

export default Timeline;
