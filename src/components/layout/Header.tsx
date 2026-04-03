import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github, Linkedin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection } from "../../hooks/active-section-provider";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certificates" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/logiica",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/tai-nguyen-75ab523b1/",
      label: "LinkedIn",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white dark:bg-dark-300 shadow-lg md:bg-white/80 md:dark:bg-dark-300/80 md:backdrop-blur-md"
          : "py-5 bg-white dark:bg-dark-300 shadow-sm md:bg-transparent md:shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-primary-500">T</span>
              <span>ai</span>
              <span className="text-primary-500">H</span>
              <span>uu</span>
              <span className="text-primary-500">N</span>
              <span>guyen</span>
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    onClick={() => {
                      setActiveSection(item.label);
                      setTimeOfLastClick(Date.now());
                    }}
                    href={item.href}
                    className="
                        relative inline-flex
                        px-4 py-2
                        rounded-md
                        text-gray-700 dark:text-gray-300
                        hover:text-primary-500 dark:hover:text-primary-400
                        transition-colors
                      "
                  >
                    <span className="relative z-10">{item.label}</span>

                    {item.label === activeSection && (
                      <motion.span
                        className="absolute inset-0 -z-0 rounded-full bg-black/5 dark:bg-white/10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center ml-4 space-x-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: navItems.length * 0.1 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.2 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}

              <motion.button
                onClick={toggleTheme}
                className="p-2 ml-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: navItems.length * 0.1 + socialLinks.length * 0.1,
                  type: "spring",
                }}
                whileHover={{ scale: 1.2, rotate: 20 }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-0 bg-white dark:bg-dark-300 z-50 flex flex-col p-5"
          >
            <div className="flex justify-between items-center mb-8">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
              >
                <span className="text-primary-500">D</span>
                <span>ev</span>
                <span className="text-primary-500">F</span>
                <span>olio</span>
              </a>

              <motion.button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
