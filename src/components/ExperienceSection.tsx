import { Briefcase, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Intern",
      company: "ZMater Technologies Private Limited",
      location: "Karmanghat, Hyderabad, Telangana",
      period: "Jan 2026 - Present",
      description: [
        "Currently working as an intern.",
        "Contributing to Blue Wheel(The Vechile App).",
        "Gaining hands-on experience in Mobile Application Development, React Native.",
      ],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHA4I5d2d5JXQ/company-logo_200_200/company-logo_200_200/0/1686313799157/zmater_technologies_private_limited_logo?e=2147483647&v=beta&t=IJsjZmJWIrEc00hwdNGQzQLhxWP_mCWwpYmbzioBZqw", // TODO: Update with actual logo URL
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
