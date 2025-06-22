
import { Briefcase, GraduationCap, Code, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-portfolio-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better! Here's a glimpse into my background and what drives me.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who am I?
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400">
              I'm a third-year Computer Science student at Parul University with a strong passion for frontend development 
              and Data Structures and Algorithms. My journey in tech is driven by solving challenging problems, 
              optimizing solutions, and continuously improving my skills.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400">
              I actively participate in competitive programming and challenges focused on DSA concepts, 
              honing my ability to craft efficient and scalable solutions. My goal is to leverage my technical knowledge 
              to create impactful and user-friendly applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400">
              I'm eager to contribute my knowledge and expertise to a dynamic organization where I can make a meaningful 
              impact and grow professionally. Outside of coding, I enjoy surfing the internet, fact-checking, and online research.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            <div className={cn(
              "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md",
              "hover:shadow-lg transition-all hover:translate-y-[-5px]",
              "border-l-4 border-portfolio-primary"
            )}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-light dark:bg-gray-700 p-3 rounded-full text-portfolio-primary">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Frontend Development
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about creating responsive, user-friendly interfaces with modern web technologies.
              </p>
            </div>
            
            <div className={cn(
              "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md",
              "hover:shadow-lg transition-all hover:translate-y-[-5px]",
              "border-l-4 border-portfolio-primary"
            )}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-light dark:bg-gray-700 p-3 rounded-full text-portfolio-primary">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Data Structures & Algorithms
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Actively participate in competitive programming to enhance problem-solving skills.
              </p>
            </div>
            
            <div className={cn(
              "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md",
              "hover:shadow-lg transition-all hover:translate-y-[-5px]",
              "border-l-4 border-portfolio-primary"
            )}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-light dark:bg-gray-700 p-3 rounded-full text-portfolio-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Pursuing B.Tech in Computer Science at Parul University with 7.80 CGPA.
              </p>
            </div>
            
            <div className={cn(
              "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md",
              "hover:shadow-lg transition-all hover:translate-y-[-5px]",
              "border-l-4 border-portfolio-primary"
            )}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-light dark:bg-gray-700 p-3 rounded-full text-portfolio-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Languages
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Fluent in English, Hindi, and Telugu, enabling effective communication across diverse teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
