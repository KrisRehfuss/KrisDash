import React from "react";

function Top({ text }) {
  return (
    <div className="Footer hover:text-Apricot">
      <p>
        <button className='text-xs'
          onMouseEnter={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {text}
        </button>
      </p>
    </div>
  );
}

export default Top;
