// app/page.jsx

'use client';

import Projects from '@/shared/Projects';

export default function Home() { 
  return (
    <main className="px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* ABOUT SECTION */}
      <section id="about" className="pb-2 border-t border-bbTeal dark:border-bbTealDark">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="mb-1 mt-2 custom-title-shadow dark:text-gray-100"
            style={{ fontSize: '2.4rem' }}>
            Bethany Baril
          </h1>
          <p className=" font-title font-semibold text-lg  text-black dark:text-gray-300 max-w-xl mx-auto">
            UI/UX Developer | Full-Stack Capable | Psychology-Informed Design
          </p>
        </div>
      </section>
      <div className="pb-1 border-t border-bbTeal dark:border-bbTealDark w-full"></div>

      {/* PROJECTS SECTION */}
      <Projects />
    </main>
  );
}
