
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm dark:bg-portfolio-dark/95 py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-portfolio-primary flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <Code2 className={cn("w-6 h-6", scrolled ? "animate-spin-slow" : "")} />
          <span className="animate-fade-in">Shobith Kumar</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 animate-fade-in">
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={item.name} className="animate-slide-down" style={{ animationDelay: `${index * 100}ms` }}>
                <a 
                  href={item.href} 
                  className={cn(
                    "relative text-gray-700 hover:text-portfolio-primary font-medium text-sm transition-colors duration-200 py-2",
                    activeSection === item.href.substring(1) ? "text-portfolio-primary" : ""
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-primary transform scale-x-0 transition-transform duration-300 origin-left",
                    activeSection === item.href.substring(1) ? "scale-x-100" : ""
                  )}></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/shobithkumarkarnati0302" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-primary transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shobithkarnati0302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-primary transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 hover:text-portfolio-primary transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 animate-spin-once" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col md:hidden pt-24 px-8 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item, index) => (
            <li key={item.name} className="animate-slide-left" style={{ animationDelay: `${index * 100}ms` }}>
              <a 
                href={item.href} 
                className="text-gray-700 dark:text-gray-300 hover:text-portfolio-primary text-lg font-medium transition-colors block border-b border-gray-100 dark:border-gray-800 pb-2"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex gap-6">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-portfolio-primary transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-portfolio-primary transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
