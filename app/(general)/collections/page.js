"use client";
import { CollectionsCover } from "@/components/collections_cover/CollectionsCover";
import { BigNav } from "@/components/big_nav/BigNav";
import { useState } from "react";
import { collectionsData } from "@/data/data";

// export const metadata = {
//   title: "Collections - EDE",
//   description: "Collections - Estudio del Espacio",
// };

export default function Collections() {
  const [cover, setCover] = useState(null);
  return (
    <>
      <CollectionsCover cover={cover} />
      <BigNav setCover={setCover} navData={collectionsData} />
    </>
  );
}
