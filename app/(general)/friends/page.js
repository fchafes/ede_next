"use client";

import { BigNav } from "@/components/big_nav/BigNav";
import { friendsData, collabsData } from "@/data/data";

// export const metadata = {
//   title: "EDE - About",
//   description: "About - Estudio del Espacio",
// };

export default function Friends() {
  return (
    <>
      <BigNav
        navData={friendsData}
        smallFont={true}
        list={true}
        isCollectionDiff={true}
        isMobileFriends={true}
      />
      <BigNav
        navData={collabsData}
        smallFont={true}
        collabs={true}
        list={true}
        isCollectionDiff={true}
        isMobileFriends={true}
      />
    </>
  );
}
