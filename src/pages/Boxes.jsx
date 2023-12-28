import React, { useState } from 'react';

const Boxes = () => {
   // The corresponding numbers for each text box
   const numbers = [128, 64, 32, 16, 8, 4, 2, 1];

   // State to keep track of the values entered
   const [values, setValues] = useState(Array(numbers.length).fill(''));

   // Function to handle input change
   const handleChange = (index) => (e) => {
      const newVal = e.target.value.slice(-1); // Get the last character
      const onlyNums = newVal === '1' || newVal === '0' ? newVal : ''; // Only allow '1' or '0'

      // Update the values array
      const newValues = [...values];
      newValues[index] = onlyNums;
      setValues(newValues);
   };

   // Calculate the sum of the values
   const calculateSum = () =>
      values.reduce((acc, value, index) => acc + (value === '1' ? numbers[index] : 0), 0);

   // Render the component
   return (
      <div className="flex flex-col items-center p-5">
         <div className="flex justify-center gap-2 mr-12 mb-2">
            {/* Labels above the text fields */}
            {numbers.map((number, index) => (
               <div key={`label-${index}`} className="w-10 text-center">
                  {number}
               </div>
            ))}
         </div>
         <div className="flex justify-center gap-2">
            {/* Text fields for binary input */}
            {numbers.map((_, index) => (
               <input
                  key={`input-${index}`}
                  type="text"
                  maxLength="1"
                  className="w-10 h-10 bg-gray-400 text-center"
                  value={values[index]}
                  onChange={handleChange(index)}
               />
            ))}
            <div className="flex justify-end w-1/3 mt-2">
               <div className="w-10 text-center">
               {calculateSum()}
               </div>
            </div>
         </div>
         {/* Display the sum */}

      </div>
   );
};

export default Boxes;
