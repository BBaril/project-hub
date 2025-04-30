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
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-4 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm mb-2">{project.description}</p>


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
        className="mr-2 dark:text-bbBlue text-bbBlue text-sm font-semibold underline hover:text-bbPinkDark"
        aria-label={`Open project details for ${project.title}`}>
       View Details
      </button>
      {project.uxDetails && (
      <button
        onClick={() => setShowUX(true)}
        className="text-bbTealDark dark:text-bbTealDark text-sm font-semibold underline hover:text-bbPinkDark">
        UX Journey
      </button>
      )}


    {showUX && (
      <div className="fixed inset-0 bg-bbTeal bg-opacity-10 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-3xl w-full overflow-auto max-h-[90vh]">
          <h3 className="text-xl font-semibold mb-4">UX Journey</h3>
          <p className="mb-4 italic">{project.uxDetails.text}</p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
             {project.uxDetails.images.map((src, index) => (
              <img key={index} src={src} alt={`UX ${index + 1}`} className="rounded shadow" />
            ))}
          </div>
          <button
            onClick={() => setShowUX(false)}
            className="mt-4 px-3 py-1 bg-bbPink text-bbOffBlack dark:text-bbOffBlack rounded hover:bg-bbTeal"
          >
            Close
          </button>
        </div>
    </div>
    )}

    {/* Screenshot Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-bbTeal bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-bbOffWhite dark:bg-gray-900 text-black dark:text-bbOffWhite p-6 rounded-xl max-w-lg w-full overflow-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="italic text-sm mb-4">{project.fullDescription}</p>
            <div className="text-sm space-y-2">
              <p><strong>Target Audience:</strong> {project.target}</p>
              <p><strong>Problem Solved:</strong> {project.problem}</p>
              <p><strong>Empathy Notes:</strong> {project.empathy}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <p><strong>Features:</strong> {project.features.join(', ')}</p>
            </div>

        <div className="mt-4 flex flex-wrap gap-4">
        {project.demo ? (
          <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bbBlueDark dark:text-bbBlueDark underline font-bold hover:text-bbPinkDark"
          >
          Live Demo
          </a>
        ) : null}

        {project.screenshot && (
          <button
            onClick={() => setShowScreenshots(true)}
            className= "text-bbOrange dark:text-bbOrange underline font-bold hover:text-bbPinkDark "
          >
          View Screenshot{Array.isArray(project.screenshot) && project.screenshot.length > 1 ? 's' : ''}
          </button>
        )}

        {project.github && (
          <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bbTealDark dark:text-bbTealDark underline font-bold hover:text-bbPinkDark"
          >
          GitHub
          </a>
       )}
        </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-3 py-1 bg-bbPink text-bbOffBlack dark:text-bbOffBlack rounded hover:bg-bbTeal"
            >
              Close
            </button>
        </div>
        </div>
      )}

      {showScreenshots && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl max-w-3xl w-full overflow-auto max-h-[90vh]">
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
            className="mt-4 px-3 py-1 bg-bbPink text-bbOffBlack dark:text-bbOffBlack rounded hover:bg-bbTeal"
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
    const frontend = ['React', 'Tailwind', 'JavaScript', 'HTML', 'CSS', 'UI/UX', 'Figma', 'Next.js', 'JSON','Static'];
    const backend = ['Flask', 'API', 'Auth', 'Python', 'Java', 'Node.js', 'Django', 'Login', 'Security'];
    const database = ['MySQL', 'SQLite'];
    const gui = ['Tkinter','Desktop GUI'];
    const mobile = ['Flutter (Dart)'];
    const creative = ['Photoshop', 'Creative', 'Animation', 'Audio', 'Adventure Story', 'Sound', 'Personal Project'];
    const tools = ['Terminal', 'CLI', 'ETL', 'Dev Tool', 'Math', 'Utilities'];
    const client = ['Client Work', 'Website'];
  
    if (frontend.includes(tag)) return 'bg-bbPink';
    if (backend.includes(tag)) return 'bg-bbBlueSoft';
    if (database.includes(tag)) return 'bg-bbGreenSoft';
    if (gui.includes(tag)) return 'bg-bbBlue';
    if (mobile.includes(tag)) return 'bg-bbGreen';
    if (creative.includes(tag)) return 'bg-bbTeal';
    if (tools.includes(tag)) return 'bg-bbPurple';
    if (client.includes(tag)) return 'bg-bbOrange';
  
    return 'bg-black'; // fallback
  }
  