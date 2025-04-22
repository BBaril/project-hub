// Bethany Baril  4/12/2025

import React, { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import TagFilter from './components/TagFilter';
import projectsData from './data/projectsData';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  
  const [selectedTag, setSelectedTag] = useState(null); // only one tag at a time
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.hamburger-menu') && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);
  
  const allTags = [...new Set(projectsData.flatMap(p => p.tags))];
  
  const handleTagSelect = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag); // toggle tag on/off
  };

  const groupedProjects = {
    'web-interface' : projectsData.filter((p) => p.group === 'web-interface'),
    'client-work': projectsData.filter((p) => p.group === 'client-work'),
    'creative-projects': projectsData.filter((p) => p.group === 'creative-projects'),
    'utility-apps': projectsData.filter((p) => p.group === 'utility-apps'),
    'desktop-tools': projectsData.filter((p) => p.group === 'desktop-tools'),
  };
  


  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData;
  
  console.log('Web Interface Group:', groupedProjects['web-interface']);
  console.log('All Projects:', projectsData);


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <header className="flex justify-between items-center p-4">
        {/* Logo */}
        <a href="https://bethany-baril-portfolio.netlify.app" className="hover:opacity-75">
            <img src="/BBtest.png" alt="Portfolio Logo" className="h-10 w-10 rounded-full border border-none shadow-sm" />
          </a>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-bbCharcoal ml-5 dark:text-bbOffWhite">
              Project Hub
            </h1>
          </div>
        <div className="flex items-center gap-6 ml-auto hamburger-menu relative">
          <ThemeToggle />
          <button
            aria-label="Menu"
            className="text-bbCharcoal text-2xl dark:text-bbOffWhite"
            onClick={() => setMenuOpen(!menuOpen)}
          >
          &#9776;
          </button>

          {menuOpen && (
            <div className="absolute top-full right-0 bg-bbOffWhite dark:bg-gray-700 shadow-md rounded mt-2 p-4 z-50 space-y-2">
              <a href="#web-interface" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-bbCyanDarker hover:font-semibold">Web Interface</a>
              <a href="#client-work" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-bbCyanDarker hover:font-semibold">Client Work</a>
              <a href="#creative-projects" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-bbCyanDarker hover:font-semibold">Creative Projects</a>
              <a href="#utility-apps" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-bbCyanDarker hover:font-semibold">Utility Apps</a>
              <a href="#desktop-tools" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-bbCyanDarker hover:font-semibold">Desktop Tools</a>
              <a href="https://bethany-baril-portfolio.netlify.app/#contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-bbCyanDarker hover:font-semibold">Contact Me</a>
            </div>
          )}
        </div>
      </header>

      <hr className="border-t-4 border-bbCyanDarker dark:border-t-2 border-bbCyanDarker my-3 shadow-md" />

      <div className="text-center space-y-2 mb-5 mt-2">
      <h2 className="text-[2.75rem] font-title font-bold text-black mt-34 dark:text-bbCyan custom-title-shadow">
        Bethany Baril
      </h2>

        <h3 className="text-xl font-title font-bold text-bbCharcoal dark:text-bbOffWhite">
          UI/UX Developer | Full-Stack Capable | Psychology-Informed Design
        </h3>
      </div>

      <hr className="border-t-4 border-bbCyanDarker mb-6 dark:border-t-2 border-bbCyanDarker my-3 shadow-md" />

      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onTagSelect={handleTagSelect}
      />


      <div className="mt-4 ml-4">
          <p>
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}{' '}
            {selectedTag && (
              <span>
                with: <strong>{selectedTag}</strong>
              </span>
            )}

          </p>

          {filteredProjects.length === 0 && (
            <p className="text-red-400">No projects match this combo. Try removing a tag?</p>
          )}
      </div>



      <div className="px-4 md:px-8 max-w-7xl mx-auto mb-6">
        <section id="web-interface">
          <h2 className="text-2xl font-bold text-bbMidnightIndigo mt-4 mb-4 flex items-center gap-2 dark:text-bbOffWhite dark:font-semibold custom-title-shadow">
            <img src="/checked.png" alt="" className="w-6 h-6 block dark:hidden" />
            <img src="/checkedDark.png" alt="" className="w-6 h-6 hidden dark:block" />Web Interface</h2>
          <div className="ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(groupedProjects['web-interface'] || [])
                .filter((p) => !selectedTag || p.tags.includes(selectedTag))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}           
            </div>
          </div>
        </section>

        <section id="client-work">
          <h2 className="text-2xl font-bold text-bbMidnightIndigo mt-6 mb-4 flex items-center gap-2 dark:text-bbOffWhite dark:font-semibold custom-title-shadow">
            <img src="/checked.png" alt="" className="w-6 h-6 block dark:hidden" />
            <img src="/checkedDark.png" alt="" className="w-6 h-6 hidden dark:block" />Client Work</h2>
          <div className="ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(groupedProjects['client-work'] || [])
                .filter((p) => !selectedTag || p.tags.includes(selectedTag))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </section>

        <section id="creative-projects">
          <h2 className="text-2xl font-bold text-bbMidnightIndigo mt-6 mb-4 flex items-center gap-2 dark:text-bbOffWhite dark:font-semibold custom-title-shadow">
          <img src="/checked.png" alt="" className="w-6 h-6 block dark:hidden" />
          <img src="/checkedDark.png" alt="" className="w-6 h-6 hidden dark:block" />Creative Projects</h2>
          <div className="ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(groupedProjects['creative-projects'] || [])
                .filter((p) => !selectedTag || p.tags.includes(selectedTag))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
          </div>
        </section>

        <section id="utility-apps">
          <h2 className="text-2xl font-bold text-bbMidnightIndigo mt-6 mb-4 flex items-center gap-2 dark:text-bbOffWhite dark:font-semibold custom-title-shadow">
          <img src="/checked.png" alt="" className="w-6 h-6 block dark:hidden" />
          <img src="/checkedDark.png" alt="" className="w-6 h-6 hidden dark:block" />Utility Apps</h2>
          <div className="ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(groupedProjects['utility-apps'] || [])
                .filter((p) => !selectedTag || p.tags.includes(selectedTag))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </section>

        <section id="desktop-tools">
          <h2 className="text-2xl font-bold text-bbMidnightIndigo mt-6 mb-4 flex items-center gap-2 dark:text-bbOffWhite dark:font-semibold custom-title-shadow">
          <img src="/checked.png" alt="" className="w-6 h-6 dark:hidden" />
          <img src="/checkedDark.png" alt="" className="w-6 h-6 hidden dark:block" />Desktop Tools</h2>
          <div className="ml-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(groupedProjects['desktop-tools'] || [])
                .filter((p) => !selectedTag || p.tags.includes(selectedTag))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </section>
      </div>

    
      <hr className="border-t-4 border-bbCyanDarker mb-1 mt-8 dark:border-t-2 border-bbCyanDarker my-3 shadow-md" />
      <footer className="text-center mt-6">
        <div className="text-xl font-semibold text-bbMidnightIndigo mt-2 dark:text-bbOffWhite">
          <a href="#web-interface" className="mr-4 hover:text-bbMidnightIndigo hover:underline decoration-bbCyanDarker dark:hover:underline decoration-bbCyan dark:hover:text-bbCyan">Web Interfaces</a>
          <a href="#client-work" className="mr-4 hover:text-bbMidnightIndigo hover:underline decoration-bbCyanDarker dark:hover:underline decoration-bbCyan dark:hover:text-bbCyan">Client Work</a>
          <a href="#creative-projects" className="mr-4 hover:text-bbMidnightIndigo hover:underline decoration-bbCyanDarker dark:hover:underline decoration-bbCyan dark:hover:text-bbCyan">Creative Projects</a>
          <a href="#utility-apps" className="mr-4 hover:text-bbMidnightIndigo hover:underline decoration-bbCyanDarker dark:hover:underline decoration-bbCyan dark:hover:text-bbCyan">Utilities Apps</a>
          <a href="#desktop-tools" className="hover:text-bbMidnightIndigo hover:underline decoration-bbCyanDarker dark:hover:underline decoration-bbCyan dark:hover:text-bbCyan">Desktop Tools</a>
          <a href="https://bethany-baril-portfolio.netlify.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-bbMidnightIndigo hover:underline decoration-bbCyanDarker dark:text-bbOffWhite dark:hover:underline decoration-bbCyan dark:hover:text-bbCyan">Contact Me</a>
        </div>
        <hr className="border-t-4 border-bbCyanDarker mb-4 mt-6 dark:border-t-2 border-bbCyanDarker my-3 shadow-md" />
        <p className="text-sm text-gray-600 mt-4 dark:text-gray-400">
          Copyright ©2025 Bethany Baril. All Rights Reserved.
        </p>
      </footer>



    </div>
  );
}

