// Bethany Baril  04/12/25

import React, { useState } from 'react';
import { useEffect } from 'react';

export default function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);
  const [showUX, setShowUX] = useState(false);
  const [showScreenshots, setShowScreenshots] = useState(false);

  // ESC handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
        setShowScreenshots(false);
        setShowUX(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-bbOffBlackSoft rounded-xl shadow p-4 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold dark:text-bbOffWhiteSoft/85">{project.title}</h3>
      <p className="text-sm mb-2 dark:text-bbOffWhiteSoft/70">{project.description}</p>


   {/* TAGS */}
   <div className="flex flex-wrap gap-2 mb-2 ml-1">
      {project.tags.map((tag) => (
        <span
         key={tag}
         className={`text-xs px-2 py-1 rounded-full ${tagColor(tag)} text-bbOffBlack font-bold dark:text-black cursor-default`}
        >
          {tag}
        </span>
     ))}
    </div>


    {/* BUTTONS */}
      <button
        onClick={() => setShowModal(true)}
        className="mr-2 dark:text-bbBlue/90 text-bbBlue/90 text-sm font-semibold underline hover:text-bbPinkDark/90 dark:hover:text-bbPink/90"
        aria-label={`Open project details for ${project.title}`}>
       View Details
      </button>
      {project.uxDetails && (
      <button
        onClick={() => setShowUX(true)}
        className="text-bbTealDark/90 dark:text-bbTealDark/90 text-sm font-semibold underline hover:text-bbPinkDark/90 dark:hover:text-bbPink/90">
        UX Journey
      </button>
      )}


    {showUX && (
      <div className="fixed inset-0 bg-bbTeal/15 dark:bg-bbPink/15 flex items-center justify-center z-50">
        <div className="bg-bbOffWhite dark:bg-bbOffBlack p-6 rounded-xl max-w-3xl w-full overflow-auto max-h-[90vh]">
          <h3 className="text-xl font-semibold mb-4 text-black dark:text-bbOffWhiteSoft/85">UX Journey</h3>
          <p className="mb-4 italic text-black dark:text-bbOffWhiteSoft/70">{project.uxDetails.text}</p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
             {project.uxDetails.images.map((src, index) => (
              <img key={index} src={src} alt={`UX ${index + 1}`} className="rounded shadow" />
            ))}
          </div>
          <button
            onClick={() => setShowUX(false)}
            className="mt-4 px-3 py-1 bg-bbTeal/85 text-bbOffBlack dark:text-bbOffBlack rounded hover:bg-bbPink/85"
          >
            Close
          </button>
        </div>
    </div>
    )}

    {/* Screenshot Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-bbTeal/15 dark:bg-bbPink/15 bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-bbOffWhite dark:bg-bbOffBlack  p-6 rounded-xl max-w-lg w-full overflow-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold text-black dark:text-bbOffWhiteSoft/85 mb-2">{project.title}</h3>
            <p className="italic text-sm mb-4 text-black dark:text-bbOffWhiteSoft/70">{project.fullDescription}</p>
            <div className="text-sm space-y-2">
              <p>
                <strong className="text-black dark:text-gray-300">Target Audience:</strong>
                <span className="ml-1 text-gray-700 dark:text-gray-400">{project.target}</span>
              </p>
              <p>
                <strong className="text-black dark:text-gray-300">Problem Solved:</strong>
                <span className="ml-1 text-gray-700 dark:text-gray-400">{project.problem}</span>
              </p>
              <p>
                <strong className="text-black dark:text-gray-300">Empathy Notes:</strong>
                <span className="ml-1 text-gray-700 dark:text-gray-400">{project.empathy}</span>
              </p>
              <p>
                <strong className="text-black dark:text-gray-300">Technologies:</strong>
                <span className="ml-1 text-gray-700 dark:text-gray-400">{project.technologies.join(', ')}</span>
              </p>
              <p>
                <strong className="text-black dark:text-gray-300">Features:</strong>
                <span className="ml-1 text-gray-700 dark:text-gray-400">{project.features.join(', ')}</span>
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
        {project.demo ? (
          <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bbBlueDark/90 dark:text-bbBlueDark/90 underline font-bold hover:text-bbPinkDark dark:hover:text-bbPink/95"
          >
          Live Demo
          </a>
        ) : null}

        {project.screenshot && (
          <button
            onClick={() => setShowScreenshots(true)}
            className= "text-bbPurpleDark/90 dark:text-bbPurple/90 underline font-bold hover:text-bbPinkDark/85 dark:hover:text-bbPink/95"
          >
          View Screenshot{Array.isArray(project.screenshot) && project.screenshot.length > 1 ? 's' : ''}
          </button>
        )}

        {project.github && (
          <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bbTealDark/90 dark:text-bbTealDark/90 underline font-bold hover:text-bbPinkDark dark:hover:text-bbPink/95"
          >
          GitHub
          </a>
       )}
        </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-3 py-1 bg-bbTeal/85 text-bbOffBlack dark:text-bbOffBlack rounded hover:bg-bbPink/85"
            >
              Close
            </button>
        </div>
        </div>
      )}

      {showScreenshots && (
        <div className="fixed inset-0 bg-Teal/15 Dark:bgbbPink/15 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-bbOffWhite/85 p-6 rounded-xl max-w-3xl w-full overflow-auto max-h-[90vh]">
            <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {Array.isArray(project.screenshot)
                ? project.screenshot.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded shadow"
                  />
                ))
              : (
                  <img src={project.screenshot} alt="Screenshot" className="rounded shadow" />
                )}
          </div>
          <button
            onClick={() => setShowScreenshots(false)}
            className="mt-4 px-3 py-1 bg-bbTeal/85 text-bbOffBlack dark:text-bbOffBlack rounded hover:bg-bbPink/85"
          >
            Close
          </button>
        </div>
      </div>
    )}

    </div>
  );
}

function tagColor(tag) {
    const frontend = ['React', 'Next.js', 'Tailwind', 'JavaScript', 'HTML', 'CSS', 'UI/UX', 'Figma', 'Static'];
    const backend = ['Python', 'Flask', 'Node.js', 'Auth', 'Security', 'JSON', 'API', 'Login'];
    const database = ['SQLite', 'MySQL'];
    const gui = ['Tkinter', 'Desktop GUI', 'Flutter (Dart)'];
    const tools = ['GitHub', 'VS Code', 'Netlify', 'Vercel', 'Terminal', 'CLI', 'Photoshop', 'ETL', 'Dev Tool', 'Math', 'Utilities'];
    const ux = ['Accessibility', 'Responsive Design', 'Psychology', 'Customer Service', 'Teamwork', 'Adaptability', 'Problem Solving', 'Client Work', 'Website', 'Layout', 'Responsive Design'];
    const creative = ['Creative', 'Animation', 'Sound', 'Audio', 'Adventure Story', 'Personal Project'];
    

  
    if (frontend.includes(tag)) return 'bg-bbPink/80';
    if (backend.includes(tag)) return 'bg-bbBlueSoft/80';
    if (database.includes(tag)) return 'bg-bbGreenSoft/80';
    if (gui.includes(tag)) return 'bg-bbBlue/80';
    if (creative.includes(tag)) return 'bg-bbTeal/80';
    if (tools.includes(tag)) return 'bg-bbPurple/80';
    if (ux.includes(tag)) return 'bg-bbOrange/80';
    return 'bg-black'; // fallback
  }
  