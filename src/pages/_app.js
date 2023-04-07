import "../styles/tailwind.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';
import Splash from "./Splash";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      router.push("/");
    }
  }, []);

  if (router.pathname === "/" && isMobile) {
    return <Splash />;
  } else {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
}

export default MyApp;
