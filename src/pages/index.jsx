import Head from "next/head";
import Boxes from "./Boxes"
import Link from 'next/link'
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import BannerImage from "../../public/Abstract2.jpg";
import { useRouter } from 'next/router';
// import Axis from "./Axis";
import Banner from "./Banner";
import Header from "./Header";
import SkillTree from "./SkillTree";
import { BsSun } from "react-icons/bs";

import Footer from "./Footer";
import LiveSites from './LiveSites.jsx'
import Prismatic from "./Prismatic";
import Chord from "../../public/Piano/Chord.mp3";
import Chord2 from "../../public/Piano/Chord-02.mp3";
import Chord3 from "../../public/Piano/Chord-03.mp3";
import M from "../../public/Engine.png";

export default function Home() {

  // Pager
  const router = useRouter();

  const Pager = (event) => {
    if (event.key === 'p' || event.key === 'P') {
      router.push('/ModernSynth');
    } else if (event.key === 'c' || event.key === 'C') {
      router.push('/Splash');
    } else if (event.key === '[') {
      router.push('/Reflect');
    }
    else if (event.key === 'h') {
      router.push('/');
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', Pager);
    return () => {
      window.removeEventListener('keydown', Pager);
    };
  }, []);

  // Themer
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').
      matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const Themer = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // Theme Change on Space
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Space') {
        event.preventDefault();
        Themer();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });




  return (
    <div className="MAIN Smoother">
      <Head>
        <title>Hyper.ai </title>
        <meta name="description" content="Home" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/DNA.svg" />
      </Head>



        {/* Container */}
      <div className="border-2 flex flex-col font-pop BoxScreen">
        {/* Name */}
          <div className="BoxFit border-b m-8 p-8 ">
            <p className="p-4 text-4xl">Bitwise AND Operation</p>
            <p className="px-4 text-lg">Networking Practice</p>
          </div>

          <Boxes />
          <Boxes />
          <Boxes />
          


        

          
      
        </div>
      {/* </main> */}
    </div>
  );
}
