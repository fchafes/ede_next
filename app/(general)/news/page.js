"use client";

import { BigNav } from "@/components/big_nav/BigNav";
import { newsData } from "@/data/data";

// export const metadata = {
//   title: "EDE - About",
//   description: "About - Estudio del Espacio",
// };

export default function News() {
  return (
    <>
      <BigNav navData={newsData} smallFont={true} list={true} isCollectionDiff={true}/>
    </>
  );
}
