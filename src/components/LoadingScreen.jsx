import React from "react";
import { TypeAnimation } from "react-type-animation";

const LoadingScreen = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-black to-[#151515] flex items-center justify-center">
      <TypeAnimation
        preRenderFirstString={false}
        sequence={[500, "Loading...", 1500, ""]}
        wrapper="span"
        speed={15}
        style={{
          display: "inline-block",
          color: "rgb(255, 255, 255, 0.7)",
          fontSize: "3rem",
        }}
      />
    </div>
  );
};

export default LoadingScreen;