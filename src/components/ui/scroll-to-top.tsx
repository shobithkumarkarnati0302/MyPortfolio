import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Show the button when user scrolls past 5% of the page
      if (latest > 0.05) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex items-center justify-center",
        "bg-white dark:bg-gray-800 text-portfolio-primary shadow-lg hover:shadow-xl",
        "w-14 h-14 rounded-full outline-none focus:outline-none transition-shadow group"
      )}
      aria-label="Scroll to top"
    >
      {/* Decorative inner background */}
      <div className="absolute inset-2 bg-portfolio-primary/10 rounded-full group-hover:bg-portfolio-primary/20 transition-colors"></div>

      {/* SVG Ring Container */}
      <svg 
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
        viewBox="0 0 100 100"
      >
        {/* Background track circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-gray-200 dark:text-gray-700 opacity-50"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          className="text-portfolio-primary drop-shadow-[0_0_2px_rgba(var(--portfolio-primary),0.5)]"
          style={{ pathLength }}
        />
      </svg>
      {/* Up Arrow Icon */}
      <ArrowUp className="w-6 h-6 z-10 relative group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
};
