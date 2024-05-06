"use client";

import "./GlobalWrapper.css";
import { useSelector } from "react-redux";

export default function GlobalWrapper({ children }) {
  const theme = useSelector((state) => state.theme.darkMode);
  const bgColor = theme ? "#191818" : "#fff";

  return (
    <>
      <div
        className="global-wrapper"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {children}
      </div>
    </>
  );
}
