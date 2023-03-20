import Head from "next/head";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Nav from "./Nav";
import React, { useRef, useState, useEffect } from "react";
// import Axis from "./Axis";
import Banner from "./Banner";
import Header from "./Header";
import SkillTree from "./SkillTree";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import Top from "./Top";
import SearchBar from "./SearchBar";
import Skills from "./Skills";
import Footer from "./Footer";
import JS from "../../public/JS.png";
import TS from "../../public/TS.png";
import Tailwind from "../../public/tail.png";
import Git from "../../public/git.png";
import Reacts from "../../public/react.png";
import OpenAI from "../../public/openai.png";
import Next from "../../public/next-js.svg";
import sun from '../../public/sun.png';
import Prismatic from "./Prismatic";
import Chord from "../../public/Piano/Chord.mp3";
import Chord2 from "../../public/Piano/Chord-02.mp3";
import Chord3 from "../../public/Piano/Chord-03.mp3";
import Chord4 from "../../public/Piano/Chord-04.mp3";
import M from "../../public/Engine.png";
import { RxHamburgerMenu } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

import SubV from '../../public/SubV.jpg';
import Subversion from '../../public/Subversion.jpg';


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
        <link rel="icon" href="/engine.png" />
      </Head>

      <main>

        {/* Nav */}
        <div className="Nav z-50 antialiased shadow-2xl  dark:shadow-Redd ">
          {/* Logo */}
          <div className="NameShadow FlexCenter ml-4 h-full m-0 text-center text-coal dark:text-whiteish font-bold text-xl">
            <Image className=" mr-3 w-12" src={M} alt="M Logo" />
            Kris<span className="ml-1 text-Sub"> Rehfuss </span>
          </div>

          {/* Search Bar */}
          <div className=" lg:flex items-center justify-center Round h-full">
            <input
              className="hidden ClearDrop lg:w-3/4 w-1/4 Shadow bg-Logo bg-opacity-60 rounded-full p-2 text-sm font-light  text-white px-4"
              type="text"
            />
            <BiSearch className="hidden h-8 w-8 p-2 mx-4 cursor-pointer rounded-full bg-Purpp" />
          </div>

          {/* Icons */}
          <div className="FlexCenter h-full  text-2xl mr-4 text-Redd  space-x-4 ">
            <div className=" NavItem p-2">
              <a href="https://www.krisrehfuss.com" alt="home">
                <AiOutlineHome />{" "}
              </a>
            </div>

            <div className=" NavItem p-2">
                <BsSun onClick={handleThemeSwitch} className="hover:animate-spin hover:text-yellow-500" />
            </div>

            <div className="mt-1 p-2 Round cursor-pointer hover:text-Aero">
              <a href="https://chat.openai.com/chat" alt="OpenAI">
                <BsChatLeft className="w-5 " />
              </a>
            </div>
          </div>
        </div>        
        <Banner />




        {/* Wrapper Start */}
        <div className=" FlexCenterCol mt-4 font-pop BoxFull">
          <div className="MainCard">
            {/* Header */}
            <Header style="Header antialiased" />

            {/* Caption */}
            <p className="my-5 mb-3 p-4 lg:text-xl lg:px-12 leading-7 text-base dark:text-whiteish text-coal/70 font-semibold text-center">
              Hello, my name is Kristopher and I&apos;m a passionate
              software developer that values creativity and optimization.
            </p>



            {/* Section */}
            <div className=" BoxFull mx-4 px-4 mt-2 mb-6">
              {/* Live Sites */}
              <div className="Section">            
              
              <button
                type="button"
                onClick={handleThemeSwitch}
                className="fixed right-20 ml-20 p-2 z-10 text-2xl rounded-full"
              >
                {/* {theme === "dark" ? sun : moon} */}
              </button>

                <h1 className="CaptionBlock lg:text-sm text-xs text-left text-coal">
                  Live Sites
                </h1>

                {/* Prompt Engine */}
                <div className="LiveSites ">
                  <div className="Round p-2 lg:mr-4 mr-2 bg-OpenAI">
                    <Image
                      src={OpenAI}
                      className="lg:w-8 w-6"
                      // layout='fill'
                      // objectFit='cover'
                      alt="#"
                    />
                  </div>
                  <a
                    className="w-full dark:text-gray-700 text-gray-200"
                    href="https://prompt-engine.vercel.app/"
                  >
                    Prompt <span className="text-violet-500">Engine</span>
                    <p className="lg:text-sm text-xs dark:text-gray-700 text-gray-400 ">
                      Created a prompt engine with a dynamic layout using
                      ChatGPT&apos;s API and Tailwind
                    </p>
                  </a>
                </div>

                {/* Weather App */}
                <div className="LiveSites ">
                  <div className="Round Shadow p-2 lg:mr-4 mr-2 bg-sky-700">
                    <Image
                      src={sun}
                      className="lg:w-8 w-6"
                      // layout='fill'
                      // objectFit='cover'
                      alt="#"
                    />
                  </div>
                  <a
                    className="w-full dark:text-gray-700 text-gray-200"
                    href="https://www.thesunsarc.com"
                  >
                    <h3 className="font-normal">
                      The{" "}
                      <span className="PrismaticText">
                        Sun&apos;s Arc
                      </span>
                    </h3>
                    <p className="lg:text-sm text-xs text-gray-400 dark:text-gray-700 ">
                      Created a miniamlist weather app
                    </p>
                  </a>
                </div>
              </div>

              <div className="Section  ">
                <h1 className="CaptionBlock text-coal">My Skills</h1>
                <div className="BoxFull mt-8 relative text-coal px-1 ">
                  <SkillTree />
                </div>
                {/* <div className="BoxFull pt-4 lg:grid grid-cols-2 gap-x-2">
                        <Skills
                          logo={Next}
                          name="Next.js"
                          color="bg-gray-400"
                        />
                        <Skills logo={React} name="React.js" color="bg-React" />
                        <Skills
                          logo={Tailwind}
                          name="Tailwind"
                          color="bg-gray-800"
                        />
                        <Skills logo={Git} name="Git" color="bg-Git" />
                        <Skills logo={TS} name="TypeScript" color="bg-TS" />
                        <Skills logo={OpenAI} name="OpenAI" color="bg-OpenAI" />
                      </div> */}
              </div>

              {/* Current Skill Tree */}
              <div className="Section mt-4">
                <h1 className="CaptionBlock text-coal">Personal Works</h1>

                <div className="FlexCenterCol BoxFull pt-4">
                  <Prismatic audio={Chord4} />
                </div>
                {/* <h1 className="CaptionBlock text-Redd"> Recent Compositions</h1> */}
              </div>
            </div>
            <Footer />
            {/* <SearchBar /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
