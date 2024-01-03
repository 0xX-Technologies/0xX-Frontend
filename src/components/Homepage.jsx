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
import { Squash as Hamburger } from "hamburger-react";
import PoweredBy from "../components/PoweredBy";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Team from "../components/Team";
// import Hero from "../components/Hero"
import LoadingScreen from "../components/LoadingScreen";
import Demo from "../components/Demo";
import dynamic from 'next/dynamic'
import Hero from "../components/Hero";
import DetailedRoadmap from "../components/DetailedRoadmap"

const Homepage = () => {
  return (
    <>
    <div className="m-auto max-w-[2000px] overflow-x-hidden">
      <Hero />
      <PoweredBy />
      <Demo />
      <Roadmap />
      
      <Team/>
      <Footer />     
    </div>
    </>
  )
}

export default Homepage