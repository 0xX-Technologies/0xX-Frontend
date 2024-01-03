import React from "react";

const RoadmapBox = (props) => {
  return (
    <>
    <div className="bg-[#161616] w-[92vw] sm:w-[60vw] lg:w-[526px] rounded-2xl p-[2rem] relative boto my-8">
      <div className="bg-[#FFC100] w-[fit-content] px-2 py-1 rounded-xl text-black absolute top-[-14px] font-medium">
        PHASE {props.phase}
      </div>
      <div className="font-mono text-[22px] font-semibold md:text-[33px] text-white py-4">{props.title}</div>
      <div className="font-mono opacity-[0.7] ">
        {props.description.map((value, index) => {
          return (<div className="mt-[15px] text-white leading-[18.69px] text-[13px] md:text-[17px] md:leading-[28.8px]" key={index}>{value}</div>)
        })}
      </div>
      <div className="h-2 bg-gradient-to-r from-[#FFC100] via-[#DDD269] to-[#FFC100] absolute bottom-0 w-[100%] left-0 rounded-3xl">
    </div>
    </div>
    
    </>
  );
};

export default RoadmapBox;
