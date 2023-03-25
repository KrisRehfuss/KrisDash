import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Art from './Art';
import Header from "./Header";
import SkillTree from "./SkillTree";
import Menu from './Menu'

import Art1 from "../../public/AI/Art.png";
import Art2 from "../../public/AI/Art2.png";
import Art3 from "../../public/AI/Art3.png";
import Art4 from "../../public/AI/Art4.png";
import Art5 from "../../public/AI/Art5.png";
import Art6 from "../../public/AI/Art6.png";
import Art7 from "../../public/AI/Art7.png";
import Art8 from "../../public/AI/Art8.png";
import Art9 from "../../public/AI/Art9.png";
import Time1 from "../../public/AI/Time.png";
import Time2 from "../../public/AI/Time2.png";
import Time3 from "../../public/AI/Time3.png";
import Time4 from "../../public/AI/Time4.png";



import React, { useRef, useState, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import Banner from "./Banner";
import City from "../../public/City.jpg";
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

	const items = [
		{ name: 'A', image: Art1 },
		{ name: 'B', image: Time2 },
		{ name: 'C', image: Art7 },
		{ name: 'D', image: Time1 },
		{ name: 'E', image: Art5 },
		{ name: 'F', image: Time3 },
		{ name: 'G', image: Art7 },
		{ name: 'H', image: Time4 },
		// { name: 'J', image: Art10},
		// { name: 'K', image: Art11},
		// { name: 'L', image: Art12},
	]



	return (
		<div>
			<Head>
				<title>Kris Dashboard </title>
				<meta name="description" content="Dashboard" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/next-js.ico" />
			</Head>

			{/* Wrapper Start */}
			<main className="MAIN Smoother">

				{/* Nav */}
				<div className="Nav grid-cols-2 z-10 antialiased shadow-2xl dark:shadow-Ind ">

					{/* Logo */}
					<a href="https://www.krisrehfuss.com" alt="home">
						<div className="NameShadow lg:text-xl  flex items-center justify-center lg:pl-24 ml-4 h-full m-0 text-center text-coal dark:text-whiteish font-bold">
							{/* <Image className=" mr-3 w-12" src={M} alt="M Logo" /> */}
							Kris<span className="ml-1 text-Sub"> Rehfuss </span>
						</div>
					</a>


					{/* Links */}
					<div className="lg:pr-48 flex gap-4 w-fit items-center justify-end text-coal dark:text-white h-full">
						<div className="Pull md:px-4 BoxFit"> <a href='https://www.krisrehfuss.com'> Home </a> </div>
						<div className="Pull md:px-4 BoxFit"> <Link href='/Grid'> Gallery </Link> </div>
						<div className="NavItem p-2 text-2xl text-Redd" onClick={handleThemeSwitch}>
							<BsSun className="hover:animate-spin hover:text-yellow-500" />
						</div>
					</div>
				</div>

				<Banner image={City} />

				{/* Container */}
				<div className="FlexCenterCol mt-4 font-pop ">

					<div className="FlexCenterCol p-2  w-fit md:w-7/12 lg:w-8/12 xl:w-6/12">

						{/* Header */}
						<Header style="Header antialiased mb-12" text='AI Gallery' />

						<div className="BoxFull mx-4 px-4 mt-2 mb-6">
							<div className="w-full h-fit p-3 mb-4 ">

								{/* Grid Container */}
								<div className="grid lg:grid-cols-3 grid-cols-2 gap-8 gap-y-12  items-center ">
									{items.map((item) => (
										<Art
											key={item.name}
											image={item.image} />
									))}


								</div>
							</div>
							{/* Live Sites */}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
