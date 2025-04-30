// src/shared/Footer.jsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-center font-semibold border-t border-bbTeal dark:border-bbTealDark py-1">
      <div className="flex flex-wrap justify-center gap-2.5 text-lg mt-2 text-black dark:text-bbOffWhite">
        <Link href="#client-work" className="hover:text-bbPinkDark underline decoration-bbOffWhite hover:decoration-bbTeal transition">Client</Link>
        <Link href="#desktop-tools" className="hover:text-bbPinkDark underline decoration-bbOffWhite hover:decoration-bbTeal transition">Tools</Link>
        <Link href="#web-interface" className="hover:text-bbPinkDark underline decoration-bbOffWhite hover:decoration-bbTeal transition">Web</Link>
        <Link href="#creative-projects" className="hover:text-bbPinkDark underline decoration-bbOffWhite hover:decoration-bbTeal transition">Creative</Link>
        <Link href="#utility-apps" className="hover:text-bbPinkDark underline decoration-bbOffWhite hover:decoration-bbTeal transition">Utility</Link>
        <Link href="https://bethany-baril-portfolio.netlify.app/#contact" target="_blank" className="hover:text-bbPinkDark underline decoration-white hover:decoration-bbTeal transition">Contact</Link>
      </div>

      <div className="mt-3 border-t border-bbTeal dark:border-bbTealDark pt-3 text-xs text-gray-500 dark:text-gray-400">
        Copyright © {new Date().getFullYear()} Bethany Baril. All Rights Reserved.
      </div>
    </footer>
  );
}
