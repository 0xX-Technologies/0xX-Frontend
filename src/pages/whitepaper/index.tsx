import React, { useState, useRef, lazy, Suspense } from "react";
import { useEffect } from "react";
import Whitepaper from "@/components/Whitepaper";

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
      {domLoaded && <Whitepaper />}
    </>
  );
};

export default Home;
