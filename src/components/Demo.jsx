import React from "react";
import thumbnail from "../assets/thumbnail.svg";
import TypeBox from "../components/TypeBox";
import swap from "../assets/swap.svg";
import Image from "next/image";
import coin from "../assets/coin.gif";
import copy from "../assets/copy.svg";
import snipe from "../assets/snipe.svg";
import bridge from "../assets/bridge.svg";
import future from "../assets/future.svg";
import ReactPlayer from "react-player/lazy";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const TypeDetails = [
  {
    title: "TYPE TO SWAP",
    img: swap,
    description: `Type to Swap is one of the core features of Type Al, designed to facilitate seamless token swaps with
    minimal user input.`,
  },
  {
    title: "TYPE TO SNIPE",
    img: snipe,
    description: `Type to Snipe is a feature aimed at providing users an edge in participating in new token launches.
    Users can type commands to buy a newly launched token at a specific price or as soon as it hits the
    market. The bot will automatically get the snipe method. Type Al will monitor token launch and execute
    the purchase on behalf of the user.`,
  },
  {
    title: "TYPE TO BRIDGE",
    img: bridge,
    description: `Type to Bridge facilitates seamless asset transfers between different blockchains. Users can type a
    command to bridge assets, and Type Al will find the most efficient and cost-effective bridge service to
    execute the transfer.`,
  },
  {
    title: "FUTURE FEATURES",
    img: future,
    description: `Future features like Type to Deploy will allow users to deploy their own tokens by providing
    specifications through text commands. Type Al will interpret the specifications, deploy the token on the
    blockchain, and provide the user with the token contract address.`,
  },
];

const Demo = () => {
  const notify = () => toast("Comming Soon!");

  const videoLink = "https://www.youtube.com/watch?v=your-video-id";

  const formatKey = "0x998av8934sd89998fddcs";

  return (
    <>
    <ToastContainer theme="dark" />
    <div className="bg-[#000000] md:px-[6rem]">
      <div id="demo" className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[54px] gap-3 pt-20 pb-5 md:pb-10">
        DEMO
      </div>
      <div className="flex flex-col items-center justify-center z-50">
        <div className="items-center justify-center  md:w-[40rem] lg:w-[70vw] w-[95vw] max-w-[80rem]">
          <div className="h-[16rem] sm:h-[25rem] md:h-[35rem] md:w-[100%] flex items-center justify-center border-2 border-solid border-[#3B2D00] rounded-[32px] z-[99] overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=nKaV8q7bTyY"
              controls={true}
              volume={1}
              height={"100%"}
              width={"100%"}
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="h-[1rem] md:h-[1.3rem] bg-[#3B2D00] rounded-b-[32px] w-[55%] md:w-[70%]" />
        <div className="h-[1rem] md:h-[1.3rem] bg-[#221900] rounded-b-[32px] w-[40%] md:w-[60%]" />
      </div>

      <div className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[54px] gap-4 pt-20 md:pt-40  pb-10 ">
        FEATURES
      </div>
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-center gap-10">
        <div className="flex flex-col gap-10">
          <TypeBox
            title={TypeDetails[0].title}
            img={TypeDetails[0].img}
            description={TypeDetails[0].description}
          />
          <TypeBox
            title={TypeDetails[2].title}
            img={TypeDetails[2].img}
            description={TypeDetails[2].description}
          />
        </div>

        <div className="flex flex-col gap-10 lg:mt-[6rem] mt-[2rem]">
          <TypeBox
            title={TypeDetails[1].title}
            img={TypeDetails[1].img}
            description={TypeDetails[1].description}
          />
          <TypeBox
            title={TypeDetails[3].title}
            img={TypeDetails[3].img}
            description={TypeDetails[3].description}
          />
        </div>
      </div>

      <div className=" text-white text-[6.107vw] text-center font-extrabold lg:text-[54px] gap-4 pt-20 md:pt-40 pb-5 ">
        $TYPE
      </div>

      <div className="flex justify-center gap-20 items-center flex-wrap">
        <div className="font-mono w-[19rem] md:w-[15rem] leading-[18.69px] text-[18px] text-white opacity-[0.7] text-center md:text-left md:leading-[28.8px]">
          The TypeAI ecosystem is backed and powered by the $TYPE token.
        </div>
        <div className="font-mono w-[15rem] flex justify-center">
          <Image src={coin} alt="" />
        </div>
        <div className="font-mono w-[15rem] text-center md:text-right text-white opacity-[0.7] md:text-[18px]">
          <div>SUPPLY :900,000</div>
          <div>LIQUIDITY BURNED</div>
          <div>CONTRACT RENOUNCED</div>
          <div>5%/5% TAX</div>
        </div>
      </div>
      <div className=" flex justify-center mt-[3rem]">
        <div
          className="h-[3rem] w-[20rem] rounded-xl p-[2px] bg-[#FFC100]  flex items-center justify-between cursor-pointer"
          onClick={notify}
        >
          <span className="text-black font-bold px-3">CONTRACT</span>
          <span className="w-[12rem] h-[2.8rem] bg-[#2D2D2D] rounded-xl flex items-center justify-between px-2">
            <span className="font-mono max-w-[7rem] flex items-center justify-between whitespace-nowrap overflow-hidden text-ellipsis text-white">
              {/* 0x214... */}
              {formatKey.slice(0, 4) + "..." + formatKey.slice(-3)}
            </span>
            <span>
              <Image unoptimized={true} src={copy} alt="" />
            </span>
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Demo;
