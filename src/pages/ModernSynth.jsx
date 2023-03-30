import Head from "next/head";
// import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FaMusic } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import Link from 'next/link';
import Art from './Art';
import Header from "./Header";

import Art1 from "../../public/AI/Modern.png";
import Art2 from "../../public/AI/ModernPlanet.png";
import Art3 from "../../public/AI/Modern4.png";
import Art4 from "../../public/AI/ModernArt.png";
import Art5 from "../../public/AI/ModernPlants2.png";
import Art6 from "../../public/AI/ModernArt3.png";
import Art7 from "../../public/AI/planets.png";
import Art8 from "../../public/AI/Planets5.png";
import Art9 from "../../public/AI/CandyMountains.png";

import Keys from "../../public/Key.png";

import A1 from "../../public/Piano/Diamond-001.mp3";
import A2 from "../../public/Piano/Diamond-002.mp3";
import A3 from "../../public/Piano/Diamond-003.mp3";
import A4 from "../../public/Piano/Diamond-004.mp3";
import A5 from "../../public/Piano/Diamond-005.mp3";
import A6 from "../../public/Piano/Diamond-006.mp3";
import A7 from "../../public/Piano/Diamond-007.mp3";
import A8 from "../../public/Piano/Diamond-008.mp3";
import A9 from "../../public/Piano/Diamond-009.mp3";

import R1 from "../../public/Piano/Modern/Robot-001.mp3";
import R2 from "../../public/Piano/Modern/Robot-002.mp3";
import R3 from "../../public/Piano/Modern/Robot-003.mp3";
import R4 from "../../public/Piano/Modern/Robot-004.mp3";
import R5 from "../../public/Piano/Modern/Robot-005.mp3";
import R6 from "../../public/Piano/Modern/Robot-006.mp3";
import R7 from "../../public/Piano/Modern/Robot-007.mp3";
import R8 from "../../public/Piano/Modern/Robot-008.mp3";
import R9 from "../../public/Piano/Modern/Robot-009.mp3";



export default function Home() {


  // Theme Switcher
   const [theme, setTheme] = useState(null)
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

   // Note/Theme Changer
   function Darken() {
      handleThemeSwitch();
      handleToggle();
   }

   // Theme Change on ctrl
   useEffect(() => {
      function handleKeyDown(event) {
         if (event.code === 'Space') {
            event.preventDefault();
            Darken();
         }
      }

      window.addEventListener('keydown', handleKeyDown);

      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      };
   });


 
   // Note Arrays
   const [notes, setNotes] = useState([
      { id: 'E', image: Art1, audio: A4, caption: 'W', keyTrigger: 'w' },
      { id: 'A', image: Art2, audio: A8, caption: 'U', keyTrigger: 'u' },
      { id: 'B', image: Art3, audio: A9, caption: 'I', keyTrigger: 'i' },
      { id: 'D', image: Art4, audio: A5, caption: 'J', keyTrigger: 'j' },
      { id: 'G', image: Art5, audio: A6, caption: 'K', keyTrigger: 'k' },
      { id: 'C', image: Art6, audio: A7, caption: 'L', keyTrigger: 'l' },
      { id: 'I', image: Art7, audio: A1, caption: 'A', keyTrigger: 'a' },
      { id: 'H', image: Art8, audio: A2, caption: 'S', keyTrigger: 's' },
      { id: 'F', image: Art9, audio: A3, caption: 'D', keyTrigger: 'd' },
   ])
   const [noteList1, setNoteList1] = useState([
      { id: 'A', audio: A8 },
      { id: 'B', audio: A9 },
      { id: 'C', audio: A7 },
      { id: 'D', audio: A5 },
      { id: 'E', audio: A4 },
      { id: 'F', audio: A3 },
      { id: 'G', audio: A6 },
      { id: 'H', audio: A2 },
      { id: 'I', audio: A1 },
   ])
   const [noteList2, setNoteList2] = useState([
      { id: 'A', audio: R8 },
      { id: 'B', audio: R9 },
      { id: 'C', audio: R7 },
      { id: 'D', audio: R5 },
      { id: 'E', audio: R4 },
      { id: 'F', audio: R3 },
      { id: 'G', audio: R6 },
      { id: 'H', audio: R2 },
      { id: 'I', audio: R1 },
   ])
   const [isNoteList1, setIsNoteList1] = useState(true)

   // Use useEffect to play the default sounds when the component mounts
   useEffect(() => {
      notes.forEach((note) => {
         const audio = new Audio(note.defaultAudio);
         audio.play();
      });
   }, [notes]);


   // Remap the notes on toggle
   const handleToggle = () => {
      setIsNoteList1((prevIsNoteList1) => {
         const newNoteList = prevIsNoteList1 ? noteList2 : noteList1;
         setNotes((prevArray) =>
            prevArray.map((item) => {
               const note = newNoteList.find((n) => n.id === item.id);
               return {
                  ...item,
                  noteList: newNoteList, // update the note list based on the new value of isNoteList1
                  audio: note.audio, // add the audio property of the selected note
               };
            })
         );
         return !prevIsNoteList1;
      });
   };

   

   // Attempt at Scaling on KeyPress


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
         <main className="SplitWrapper Smoother xl:h-[1600px] h-[1600px]">

            {/* Nav */}
            <div 
            className="Nav grid-cols-2 z-10 antialiased lg:px-0 shadow-2xl Smoother shadow:coal dark:shadow-PlanetO ">

               {/* Logo */}
               <a href="https://www.krisrehfuss.com" alt="home">
                  <div className="NameShadow text-coal dark:text-white Smoother text-xl flex items-center justify-center lg:pl-24 ml-4 h-full m-0 text-center font-bold">
                     {/* <Image className=" mr-3 w-12" src={M} alt="M Logo" /> */}
                     Art<span className="ml-1 text-Sub"> Gallery </span>
                  </div>
               </a>

      
               {/* Links */}
               <div className="xl:pr-48 lg:pr-16 flex gap-4 w-fit items-center justify-end text-coal dark:text-white h-full">
                  <div className="Pull md:px-4 active:text-Redd BoxFit"> <a href='https://www.krisrehfuss.com'> Home </a> </div>
                  <div className="Pull md:px-4 active:text-Redd BoxFit"> <Link href='/ModernSynth'> Gallery </Link> </div>
                  {/* <div className="NavItem p-2 text-xl text-coal dark:text-white" onMouseEnter={Darken}>
                     <FaMusic className="hover:text-DarkTeal Smoother" />
                  </div> */}
                  <div className="NavItem p-2 text-xl text-Treal  dark:text-white">
                     <Link href='/Reflect'><FaMusic className="animate-bounce hover:animate-none Smoother " /></Link>
                  </div>
               </div>
            </div>


            {/* Container */}
            <div className="FlexCenterCol  h-fit  mt-4 font-pop ">

               <div className="FlexCenterCol h-fit p-2 w-fit md:w-7/12 lg:w-10/12 xl:w-8/12">

                  {/* Header */}
                     <Header style="mt-4
                        md:my-12 md:text-6xl
                        xl:w-full xl:ml-24 xl:text-9xl xl:mr-[400px]
                        lg:text-9xl lg:text-left
                        lg:dark:pt-32
                        xl:dark:pt-0
                        text-5xl w-fit NameShadow hover:text-Aero cursor-text SubversionText font-extrabold text-center Smoother antialiased " 
                  text='Modern Synth' />
                
                  
                  {/* More Containers? */}
                  <div className=" w-full mx-4 px-4 mt-2 md:mb-6 mb-2">
                     <div className="w-full FlexCenter h-fit p-3 mb-4 ">

                        {/* Key Picture
                        <div className="hidden dark:hidden lg:block border-2 border-white absolute left-40 h-96 p-8">
                           <Image src={Keys} width={240} alt='Keys'/>
                        </div> */}

                        {/* Grid Container */}
                        <div 
                        className="
                        grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-3 w-full
                           p-6 gap-8 dark:gap-12 dark:pt-16  
                              lg:gap-x-24 lg:p-36 lg:pt-12 
                                 lg:dark:grid-cols-3 lg:dark:p-4 lg:dark:pt-[200px] lg:dark:gap-36 lg:dark:gap-x-48 
                              xl:p-64 xl:pt-36 xl:gap-16
                                 xl:dark:gap-36 xl:dark:pt-42 xl:dark:px-64
                                    ">

                           {notes.map((item) => (
                              <Art
                                 key={item.name}
                                 image={item.image}
                                 audio={item.audio}
                                 caption={item.caption} 
                                 keyTrigger={item.keyTrigger} />
                           ))}


                        </div>
                     </div>
                     {/* Live Sites */}
                  </div>
                  {/* // Link Container */}

               </div>
            </div>
         </main>
      </div>
   );
}
