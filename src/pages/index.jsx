import Head from "next/head";
import Link from 'next/link'
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import BannerImage from "../../public/Explode.png";
import Cover from "../../public/NeonLandIII.png";
import Drop from "../../public/NeonCityII.png";
import { useRouter } from 'next/router';
import Banner from "./Banner";
import Header from "./Header";
import SkillTree from "./SkillTree";
import { BsSun } from "react-icons/bs";
import Footer from "./Footer";
import Top from "./Top";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { TbBrandBandcamp } from "react-icons/tb";
import { MdPiano } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";// import Synth from '../../public/SynthB.png'ynth from '../../public/SynthB.png'



export default function Splash() {
  // const router = useRouter();

  // const [DropChanger, setDropChanger] = useState(Cover);

  // useEffect(() => {
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // const newImageUrl = window.innerWidth >= 1440 ? Cover : Drop;

  // setDropChanger(newImageUrl);
  // }, []);

  return (
    <div className="scroll-smooth h-fit bg-whiteish dark:bg-coal Smoother">
      <Head>
        <title>Kris Dashboard </title>
        <meta name="description" content="Splash" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/DNA.svg" />
      </Head>





      {/* Container */}
      <div className="FlexCenterCol items-center justify-center xl:justify-center font-pop h-full w-screen">
        {/* <Banner image={BannerImage} /> */}


        {/*  */}
        <Image
          src={Cover}
          priority={true}
          className="hidden md:inline-block"
          layout='fill'
          objectFit='cover'
          alt='#'
        />

        <Image
          src={Drop}
          priority={true}
          className="md:hidden"
          layout='fill'
          objectFit='cover'
          alt='#'
        />


        <div className="z-20 flex flex-col rounded-md 
        xl:ml-[400px] xl:items-center xl:justify-center xl:gap-12 xl:h-fit xl:w-fit xl:mt-54 
        items-end justify-center gap-8 BoxFull 
        mt-48 p-4">

          <Link href='/Splash'>
            <div className="SplashLinks xl:ml-36">
              <AiOutlineHome className=' w-8 h-8 mr-2  xl:w-12 xl:h-12' /><p className='ml-2 xl:ml-6'>Homepage</p>
            </div>
          </Link>

          <a href='https://open.spotify.com/artist/3je0rpoLMnH2doxB43msGn'>
            <div className="SplashLinks ">
              <SlSocialSpotify className='w-8 h-8 mr-2  xl:w-12 xl:h-12' /><p className='ml-2 xl:ml-6'>Prismatic EP</p>
            </div>
          </a>

          <Link href='/ModernSynth'>
            <div className="SplashLinks xl:mr-36">
              <MdPiano className='w-8 h-8 mr-2   xl:w-12 xl:h-12' /><p className='ml-2 xl:ml-6'>Modern Synth</p>
            </div>
          </Link>



        </div>




        {/* // Footer */}
        <div className="flex absolute bottom-0 items-center xl:justify-evenly justify-between mt-24 mb-6 z-50">

          <div className="flex items-center xl:justify-center xl:gap-12 justify-evenly w-screen h-fit p-2">

            {/* LinkedIn */}
            <div className="text-3xl text-whiteish hover:text-Pinkk Smooth w-fit h-fit p-2">
              <a href="https://www.linkedin.com/in/krisrehfuss/">
                <AiFillLinkedin />
              </a>
            </div>

            {/* Github */}
            <div className="text-3xl text-whiteish hover:text-Pinkk Smooth w-fit h-fit p-2">
              <a href="https://github.com/KrisRehfuss">
                <AiOutlineGithub />
              </a>
            </div>


            {/* Insta */}
            <div className="text-3xl text-whiteish hover:text-Pinkk Smooth w-fit h-fit p-2">
              <a href="https://www.instagram.com/krismatic__/">
                <AiOutlineInstagram />
              </a>
            </div>



          </div>
        </div>

      </div>
    </div>
  );
}
