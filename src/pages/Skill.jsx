import Image from "next/image";
import React, { useRef } from "react";



function Skill({ name, logo, audio }) {
  const audioRef = useRef(null);

  const playNote = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div
      className="md:w-full h-fit w-fit grow Push flex text-xs items-center bg-coal/80 active:bg-Pinq/80 text-gray-300 p-2 mb-2 rounded-md shadow-md  md:h-auto shadow-Pinq"
      onClick={playNote}
    >
      <Image src={logo} className="w-4" alt="#" />
      <div className="ml-1 ">{name}</div>
      <audio ref={audioRef} src={audio}></audio>{" "}
    </div>
  );
}

export default Skill;
