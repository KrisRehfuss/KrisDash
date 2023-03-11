import Head from 'next/head'
import { AiOutlineStar } from "react-icons/ai";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kris Dash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
          <div className="MARK FlexCenterCol BoxScreen">
            <div className="MARK h-24 min-h-fit w-full">
              <h1 className="cursor-text place-items-center text-4xl font-bold text-center">
                Rapidly compare wines without changing tab.
              </h1>
          

            </div>
          </div>

          

      


      </main>
    </>
  )
}
