// src/shared/Footer.jsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center font-bold py-1">
      <div className="h-[.12rem] max-w-7xl mx-auto bg-bbTeal/60 dark:bg-bbTealDark/60 my-4 rounded-full" />
      <div className="flex flex-wrap justify-center gap-6 text-lg mt-2 mb-3 text-bbOffBlack dark:text-bbOffWhiteSoft">
        <Link href="#client-work" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Client</Link>
        <Link href="#desktop-tools" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Tools</Link>
        <Link href="#web-interface" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Web</Link>
        <Link href="#creative-projects" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Creative</Link>
        <Link href="#utility-apps" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Utility</Link>
        <Link href="https://bethanybaril.com/#cards" target="_blank" className=" text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Contact</Link>
      </div>
      <div className="h-[.15rem] max-w-full mx-auto bg-bbTeal dark:bg-bbTealDark/90 my-2 rounded-full" />
      <div className="mt-10 mb-6 text-xs text-gray-500 dark:text-gray-400">
        Copyright © {new Date().getFullYear()} Bethany Baril. All Rights Reserved.
      </div>
    </footer>
  );
}
