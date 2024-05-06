"use client";
import { useState, useEffect } from "react";
import "./HomeCarousel.css";

export default function HomeCarousel({ data }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const autoSlide = () => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  };
  useEffect(() => {
    const cleanUp = autoSlide();
    return cleanUp;
  }, [slide]);

  return (
    <div className="car-container">
      <div className="carousel">
        <div className="car-img-container">
          {data.map((item, index) => {
            return (
              <img
                src={item.link}
                alt={item.id}
                key={index}
                className={slide === index ? "slide active-anim" : "slide"}
                onClick={nextSlide}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
