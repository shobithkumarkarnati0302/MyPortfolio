import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Github,
  ExternalLink,
  Terminal,
  Code2,
  Cpu,
  Goal,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Redirect if project not found
    if (!project) {
      navigate("/404");
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      {/* Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover blur-sm scale-110"
        />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Back to Projects
            </Link>
          </Button>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 container mx-auto">
          <div className="animate-slide-up max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-portfolio-primary/90 hover:bg-portfolio-primary text-white border-none shadow-lg backdrop-blur-sm scale-110">
                Project Details
              </Badge>
              {project.inProgress && (
                <Badge
                  variant="destructive"
                  className="shadow-lg backdrop-blur-sm scale-110"
                >
                  In Progress
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 shadow-black/50 drop-shadow-md leading-tight">
              {project.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl max-w-3xl drop-shadow-md leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              {project.longDescription && (
                <div className="animate-fade-in mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-portfolio-primary rounded-full inline-block"></span>
                    About the Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </div>
              )}

              <Separator className="my-10 bg-gray-100 dark:bg-gray-700" />

              <div className="animate-fade-in mb-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-portfolio-primary" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 hover:border-portfolio-primary/30 transition-colors"
                    >
                      <Terminal className="w-5 h-5 text-portfolio-primary mt-1 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {(project.challenges || project.solutions) && (
                <div className="grid grid-cols-1 gap-8 animate-fade-in">
                  {project.challenges && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-red-500/90 flex items-center gap-2">
                        <Goal className="w-6 h-6" /> Challenges
                      </h3>
                      <ul className="grid gap-3">
                        {project.challenges.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/20"
                          >
                            <span className="font-bold text-red-500 mt-1">
                              •
                            </span>{" "}
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.solutions && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-green-600/90 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6" /> Solutions
                      </h3>
                      <ul className="grid gap-3">
                        {project.solutions.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/20"
                          >
                            <span className="font-bold text-green-600 mt-1">
                              •
                            </span>{" "}
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <div className="rounded-lg overflow-hidden translate-y-[-40px] shadow-2xl border-4 border-white dark:border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-6 mt-[-20px]">
                <div className="flex flex-col gap-3">
                  {project.liveLink && (
                    <Button
                      className="w-full h-12 text-lg bg-gradient-to-r from-portfolio-primary to-blue-600 hover:from-blue-600 hover:to-portfolio-primary text-white shadow-xl shadow-portfolio-primary/20 transition-all duration-300 hover:scale-[1.02]"
                      size="lg"
                      asChild
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Visit Live Site <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  )}

                  <div className="flex gap-3">
                    {project.githubLinks ? (
                      <>
                        {project.githubLinks.frontend && (
                          <Button
                            variant="outline"
                            className="flex-1 h-11 border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            asChild
                          >
                            <a
                              href={project.githubLinks.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Github className="w-5 h-5" /> Frontend
                            </a>
                          </Button>
                        )}
                        {project.githubLinks.backend && (
                          <Button
                            variant="outline"
                            className="flex-1 h-11 border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            asChild
                          >
                            <a
                              href={project.githubLinks.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Github className="w-5 h-5" /> Backend
                            </a>
                          </Button>
                        )}
                      </>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full h-11 border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-5 h-5" /> View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4 text-lg">
                    <Code2 className="w-5 h-5 text-portfolio-primary" /> Tech
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 py-1.5 px-3 text-sm font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
