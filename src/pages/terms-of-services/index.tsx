import React, { useState, useRef, lazy, Suspense } from "react";
import Image from "next/image";
import FirstGif from "../gifs/1st.gif";
import SecondGif from "../gifs/2nd.gif";
import thirdGif from "../gifs/3rd.gif";
import logo from "../assets/profile_img.png";
import twitter from "../assets/twitter.svg";
import telegram from "../assets/telegram.svg";
import logoicon from "../assets/logoicon.svg";
import { TypeAnimation } from "react-type-animation";
import bg from "../assets/bg0.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import mbg from "../gifs/bgm.png";
import m2nd from "../gifs/m2nd.gif";
import m3rd from "../gifs/m3rd.gif";
import m1st from "../gifs/m1st.gif";
import Whitepaper from "@/components/Whitepaper";
import TermsofServices from "@/components/TermsofServices";
import Footer from "@/components/Footer";

// const Hero = lazy(() => import("../components/Hero"));

// const Hero = dynamic(() => import("../components/Hero"), {
//   loading: () => <LoadingScreen />,
// })

interface DivStyles {
  backgroundImage: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;
  position: string;
}

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  });

  return (
    <>
      {domLoaded && <div className="m-auto max-w-[2000px] overflow-x-hidden">
        <TermsofServices />
        <Footer/>
      </div>}
    </>
  );
};

export default Home;
