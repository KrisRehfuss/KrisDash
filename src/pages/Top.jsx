import React from "react";

function Top({ text }) {
  return (
    <div className="Footer hover:text-Apricot">
        <div className='lg:text-sm pt-4 text-xs' onMouseEnter={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {text}
        </div>
    </div>
  );
}

export default Top;
