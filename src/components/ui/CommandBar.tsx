import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Search, X } from "lucide-react";

interface CommandBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandBar: React.FC<CommandBarProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "services", label: "Services", href: "#services" },
    { id: "certificates", label: "Certifications", href: "#certificates" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const filteredSections = sections.filter((section) =>
    section.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavigate = (href: string) => {
    onClose();
    window.location.href = href;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed top-[20%] inset-0 z-50 flex justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-lg"
            >
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
                  <Command className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search commands..."
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-300 rounded">
                    <span className="text-sm">⌘</span>K
                  </kbd>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-full"
                  >
                    <X size={18} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="max-h-72 overflow-y-auto">
                  {filteredSections.map((section) => (
                    <button
                      key={section.id}
                      className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-dark-300 flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      onClick={() => handleNavigate(section.href)}
                    >
                      <Search size={18} className="text-gray-400" />
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandBar;
