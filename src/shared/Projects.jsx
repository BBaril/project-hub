'use client';

import { useState, useEffect, useMemo } from 'react';
import ProjectCard from '@/ui/ProjectCard';
import TagFilter from '@/ui/TagFilter';
import TagBox from "@/ui/TagBox"; 
import projectsData from '@/data/projectsData';
import Image from "next/image";

function formatGroupTitle(group) {
  return group
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('');

  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach(project =>
      project.tags.forEach(tag => tags.add(tag))
    );
    return Array.from(tags);
  }, []);
  
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projectsData;
    return projectsData.filter(project =>
      project.tags.includes(selectedTag)
    );
  }, [selectedTag]);
  
  // if you're using responsive dropdown/buttons:
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.matchMedia('(max-width: 640px)').matches;
      setIsMobile(isMobileView);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="projects">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        {/* Left side: Dropdown or TagFilter */}
        {isMobile ? (
          <TagBox
            tags={allTags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
          />
        ) : (
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
            filteredCount={filteredProjects.length}
          />
        )}

        {/* Right side: Project count summary */}
        <p className="text-gray-700 dark:text-gray-300 text-sm ml-auto">
          Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
          {selectedTag && (
            <> with <strong>{selectedTag}</strong></>
          )}
        </p>

        {Object.entries(
          filteredProjects.reduce((groups, project) => {
            const group = project.group || 'other';
            if (!groups[group]) groups[group] = [];
            groups[group].push(project);
            return groups;
          }, {})
        ).map(([group, projects]) => (
          <div key={group} id={group} className="mb-2">
            {/* Group Heading */}
            <div className="flex items-center mb-0.5 mt-4 gap-2">
              <Image
                src="/checked.png"
                alt="Checkmark"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <Image
                src="/checkedDark.png"
                alt="Checkmark Dark"
                width={24}
                height={24}
                className="hidden dark:block"
              />
              <span className="text-xl font-title font-semibold custom-title-shadow2 text-black  dark:text-bbOffWhite/85">
                {formatGroupTitle(group)}
              </span>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-8 pr-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
