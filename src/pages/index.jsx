import Head from "next/head";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Nav from "./Nav";
// import Axis from "./Axis";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import Skills from "./Skills";
import JS from "../../public/JS.png";
import TS from "../../public/TS.png";
import Tailwind from '../../public/tail.png'
import Git from '../../public/git.png'
import React from '../../public/react.png'
import OpenAI from '../../public/openai.png'
import Next from '../../public/next-js.svg'
import Video from "./Video";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kris Dashboard </title>
        <meta name="description" content="Kris Dash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/engine.png" />
      </Head>

      <main>
        <Nav />
        <Banner />

        {/* Wrapper Start */}
        <div className=" FlexCenterCol mt-4 font-pop BoxFull">
          <div className=" md:max-w-5xl FlexCenterCol p-2  h-fit min-h-fit w-full">
            {/* Header */}
            <h1 className="mt-4 md:text-5xl NameShadow cursor-text text-gray-300 text-4xl font-extrabold text-center">
              Rapidly <span className="text-Aero">optimizing </span>every step
              of development.
            </h1>

            {/* Caption */}
            <p className=" my-5 mb-5 leading-7 text-base text-gray-400 font-semibold text-center">
              Phasing from Audio Engineer to React Developer, bringing a novel
              perspective blooming with efficiency & creativity.
            </p>

            {/* Current Skill Tree */}
            <div className=" BoxFull mx-4 p-4 mt-2 mb-24">
              <div className="w-full h-fit p-3 ">
                <h1 className="CaptionBlock">Skill Tree</h1>
                <div className="BoxFull pt-4 lg:grid grid-cols-2 gap-x-2">
                  <Skills logo={Next} name="Next.js" color="bg-gray-400" />
                  <Skills logo={React} name="React.js" color="bg-React" />
                  <Skills logo={Tailwind} name="Tailwind" color="bg-gray-800" />
                  <Skills logo={Git} name="Git" color="bg-Git" />
                  <Skills logo={TS} name="TypeScript" color="bg-TS" />
                  <Skills logo={OpenAI} name="OpenAI" color="bg-OpenAI" />
                </div>
              </div>
              <div className="mt-4 w-full-h-fit p-3">
                <h1 className="CaptionBlock"> Recent Compositions</h1>
                <Video />
              </div>
            </div>
            <SearchBar />
          </div>
        </div>
      </main>
    </>
  );
}
