import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Dropdown = ({ title, children }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="border-b border-gray-200">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center w-full px-4 py-2 text-left text-gray-700 bg-gray-100 hover:bg-gray-200"
         >
            {isOpen ? (
               <ChevronDownIcon className="w-5 h-5 mr-2" />
            ) : (
               <ChevronRightIcon className="w-5 h-5 mr-2" />
            )}
            {title}
         </button>
         {isOpen && <div className="px-4 py-2">{children}</div>}
      </div>
   );
};

export default Dropdown;
