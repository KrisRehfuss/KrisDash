import Head from "next/head";
import Link from 'next/link'
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import BannerImage from "../../public/Abstract2.jpg";

// import Axis from "./Axis";
import Banner from "./Banner";
import Header from "./Header";
import SkillTree from "./SkillTree";
import { BsSun } from "react-icons/bs";
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
      <main>

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
            <div className="MARK Pull px-4 BoxFit"> <Link href='/Index'> Home </Link> </div>
            <div className="MARK Pull px-4 BoxFit"> <Link href='/Grid'> Gallery </Link> </div>
            <div className="MARK hidden px-4 BoxFit"> Test </div>
            <div className="MARK hidden px-4 BoxFit"> Test </div>
            


          </div>

          {/* Icons */}
          <div className="flex items-center justify-center pr-24  text-2xl text-Redd  ">

            <div className=" NavItem p-2" onClick={handleThemeSwitch}>
              <BsSun className="hover:animate-spin hover:text-yellow-500" />
            </div>

            <div className="p-2 hidden Round cursor-pointer hover:text-Ind">
              
                <Menu  />
            </div>
          </div>
        </div>

        <Banner image={BannerImage}/>

        {/* Container */}
        <div className="FlexCenterCol mt-4 font-pop BoxFull">
          <div className="MainCard">

            {/* Header */}
            <Header 
            style="Header antialiased"
            text='Welcome to my dashboard'
             />

            {/* Caption */}
            <p className="my-5 mb-3 p-4 lg:text-xl lg:px-12 leading-7 text-base dark:text-whiteish text-coal/70 font-semibold text-center">
              Hello, my name is Kristopher and I&apos;m a passionate software engineer that values creativity and optimization.
            </p>



            {/* Section */}
            <div className="BoxFull mx-4 px-4 mt-2 mb-6">
              {/* Live Sites */}
              <LiveSites />



              {/* My Skills */}
              <div className="Section">
                <h1 className="CaptionBlock text-coal">My Skills</h1>
                <div className="BoxFull mt-8 relative text-coal px-1 ">
                  <SkillTree />
                </div>
              </div>

              {/* Current Skill Tree */}
              <div className="Section mt-4">
                <h1 className="CaptionBlock text-coal">Personal Works</h1>

                <div className="FlexCenterCol BoxFull pt-4">
                  <Prismatic audio={Chord} />
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
