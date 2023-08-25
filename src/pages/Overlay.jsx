import React, { useEffect, useState } from 'react';

function Overlay({ timeout }) {
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setVisible(false);
      }, timeout);

      return () => clearTimeout(timer);
   }, [timeout]);

   return visible ? (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center">
         <p className="mb-2">Press P for next synth</p>
         <p className="mb-2">Press C to previous synth</p>
         <p className="mb-2">Press S to Move Down</p>
         <p className="mb-2">Press D to Move Right</p>
      </div>
   ) : null;
}

export default Overlay;
