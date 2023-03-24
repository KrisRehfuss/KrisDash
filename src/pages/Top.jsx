import React from "react";

function Top({ text }) {
  return (
    <div className="Footer hover:text-Apricot">
      <p>
        <div className='text-xs'
         onMouseEnter={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {text}
        </div>
      </p>
    </div>
  );
}

export default Top;
