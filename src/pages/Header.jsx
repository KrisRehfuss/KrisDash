import React from "react";

function Header({ style, text }) {
  return (
      <div className={style}>{text}</div>
  );
}

export default Header;
