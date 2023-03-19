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

  const isMobileDevice = /Mobi/i.test(navigator.userAgent);

  const handleEvent = isMobileDevice
    ? { onClick: playNote }
    : { onMouseEnter: playNote };

  return (
    <div>
      <h1 className=" text-2xl text-center  NameShadow font-normal pt-6 pb-8 p-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Prismatic //
        </span>
        <span className="font-base text-coal text-lg"> Subversion</span>
      </h1>
      <div {...handleEvent}>
        <Image
          className="antialiased shadow-2xl shadow-coal hover:shadow-Intrins w-[300px] Pull Smoother"
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
