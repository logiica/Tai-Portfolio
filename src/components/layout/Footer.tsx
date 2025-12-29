import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/astra0x', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/tai-nguyen-a2600a3a0/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-200 pt-12 pb-6 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-200 dark:from-dark-100 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="md:col-span-5">
            <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white inline-block mb-4">
              <span className="text-primary-500">T</span>
              <span>ai</span>
              <span className="text-primary-500">H</span>
              <span>uu</span>
              <span className="text-primary-500">N</span>
              <span>guyen</span>
            </a>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Creating innovative solutions through fullstack development and Generative AI. Let's build something amazing together.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Get In Touch
            </h3>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                <a href="mailto:tainguyen072ca@gmail.com" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  tainguyen072ca@gmail.com
                </a>
              </li>
              <li>
                Garden Grove, California, USA
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="#contact" 
                className="inline-block px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Tai Huu Nguyen. All rights reserved.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by Tai Nguyen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;