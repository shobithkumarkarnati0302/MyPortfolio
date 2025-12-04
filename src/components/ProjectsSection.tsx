
import { Github, ExternalLink, MoveRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  githubLink?: string;
  githubLinks?: { frontend?: string; backend?: string };
  liveLink?: string;
  inProgress?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "CuraBot - Hospital Management System",
      description: "Designed Frontend of a comprehensive hospital management system developed as final year project, featuring responsive role-based UI with seamless data flow integration and production-ready deployment.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      techStack: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router v6"],
      features: [
        "Role-Based User Interface",
        "Responsive Design Architecture",
        "RESTful API Integration",
        "Smooth Animations with Framer Motion",
        "Modern TypeScript Implementation",
        "Production-Ready Deployment",
        "Seamless Data Flow Management",
        "Advanced Routing System",
        "Hospital Workflow Optimization"
      ],
      githubLinks: {
        frontend: "https://github.com/shobithkumarkarnati0302/CuraBot-Frontend.git",
        backend: "https://github.com/shobithkumarkarnati0302/CuraBot-Backend.git"
      },
      liveLink: "https://curabot-project.vercel.app/",
    },
    {
      id: 2,
      title: "CodeOscan - AI Code Analyzer",
      description: "Full-stack AI-powered code analysis platform that leverages Google Generative AI to provide intelligent code evaluation, complexity assessment, and optimization recommendations for 13+ programming languages.",
      image: "/codeoscan.png",
      techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Google Generative AI", "Tailwind CSS", "JWT", "Vite"],
      features: [
        "AI-Powered Code Analysis with Google Generative AI",
        "Time & Space Complexity Detection",
        "Multi-Language Support (13+ Languages)",
        "Optimization Suggestions & Code Explanations",
        "Secure JWT Authentication & User Management",
        "Analysis History with Personal Notes",
        "Shareable Analysis Results",
        "Modern Responsive UI with Syntax Highlighting",
      ],
      githubLink: "https://github.com/shobithkumarkarnati0302/CodeOscan",
      liveLink: "https://code-oscan.vercel.app/",
    },
    {
      id: 3,
      title: "urlShortner",
      description: "A full-stack URL Shortener application built with the MERN stack. Easily convert long URLs into short, shareable links with optional custom aliases, expiry, and click tracking. Modern UI with Tailwind CSS.",
      image: "https://ik.imagekit.io/shobithbunny/urlShortner.png?updatedAt=1751618784332",
      techStack: ["MERN Stack", "React.js", "JavaScript", "Tailwind CSS", "MongoDb","Node.js","Express.js"],
      features: [
        "Shorten long URLs to unique,Custom alias support (e.g., sho.rt/myalias)",
        "Click tracking for each short link",
        "Redirection to original URLs",
        "Modern, responsive UI (React + Tailwind CSS)",
      ],
      githubLink: "https://github.com/shobithkumarkarnati0302/urlShortner",
      liveLink: "https://github.com/shobithkumarkarnati0302/urlShortner",
    },
    {
      id: 4,
      title: "Spotify Clone",
      description: "A simple Spotify clone built using HTML, CSS, and JavaScript that mimics the core features of the Spotify platform.",
      image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Media player functionality",
        "Track management",
        "User interface similar to Spotify"
      ],
      githubLink: "https://github.com/shobithkumarkarnati0302/Spotify-Clone",
      liveLink: "https://spotify-clone-shobith.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-portfolio-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "flex flex-col lg:flex-row gap-8 items-center",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-3 justify-center">
                        {project.githubLinks ? (
                          <>
                            {project.githubLinks.frontend && (
                              <a 
                                href={project.githubLinks.frontend} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white text-gray-900 p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                                title="Frontend Repository"
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {project.githubLinks.backend && (
                              <a 
                                href={project.githubLinks.backend} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white text-gray-900 p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                                title="Backend Repository"
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                          </>
                        ) : project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  {project.inProgress && (
                    <Badge 
                      className="absolute top-3 right-3 bg-yellow-500"
                      variant="secondary"
                    >
                      In Progress
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 my-3">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      className="bg-portfolio-light text-portfolio-primary dark:bg-gray-800 hover:bg-portfolio-accent"
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-portfolio-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-portfolio-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  {project.liveLink ? (
                    <Button 
                      className="bg-portfolio-primary hover:bg-portfolio-secondary"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        View Project <MoveRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="bg-portfolio-primary hover:bg-portfolio-secondary"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        View on GitHub <Github className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
