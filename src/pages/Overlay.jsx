import React, { useRef, useState, useEffect } from "react";

function Overlay({ timeout }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return visible ? (
    <div className="fixed inset-0 bg-black bg-opacity-60 text-2xl text-white flex flex-col items-center justify-center z-50">
      <p className="mb-12">Press P for next synth</p>
      <p className="mb-12 ">Press C for previous synth</p>
      <p className="mb-12">{'Press [ to skip synths'}</p>
      <p className="mb-12 ">Press Space to drop octave</p>


    </div>
  ) : null;
}

export default Overlay;