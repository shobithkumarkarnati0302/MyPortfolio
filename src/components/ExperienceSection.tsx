import { Briefcase, Calendar, MapPin, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
  is_completed?: boolean;
  certificateLink?: string;
}

const ExperienceSection = () => {
  const getEmbedLink = (link: string) => {
    if (!link) return '';
    const fileId = link.match(/\/d\/(.+?)\//)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return link;
  };

  const experiences: Experience[] = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "ZMater Technologies Private Limited",
      location: "Karmanghat, Hyderabad, Telangana(Onsite)",
      period: "Jan 2026 - Present",
      description: [
        "Currently working as an intern.",
        "Contributing to Blue Wheel(The Vechile App).",
        "Gaining hands-on experience in Mobile Application Development, React Native.",
      ],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHA4I5d2d5JXQ/company-logo_200_200/company-logo_200_200/0/1686313799157/zmater_technologies_private_limited_logo?e=2147483647&v=beta&t=IJsjZmJWIrEc00hwdNGQzQLhxWP_mCWwpYmbzioBZqw",
      is_completed: false,
    },
    {
      id         : 2,
      role       : "Front End Web Development Intern",
      company    : "Edunet Foundation (AICTE & IBM SkillsBuild)",
      location   : "Remote",
      period     : "Aug 2025 - Sept 2025",
      description: [
        "Completed a 6-week internship focused on Front End Web Development.",
        "Program implemented in collaboration with All India Council for Technical Education (AICTE) and IBM SkillsBuild.",
        "Developed practical skills in building modern web applications.",
      ],
      logo           : "data:image/png;base64,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",
      is_completed   : true,
      certificateLink: 
"https://drive.google.com/file/d/1e2x1MO59iRUx5dE8ta-qwtoDQ9TxpSfp/view?usp=sharing",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-portfolio-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles I've held.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-portfolio-primary pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-portfolio-primary border-4 border-white dark:border-gray-900"></div>

                <div
                  className={cn(
                    "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md",
                    "hover:shadow-lg transition-all duration-300",
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-24 h-24 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm flex items-center justify-center overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-portfolio-primary font-medium text-lg">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {exp.is_completed && (
                    <div className="mt-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant   = "outline" className = "gap-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-colors">
                          <Eye    className = "w-4 h-4" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] p-4 sm:p-6 overflow-hidden flex flex-col max-h-[90vh]">
                          <DialogHeader className="flex-shrink-0">
                            <DialogTitle className="text-xl sm:text-2xl">Certificate of Completion</DialogTitle>
                            <DialogDescription>
                              {exp.role} at {exp.company}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-2 flex-grow overflow-auto flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-2 sm:p-4">
                            {exp.certificateLink ? (
                              <iframe
                                src={getEmbedLink(exp.certificateLink)}
                                className="w-full h-[60vh] sm:h-[70vh] rounded-md"
                                title="Certificate Preview"
                                allow="autoplay"
                              ></iframe>
                            ) : (
                              <img 
                                src={exp.logo} 
                                alt="Completion Certificate" 
                                className="w-full h-auto max-h-[60vh] object-contain rounded shadow-sm"
                              />
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
