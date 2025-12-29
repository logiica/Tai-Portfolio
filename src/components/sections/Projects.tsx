import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Bot,
  Smartphone,
  Music,
  X,
} from "lucide-react";

//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSectionInView } from "../../hooks/use-section-in-view";

import marrketPlaceImg from "../../assets/projects/agent_marketplace.png";
import safetyImage from "../../assets/projects/safetyclerk.png";
import ekatraImage from "../../assets/projects/ekatra.png";
import unicusImage from "../../assets/projects/unicus.png";
import thinkaheadImage from "../../assets/projects/thinkahead.png";
import manitlabsImage from "../../assets/projects/manitlabs.png";

const projects = [
  {
    id: 1,
    title: "SundaeBar.ai",
    tags: [
      "Next.js",
      "Typescript",
      "Supabase (PostgreSQL, Auth, Storage)",
      "Nest.js",
    ],
    image: marrketPlaceImg,
    description:
      "SundaeBar.ai is an AI automation platform designed to help individuals and teams transform real-world business problems into executable AI agent workflows. The platform enables users to clearly define operational challenges as structured briefs, which can then be analyzed, automated, and executed by AI agents—reducing manual effort and accelerating problem resolution.",
    details: [
      "Architected scalable backend APIs using NestJS to handle brief creation, validation, persistence, and lifecycle management.",
      "Implemented database schemas and access patterns in Supabase (PostgreSQL) to support flexible brief structures while maintaining data integrity and performance.",
      "Collaborated closely with product stakeholders to translate abstract automation requirements into clear, user-friendly workflows.",
      "Integrated frontend forms and flows in Next.js, ensuring a seamless and intuitive user experience from problem definition to submission.",
      "Focused on extensibility, enabling future enhancements such as AI-driven brief analysis, agent matching, and automated execution pipelines.",
    ],
    demoLink: "https://www.sundaebar.ai/",
    codeLink: "",
    featured: true,
  },
  {
    id: 2,
    title: "SafetyClerk",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Google Analytics (GA4)",
      "HubsSpot Chat",
    ],
    image: safetyImage,
    description:
      "SafetyClerk is a cloud-based safety and compliance management platform built for the construction industry. It digitizes and centralizes critical safety workflows—such as worker onboarding, credential tracking, incident reporting, and compliance documentation—into a single, scalable web application.",
    details: [
      "Designed and implemented features for worker credential management and automated alerts for compliance requirements.",
      "Improved operational visibility with real-time dashboards and compliance insights.",
      "Professionalized safety compliance workflows by centralizing documentation, certifications, and incident reporting.",
      "Implemented responsive, utility-first styling with Tailwind CSS, enabling rapid iteration while maintaining design system consistency across complex safety workflows.",
    ],
    demoLink: "https://safetyclerk.com/",
    codeLink: "",
    featured: true,
  },
  {
    id: 3,
    title: "Ekatra AI",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Radix UI",
      "shadcn/ui",
      "Cloudflare CDN",
    ],
    image: ekatraImage,
    description:
      "Ekatra is an AI-powered learning platform designed to deliver quality education and personalized learning experiences to learners with limited or no internet access. The platform enables educators and organizations to deploy micro-courses and learning content through popular messaging channels like SMS and WhatsApp, as well as audio and video, helping bridge the global digital divide and expand access to learning in underserved regions.",
    details: [
      "Composed a scalable component system with Radix UI primitives and shadcn/ui, ensuring accessibility, consistency, and ease of reuse throughout the application.",
      "Implemented utility-first styling with Tailwind CSS, enabling rapid UI iteration and uniform design across diverse learning modules.",
      "Leveraged Framer Motion to create smooth animations and interactive transitions, enhancing usability without sacrificing performance.",
      "Integrated Cloudflare Browser Insights to track real-world front-end performance, and Cloudflare CDN to ensure fast, globally distributed content delivery.",
      "Ensured cross-platform compatibility and modern UX by combining server-side rendering, static generation, and client hydration patterns with Next.js.",
    ],
    demoLink: "https://ekatra.one/",
    codeLink: "",
    featured: true,
  },
  {
    id: 4,
    title: "UnicusPar",
    tags: ["Alpine.js", "Tailwind CSS", "Font Awesome", "Laravel"],
    image: unicusImage,
    description:
      "UnicusPar is a digital consulting and solutions platform designed to showcase services, expertise, and client engagement through a fast, modern web experience. The platform emphasizes performance, responsiveness, and accessibility while serving as both a marketing presence and an interactive touchpoint for potential clients.",
    details: [
      "Enabled Progressive Web App (PWA) capabilities to improve mobile usability, load performance, and offline resilience.",
      "Optimized asset delivery and global performance using Cloudflare and jsDelivr CDNs, reducing latency and improving page load times.",
      "Integrated Google Analytics (GA4) and Cloudflare Browser Insights to monitor user behavior and real-world performance metrics.",
      "Implemented interactive frontend behavior using Alpine.js, enabling lightweight client-side interactivity without unnecessary framework overhead.",
      "Implemented interactive charts and dynamic visualizations, increasing user engagement by 25% and accelerating insight discovery.",
      "Focused on maintainability and performance by balancing server-rendered pages with lightweight client-side enhancements.",
    ],
    demoLink: "",
    codeLink: "",
    featured: true,
  },
  {
    id: 5,
    title: "ThinkAhead",
    tags: ["Tailwind CSS", "Swiper", "Firebase", "Open Graph Metadata", "GSAP"],
    image: thinkaheadImage,
    description:
      "ThinkAhead is a modern technology and digital solutions platform designed to present services, capabilities, and offerings through a visually rich, high-performance web experience. The platform emphasizes smooth interactions, fast content delivery, and responsive design to effectively communicate complex ideas and engage users across devices.",
    details: [
      "Developed a high-performance, visually engaging web platform with a strong focus on animation, interaction, and responsive design.",
      "Implemented advanced UI animations using GSAP, enhancing storytelling, navigation flow, and user engagement.",
      "Built responsive layouts and reusable UI components using Tailwind CSS, ensuring consistency across screen sizes and devices.",
      "Integrated Swiper to deliver smooth, touch-optimized sliders and interactive content sections.",
      "Connected frontend functionality to Firebase services, enabling scalable data handling and cloud-based application support.",
    ],
    demoLink: "https://www.thinkahead.tech/",
    codeLink: "",
    featured: true,
  },
  {
    id: 6,
    title: "ManitLabs",
    tags: ["React", "Hero UI", "core-js", "Swiper", "PostHog"],
    image: manitlabsImage,
    description:
      "ManitLabs is a technology consulting and product development studio website designed to showcase services, expertise, and thought leadership through a modern, interactive web experience. The platform combines marketing content, blog publishing, rich media, and user engagement tools to support lead generation and brand credibility.",
    details: [
      "Built and enhanced interactive frontend experiences using React, enabling dynamic content sections beyond standard CMS capabilities.",
      "Integrated WordPress with modern frontend components, balancing editorial flexibility with custom UI behavior.",
      "Added touch-friendly sliders and carousels with Swiper to enhance content navigation and presentation.",
      "Implemented high-fidelity animations and scroll effects with GSAP, improving visual storytelling and user engagement.",
      "Implemented video playback experiences using Video.js, ensuring consistent cross-browser media support."
    ],
    demoLink: "https://manitlabs.com/",
    codeLink: "",
    featured: true,
  },
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProj, setSelectedProj] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInViewRef = useSectionInView("Projects");

  const selectedProject = projects.find((p) => p.id === selectedProj);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (selectedProj !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProj]);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-dark-300 relative overflow-hidden"
      ref={(el) => {
        sectionRef.current = el;
        sectionInViewRef(el);
      }}
    >
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-400 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary-400 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore my latest work - from AI-powered applications to mobile apps and web platforms."
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card
                  variant="glass"
                  className="h-full overflow-hidden group cursor-pointer"
                  hoverEffect={false}
                  onClick={() => setSelectedProj(project.id)}
                >
                  <div
                    className="relative w-full h-48 mb-4 overflow-hidden rounded-lg"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <LazyLoadImage
                      src={project.image}
                      alt={project.title}
                      effect="blur"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-4 transition-opacity duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <div className="mt-auto">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div> */}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProj && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/5 dark:bg-black/50 backdrop-blur-sm z-50 flex pt-20 items-center justify-center"
                onClick={() => setSelectedProj(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full max-w-3xl z-[60]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Card
                    variant="glass"
                    className="relative max-h-[90vh] overflow-y-auto px-5 modal-scroll"
                  >
                    <button
                      onClick={() => setSelectedProj(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>

                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={projects.find((p) => p.id === selectedProj)?.image}
                        alt={projects.find((p) => p.id === selectedProj)?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                          {projects.find((p) => p.id === selectedProj)?.title}
                        </h2>
                        <div className="flex gap-4">
                          {projects.find((p) => p.id === selectedProj)
                            ?.codeLink && (
                            <a
                              href={
                                projects.find((p) => p.id === selectedProj)
                                  ?.codeLink
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline"
                            >
                              Source Code <Github size={16} className="ml-1" />
                            </a>
                          )}
                          {projects.find((p) => p.id === selectedProj)
                            ?.demoLink && (
                            <a
                              href={
                                projects.find((p) => p.id === selectedProj)
                                  ?.demoLink
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline"
                            >
                              Live Demo{" "}
                              <ArrowRight size={16} className="ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                      <motion.div
                        className="flex flex-col gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Tech Stack */}
                        <motion.div variants={itemVariants}>
                          <p className="text-xl font-semibold mb-1">
                            Tech Stack
                          </p>
                          <span className="text-gray-600 dark:text-gray-400">
                            {selectedProject?.tags.join(", ")}
                          </span>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants}>
                          <p className="text-xl font-semibold mb-2">
                            Project Description
                          </p>

                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {selectedProject?.description}
                          </p>

                          {/* Details List */}
                          <motion.ul
                            className="ml-4 space-y-2"
                            variants={containerVariants}
                          >
                            {selectedProject?.details?.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                variants={itemVariants}
                                className="text-gray-600 dark:text-gray-400 list-disc"
                              >
                                {detail}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* View all projects button
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="outline" size="lg">
            View All Projects <ArrowRight size={18} />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
