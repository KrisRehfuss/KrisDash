import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Art from './Art';
import Header from "./Header";
import { BsQuestionCircleFill } from "react-icons/bs";
import Footer from "./Footer";
import SkillTree from "./SkillTree";

import Art1 from "../../public/AI/Modern.png";
import Art2 from "../../public/AI/ModernPlanet.png";
import Art3 from "../../public/AI/Modern4.png";
import Art4 from "../../public/AI/ModernArt.png";
import Art5 from "../../public/AI/ModernPlants2.png";
import Art6 from "../../public/AI/ModernArt3.png";
import Art7 from "../../public/AI/planets.png";
import Art8 from "../../public/AI/Planets5.png";
import Art9 from "../../public/AI/CandyMountains.png";


import React, { useRef, useState, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import Banner from "./Banner";
import City from "../../public/Disc.jpg";
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

   const items = [
      { name: 'A', image: Art1 },
      { name: 'B', image: Art2 },
      { name: 'C', image: Art4 },
      { name: 'D', image: Art3 },
      { name: 'E', image: Art5 },
      { name: 'F', image: Art6 },
      { name: 'G', image: Art7 },
      { name: 'H', image: Art8 },
      { name: 'J', image: Art9 },
      // { name: 'K', image: Art11},
      // { name: 'L', image: Art12},
   ]



   return (
      <div>
         <Head>
            <title>Dashboard</title>
            <meta name="description" content="Dashboard" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/saturn2.ico" />
         </Head>

         {/* Wrapper Start */}
         <main className="xl:h-[1600px] scroll-smooth Smoother dark:bg-gradient-to-t from-PlanetO via-Pinkk to-PlanetDark bg-coal">

            {/* Nav */}
            <div className="Nav grid-cols-2 z-10 antialiased shadow-2xl Smoother shadow-PlanetO dark:shadow-coal ">

               {/* Logo */}
               <a href="https://www.krisrehfuss.com" alt="home">
                  <div className="NameShadow Smoother text-xl flex items-center justify-center lg:pl-24 ml-4 h-full m-0 text-center text-whiteish dark:text-coal font-bold">
                     {/* <Image className=" mr-3 w-12" src={M} alt="M Logo" /> */}
                     Kris<span className="ml-1 text-Sub"> Rehfuss </span>
                  </div>
               </a>


               {/* Links */}
               <div className="lg:pr-48 flex gap-4 w-fit items-center justify-end text-white dark:text-coal h-full">
                  <div className="Pull md:px-4 active:text-Redd BoxFit"> <a href='https://www.krisrehfuss.com'> Home </a> </div>
                  <div className="Pull md:px-4 active:text-Redd BoxFit"> <Link href='/Grid'> Gallery </Link> </div>
                  <div className="NavItem p-2 text-2xl text-white dark:text-coal" onClick={handleThemeSwitch}>
                     <BsSun className="animate-spin hover:text-yellow-500 Smoother" />
                  </div>
               </div>
            </div>


            {/* Container */}
            <div className="FlexCenterCol mt-4 font-pop ">

               <div className="FlexCenterCol p-2  w-fit md:w-7/12 lg:w-8/12 xl:w-6/12">

                  {/* Header */}
                  <Header style="my-12 xl:text-9xl lg:text-8xl text-7xl w-full NameShadow hover:text-Aero cursor-text SubversionText font-extrabold text-center xl:mr-[400px] Smoother antialiased " 
                  text='Modern Gallery' />

                  <div className="BoxFull mx-4 px-4 mt-2 mb-6">
                     <div className="w-full h-fit p-3 mb-4 ">

                        {/* Grid Container */}
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 gap-y-12  mb-2 items-center ">
                           {items.map((item) => (
                              <Art
                                 key={item.name}
                                 image={item.image} />
                           ))}


                        </div>
                     </div>
                     {/* Live Sites */}
                  </div>
                  {/* // Link Container */}
                  <div className="FlexCenterCol">

                     <div className="flex items-center justify-evenly w-full h-fit p-2">


                     </div>
                     {/* <Top text="This site was developed by Kris and is getting regular updates" /> */}
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}
