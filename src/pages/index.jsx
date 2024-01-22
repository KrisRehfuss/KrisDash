import Head from "next/head";
import Timeline from "./Timeline";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Image from "next/image";
import Desktop from "../../public/Explode.png";
import Mobile from "../../public/NeonCityII.png";

import Link from 'next/link'
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Header from "./Header";
import Footer from "./Footer";

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

  const timelineData = [
    {
      title: 'LAN/WAN Engineer',
      company: 'Crozer Health System',
      time: 'June 2023 - Current',
      description: 'Enhanced network infrastructure performance by transitioning 200 switches to advanced Cisco Nexus Cores, significantly boosting transmission speeds. Upgraded connectivity for remote sites by transitioning from EVPL to ENS circuits, substantially elevating system reliability and resilience.',
    },

    {
      title: 'Network Support Engineer',
      company: 'Network Connections',
      time: 'Dec 2020 - May 2023',
      description: 'Boosted company revenue by 200% by creating a comprehensive training manual, greatly streamlining the induction of 6 new engineers.',
    },

    {
      title: 'Service Technician',
      company: 'DaVita Dialysis',
      time: 'Dec 2019 - Dec 2020',
      description: 'Managed the installation of routers, switches, Wi-Fi access points, and security firewalls for brand new clinics. Ran and terminated up to 200 data lines per site, providing robust and reliable data connections to the whole facility.',
    },

  ];




  return (
    <div className="scroll-smooth bg-white BoxFull Smoother">
      <Head>
        <title>Kris Rehfuss Portfolio </title>
        <meta name="Kris Rehfuss" content="Home" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/DNA.svg" />
      </Head>

      {/* Parent Container */}
      <div className="flex flex-col flex-center font-pop BoxFull">

        {/* Splash */}
        <div className="MainCard flex flex-col md:space-y-24 space-y-36 BoxScreen ">

          {/* <Image
            src={Desktop}
            priority={true}
            className="hidden md:inline-block"
            layout='fill'
            objectFit='cover'
            alt='#'
          /> */}



          {/* Name */}
          <div className=" p-4">
            <Header
              style="Header mt-24 p-4 lg:text-5xl text-5xl w-fit antialiased"
              text='Kristopher Rehfuss '
            />

            {/* Caption */}
            <p className="p-4 lg:text-3xl lg:px-6 leading-7 text-base text-coal text-coal/70 text-center">
              Network & DevOps Engineer
            </p>
          </div>


          {/* Resume */}
          <div className="FlexCenterCol Boxfit md:p-8">
            <a href="/Resume_KR_2024.pdf"
              download="Kristopher_Rehfuss_Resume.pdf"
              className="MARK p-8 FlexCenterCol">
              <IoCloudDownloadOutline className="text-3xl text-coal" /> {/* Adjust the size as needed */}
              <span className='text-coal'>Download Resume</span>
            </a>

          </div>

          <div>
            <Footer />
          </div>

        </div>

        {/* Timeline */}
        <div className="FlexCenter md:BoxScreen">
          <div className="md:w-2/3 ">
            <p className="pt-12 pb-4 md:pb-8 text-4xl text-slate-700 text-center">My Experience</p>
            <Timeline data={timelineData} />
          </div>
        </div>

        {/* Footer */}

        <div className='mt-24 mb-12 text-center text-coal text-sm'>
          {/* <p className="text-2xl ">contact me!</p> */}
          <p className="py-4"> Developed by Kristopher Rehfuss</p>
          <p className="">All rights reserved. @ 2024</p>
        </div>


      </div>
    </div>
  );
}
