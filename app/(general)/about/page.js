'use client'
import { BigNav } from "@/components/big_nav/BigNav";
import { aboutData } from "@/data/data";

// export const metadata = {
//   title: "EDE - About",
//   description: "About - Estudio del Espacio",
// };

export default function About() {
  return <>
  <BigNav navData={aboutData}/>
  </>;
}
