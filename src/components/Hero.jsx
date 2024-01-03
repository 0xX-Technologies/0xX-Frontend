import React, { useState, useRef } from "react";
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
import m2nd from "../gifs/m2nd.gif";
import m3rd from "../gifs/m3rd.gif";
import m1st from "../gifs/m1st.gif";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const Hero = () => {
  const [boolValue, setBoolValue] = useState(true);
  const [isGifPlayed, setIsGifPlayed] = useState(false);
  const [nextGifPlayed, setNextGifPlayed] = useState(false);
  const [opacityChange, setOpacityChange] = useState(false);
  const [screenWidth, setScreenWidth] = useState(true);

  // console.log(window.innerWidth)

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
      if (newScreenWidth > 768) setBoolValue(true);
      else setBoolValue(false);
    };

    AOS.init();
    handleResize();

    const timer = setTimeout(() => {
      setIsGifPlayed(true);
    }, 4500);

    const opacityChanger = setTimeout(() => {
      setOpacityChange(true);
    }, 4100);

    const secondTimer = setTimeout(() => {
      setNextGifPlayed(true);
    }, 18000);

    return () => {
      clearTimeout(opacityChanger);
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [screenWidth, boolValue, isGifPlayed, nextGifPlayed]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex min-h-[850px] max-h-[950px] md:max-h-[1080px] flex-col justify-start items-center h-[100vh] relative rounded-b-md bg-gradient-to-b from-black to-[#151515] "
      >
        {!isGifPlayed ? (
          boolValue ? (
            <Image
              unoptimized={true}
              id="myGif"
              src={FirstGif}
              className={`opacity-transition ${
                opacityChange ? "opacity-0" : ""
              }`}
              alt="Loading..."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          ) : (
            <Image
              unoptimized={true}
              id="my2ndGif"
              src={m1st}
              className={`opacity-transition ${
                opacityChange ? "opacity-0" : ""
              }`}
              alt="Loading..."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "top",
              }}
            />
          )
        ) : (
          <>
            <div
              data-aos="fade"
              data-aos-duration="1500"
              className="flex py-4 px-3 gap-36 m-4 mt-6 items-center z-50 justify-between bg-[#161616] w-[95vw] md:w-[70vw] backdrop-blur-xl h-[65px] rounded-[1.5rem] xl:w-[1083px]"
            >
              <div className="flex items-center z-50">
                <div className="text-white pl-4 cursor-pointer DM text-[14px] lg:text-[17px] transition-all duration-100 font-medium tracking-widest ">
                  TypeAI
                </div>
                <Image
                  unoptimized={true}
                  src={logo}
                  alt="Logo"
                  style={{ width: "2rem" }}
                />
              </div>
              <div className="hidden xl:inline-flex xl:items-start xl:gap-10">
                <Link
                  href="#demo"
                  className="Inter transition-all duration-100 text-white leading-6 font-bold font-mono hover:text-[#FFDF00] active:text-[#D4AF37] "
                >
                  Demo
                </Link>
                <Link
                  href="#roadmap"
                  className="Inter transition-all duration-100 text-white leading-6 font-bold font-mono hover:text-[#FFDF00] active:text-[#D4AF37] "
                >
                  Roadmap
                </Link>
                <Link
                target="_blank"
                  href="/whitepaper"
                  className="Inter transition-all duration-100 text-white leading-6 font-bold font-mono hover:text-[#FFDF00] active:text-[#D4AF37] "
                >
                  Whitepaper
                </Link>
                <Link
                  href="#team"
                  className="Inter transition-all duration-100 text-white leading-6 font-bold font-mono hover:text-[#FFDF00] active:text-[#D4AF37] "
                >
                  Team
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-4">
                  <div className="hidden xl:flex gap-4">
                    <Link target="_blank" href="https://twitter.com/Typeaieth">
                        <Image src={twitter} alt="twitter" />
                    </Link>
                    <Link target="_blank" href="https://t.me/typeaieth">
                      <Image src={telegram} alt="telegram" />
                    </Link>
                  </div>

                  <button className="rounded-2xl md:block hidden border border-solid border-yellow-500 pl-1 pr-1 sm:pl-8 sm:pr-8 pt-2 pb-2 uppercase cursor-pointer text-yellow-500">
                    CHART
                  </button>
                  <div className="bg-[#2D2D2D] rounded-2xl md:hidden border border-yellow-500 cursor-pointer text-yellow-500">
                    <Hamburger size={15} color="white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-duration="1500"
              className="absolute bottom-0"
            >
              {!nextGifPlayed ? (
                boolValue ? (
                  <Image
                    unoptimized={true}
                    id="myGif"
                    src={SecondGif}
                    alt="Loading..."
                    style={{
                      width: "100vw",
                      height: "100%",
                      objectFit: "cover",
                      minHeight: "50rem",
                      minWidth: "10rem",
                      maxWidth: "50rem",
                    }}
                  />
                ) : (
                  <Image
                    unoptimized={true}
                    id="myGif"
                    src={m2nd}
                    alt="Loading..."
                    style={{
                      width: "100vw",
                      objectFit: "cover",
                      minHeight: "30rem",
                      minWidth: "10rem",
                      maxWidth: "23rem",
                    }}
                  />
                )
              ) : boolValue ? (
                <Image
                  unoptimized={true}
                  id="myGif"
                  src={thirdGif}
                  alt="Loading..."
                  style={{
                    width: "100vw",
                    height: "100%",
                    objectFit: "cover",
                    minHeight: "50rem",

                    minWidth: "10rem",
                    maxWidth: "50rem",
                  }}
                />
              ) : (
                <Image
                  unoptimized={true}
                  id="myGif"
                  src={m3rd}
                  alt="Loading..."
                  style={{
                    width: "100vw",
                    objectFit: "cover",
                    minHeight: "30rem",
                    minWidth: "10rem",
                    maxWidth: "23rem",
                  }}
                />
              )}
            </div>
            <div data-aos="fade" data-aos-duration="1500">
              <div className="pt-[4rem]  ">
                <div className="text-center text-[8vw] md:text-[5vw] lg:text-[74.97px]">
                  <span className="font-thin text-white">YOUR</span>{" "}
                  <span className="font-bold text-[#FFC100]">PERSONALIZED</span>{" "}
                  <br /> <span className="font-bold text-white">AI-CRYPTO</span>{" "}
                  <span className="font-thin text-white">COMPANION</span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-duration="1500"
              className="flex flex-col items-center md:items-start md:flex-row md:justify-between w-[90vw] xl:w-[75rem] mt-[3rem]"
            >
              <div className="rounded-2xl bg-[#161616] w-[21rem] lg:w-[30vw] max-w-[30rem] h-[65px] flex justify-between items-center pr-[10px] pl-[10px]">
                <span className="text-gray-300 overflow-hidden whitespace-nowrap text-[12px] md:text-[14px]">
                  <TypeAnimation
                    preRenderFirstString={false}
                    sequence={[
                      500,
                      "I want to swap 2 eth for usdt",
                      5500,
                      "I want to snipe $typeai for 0.1eth",
                      5500,
                      "I want to bridge 2 eth to busd",
                      1000,
                    ]}
                    wrapper="span"
                    speed={77}
                    style={{
                      // fontSize: "14px",
                      display: "inline-block",
                      color: "rgb(255, 255, 255, 0.7)",
                    }}
                  />
                </span>
                <button className="rounded-xl bg-[#161616] border border-solid border-yellow-500 pl-8 pr-8 pt-2 pb-2 uppercase cursor-pointer text-yellow-500">
                  START
                </button>
              </div>
              <div className="w-[21rem] mt-[1rem] md:mt-[0] md:w-[22.3rem] lg:w-[30vw] max-w-[30rem]">
                <div className="flex gap-2 items-start">
                  <Image unoptimized={true} src={logoicon} alt="Logo" />
                  <div className="bg-[#161616] rounded-xl p-4 w-[29rem] h-[9.5rem] text-[12px] md:text-[14px]">
                    <TypeAnimation
                      sequence={[
                        2500,
                        `Absolutely, I'm here to assist you.
                        ✅ Best possible route found on uniswap
                        ✅ 2 ETH = 3200USDT
                        ✅ Estimated gas calculated $5
                        ✅ Approved
                        ✅ Swap executed`,
                        3500,
                        `✅ Reading contract
                         ✅ Finding sniping function
                         ✅ Sniping on enableTrading()
                         ✅ Waiting for call
                         ✅ Call detected
                         ✅ You gained $68`,
                        3500,
                        `✅ Finding best possible route...
                         ✅ 2 ETH = 3200USDT
                         ✅ Best possible route found on Changenow
                         ✅ Approved`,
                      ]}
                      wrapper="span"
                      omitDeletionAnimation
                      speed={90}
                      style={{
                        // fontSize: "14px",
                        display: "block",
                        whiteSpace: "pre-line",
                        color: "rgb(255, 255, 255, 0.7)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* --------------- */}

        {/* --------------- */}
      </div>
    </div>
  );
};

export default Hero;
