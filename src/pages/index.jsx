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
          <>
            <Head>
              <title>Kris Dashboard </title>
              <meta name="description" content="Dashboard" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/engine.png" />
            </Head>

            <main className="MAIN Smoother">
              <Nav />
              <Banner />

              <button
                type="button"
                onClick={handleThemeSwitch}
                className="fixed p-2 z-10 PullHard bottom-10 right-10 border-2 dark:border-Pinkk border-CityBlu text-lg rounded-full"
              >
                {theme === "dark" ? BsSun : BsMoon}
              </button>

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
                        <Prismatic audio={Chord2} />
                      </div>
                      {/* <h1 className="CaptionBlock text-Redd"> Recent Compositions</h1> */}
                    </div>
                  </div>
                  <Footer />
                  {/* <SearchBar /> */}
                </div>
              </div>
            </main>
          </>
        );
      }
