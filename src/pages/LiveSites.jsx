import React from 'react'
import Image from "next/image";
import sun from '../../public/sun.png';
import OpenAI from "../../public/openai.png";
import Anime from '../../public/AVI.jpg'




function LiveSites() {
   return (

      // Main Container
      <div className="w-full h-fit p-3 mb-4  ">

         {/* Header */}
         <h1 className="CaptionBlock lg:text-xl text-xs text-left mb-4 text-coal">
            Live Sites
         </h1>

         {/* Site Container */}
         <div className="flex flex-col items-center  Smoother">

         {/* Prompt Engine */}
         <div className="Sites ">
            <div className="Round p-2 lg:mr-4 mr-2 bg-OpenAI">
               <Image src={OpenAI} className="lg:w-8 w-6" alt="#" />
            </div>
            <a className="w-full dark:text-gray-700 text-gray-200" href="https://prompt-engine.vercel.app/">
               Prompt <span className="text-violet-500">Engine</span>
               <p className="lg:text-sm text-xs dark:text-gray-700 text-gray-400 ">
                  Created a prompt engine with a dynamic layout using
                  ChatGPT&apos;s API and Tailwind
               </p>
            </a>
         </div>

         {/* Weather App */}
         <div className="Sites ">
            <div className="Round Shadow p-2 lg:mr-4 mr-2 bg-slate-700">
               <Image src={sun} className="lg:w-8 w-6" alt="#"/>
            </div>
            <a className="w-full dark:text-gray-700 text-gray-200" href="https://www.thesunsarc.com">
               <h3 className="font-normal"> The <span className="PrismaticText"> Sun&apos;s Arc </span>
               </h3>
               <p className="lg:text-sm text-xs text-gray-400 dark:text-gray-700 ">
                  Created a miniamlist weather app
               </p>
            </a>
         </div>

         

         {/* Bio Card */}
            <div className="Sites ">
            <div className="Round Shadow lg:mr-4 mr-2 ">
               <Image src={Anime} className="lg:w-12 rounded-full w-10" alt="#"/>
            </div>
            <a className="w-full dark:text-gray-700 text-gray-200" href="https://biocard.vercel.app">
               <h3 className="font-normal">  <span className="CardText pr-12"> Social Network ID </span>
               </h3>
               <p className="lg:text-sm text-xs text-gray-400 dark:text-gray-700 ">
                  Created a social card interface based on a `Quantum Entangler`
               </p>
            </a>
         </div>
         </div>
      
         




      </div>
   )
}

export default LiveSites