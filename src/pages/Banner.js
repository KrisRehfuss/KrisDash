import Image from "next/image";
import BannerImage from '../../public/Abstract2.jpg'

function Banner() {
  return (
    <div className="relative -z-10 top-0 w-full lg:h-96 h-60 ">
      <Image
      src={BannerImage}
      className="border-b-2 border-Redd"
      layout='fill'
      objectFit='cover'
      alt='#'
      />


    </div>
  )
}

export default Banner