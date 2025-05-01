// Bethany Baril  04/12/25

const projectsData = [
    {
      id: 1,
      title: 'Home Sweet Home',
      description: 'A calming, southern-inspired website for household services.',
      fullDescription: 'This static site was built to support a friend’s household assistance business, offering chores and non-medical daily help for older adults.',
      tags: ['JavaScript', 'HTML', 'CSS', 'JSON', 'Next.js', 'GitHub', 'Photoshop', 'Personal Project', 'Client Work', 'Website'],
      uxDetails: {
        text: "This project started with a flat layout. After feedback, I iterated with new sectioning, added icons, and focused on navigation clarity for older users.",
        images: [
          "/images/slide 1-firstTry.png",
          "/images/slide 2-firstTry.png",
          "/images/slide 3-firstTry.png",
          "/images/slide 4-firstTry.png",
          "/images/slide 5-firstTry.png",
          "/images/slide1-2ndTry.png",
          "/images/slide2-2ndTry.png",
          "/images/slide3-2ndTry.png",
          "/images/slide4-2ndTry.png"
        ]
      },      
      target: 'Middle-aged adults and elderly individuals in need of extra help around the home.',
      problem: 'The client needed an online presence to increase referrals and accessibility.',
      empathy: 'Designed with a warm, southern hospitality theme to match the tone of the business and its clients.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Next.js','Photoshop', 'GitHub'],
      features: ['Static layout', 'Soft branding', 'Client consultation based design'],
      screenshot: '/images/home.sweet.home2.png',
      demo: 'https://bbaril.github.io/home.sweet.home',
      github: 'https://github.com/BBaril/home.sweet.home',
      group: 'client-work'
    },
  
    {
      id: 2,
      title: 'Dice Roller - GUI',
      description: 'A Dice rolling tool for your desktop.',
      fullDescription: 'Built as practice for enhancing my knowledge.',
      tags: ['Next.js', 'GitHub', 'Tkinter', 'Desktop GUI',  'Math', 'Personal Project', ],
      target: 'My first GUI.',
      problem: 'Needed a project that could be visible.',
      empathy: 'Added a button.',
      technologies: ['Tkinter', 'Python',],
      features: ['Button'],
      screenshot: '/images/twoDice.png',
      demo: '', // No demo
      github: 'https://github.com/BBaril/twoDice.git',
      group: 'desktop-tools'
    },

    {
      id: 3,
      title: 'Dice Roller - Web App',
      description: 'A Dice rolling tool for an application.',
      fullDescription: 'Built to enhance tabletop gaming and practice full-stack concepts.',
      tags: ['React', 'Tailwind', 'JavaScript', 'Next.js', 'GitHub', 'UI/UX', 'Personal Project'],
      target: 'Kids and RPG fans who enjoy whimsical games',
      problem: 'Needed a tool to simulate dice logic in a fantasy setting',
      empathy: 'Added sounds, scroll visuals, and large dice for accessibility',
      technologies: ['React', 'Tailwind', 'JavaScript',],
      features: ['Dice rolling', 'Sound effects', 'Responsive design'],
      screenshot: '/images/twoDice-Netlifty.fix.png',
      demo: 'https://diceroller-two.netlify.app/',
      github: ['https://github.com/BBaril/dice-roller-fullstack.git'],
      group: 'web-interface'
    },

    {
      id: 4,
      title: 'Movie Login System',
      description: 'A secure login and registration system with user input validation, and database integration.',
      fullDescription: 'This project implements user authentication to control access to a planned movie catalog. It focuses on registration, hashed password storage, and login flow.',
      tags: ['Python', 'Flask', 'Auth', 'Login', 'Security', 'SQLite', 'Next.js', 'GitHub', 'Personal Project',],
      target: 'Future family users and admins managing a private digital archive.',
      problem: 'My first backend project designed to run locally.',
      empathy: 'Built with family-friendly design and safe user storage in mind.',
      technologies: ['Python', 'Flask', 'SQLite', 'Jinja Templates'],
      features: ['User registration', 'Login page', 'Password hashing', 'Database connectivity'],
      screenshot: ['/images/signInPage2.png', '/images/signUpPage2.png'],
      demo: '', // No live demo yet
      github: 'https://github.com/BBaril/movieLoginSystem',
      group: 'desktop-tools'
    },
    
    {
      id: 5,
      title: 'Book Recommender - GUI',
      description: 'A simple desktop interface for suggesting books.',
      fullDescription: 'Python + Tkinter app that helps users find book titles based on genre or interest.',
      tags: ['Python', 'Next.js', 'GitHub','Tkinter', 'Desktop GUI', 'Personal Project'],
      target: 'Readers looking for new book suggestions.',
      problem: 'Needed a user-friendly tool to explore books.',
      empathy: 'Designed for non-technical users, with minimal UI and one-click simplicity.',
      technologies: ['Python', 'Tkinter'],
      features: ['GUI', 'Search Field', 'Suggestion Logic', 'Results display'],
      screenshot: '/images/bookRecS.png', 
      demo: '', // No demo
      github: 'https://github.com/BBaril/bookRecommendation.git',
      group: 'desktop-tools'
    },
    
    {
      id: 6,
      title: 'Adventure Game (Text-Based)',
      description: 'A classic choose-your-path game written in Python.',
      fullDescription: 'My first interactive game, designed in terminal with player choices, branching paths, and a friendly tone. It laid the groundwork for more storybook web projects.',
      tags: ['Python', 'Next.js', 'GitHub', 'Terminal', 'Adventure Story', 'Creative', 'Personal Project'],
      target: 'Kids and coding learners interested in narrative logic and branching stories.',
      problem: 'Wanted a fun, beginner-friendly way to explore story logic with code.',
      empathy: 'Written with playful storytelling and accessible decision points.',
      technologies: ['Python'],
      features: ['Branching story paths', 'Console-based interactions', 'Replayable structure'],
      screenshot: '/images/chooseAdv.png',
      demo: '', // Not web-based
      github: 'https://github.com/BBaril/Adventure.Game',
      group: 'creative-projects'
    },

    {
      id: 7,
      title: 'Interactive Storybook (First Edition)',
      description: 'A web-based choose-your-own-adventure game built in React.',
      fullDescription: 'This was Bethany’s first fully interactive story project in web format, transforming a text-based Python narrative into a visual, clickable React experience.',
      tags: ['React', 'Tailwind', 'Next.js', 'GitHub', 'Sound', 'Adventure Story', 'Creative', 'Personal Project'],
      target: 'Kids aged 7–10 and fans of choose-your-own-adventure stories.',
      problem: 'Needed a way to showcase interactive storytelling in a visual web format.',
      empathy: 'Designed with child-friendly language, fun visuals, and a sense of exploration.',
      technologies: ['React', 'Tailwind CSS'],
      features: ['Branching paths', 'Navigation buttons', 'Themed layout'],
      screenshot: '/images/interactive-storybook.png',
      demo: 'https://interactive-storybook.netlify.app/',
      github: 'https://github.com/BBaril/interactive-storybook',
      group: 'creative-projects'
    },

    {
      id: 8,
      title: 'Whispers of Wisdom',
      description: 'A magical choose-your-own-adventure story for kids.',
      fullDescription: 'An interactive storybook with branching paths, animated visuals, and hidden dice-based challenges.',
      tags: ['React', 'Tailwind', 'Next.js', 'UI/UX', 'GitHub', 'Sound', 'Animation', 'Adventure Story', 'Creative', 'Personal Project'],
      target: 'Children ages 7–10, especially those who enjoy stories with exploration and puzzles.',
      problem: 'Needed a way to transform a Python storybook into an immersive web format.',
      empathy: 'Created with children in mind: bright visuals, large text, audio, and gentle difficulty.',
      technologies: ['React', 'Tailwind CSS', 'Audio', 'Custom Story Engine'],
      features: ['Dice mechanics', 'Token collection', 'Mini-puzzles'],
      screenshot: '', // No image 
      demo: '', // no demo
      github: '', // no github
      group: 'creative-projects'
    },
    
    {
      id: 9,
      title: "Calculator",
      description: "A clean, Tkinter-based desktop calculator.",
      fullDescription:
        "A simple but stylish GUI calculator built with Python and Tkinter. This project highlights utility-focused thinking, visual layout precision, and branding polish with a custom favicon.",
      tags: ['Python', 'Next.js', 'GitHub' ,'Tkinter', 'Desktop GUI', 'Math', 'Utilities', ],
      target: "Desktop users who need a quick, intuitive calculator tool.",
      problem: "Created to reinforce GUI layout and event handling with Python.",
      empathy: "Designed for easy use, clear layout, and soft colors for visual comfort.",
      technologies: ['Python', 'Tkinter'],
      features: ['Standard arithmetic', 'Clear button', 'Custom GUI layout', 'Favicon branding'],
      screenshot: '/images/Calculator.png',
      group: 'utility-apps',
      github: '',  // no github currently
      demo: '',    // no demo
    },
    
    {
      id: 10,
      title: "Original Portfolio Website",
      description: "A static HTML/CSS portfolio project with hamburger nav.",
      fullDescription:
        "This was my first portfolio website, hand-coded in HTML and CSS with a floating menu, smooth scroll, and contact section. It marked the beginning of my front-end journey and laid the foundation for my upgraded React + Next projects.",
      tags: ['HTML', 'CSS', 'JavaScript', 'Static',  'GitHub', 'Client Work', 'Website', 'Personal Project',],
      uxDetails: {
        text: "My first portfolio was built with static HTML and CSS — no frameworks, no development server. It laid the foundation for everything I’ve built since, and taught me the value of structure, spacing, and clean presentation.",
      },
      target: "Employers and visitors reviewing my early design progress.",
      problem: "Needed a way to present projects and skills visually without a JS framework.",
      empathy: "Optimized for smooth scrolling and simple layout to guide users easily.",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Hamburger nav', 'Section scrolling', 'Contact footer'],
      screenshot: ['/images/portfolio-staticMain2.png','/images/portfolio-staticMain.png' ], 
      group: 'client-work',
      github: 'https://github.com/BBaril/bethany.baril.portfolio',
      demo: 'https://bethany-baril-portfolio.netlify.app/'
    }
    

  ];
  
  export default projectsData;
  
  