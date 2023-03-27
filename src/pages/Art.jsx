import React, { useRef } from "react";
import Image from "next/image";
  


function Art({ image, audio }) {

  // Audio Player
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

  // Return Function
  return (
    <div {...handleEvent}>
        <Image className='Pull Shadow w-64 rounded-md dark:-rotate-45 hover:shadow-Ind ' src={ image } alt='/' />
      <audio ref={audioRef} src={audio}></audio>

    </div>
  )
}

export default Art