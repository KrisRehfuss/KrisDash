import Head from "next/head";
// import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { FaMusic } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import Link from 'next/link';
import Art from './Art';
import Bubbles from './Bubbles'
import Header from "./Header";


import A1 from "../../public/Piano/Kinetic/KineticLo-001.mp3";
import A2 from "../../public/Piano/Kinetic/KineticLo-002.mp3";
import A3 from "../../public/Piano/Kinetic/KineticLo-003.mp3";
import A4 from "../../public/Piano/Kinetic/KineticLo-004.mp3";
import A5 from "../../public/Piano/Kinetic/KineticLo-005.mp3";
import A6 from "../../public/Piano/Kinetic/KineticLo-006.mp3";
import A7 from "../../public/Piano/Kinetic/KineticLo-007.mp3";
import A8 from "../../public/Piano/Kinetic/KineticLo-008.mp3";
import A9 from "../../public/Piano/Kinetic/KineticLo-009.mp3";

import R1 from "../../public/Piano/Modern/Robot-001.mp3";
import R2 from "../../public/Piano/Modern/Robot-002.mp3";
import R3 from "../../public/Piano/Modern/Robot-003.mp3";
import R4 from "../../public/Piano/Modern/Robot-004.mp3";
import R5 from "../../public/Piano/Modern/Robot-005.mp3";
import R6 from "../../public/Piano/Modern/Robot-006.mp3";
import R7 from "../../public/Piano/Modern/Robot-007.mp3";
import R8 from "../../public/Piano/Modern/Robot-008.mp3";
import R9 from "../../public/Piano/Modern/Robot-009.mp3";



export default function Reflect() {

      // Pager
   const router = useRouter();

   const handleKeyDown = (event) => {
      if (event.key === 'p' || event.key === 'P') {
         router.push('/Kinetic');
      } else if (event.key === 'c' || event.key === 'C') {
         router.push('/ModernSynth');
      }
   };

   useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      };
   }, []);


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
      { id: 'I', audio: A1, style: 'md:h-48 h-24 flex-0', caption: 'A', keyTrigger: 'a' },
      { id: 'E', audio: A4, style: 'md:h-48 h-24 flex-0', caption: 'W', keyTrigger: 'w' },
      { id: 'A', audio: A8, style: 'md:h-48 h-24 flex-0', caption: 'U', keyTrigger: 'u' },
      { id: 'B', audio: A9, style: 'md:h-48 h-24 flex-0', caption: 'I', keyTrigger: 'i' },
      { id: 'D', audio: A5, style: 'md:h-48 h-24 flex-0', caption: 'J', keyTrigger: 'j' },
      { id: 'G', audio: A6, style: 'md:h-48 h-24 flex-0', caption: 'K', keyTrigger: 'k' },
      { id: 'C', audio: A7, style: 'md:h-48 h-24 flex-0', caption: 'L', keyTrigger: 'l' },
      { id: 'H', audio: A2, style: 'md:h-48 h-24 flex-0', caption: 'S', keyTrigger: 's' },
      { id: 'F', audio: A3, style: 'md:h-48 h-24 flex-0', caption: 'D', keyTrigger: 'd' },
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


   return (
      <div>
         <Head>
            <title>Dashboard</title>
            <meta name="description" content="Bubbles" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/NeonIco.ico" />
         </Head>

         {/* Wrapper Start */}
         <main className=" bg-gradient-to-t from-PlanetDark to-Ind py-24 FlexCenter dark:bg-none scroll-smooth mx-auto  w-screen h-screen  ">

            {/* Container */}
            <div className="bg-coal Smooth ml-4 xl:rounded-full xl:w-fit xl:h-fit grid grid-cols-3 p-4 xl:p-24 lg:p-12 lg:h-5/6 lg:gap-x-24 lg:rounded-md items-center justify-between shadow-2xl  shadow-coal dark:shadow-OrbPurple ">

               {notes.map((item) => (
                  <Bubbles
                     key={item.name}
                     style={item.style}
                     audio={item.audio}
                     keyTrigger={item.keyTrigger} />
               ))}

               {/* <div className="Bubble w-1/5 flex-grow"></div> */}

               {/* <div className="Bubble h-48 flex-0  "></div> */}
               {/* <div className="Bubble w-1/6 h-1/6 flex-1 "></div> */}
               {/* <div className="Bubble w-1/6 h-1/6 flex-1 "></div> */}
               {/* <div className="Bubble h-48 flex-0 "><Link href='/ModernSynth'></Link></div> */}
               {/* <div className="Bubble w-1/5 flex-grow "></div> */}


            </div>


            {/* Container */}
            <div className="FlexCenterCol  h-fit  mt-4 font-pop ">

               <div className="FlexCenterCol h-fit p-2 w-fit md:w-7/12 lg:w-10/12 xl:w-8/12">
                  {/* Header */}
                 

               </div>
            </div>
         </main>
      </div>
   );
}
