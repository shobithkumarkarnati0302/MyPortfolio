import { GraduationCap, Calendar, MapPin, Award, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  description?: string;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const EducationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewLink, setPreviewLink] = useState('');

  const education: Education[] = [
    {
      id: 1,
      institution: "Parul University",
      degree: "B.Tech in Computer Science & Engineering",
      location: "Vadodara, Gujarat",
      period: "2022 – 2026",
      grade: "CGPA: 7.80",
      description: "Currently pursuing a Bachelor's degree focusing on core computer science subjects, data structures, algorithms, and web development."
    },
    {
      id: 2,
      institution: "Sri Chandra Junior College",
      degree: "XII",
      location: "Champapet, Hyderabad",
      period: "2021 – 2022",
      grade: "85.1%"
    },
    {
      id: 3,
      institution: "Sri Chaitanya School",
      degree: "SSC",
      location: "Nacharam, Hyderabad",
      period: "2020",
      grade: "CGPA: 10.0"
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: "The Full stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "02/2024 – 05/2024",
      link: "https://drive.google.com/file/d/134vH1DApB1tY-wR34VWDZWOmKDRtQWSn/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL",
      date: "01/2024 – 04/2024",
      link: "https://drive.google.com/file/d/10TibH2X1dEo57v0IWA3j2kKBwGViUGlC/view?usp=sharing"
    },
    {
      id: 3,
      title: "Database & SQL",
      issuer: "Infosys SpringBoard",
      date: "05/10/2023",
      link: "https://drive.google.com/file/d/1jfWU0J0Y36_n7v4tK-faJicO8-OJ7yjE/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Artificial Intelligence with Python",
      issuer: "Coincent",
      date: "11/2022 – 01/2023",
      link: "https://drive.google.com/file/d/1sOJBOAnGMWOZQR9Pzk2YaNj64R-9J96W/view?usp=drive_link"
    }
  ];

  // Function to convert Google Drive view link to embed link
  const getEmbedLink = (link: string) => {
    const fileId = link.match(/\/d\/(.+?)\//)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return link;
  };

  // Open modal with the certificate preview
  const openPreview = (link: string) => {
    setPreviewLink(getEmbedLink(link));
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewLink('');
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-portfolio-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-portfolio-primary" />
              Academic Background
            </h3>
            
            <div className="relative border-l-2 border-portfolio-primary pl-8 space-y-10">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-10 w-5 h-5 rounded-full bg-portfolio-primary"></div>
                  
                  <div className={cn(
                    "bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md",
                    "hover:shadow-lg transition-all duration-300"
                  )}>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.institution}
                    </h4>
                    
                    <p className="text-portfolio-primary font-medium mb-3">
                      {edu.degree}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {edu.grade}
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Award className="w-6 h-6 mr-2 text-portfolio-primary" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={cn(
                    "bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md",
                    "hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]",
                    "border-l-4 border-portfolio-primary"
                  )}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center">
                      <span className="font-medium mr-1">Issuer:</span>
                      {cert.issuer}
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  {cert.link && (
                    <button
                      onClick={() => openPreview(cert.link)}
                      className="text-portfolio-primary hover:text-portfolio-secondary text-sm font-medium inline-flex items-center mt-2"
                    >
                      View Certificate
                      <svg 
                        className="w-3.5 h-3.5 ml-1" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 14 10"
                      >
                        <path 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full h-[80vh] relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={previewLink}
              className="w-full h-full rounded-lg"
              title="Certificate Preview"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationSection;