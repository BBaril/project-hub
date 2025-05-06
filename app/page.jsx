// app/page.jsx

'use client';

import Projects from '@/shared/Projects';

export default function Home() { 
  return (
    <main className="px-4 md:px-8 max-w-7xl mx-auto">
      {/* ABOUT SECTION */}
      <section id="about" className="pb-2">
        <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-title font-bold mb-2 pt-3 text-black dark:text-bbOffWhite custom-title-shadow">
          Bethany Baril
        </h1>
          <p className=" font-title font-semibold text-lg  text-bbOffBlackSoft dark:text-bbOffWhiteSoft/90 max-w-xl mx-auto">
            UI/UX Developer | Full-Stack Capable | Psychology-Informed Design
          </p>
        </div>
      </section>
      <div className="h-[.12rem] max-w-6x1 mx-auto bg-bbTeal/60 dark:bg-bbTealDark/60 my-4 rounded-full" />

      {/* PROJECTS SECTION */}
      <Projects />
    </main>
  );
}
