      import Head from "next/head";       
      import { AiOutlineStar } from "react-icons/ai";
      import { BiSearch } from "react-icons/bi";
      import Image from "next/image";
      import Nav from "./Nav";
      // import Axis from "./Axis";
      import Banner from "./Banner";
      import Header from "./Header";
      import Top from "./Top";
      import SearchBar from "./SearchBar";
      import Skills from "./Skills";
      import Footer from "./Footer";
      import JS from "../../public/JS.png";
      import TS from "../../public/TS.png";
      import Tailwind from "../../public/tail.png";
      import Git from "../../public/git.png";
      import React from "../../public/react.png";
      import OpenAI from "../../public/openai.png";
      import Next from "../../public/next-js.svg";
      import sun from '../../public/sun.png';
      import SubV from '../../public/SubV.jpg';
      import Subversion from '../../public/Subversion.jpg';

      import Video from "./Video";

      export default function Home() {
        return (
          <>
            <Head>
              <title>Kris Dashboard </title>
              <meta name="description" content="Kris Dash" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/engine.png" />
            </Head>

            <main>
              <Nav />
              <Banner />

              {/* Wrapper Start */}
              <div className=" FlexCenterCol mt-4 font-pop BoxFull">
                <div className=" md:max-w-5xl FlexCenterCol p-2  h-fit min-h-fit w-full">
                  {/* Header */}
                  <Header style="Header" />

                  {/* Caption */}
                  <p className=" my-5 mb-5 p-4 leading-7 text-base text-gray-400 font-semibold text-center">
                    Hello, my name is Kristopher and I&apos;m a passionate
                    software developer that values creativity and optimization.
                  </p>

                  {/* Section */}
                  <div className=" BoxFull mx-4 p-4 mt-6 mb-12">
                    {/* Live Sites */}
                    <div className="Section">
                      <h1 className="CaptionBlock text-left text-white">
                        Live Sites
                      </h1>

                      {/* Prompt Engine */}
                      <div className="LiveSites ">
                        <div className="Round Shadow p-2 mr-4 bg-OpenAI">
                          <Image
                            src={OpenAI}
                            className="w-8"
                            // layout='fill'
                            // objectFit='cover'
                            alt="#"
                          />
                        </div>
                        <a
                          className="w-full text-gray-300"
                          href="https://prompt-engine.vercel.app/"
                        >
                          Prompt <span className="text-violet-500">Engine</span>
                          <p className="text-sm text-gray-500 ">
                            Created a prompt engine with a dynamic layout using
                            ChatGPT&apos;s API and Tailwind
                          </p>
                        </a>
                      </div>

                      {/* Weather App */}
                      <div className="LiveSites ">
                        <div className="Round Shadow p-2 mr-4 bg-sky-700">
                          <Image
                            src={sun}
                            className="w-8"
                            // layout='fill'
                            // objectFit='cover'
                            alt="#"
                          />
                        </div>
                        <a
                          className="w-full text-gray-300"
                          href="https://www.thesunsarc.com"
                        >
                          <span className="text-Aero">The Sun&apos;s</span> Arc
                          <p className="text-sm text-gray-500 ">
                            Created a miniamlist weather app
                          </p>
                        </a>
                      </div>
                    </div>

                    <div className="Section ">
                      <h1 className="CaptionBlock text-white">Skill Tree</h1>
                      <div className="BoxFull pt-4 lg:grid grid-cols-2 gap-x-2">
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
                      </div>
                    </div>

                    {/* Current Skill Tree */}
                    <div className="Section mt-4">
                      <h1 className="CaptionBlock ">Personal Works</h1>
                      <div className="FlexCenterCol BoxFull pt-4">
                        <h1 className='text-3xl NameShadow font-normal text-center pt-6 pb-8 p-4'>
                          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Prismatic // </span> <span className="font-thin">Subversion</span>
                        </h1>
                        <a href='https://open.spotify.com/artist/3je0rpoLMnH2doxB43msGn'> 
                        <Image
                         className='Round Shadow w-[600px] Push'
                          src={SubV}
                          // layout='fill'
                          objectFit='cover'
                          alt='#' />
                          </a>
                          <p className="text-base font-thin pt-8">Artwork by Joseph Harrel</p>
                      </div>
                      {/* <h1 className="CaptionBlock text-Redd"> Recent Compositions</h1> */}
                      {/* <Video /> */}
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
