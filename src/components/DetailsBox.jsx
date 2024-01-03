import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const DetailsBox = ({ align, data }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: `${align === "end" ? "-15px" : ""}`,
          left: `${align === "start" ? "-15px" : ""}`,
          border: "7px solid black",
          backgroundColor: "white",
          height: "2rem",
          width: "2rem",
          borderRadius: "50%",
        }}
        className="md:block hidden"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: `${align}`,
          margin: "auto",
        }}
        className="px-8 py-2 md:py-0 md:min-h-[20rem]  "
      >
        <div className="text-[32px] text-white">{data?.year}</div>
        <div className="my-4 p-[4px] px-[6px] text-[12px] font-extrabold bg-yellow-400 text-black w-[fit-content] rounded-md">
          PRODUCT
        </div>
        <div className="gap-4 flex flex-col">
          {data?.pointers.map((value, index) => {
            return (
              <div
              key={Math.random()}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  flexDirection: `${align === "start" ? "row" : "row-reverse"}`,
                  color: "white",
                  textAlign: `${align === "start" ? "left" : "right"}`,
                }}
                className="text-[12px] lg:text-[14px] xl:text-[16px] tracking-wider"
              >
                <FaRegCircle />
                <span>{value} </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
