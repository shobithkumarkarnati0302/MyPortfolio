export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  githubLink?: string;
  githubLinks?: { frontend?: string; backend?: string };
  liveLink?: string;
  inProgress?: boolean;
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  //FitnessApp
  {
    id: 1,
    slug: "fitnessapp",
    title: "Fitness Mobile Application",
    description:
      "A full-stack React Native fitness app built as part of an internship task, featuring JWT authentication, an 16-muscle-group exercise browser powered by API Ninjas, profile management, and a 30-day subscription tracker.",
    longDescription:
      "Fitness Mobile App is a cross-platform (Android & iOS) fitness application built with React Native and TypeScript. Users register with their physical stats (height, weight, age, gender), browse 16 muscle groups, and explore 100+ exercises fetched live from the API Ninjas Exercise API. The app persists sessions via AsyncStorage, protects routes based on JWT tokens, and includes a subscription progress bar tracking the user's 30-day free plan cycle. The backend is a Node.js/Express REST API with MongoDB and bcryptjs-hashed passwords.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww",
    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    features: [
      "JWT Authentication with 7-day token expiry & AsyncStorage session persistence",
      "16 Muscle Group Browser with live search & filtering",
      "100+ Exercises fetched from API Ninjas Exercise API",
      "Personalized time-based greeting (Morning / Afternoon / Evening)",
      "Full Profile Management — view & edit height, weight, age, gender",
      "30-Day Subscription Progress Bar",
      "Protected Route Navigation (token-based Auth Guard)",
      "Workout Detail Screen with exercise instructions & equipment info",
      "Cross-platform support for Android & iOS",
    ],
    challenges: [
      "Securely persisting JWT tokens and user session across app restarts without exposing them.",
      "Integrating a third-party Exercise API while keeping API keys out of the source code.",
      "Implementing a dynamic subscription progress bar that calculates elapsed days from the server-stored start date.",
      "Showing up the Equipments, was confused whether the equipment is in the form of array or string",
    ],
    solutions: [
      "Used AsyncStorage with an Axios request interceptor to automatically attach Bearer tokens to every API call.",
      "Leveraged react-native-config and .env files to inject API_NINJAS_KEY and BASE_URL at build time.",
      "Calculated subscription usage on the client side using the subscriptionStartDate field returned from MongoDB, enabling a live progress indicator with no extra API call.",
      "Gone through the API Documentation and understood the API Structure and implemented it in the app.",
    ],
    gallery: [
      "https://i.ibb.co/DPvxhm7N/Login-Screen-1.jpg",
      "https://i.ibb.co/Fq7VXJxm/Login-Screen-2.jpg",
      "https://i.ibb.co/WvjcDjG0/Register-Screen.jpg",
      "https://github.com/user-attachments/assets/2127d04d-d09d-4eb9-a0a7-0a40b53d2bdc",
      "https://i.ibb.co/Mx9fPTbr/Home-Screen-2.jpg",
      "https://i.ibb.co/TxYBcmsX/Loading-Screen.jpg",
      "https://i.ibb.co/gMGpGtFJ/Workout-List-Screen.jpg",
      "https://i.ibb.co/C3bnK2pW/Workout-Detail-Screen.jpg",
      "https://i.ibb.co/Ps896Dx4/Profile-Screen-1.jpg",
      "https://i.ibb.co/35JC1wP6/Profile-Screen-2.jpg",
      "https://i.ibb.co/pvLrV2xs/Edit-Profile-Screen.jpg",
    ],
    githubLink: "https://github.com/shobithkumarkarnati0302/FITNESS-MOBILE-APP",
    liveLink: "https://github.com/shobithkumarkarnati0302/FITNESS-MOBILE-APP",
  },
  //curabot
  {
    id: 1,
    slug: "curabot",
    title: "CuraBot - Hospital Management System",
    description:
      "Designed Frontend of a comprehensive hospital management system developed as final year project, featuring responsive role-based UI with seamless data flow integration and production-ready deployment.",
    longDescription:
      "CuraBot is a sophisticated Hospital Management System designed to streamline healthcare facility operations. The frontend is built with React and TypeScript to ensure type safety and component reusability. It features a distinct interface for different roles (Admin, Doctor, Patient), ensuring data security and a tailored user experience.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router v6",
    ],
    features: [
      "Role-Based User Interface (Admin, Doctor, Patient)",
      "Responsive Dashboard Architecture",
      "Real-time Appointment Scheduling UI",
      "Smooth Animations with Framer Motion",
      "Strict Type Checking with TypeScript",
      "Production-Optimized Build",
      "Secure Patient Data Handling",
      "Advanced Routing with Protected Routes",
      "Integrated Medical History Tracking",
    ],
    challenges: [
      "Managing complex state for different user roles within a single application.",
      "Ensuring the UI remains responsive and accessible across various devices.",
      "Optimizing build size and load times for a feature-rich application.",
    ],
    solutions: [
      "Implemented Context API and custom hooks for efficient global state management.",
      "Utilized Tailwind CSS's utility-first approach for rapid, responsive design.",
      "Employed code-splitting and lazy loading to enhance performance.",
    ],
    gallery: [
      "https://i.ibb.co/Y4cMYkjJ/Screenshot-2026-03-04-124943.png",
      "https://i.ibb.co/C3WKj6vt/Screenshot-2026-03-04-124953.png",
      "https://i.ibb.co/WWZ5RHdF/Screenshot-2026-03-04-125004.png",
      "https://i.ibb.co/67mDj3qX/Screenshot-2026-03-04-125013.png",
      "https://i.ibb.co/fGBYHRVk/Screenshot-2026-03-04-125124.png",
      "https://i.ibb.co/KckWNVB1/Screenshot-2026-03-04-125132.png",
      "https://i.ibb.co/4gNM7Cc2/Screenshot-2026-03-04-125142.png",
      "https://i.ibb.co/q3LPY67W/Screenshot-2026-03-04-125152.png",
      "https://i.ibb.co/V0ZG8wHm/Screenshot-2026-03-04-125201.png",
      "https://i.ibb.co/TDPNDmFP/Screenshot-2026-03-04-125223.png",
      "https://i.ibb.co/CsNcCvwW/Screenshot-2026-03-04-125231.png",
      "https://i.ibb.co/RkvzwYp1/Screenshot-2026-03-04-125245.png",
      "https://i.ibb.co/99GKCxNt/Screenshot-2026-03-04-125254.png",
    ],
    githubLinks: {
      frontend:
        "https://github.com/shobithkumarkarnati0302/CuraBot-Frontend.git",
      backend: "https://github.com/shobithkumarkarnati0302/CuraBot-Backend.git",
    },
    liveLink: "https://curabot-project.vercel.app/",
  },
  //codeoscan
  {
    id: 2,
    slug: "codeoscan",
    title: "CodeOscan - AI Code Analyzer",
    description:
      "Full-stack AI-powered code analysis platform that leverages Google Generative AI to provide intelligent code evaluation, complexity assessment, and optimization recommendations for 13+ programming languages.",
    longDescription:
      "CodeOscan is an advanced developer tool that uses Generative AI to review code. Unlike traditional linters, it understands context and logic, offering deep insights into time and space complexity, potential bugs, and refactoring opportunities. It supports a wide range of programming languages, making it a versatile companion for developers.",
    image: "/codeoscan.png",
    techStack: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Generative AI",
      "Tailwind CSS",
      "JWT",
      "Vite",
    ],
    features: [
      "AI-Powered Code Analysis with Google Generative AI",
      "Time & Space Complexity Detection & Analysis",
      "Multi-Language Support (13+ Languages including Python, Java, C++)",
      "Automated Optimization Suggestions & Refactoring Tips",
      "Secure User Authentication with JWT",
      "Persistent Analysis History linked to User Profiles",
      "Shareable Analysis Results via Unique Links",
      "Monaco Editor Integration for Code Input",
    ],
    challenges: [
      "Integrating a large language model (LLM) effectively with low latency.",
      "Sanitizing and formatting code snippets for safe execution and display.",
      "Handling rate limits and error responses from the AI API.",
    ],
    solutions: [
      "Implemented backend caching and optimized prompts to reduce API latency.",
      "Used robust parsing libraries and syntax highlighters for secure code rendering.",
      "Created a resilient error handling system with user-friendly feedback.",
    ],
    gallery: [
      "https://i.ibb.co/Q7fncFgg/Screenshot-2026-03-04-130854.png",
      "https://i.ibb.co/67d2fYkr/Screenshot-2026-03-04-130907.png",
      "https://i.ibb.co/pBJb96PH/Screenshot-2026-03-04-130916.png",
      "https://i.ibb.co/RpHsRcKf/Screenshot-2026-03-04-130922.png",
      "https://i.ibb.co/cS0t3fws/Screenshot-2026-03-04-131046.png",
      "https://i.ibb.co/xSWBKnFH/Screenshot-2026-03-04-131103.png",
      "https://i.ibb.co/XrCpvb3B/Screenshot-2026-03-04-131210.png",
      "https://i.ibb.co/JjHChCMq/Screenshot-2026-03-04-131236.png",
      "https://i.ibb.co/qYcMq9Cw/Screenshot-2026-03-04-131250.png",
      "https://i.ibb.co/0jYN9r82/Screenshot-2026-03-04-131309.png",
      "https://i.ibb.co/vCxq9G24/Screenshot-2026-03-04-131335.png",
    ],
    githubLink: "https://github.com/shobithkumarkarnati0302/CodeOscan",
    liveLink: "https://code-oscan.vercel.app/",
  },
  //urlshortner
  {
    id: 3,
    slug: "urlshortner",
    title: "urlShortner",
    description:
      "A full-stack URL Shortener application built with the MERN stack. Easily convert long URLs into short, shareable links with optional custom aliases, expiry, and click tracking. Modern UI with Tailwind CSS.",
    longDescription:
      "This project answers the common need for concise, trackable links. It's a robust full-stack application that provides users not just with shorter URLs, but with analytics on how those links are performing. It includes features like custom aliases for branding and link expiration for temporary sharing.",
    image:
      "https://ik.imagekit.io/shobithbunny/urlShortner.png?updatedAt=1751618784332",
    techStack: [
      "MERN Stack",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDb",
      "Node.js",
      "Express.js",
    ],
    features: [
      "Shorten long URLs to unique short codes",
      "Custom alias support (e.g., sho.rt/myalias)",
      "Detailed Click Analytics & Tracking",
      "QR Code Generation for Links",
      "Link Expiration & Management",
      "User Dashboard for Link History",
      "Secure Redirection Logic",
    ],
    challenges: [
      "Generating unique, collision-free short codes efficiently.",
      "Handling high volumes of redirection requests quickly.",
      "Designing a user-friendly dashboard for analytics.",
    ],
    solutions: [
      "Implemented a base62 encoding algorithm for short code generation.",
      "Optimized database indexing for fast lookups during redirection.",
      "Created a clean, card-based UI for managing links.",
    ],
    gallery: [
      "https://i.ibb.co/p6DkQCCp/Screenshot-2026-03-04-131820.png",
      "https://i.ibb.co/ynmsFSkj/Screenshot-2026-03-04-131927.png",
      "https://i.ibb.co/84gpcbh1/Screenshot-2026-03-04-131953.png",
    ],
    githubLink: "https://github.com/shobithkumarkarnati0302/urlShortner",
    liveLink: "https://url-shortner-chi-green.vercel.app/",
  },
  //spotify-clone
  {
    id: 4,
    slug: "spotify-clone",
    title: "Spotify Clone",
    description:
      "A simple Spotify clone built using HTML, CSS, and JavaScript that mimics the core features of the Spotify platform.",
    longDescription:
      "A faithful recreation of the Spotify web player interface, focusing on visual accuracy and core interaction patterns. This project demonstrates strong fundamentals in DOM manipulation and CSS layout techniques without relying on heavy frameworks.",
    image:
      "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive Music Player Interface",
      "Play/Pause/Skip Functionality",
      "Dynamic Volume Control",
      "Song Progress Bar",
      "Playlist Management UI",
      "Mobile-Responsive Layout",
    ],
    challenges: [
      "Recreating complex CSS layouts like the grid and flexbox structures of Spotify.",
      "Managing audio playback state using vanilla JavaScript.",
      " ensuring cross-browser compatibility.",
    ],
    solutions: [
      "Extensive use of CSS Grid and Flexbox for layout precision.",
      "Utilized the HTML5 Audio API for controlling media playback.",
      "Tested across multiple browsers to ensure consistent behavior.",
    ],
    gallery: [
      "https://i.ibb.co/67SfPk81/Screenshot-2026-03-04-132153.png",
      "https://i.ibb.co/3YBnqwSr/Screenshot-2026-03-04-132201.png",
      "https://i.ibb.co/RTFjMCBr/Screenshot-2026-03-04-132209.png",
      "https://i.ibb.co/FLP4J8vB/Screenshot-2026-03-04-132222.png",
      "https://i.ibb.co/vx3zFNSn/Screenshot-2026-03-04-132240.png",
    ],
    githubLink: "https://github.com/shobithkumarkarnati0302/Spotify-Clone",
    liveLink: "https://spotify-clone-shobith.netlify.app/",
  },
];
