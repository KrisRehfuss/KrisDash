import Image from "next/image";
import React, { useRef } from "react";


// Define the AudioPlayer Function
function Skill({ name, logo, audio }) {
  const audioRef = useRef(null);

  const playNote = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  // Checks if we're in a browser
  const isBrowser = typeof window !== "undefined";
  const isMobileDevice = isBrowser && /Mobi/i.test(navigator.userAgent);

  const handleEvent = isMobileDevice
    ? { onClick: playNote }
    : { onMouseEnter: playNote };

  return (
    <div
      className="md:w-full Pull hover:cursor-help hover:shadow-CityBlu h-fit w-fit grow Push flex text-xs items-center dark:bg-whiteish/90 dark:text-coal bg-coal/80 active:bg-Pinq/80 text-gray-300 p-2 mb-2 rounded-md shadow-md  md:h-auto shadow-Pinq"
      {...handleEvent}
    >
      <Image src={logo} className="w-4" alt="#" />
      <div className="ml-1 ">{name}</div>
      <audio ref={audioRef} src={audio}></audio>
    </div>
  );
}

export default Skill;
