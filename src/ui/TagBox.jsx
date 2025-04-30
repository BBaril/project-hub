"use client";

import { useState, useEffect } from 'react';

export default function TagBox({ tags = [], selectedTag, onTagSelect }) {
  const [isMobile, setIsMobile] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="scroll-mb-64 px-4 py-2">
        <select
          value={selectedTag}
          onChange={(e) => onTagSelect(e.target.value)}
          className="w-64 mx-auto px-3 py-1.5 rounded-lg border
            bg-bbOrange bg-opacity-10 text-bbOffBlack
            dark:bg-bbTealDark dark:bg-opacity-30 dark:text-bbOffWhite
            hover:bg-bbTeal hover:text-bbOffBlack
            dark:hover:bg-bbTeal dark:hover:text-bbOffBlack
            focus:outline-none focus:ring-2 focus:ring-bbTeal"
        >
          <option value="">All</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    );
  }
}  