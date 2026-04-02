import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDownCircle, Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import Button from "../ui/Button";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import cvFile from "../../assets/CV_TaiNguyen_FullStackEngineer.pdf";
import { useSectionInView } from "../../hooks/use-section-in-view";
import heroImage from "../../assets/images/avatar.png";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const sectionInViewRef = useSectionInView("Home");

  const handleDownloadCV = () => {
    // Track download event in Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "download_cv", {
        file_name: "CV_TaiNguyen_FullStackEngineer.pdf",
        file_type: "pdf",
      });
    }

    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV_TaiNguyen_FullStackEngineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#0ea5e9",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#0ea5e9",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
    },
  } as any;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      ref={(el) => {
        heroRef.current = el;
        sectionInViewRef(el);
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary-600 dark:text-primary-400 font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tai Huu Nguyen
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-6 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter
                options={{
                  strings: ["Senior Full Stack Engineer", "Problem Solver"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A seasoned full-stack engineer who consistently delivers scalable, end-to-end
              solutions with strong business impact, bridging product goals and technical execution
              to drive performance, reliability, and growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                View My Work <ArrowRight size={18} />
              </Button>

              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                Download CV <Download size={18} />
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/logiica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tai-nguyen-75ab523b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </motion.a>
                <motion.a
                  href="mailto:tainguyen072ca@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label="Email"
                >
                  <Mail size={22} />
                </motion.a>
              </div>

              <div className="h-8 border-l border-gray-300 dark:border-gray-700"></div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                Based in Garden Grove, CA
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 dark:border-primary-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1 animate-glow"
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(14, 165, 233, 0.3)",
                    "0 0 25px rgba(14, 165, 233, 0.5)",
                    "0 0 15px rgba(14, 165, 233, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img
                  src={heroImage}
                  alt="Tai Nguyen"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDownCircle size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
