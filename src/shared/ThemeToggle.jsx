'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm font-semibold px-4 py-1 rounded-lg bg-bbTealDark dark:bg-bbTealDark/70 text-bbOffBlack dark:text-bbOffBlack hover:bg-bbTealDark dark:hover:bg-bbPop/70 transition-opacity bg-opacity-20 duration-200 shadow"
    >
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
