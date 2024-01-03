import React from "react";
import DetailsBox from "../components/DetailsBox";

const roadmapValues = [
    {
        year: '2024',
        pointers: [
            'VeraWallet - VeraWallet 2.0 Release for all Users ',
            'VeraWallet - New VRA Offramp ',
            'VeraWallet - Major Improvement of  Communications within VeraWallet'
        ]
    },
    {
        year: '2023',
        pointers: [
            'VeraViews - VeraPlayer New Integration Options ',
            'VeraViews - Outstream VeraPlayer ',
            'VeraWallet - VeraWallet 2.0 New Admin Panel',
            'VeraWallet - VeraWallet 2.0 Release for a Sample of Users ',
            'VeraViews - Account and User Management Updates'
        ]
    },
    {
        year: '2022',
        pointers: [
            'VeraViews - Video Content Management System ',
            'VeraViews - Video Library Management',
            'VeraViews - Playlist Management',
            'VeraViews - VeraPlayer Revamp'
        ]
    },
    {
        year: '2021',
        pointers: [
            'Proof of View - Carbon Browser Extension',
            'VeraWallet - VeraWallet 2.0 Beta Testing',
            'Verasity.io - Unified Contact Form Processing'
        ]
    },
]

const DetailedRoadmap = () => {
  return (
    <div className="bg-black md:px-[6rem] md:py-[2rem] relative">
      <div
        id="roadmap"
        className=" text-white text-[6.107vw] text-center font-extrabold lg:text-[54px] gap-4 "
      >
        OUR ROADMAP
      </div>
      <div className=" h-[fit-content] hidden md:flex mt-10">
        <div
          style={{
            position: "absolute",
            height: "100vh",
            left: "50%",
            border: "1px solid #252525",
          }}
        />
        <div className="flex flex-col w-[50%] items-end mb-[0rem]">
          {roadmapValues.map((value, index) => {
            return (
              <div key={index}>
              {index%2 === 0 && <DetailsBox align="end" data={value}/> }
              </div>
            )
          })}
        </div>
        <div className="flex flex-col w-[50%] items-start mt-[13rem]">
        {roadmapValues.map((value, index) => {
            return (
              <div key={index}>
              {index%2 !== 0 && <DetailsBox align="start" data={value}/>}
              </div>
            )
          })}
        </div>
      </div>
      <div className=" h-[fit-content] md:hidden">
        {roadmapValues.map((value, index) => {
          return (
            <div key={index}>
            <DetailsBox align={index%2!==0 ? 'start': 'end'} data={value}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default DetailedRoadmap;
