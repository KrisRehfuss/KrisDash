import React from "react";

function Header({ style }) {
  return (
    <div>
      <button
        className={style}
        onMouseEnter={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        Rapidly <span className="text-Redd">optimizing </span>every step of
        development.
      </button>
    </div>
  );
}

export default Header;
