import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type SkillCategory = "all" | "frontend" | "backend" | "languages" | "tools";

type Skill = {
  name: string;
  proficiency: number;
  category: SkillCategory[];
  icon: string;
};

const skills: Skill[] = [
  {
    name: "Python",
    proficiency: 90,
    category: ["languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML",
    proficiency: 90,
    category: ["frontend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    proficiency: 85,
    category: ["frontend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    proficiency: 75,
    category: ["frontend", "languages"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    proficiency: 75,
    category: ["frontend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    proficiency: 85,
    category: ["frontend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React.js",
    proficiency: 65,
    category: ["frontend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    proficiency: 60,
    category: ["backend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    proficiency: 65,
    category: ["backend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    proficiency: 75,
    category: ["backend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name       : "n8n",
    proficiency: 80,
    category   : ["tools", "backend"],
    icon       : "https://cdn.simpleicons.org/n8n",
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const filtered = skills.filter(
      (skill) =>
        activeCategory === "all" || skill.category.includes(activeCategory),
    );
    setVisibleSkills(filtered);
  }, [activeCategory]);

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "languages", label: "Languages" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-portfolio-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technical skills I've developed through education,
            projects, and practice.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-lg shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-portfolio-primary text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
