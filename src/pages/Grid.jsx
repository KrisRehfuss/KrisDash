import Head from "next/head";
import Link from 'next/link'
import Art from "../../public/AI/Art.png";
import Art2 from "../../public/AI/Art2.png";
import Art3 from "../../public/AI/Art3.png";
import Art4 from "../../public/AI/Art4.png";
import Art5 from "../../public/AI/Art5.png";
import Art6 from "../../public/AI/Art6.png";
import Art7 from "../../public/AI/Art7.png";
import Art8 from "../../public/AI/Art8.png";
import Art9 from "../../public/AI/Art9.png";


import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
// import Axis from "./Axis";
import Banner from "./Banner";
import City from "../../public/City.jpg";

import Header from "./Header";
import SkillTree from "./SkillTree";
import Menu from './Menu'

import Footer from "./Footer";
import LiveSites from './LiveSites.jsx'
import Prismatic from "./Prismatic";
import Chord from "../../public/Piano/Chord.mp3";
import Chord2 from "../../public/Piano/Chord-02.mp3";
import Chord3 from "../../public/Piano/Chord-03.mp3";
import M from "../../public/Engine.png";

export default function Home() {

   const [theme, setTheme] = useState(null)

   useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').
         matches) {
         setTheme('dark')
      } else {
         setTheme('light')
      }
   }, [])

   const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [theme])



   return (
      <div className="MAIN Smoother">
         <Head>
            <title>Kris Dashboard </title>
            <meta name="description" content="Dashboard" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/music.svg" />
         </Head>

         {/* Wrapper Start */}
         <main className="">

            {/* Nav */}
            <div className="Nav z-50 antialiased shadow-2xl dark:shadow-Redd ">

               {/* Logo */}
               <a href="https://www.krisrehfuss.com" alt="home">
                  <div className="NameShadow flex items-center justify-center lg:pl-24 ml-4 h-full m-0 text-center text-coal dark:text-whiteish font-bold text-xl">
                     <Image className=" mr-3 w-12" src={M} alt="M Logo" />
                     Kris<span className="ml-1 text-Sub"> Rehfuss </span>
                  </div>
               </a>


               {/* Search Bar */}
               <div className=" flex gap-4 items-center justify-center Round h-full">
                  <div className="Pull px-4 BoxFit"> <Link href='/Home'> Home </Link> </div>
                  <div className="Pull px-4 BoxFit"> <Link href='/Grid'> Gallery </Link> </div>
                  <div className="hidden px-4 BoxFit"> Test </div>
                  <div className="hidden px-4 BoxFit"> Test </div>



               </div>

               {/* Icons */}
               <div className="flex items-center justify-center pr-24  text-2xl text-Redd  ">

                  <div className=" NavItem p-2" onClick={handleThemeSwitch}>
                     <BsSun className="hover:animate-spin hover:text-yellow-500" />
                  </div>

                  <div className="p-2 hidden Round cursor-pointer hover:text-Ind">

                     <Menu />
                  </div>
               </div>
            </div>

            <Banner image={City} />

            {/* Container */}
            <div className="FlexCenterCol h-screen mt-4 font-pop ">

               <div className="FlexCenterCol p-2 h-screen w-fit md:w-7/12 lg:w-8/12 xl:w-6/12">

                  {/* Header */}
                  <Header style="Header antialiased mb-12" text='AI Gallery' />

                  <div className="BoxFull mx-4 px-4 mt-2 mb-6">
                     <div className="w-full h-fit p-3 mb-4 ">
                        {/* Site Container */}
                        <div className="grid grid-cols-3 gap-8  items-center Smoother">

                           <Image className='Pull' src={Art} alt='/'/>
                           <Image className='Pull' src={Art2} alt='/'/>
                           <Image className='Pull' src={Art3} alt='/'/>
                           <Image className='Pull' src={Art4} alt='/'/>
                           <Image className='Pull' src={Art5} alt='/'/>
                           <Image className='Pull' src={Art6} alt='/'/>
                           <Image className='Pull' src={Art7} alt='/'/>
                           <Image className='Pull' src={Art8} alt='/'/>
                           <Image className='Pull' src={Art9} alt='/'/>

                            
                            
                        


                        </div>
                     </div>
                     {/* Live Sites */}
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}
