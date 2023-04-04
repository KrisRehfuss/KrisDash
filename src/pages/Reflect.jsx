import Head from "next/head";
// import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { FaMusic } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import Link from 'next/link';
import Art from './Art';
import Header from "./Header";

import Art1 from "../../public/AI/Tree.png";
import Art2 from "../../public/AI/NeonTree.jpg";
import Art3 from "../../public/AI/TreeColor.png";
import Art4 from "../../public/AI/TreeColor2.png";
import Art5 from "../../public/AI/ModernPlants2.png";
import Art6 from "../../public/AI/ModernArt3.png";
import Art7 from "../../public/AI/planets.png";
import Art8 from "../../public/AI/Planets5.png";
import Art9 from "../../public/AI/CandyMountains.png";

import Keys from "../../public/Key.png";

import A1 from "../../public/Piano/Anchor/ZiloRo-001.mp3";
import A2 from "../../public/Piano/Anchor/ZiloRo-002.mp3";
import A3 from "../../public/Piano/Anchor/ZiloRo-003.mp3";
import A4 from "../../public/Piano/Anchor/ZiloRo-004.mp3";
import A5 from "../../public/Piano/Anchor/ZiloRo-005.mp3";
import A6 from "../../public/Piano/Anchor/ZiloRo-006.mp3";
import A7 from "../../public/Piano/Anchor/ZiloRo-007.mp3";
import A8 from "../../public/Piano/Anchor/ZiloRo-008.mp3";
import A9 from "../../public/Piano/Anchor/ZiloRo-009.mp3";

import R1 from "../../public/Piano/Anchor/ZiloRobot-001.mp3";
import R2 from "../../public/Piano/Anchor/ZiloRobot-002.mp3";
import R3 from "../../public/Piano/Anchor/ZiloRobot-003.mp3";
import R4 from "../../public/Piano/Anchor/ZiloRobot-004.mp3";
import R5 from "../../public/Piano/Anchor/ZiloRobot-005.mp3";
import R6 from "../../public/Piano/Anchor/ZiloRobot-006.mp3";
import R7 from "../../public/Piano/Anchor/ZiloRobot-007.mp3";
import R8 from "../../public/Piano/Anchor/ZiloRobot-008.mp3";
import R9 from "../../public/Piano/Anchor/ZiloRobot-009.mp3";



export default function Reflect() {

      // Pager
   const router = useRouter();

   const handleKeyDown = (event) => {
      if (event.key === 'p' || event.key === 'P') {
         router.push('/Sin');
      } else if (event.key === 'c' || event.key === 'C') {
         router.push('/ModernSynth');
      } else if (event.key === '[') {
         router.push('/Kinetic');
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

   // Theme Change on Space
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
      { id: 'E', image: Art1, audio: A4, caption: 'W', keyTrigger: 'w'},
      { id: 'A', image: Art1, audio: A8, caption: 'U', keyTrigger: 'u'},
      { id: 'B', image: Art1, audio: A9, caption: 'I', keyTrigger: 'i'},
      { id: 'D', image: Art1, audio: A5, caption: 'J', keyTrigger: 'j'},
      { id: 'G', image: Art1, audio: A6, caption: 'K', keyTrigger: 'k'},
      { id: 'C', image: Art1, audio: A7, caption: 'L', keyTrigger: 'l'},
      { id: 'I', image: Art1, audio: A1, caption: 'A', keyTrigger: 'a'},
      { id: 'H', image: Art1, audio: A2, caption: 'S', keyTrigger: 's'},
      { id: 'F', image: Art1, audio: A3, caption: 'D', keyTrigger: 'd'},
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
            <link rel="icon" href="/TreeIcon.ico" />
         </Head>

         {/* Wrapper Start */}
         <main className="GridWrapper h-fit Smoother ">

            {/* Nav */}
            <div 
               className="Nav grid-cols-2 z-10 antialiased lg:px-0 shadow-2xl Smoother shadow:coal dark:shadow-Treal ">

               {/* Logo */}
               <a href="https://www.krisrehfuss.com" alt="home">
                  <div className="NameShadow text-whiteish dark:text-white Smoother text-xl flex items-center justify-center lg:pl-24 ml-4 h-full m-0 text-center font-bold">
                     {/* <Image className=" mr-3 w-12" src={M} alt="M Logo" /> */}
                     Modern<span className="ml-1 text-Sub"> Synth </span>
                  </div>
               </a>

      
               {/* Links */}
               <div className="xl:pr-48 lg:pr-16 flex gap-4 w-fit items-center justify-end text-coal dark:text-white h-full">
                  <div className="Pull md:px-4 active:text-Redd BoxFit"> <a href='https://www.krisrehfuss.com'> Home </a> </div>
                  <div className="Pull md:px-4 active:text-Redd BoxFit"> <Link href='/ModernSynth'> Gallery </Link> </div>
                  {/* <div className="NavItem p-2 text-xl text-coal dark:text-white"  onMouseEnter={Darken}>
                     <FaMusic className="hover:text-DarkTeal Smoother" />
                  </div> */}

               {/* Kintetic */}
                  <div className="md:hidden NavItem p-2 text-xl text-coal dark:text-white"  onClick={Darken}>
                     <FaMusic className="hover:text-DarkTeal Smoother" />
                  </div>
                  <div className="hidden md:inline-block NavItem p-2 text-xl text-Tred  " >
                     <Link href='/Kinetic'><FaMusic className="animate-bounce hover:text-white  transition transform duration-150 ease-out hover:animate-none Smoother" /></Link>
                  </div>
               </div>
            </div>


            {/* Container */}
            <div className="FlexCenterCol  h-fit  mt-4 font-pop ">

               <div className="FlexCenterCol h-fit p-2 w-fit md:w-7/12 lg:w-10/12 xl:w-8/12">

                  {/* Header */}
                 
                  
                  {/* More Containers? */}
                  <div className=" w-full mx-4 px-4 mt-2 md:mb-6 mb-2">
                     <div className="w-full FlexCenter h-fit p-3 mb-4 ">

                        {/* Key Picture
                        <div className="hidden dark:hidden lg:block border-2 border-white absolute left-40 h-96 p-8">
                           <Image src={Keys} width={240} alt='Keys'/>
                        </div> */}

                        {/* Grid Container */}
                        <div 
                           className="md:-mt-24 
                        grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-3 w-full
                           p-6 gap-8 dark:gap-12 dark:pt-16  
                              lg:gap-32 lg:p-12 lg:pt-64 
                                 lg:dark:grid-cols-3 lg:dark:py-12 lg:dark:pt-[300px] lg:dark:gap-y-64 lg:dark:gap-x-48
                              xl:p-64 xl:pt-36 xl:gap-16
                                 xl:dark:gap-36 xl:dark:pt-36 xl:dark:px-64
                                    ">

                           {notes.map((item) => (
                              <Art
                                 key={item.name}
                                 image={item.image}
                                 audio={item.audio}
                                 // caption={item.caption} 
                                 keyTrigger={item.keyTrigger} />
                           ))}


                        </div>
                        
                     </div>
                         <Header style="
                        md:-mt-24 md:text-6xl dark:mt-24
                        xl:w-full xl:inline-block xl:ml-24 xl:text-9xl 
                        lg:hidden lg:-mt-96 lg:text-9xl lg:text-right lg:ml-[400px]
                        xl:dark:hidden

                        text-5xl w-fit NameShadow hover:text-Aero cursor-text SubversionText font-extrabold text-center Smoother antialiased " 
                  text='Reflect' />

                     <div className='w-fit h-fit '> <Link href='/Kinetic'>
                        <Header style="mt-12 text-4xl md:hidden
                        md:-mt-24 md:text-6xl
                        xl:w-full xl:ml-24 xl:text-9xl 
                        dark:hidden     
                        lg:hidden lg:-mt-96 lg:text-9xl lg:text-right lg:ml-[400px]

                        w-fit NameShadow Push cursor-pointer text-white/40 hover:text-white/100 active:text-white/100  font-extrabold text-center Smoother antialiased "
                           text='Kinetic' />
                     </Link></div>

                     <div className='w-fit h-fit '><Link href='/ModernSynth'>
                        <Header style="mt-6 mb-4 text-4xl md:hidden
                        md:-mt-24 md:text-6xl
                        xl:w-full xl:ml-24 xl:text-9xl 
                        dark:hidden xl:dark:hidden 
                        lg:hidden lg:-mt-96 lg:text-9xl lg:text-right lg:ml-[400px]

                        w-fit NameShadow Push cursor-text text-white/40 hover:text-white/100  font-extrabold text-center Smoother antialiased "
                           text='Modern' />
                     </Link></div>
                
                     {/* Live Sites */}
                  </div>
                  {/* // Link Container */}
                  <div className="FlexCenterCol absolute bottom-0  hover:text-PlanetO text-4xl ">
                     {/* <Link href='/Grid'></Link>  */}
                     {/* <AiFillQuestionCircle /> */}

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
