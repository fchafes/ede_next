"use client";

import { BigNav } from "@/components/big_nav/BigNav";
import { aboutData, mobileAboutData } from "@/data/data";
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "EDE - About",
//   description: "About - Estudio del Espacio",
// };

export default function About() {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
    {isMobile ? (
      <BigNav navData={mobileAboutData} isCollectionDiff={true} isMobileAbout={true} />
    ) : (
      <BigNav navData={aboutData} isCollectionDiff={true} />
    )}
    </>
  );
}
