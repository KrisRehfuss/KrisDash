import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link'

import Image from "next/image";
import sun from '../../public/sun.png';
import OpenAI from "../../public/openai.png";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import Anime from '../../public/AVI.jpg'
import Synth from '../../public/SynthB.png'




function LiveSites() {

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

      // Main Container
      <div className="w-full h-fit p-3 mb-4 ">

         {/* Header */}
         <div className="text-xl border-b pb-2 dark:border-gray-700 border-DarkG dark:text-whiteish NameShadow font-normal w-full h-full flex items-center justify-between lg:text-xl text-left mb-4 text-coal">

            <div className="w-full h-fit flex items-center justify-between ">

               <div className=" "> Live Sites </div>

               <div className="FlexCenter w-fit h-fit">


                  <div
                     className='text-2xl hover:text-Redd dark:hover:text-CityBlu text-Ind dark:text-Intrins pr-4'
                     onMouseEnter={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                     <BsFillArrowDownSquareFill />

                  </div>
                  <div className=" NavItem pr-2" onClick={handleThemeSwitch}>
                     <BsSun className="hover:animate-spin text-2xl text-Redd hover:text-yellow-500" />
                  </div>


               </div>

            </div>





         </div>

         {/* Site Container */}
         <div className="flex flex-col items-center  Smoother">

            {/* Weather App
            <div className="Sites ">
               <div className="Round Shadow p-2 lg:mr-4 mr-2 dark:bg-coal">
                  <Image src={sun} className="lg:w-8 w-6" alt="#" />
               </div>
               <a className="w-full dark:text-gray-700 text-gray-200" href="https://www.thesunsarc.com">
                  <h3 className="font-normal"> The <span className="PrismaticText"> Sun&apos;s Arc </span>
                  </h3>
                  <p className="lg:text-sm text-xs text-gray-400 dark:text-gray-700 ">
                     Created a miniamlist weather app
                  </p>
               </a>
            </div> */}

            {/* Modern Synth */}
            <div className="Sites ">
               <div className="Round Shadow p-2 lg:mr-4 mr-2 dark:bg-gradient-to-t dark:from-Ind  to-Pinkk  dark:bg-Ind">
                  <Image src={Synth} className="lg:w-8 w-6" alt="#" />
               </div>
               <Link className="w-full dark:text-gray-700 text-gray-200" href='/ModernSynth'>
                  <h3 className="font-normal"> <span className="PrismaticText"> Modern Synth </span>
                  </h3>
                  <p className="lg:text-sm text-xs text-gray-400 dark:text-gray-700 ">
                     Created a series of synths using React & Tailwind
                  </p>
               </Link>
            </div>

            {/* Prompt Engine
            <div className="Sites ">
               <div className="Round p-2 lg:mr-4 mr-2 bg-OpenAI">
                  <Image src={OpenAI} className="lg:w-8 w-6" alt="#" />
               </div>
               <a className="w-full dark:text-gray-700 text-gray-200" href="https://prompt-engine.vercel.app/">
                  Prompt <span className="text-violet-500">Engine</span>
                  <p className="lg:text-sm text-xs dark:text-gray-700 text-gray-400 ">
                     Created a prompt engine with ChatGPT&apos;s API and Tailwind
                  </p>
               </a>
            </div> */}

            {/* Bio Card */}
            <div className="Sites ">
               <div className="Round Shadow lg:mr-4 mr-2 ">
                  <Image src={Anime} className="lg:w-12 rounded-full w-10" alt="#" />
               </div>
               <a className="w-full dark:text-gray-700 text-gray-200" href="https://biocard.vercel.app">
                  <h3 className="font-normal">  <span className="CardText pr-12"> Social Network ID </span>
                  </h3>
                  <p className="lg:text-sm text-xs text-gray-400 dark:text-gray-700 ">
                     Created a social card interface 
                  </p>
               </a>
            </div>
         </div>






      </div>
   )
}

export default LiveSites