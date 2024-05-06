"use client";

import "./Switch.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme/themeSlice";

export const Switch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <li
      className="nav-switch"
      style={{
        justifyContent: theme ? "flex-end" : "flex-start",
      }}
      onClick={() => dispatch(toggleTheme())}
    >
      <div
        className="n-inside-switch"
        style={{
          marginLeft: theme ? "" : "-3px",
          marginRight: theme ? "-3px" : "",
        }}
      ></div>
    </li>
  );
};
