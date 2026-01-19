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
}

export const projects: Project[] = [
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
    githubLinks: {
      frontend:
        "https://github.com/shobithkumarkarnati0302/CuraBot-Frontend.git",
      backend: "https://github.com/shobithkumarkarnati0302/CuraBot-Backend.git",
    },
    liveLink: "https://curabot-project.vercel.app/",
  },
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
    githubLink: "https://github.com/shobithkumarkarnati0302/CodeOscan",
    liveLink: "https://code-oscan.vercel.app/",
  },
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
    githubLink: "https://github.com/shobithkumarkarnati0302/urlShortner",
    liveLink: "https://url-shortner-chi-green.vercel.app/",
  },
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
    githubLink: "https://github.com/shobithkumarkarnati0302/Spotify-Clone",
    liveLink: "https://spotify-clone-shobith.netlify.app/",
  },
];
