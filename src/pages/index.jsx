import Head from "next/head";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Nav from "./Nav";
import Axis from "./Axis";
import Banner from "./Banner";

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
        <div className=" FlexCenterCol mt-8 font-pop BoxScreen">
          <div className="md:max-w-5xl FlexCenterCol p-2  h-fit min-h-fit w-full">
            {/* Header */}
            <h1 className="md:text-5xl NameShadow cursor-text text-gray-300 text-4xl font-extrabold text-center">
              Rapidly <span className="text-Redd">optimizing </span>every step
              of development.
            </h1>

            {/* Caption */}
            <p className=" my-5 mb-5 leading-7 text-base text-gray-400 font-semibold text-center">
              Moving from audio engineering to web development, bringing a novel
              perspective blooming with creativity.
            </p>

            <div className=" md:flex-row flex items-center flex-col w-fit ">
              <button className="md:w-3/6 md:px-1 w-full py-2 p-2 Shadow rounded-3xl font-semibold text-xl text-gray-200 bg-Bluee ">
                Explore All
              </button>

              <button className=" md:w-11/12 md:mx-4 md:p-:my-0 flex items-center w-full mt-3 p-3 px-4 Shadow rounded-3xl text-left font-extralight text-sm text-gray-400 bg-gray-700 bg-opacity-50 ">
                <BiSearch className="text-2xl mr-1 text-Purpp" />
                Search for product, producer, region...
              </button>
            </div>

            <div className="hidden h-screen w-full bg-gradient-to-br from-LeftG via-MidP to-RightG  mx-4 mt-6">
              <div className="w-full h-fit p-3">
                <h1 className="text-2xl text-gray-300 NameShadow font-bold">
                  Best Picks
                </h1>
                <p className="text-gray-400 w-fit mr-4">
                  Get great value and seamless service with these brilliant
                  wines
                </p>
                <div className="MARK W-96 h-96 m-2 p-4">
                  <Axis />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
