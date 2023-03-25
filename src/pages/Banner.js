import Image from "next/image";

function Banner({ image }) {
  return (
    <div className='BoxFull shadow-lg'>
      <div className="relative z-10 top-0 w-full lg:h-80 h-60 ">
        <Image
          src={ image }
          className="border-Redd"
          priority={true}
          layout="fill"
          objectFit="cover"
          alt="#"
        />
      </div>
    </div>
  );
}

export default Banner;
