import Head from "next/head";
import Link from 'next/link'
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import BannerImage from "../../public/Explode.png";
import Desktop from "../../public/Explode.png";
import Mobile from "../../public/NeonCityII.png";
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



export default function Snap() {
   // const router = useRouter();

   // const [DropChanger, setDropChanger] = useState(Cover);

   // useEffect(() => {
   // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
   // const newImageUrl = window.innerWidth >= 1440 ? Cover : Drop;

   // setDropChanger(newImageUrl);
   // }, []);

   return (
      <div className="snap-y snap-mandatory overflow-scroll scrollbar-hide BoxScreen  bg-green-200 ">
         <Head>
            <title>Snap</title>
            <meta name="description" content="Dragon" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/DNA.svg" />
         </Head>


         {/* Container */}
         <div className="snap-start grid BoxScreen text-3xl text-black bg-sky-200 border-b border-2 border-coal FlexCenterCol justify-center font-pop">
            
         </div>


         
         <div className="snap-start BoxScreen text-8xl text-black bg-sky-200 border-t border-4 border-white FlexCenterCol justify-center font-pop">2</div>
      </div>
   );
}
