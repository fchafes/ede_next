"use client";

import "./Navbar.css";
import Link from "next/link";
import { AnchorBox } from "../a_box/AnchorBox";
import { Switch } from "../switch/Switch";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/objects", text: "Objects" },
  { path: "/collections", text: "Collections" },
  { path: "/projects", text: "Projects" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      <div className="logo-box">
        <Link href="/">
          ESTUDIO del ESPACIO
          {/* <img src="https://nlrcdpaxkpgphcutuvkb.supabase.co/storage/v1/object/public/ede_next/desktop/assets/logo_EDE.png" /> */}
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <Switch />
          {isMobile ? (
            <li className="no-round">
              <div onClick={toggleMenu} className="burger-button">
                <div
                  className="burger-lines"
                  style={{
                    rotate: `${menu ? "45deg" : ""}`,
                    marginTop: `${menu ? "6.5px" : ""}`,
                  }}
                ></div>
                <div
                  className="burger-lines"
                  style={{ width: `${menu ? "0" : "24px"}` }}
                ></div>
                <div
                  className="burger-lines"
                  style={{
                    rotate: `${menu ? "-45deg" : ""}`,
                    marginBottom: `${menu ? "6px" : ""}`,
                  }}
                ></div>
              </div>
            </li>
          ) : (
            navItems.map((navItem) => (
              <li key={navItem.path}>
                <AnchorBox
                  href={navItem.path}
                  text={navItem.text}
                  diffMode={true}
                />
              </li>
            ))
          )}
        </ul>
      </nav>
      <div
        className="mobile-menu-container"
        style={{ left: `${menu ? "0" : "-100%"}` }}
      >
        <ul className="m-m-list">
          <li>
            <a href="/">Home</a>
          </li>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <a href={navItem.path}>{navItem.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
