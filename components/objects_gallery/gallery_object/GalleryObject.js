"use client";

import "./GalleryObject.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";

export default function GalleryObject({ onSrc, offSrc, title, number, path }) {
  const theme = useSelector((state) => state.theme.darkMode);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const globalOpacity = theme ? "0" : "1";
  const localOpacity = isHovered ? (theme ? "1" : "0") : globalOpacity;

  return (
    <>
      <div
        className="gallery-object"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={path}>
          <div className="pixel-container">
            <Image
              src="/imgs/small_pics/small_eclipse_off.jpg"
              fill
              style={{
                zIndex: "1000",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="object-media"
            style={{ backgroundImage: `url(${onSrc})` }}
          >
            <div
              className="hover-img"
              style={{
                backgroundImage: `url(${offSrc})`,
                opacity: localOpacity,
              }}
            ></div>
          </div>
        </Link>
        <div className="object-info">
          <p>{title}</p>
          <p>{number}</p>
        </div>
      </div>
    </>
  );
}
