'use client';


import ThemeToggle from "@/shared/ThemeToggle";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
  
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  
  
  return (
    <header className="w-full bg-bbOffWhite text-bbOffBlack dark:text-bbOffWhite dark:bg-bbOffBlack">
      <div className="flex justify-between items-center px-1 py-1.5 mt-1 mb-1 max-w-7xl mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 ml-6">
          <Link href="https://bethanybaril.com">
            <Image
              src="/bbLogo3.png"
              alt="Bethany Baril Logo"
              width={25}
              height={25}
              className="rounded-full border border-none shadow-sm hover:opacity-70 transition"
              priority
            />
          </Link>
          <h1 className="text-lg tracking-tight text-black dark:text-bbOffWhiteSoft/90 ">
            Project Hub
          </h1>
        </div>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center gap-3 relative pr-0.5 w-48">
          <ThemeToggle />
          <div className="relative" ref={menuRef}>
            <div
              className="flex flex-col justify-center items-center space-y-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 h-0.5 bg-bbOffBlack dark:bg-bbPinkDark/80 rounded-full"></div>
              <div className="w-5 h-0.5 bg-bbOffBlack dark:bg-bbPinkDark/80 rounded-full"></div>
              <div className="w-5 h-0.5 bg-bbOffBlack dark:bg-bbPinkDark/80 rounded-full"></div>
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-24 bg-bbOffWhiteSoft dark:bg-bbOffBlackSoft text-sm font-bold shadow-lg rounded-md z-50 p-2 space-y-2">
                <a
                  href="#client-work"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPink/85 hover:font-bold dark:hover:text-bbPinkDark/85 hover:dark:font-bold font-semibold"
                >
                  Client
                </a>
                <a
                  href="#desktop-tools"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPink/85 hover:font-bold dark:hover:text-bbPinkDark/85 hover:dark:font-bold font-semibold"
                >
                  Tools
                </a>
                <a
                  href="#web-interface"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPink/85 hover:font-bold dark:hover:text-bbPinkDark/85 dark:hover:font-bold font-semibold"
                >
                  Web
                </a>
                <a
                  href="#creative-projects"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPink/85 hover:font-bold dark:hover:text-bbPinkDark/85 dark:hover:font-bold font-semibold"
                >
                  Creative
                </a>
                <a
                  href="#utility-apps"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPink/85 hover:font-bold dark:hover:text-bbPinkDark/85 dark:hover:font-bold font-semibold"
                >
                  Utility
                </a>
                <a
                  href="https://bethanybaril.com/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPinkDark/85 hover:font-bold dark:hover:text-bbPinkDark/85 dark:hover:font-bold font-semibold"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[2px] max-w-screen-xl mx-auto bg-bbTeal dark:bg-bbTealDark/90 my-1" />
    </header>
  );
}
