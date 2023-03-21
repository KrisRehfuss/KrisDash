import Image from "next/image";
import React, { useRef } from "react";
import Subversion from "../../public/Subversion.jpg";

function Prismatic({ audio }) {
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
    <div>
      
      <div >
        <a href="https://prismatic.bandcamp.com/album/subversion"><h1 className=" text-2xl text-center  NameShadow font-normal pt-6 pb-8 p-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Prismatic //
        </span>
        <span className="font-base text-coal dark:text-whiteish text-lg"> Subversion</span>
      </h1></a>
        <Image {...handleEvent}
          className="antialiased shadow-2xl shadow-coal dark:shadow-Ind hover:shadow-Intrins w-[300px] Pull Smoother"
          src={Subversion}
          // layout='fill'
          objectFit="cover"
          alt="Prismatic - Subversion EP"
        />
        <audio ref={audioRef} src={audio}></audio>
        
        
      </div>
      <p className="text-sm  text-center  text-coal/0 font-normal pt-8">
        Artwork by Joseph Harrel
      </p>
    </div>
  );
}

export default Prismatic;
