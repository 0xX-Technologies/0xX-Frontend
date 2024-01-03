import React from "react";
import { FaAws } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const PoweredBy = () => {
  return (
    <div className="bg-black md:px-[6rem] md:py-[2rem]">
      <div
        className="Inter text-white text-[6.107vw] text-center font-extrabold lg:text-[52px] gap-4 pt-10 md:pt-20">
        POWERED BY
      </div>
      <div className="flex align-middle justify-center gap-10 lg:gap-[12rem] pr-[7rem] pt-[2rem] pl-[7rem] md:pb-[3rem]">
       <FaAws color="white" size={'8vw'} style={{ minHeight: '3rem', minWidth: "3rem", maxHeight: '10rem', opacity: '0.6'}}/>
        <RiOpenaiFill color="white" size={'8vw'} style={{minHeight: '3rem', minWidth: "3rem", maxHeight: '10rem',opacity: '0.6'}} />
        <BiLogoTelegram color="white" size={'8vw'} style={{ minHeight: '3rem', minWidth: "3rem", maxHeight: '10rem', opacity: '0.6'}}/>
      </div>
    </div>
  );
};

export default PoweredBy;
