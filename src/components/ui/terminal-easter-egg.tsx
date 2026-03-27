import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";

interface CommandRecord {
  command: string;
  output: React.ReactNode;
}

const LINKS = {
  resume: "/Karnati Shobith Kumar - Resume.pdf",
  github: "https://github.com/shobithkumarkarnati0302",
  linkedin:
    "https://www.linkedin.com/in/shobithkarnati0302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  leetcode: "https://leetcode.com/u/Shobith_Bunny_0302/",
  email: "mailto:shobithkumar2304@gmail.com",
};

export const TerminalEasterEgg = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<CommandRecord[]>([
    {
      command: "",
      output: (
        <span>
          Welcome to Shobith's interactive terminal! <br />
          Type <span className="text-yellow-400 font-bold">help</span> to see available commands.
        </span>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalCommands = useMemo(
    () => [
      "help",
      "about",
      "projects",
      "open",
      "theme",
      "skills",
      "contact",
      "experience",
      "education",
      "resume",
      "github",
      "linkedin",
      "leetcode",
      "email",
      "home",
      "clear",
    ],
    [],
  );

  const getSuggestions = (value: string) => {
    const trimmed = value.trim().toLowerCase();
    const [command = "", argument = ""] = trimmed.split(/\s+/);

    if (!trimmed) return [];

    if (command === "open") {
      return projects
        .map((project) => `open ${project.slug}`)
        .filter((entry) => entry.startsWith(`open ${argument}`));
    }

    if (trimmed.includes(" ")) return [];

    return terminalCommands.filter((cmd) => cmd.startsWith(command));
  };

  const suggestions = getSuggestions(input);

  const isDarkTheme = () => document.documentElement.classList.contains("dark");

  const toggleTheme = () => {
    const shouldEnableDark = !isDarkTheme();
    document.documentElement.classList.toggle("dark", shouldEnableDark);
    localStorage.setItem("theme", shouldEnableDark ? "dark" : "light");
    return shouldEnableDark ? "dark" : "light";
  };

  const scrollToSection = (sectionId: "skills" | "contact") => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAnySection = (
    sectionId:
      | "about"
      | "skills"
      | "projects"
      | "experience"
      | "education"
      | "contact"
      | "home",
  ) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 220);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const selectSuggestion = (index: number) => {
    if (!suggestions.length) return;
    const safeIndex = (index + suggestions.length) % suggestions.length;
    setSelectedSuggestion(safeIndex);
    setInput(suggestions[safeIndex]);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedSuggestion(0);
  }, [input]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const executeCommand = (rawInput: string) => {
    const cmd = rawInput.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawInput]);
    setHistoryPointer(-1);

    const [action, ...rest] = cmd.split(/\s+/);
    const argument = rest.join(" ");
    let output: React.ReactNode = "";

    switch (action) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 mt-1">
            <span className="text-gray-400 mb-1">Available commands:</span>
            <span><span className="text-green-400 w-28 inline-block">help</span> - Show all commands</span>
            <span><span className="text-green-400 w-28 inline-block">about</span> - Jump to About section</span>
            <span><span className="text-green-400 w-28 inline-block">projects</span> - List all project slugs</span>
            <span><span className="text-green-400 w-28 inline-block">open &lt;slug&gt;</span> - Open project details page</span>
            <span><span className="text-green-400 w-28 inline-block">theme</span> - Toggle dark/light theme</span>
            <span><span className="text-green-400 w-28 inline-block">skills</span> - Jump to Skills section</span>
            <span><span className="text-green-400 w-28 inline-block">experience</span> - Jump to Experience section</span>
            <span><span className="text-green-400 w-28 inline-block">education</span> - Jump to Education section</span>
            <span><span className="text-green-400 w-28 inline-block">contact</span> - Jump to Contact section</span>
            <span><span className="text-green-400 w-28 inline-block">resume</span> - Open resume</span>
            <span><span className="text-green-400 w-28 inline-block">github</span> - Open GitHub profile</span>
            <span><span className="text-green-400 w-28 inline-block">linkedin</span> - Open LinkedIn profile</span>
            <span><span className="text-green-400 w-28 inline-block">leetcode</span> - Open LeetCode profile</span>
            <span><span className="text-green-400 w-28 inline-block">email</span> - Open mail composer</span>
            <span><span className="text-green-400 w-28 inline-block">home</span> - Jump to top hero section</span>
            <span><span className="text-green-400 w-28 inline-block">clear</span> - Clear terminal output</span>
          </div>
        );
        break;
      case "about":
        scrollToAnySection("about");
        output = "Navigating to the About section...";
        break;
      case "skills":
        scrollToAnySection("skills");
        output = "Navigating to the Skills section...";
        break;
      case "projects":
        output = (
          <div className="flex flex-col mt-1 gap-1">
            <span className="text-gray-400">Use: open &lt;slug&gt;</span>
            {projects.map((p, i) => (
              <span key={i}>- {p.slug} <span className="text-gray-500">({p.title})</span></span>
            ))}
          </div>
        );
        break;
      case "open": {
        if (!argument) {
          output = "Usage: open <slug>. Type 'projects' to see available slugs.";
          break;
        }
        const target = projects.find((project) => project.slug.toLowerCase() === argument);
        if (!target) {
          output = `Project not found: ${argument}. Type 'projects' to see valid slugs.`;
          break;
        }
        navigate(`/project/${target.slug}`);
        output = `Opening project: ${target.title}`;
        break;
      }
      case "theme": {
        const activeTheme = toggleTheme();
        output = `Theme switched to ${activeTheme}.`;
        break;
      }
      case "contact":
        scrollToAnySection("contact");
        output = "Navigating to the Contact section...";
        break;
      case "experience":
        scrollToAnySection("experience");
        output = "Navigating to the Experience section...";
        break;
      case "education":
        scrollToAnySection("education");
        output = "Navigating to the Education section...";
        break;
      case "resume":
        openExternal(LINKS.resume);
        output = "Opening resume in a new tab...";
        break;
      case "github":
        openExternal(LINKS.github);
        output = "Opening GitHub profile...";
        break;
      case "linkedin":
        openExternal(LINKS.linkedin);
        output = "Opening LinkedIn profile...";
        break;
      case "leetcode":
        openExternal(LINKS.leetcode);
        output = "Opening LeetCode profile...";
        break;
      case "email":
        window.location.href = LINKS.email;
        output = "Opening mail composer...";
        break;
      case "home":
        scrollToAnySection("home");
        output = "Navigating to the hero section...";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        setSelectedSuggestion(0);
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, { command: rawInput, output }]);
    setInput("");
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      selectSuggestion(selectedSuggestion);
      return;
    }

    if (e.key === "ArrowDown") {
      if (suggestions.length) {
        e.preventDefault();
        selectSuggestion(selectedSuggestion + 1);
        return;
      }

      if (commandHistory.length && historyPointer > 0) {
        e.preventDefault();
        const nextPointer = historyPointer - 1;
        setHistoryPointer(nextPointer);
        setInput(commandHistory[nextPointer]);
      } else if (historyPointer === 0) {
        e.preventDefault();
        setHistoryPointer(-1);
        setInput("");
      }
      return;
    }

    if (e.key === "ArrowUp") {
      if (suggestions.length) {
        e.preventDefault();
        selectSuggestion(selectedSuggestion - 1);
        return;
      }

      if (!commandHistory.length) return;
      e.preventDefault();
      const nextPointer =
        historyPointer === -1
          ? commandHistory.length - 1
          : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInput(commandHistory[nextPointer]);
      return;
    }

    if (e.key === "Escape") {
      setInput("");
      setSelectedSuggestion(0);
    }
  };

  return (
    <>
      {/* Floating Button (Bottom Left) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 bg-gray-900 border-2 border-green-500/50 text-green-400 p-3 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-shadow flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Open Developer Terminal"
      >
        <TerminalIcon className="w-6 h-6 group-hover:animate-pulse" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.5, y: 100, x: "-50%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            drag
            dragElastic={0.1}
            dragMomentum={false}
            className="fixed top-[20%] left-1/2 z-50 w-[600px] max-w-[95vw] h-[400px] bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 flex flex-col font-mono text-sm sm:text-base"
            style={{ x: "-50%" }} // Centered initially
          >
            {/* macOS Style Terminal Header */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-3 flex items-center justify-between shadow-sm cursor-grab active:cursor-grabbing border-b border-gray-700/50">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-sm" />
              </div>
              <div className="text-gray-400 text-xs font-sans tracking-wider flex-grow text-center font-medium">
                shobith@portfolio ~ zsh
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-grow p-5 overflow-y-auto text-green-400 cursor-text scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="space-y-4 pb-2">
                {history.map((item, index) => (
                  <div key={index} className="space-y-1">
                    {item.command && (
                      <div className="flex gap-2 text-white items-center">
                        <span className="text-green-400 select-none font-bold">➜</span>
                        <span className="text-blue-400 select-none font-bold">~</span>
                        <span>{item.command}</span>
                      </div>
                    )}
                    <div className="text-gray-300 break-words tracking-tight">{item.output}</div>
                  </div>
                ))}
              </div>

              {/* Input Line */}
              <form onSubmit={handleCommand} className="flex gap-2 items-center text-white mt-2">
                <span className="text-green-400 select-none font-bold">➜</span>
                <span className="text-blue-400 select-none font-bold">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="flex-grow bg-transparent outline-none border-none text-white focus:ring-0 p-0 shadow-none focus:outline-none"
                  autoComplete="off"
                  spellCheck="false"
                  autoFocus
                />
              </form>
              {Boolean(input.trim()) && suggestions.length > 0 && (
                <div className="mt-2 border border-gray-700/70 rounded-md bg-gray-900/70 overflow-hidden">
                  {suggestions.slice(0, 5).map((suggestion, index) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => {
                        setInput(suggestion);
                        inputRef.current?.focus();
                      }}
                      className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                        index === selectedSuggestion
                          ? "bg-gray-700/70 text-white"
                          : "text-gray-300 hover:bg-gray-800/80"
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} className="h-4" /> {/* Padding bottom */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
