import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { Calendar, Briefcase, GraduationCap, Code } from "lucide-react";
import { useSectionInView } from "../../hooks/use-section-in-view";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useScrollAnimation(sectionRef);
  const sectionInViewRef = useSectionInView("About");

  const skills = [
    { label: "React.js", percentage: 95, icon: <Code size={20} /> },
    { label: "Node.js", percentage: 90, icon: <Code size={20} /> },
    { label: "Typescript", percentage: 90, icon: <Code size={20} /> },
    { label: "AI/ML", percentage: 80, icon: <Code size={20} /> },
    { label: "Python", percentage: 85, icon: <Code size={20} /> },
    { label: "Cloud Technologies", percentage: 80, icon: <Code size={20} /> },
  ];

  const timelineItems = [
    {
      icon: <Briefcase size={20} />,
      title: "Senior Full-Stack Engineer",
      company: "Folium AI",
      duration: "01/2024 - Present",
      description: (
        <>
          - Led development of a scalable AI agent marketplace that enables
          developers to publish agents and businesses to discover, test, and
          adopt AI solutions for real-world use cases, accelerating
          time-to-value for both creators and users.
          <br />
          - Built a high-performance, SEO-friendly frontend using Next.js and
          TypeScript, improving discoverability of AI agents and increasing user
          engagement through fast, intuitive browsing and execution flows.
          <br />
          - Designed and implemented NestJS backend services to support agent
          lifecycle management, voting workflows, and marketplace automation,
          ensuring platform reliability as user activity scaled. <br />
          - Leveraged Supabase for authentication, data persistence, and
          real-time updates, reducing backend complexity while enabling rapid
          feature iteration.
          <br />
          - Implemented Bull queue–based background processing to handle
          compute-intensive tasks such as text embedding generation, powering
          semantic search and recommendations that improved agent discovery and
          relevance.
          <br />
          - Integrated Letta Cloud to host and execute AI agents directly on the
          platform, enabling users to run agents before voting, increasing
          trust, transparency, and conversion from browsing to adoption.
          <br />- Improved platform retention and marketplace liquidity by
          aligning incentives between users and developers through transparent
          ranking and execution-based evaluation.
        </>
      ),
    },
    {
      icon: <Briefcase size={20} />,
      title: "Full-Stack Engineer",
      company: "Five Jars",
      duration: "02/2022 - 11/2023",
      description: (
        <>
          - Contributed to the development of a cloud-based healthcare SaaS
          platform designed to support clinical and administrative workflows for
          behavioral health providers.
          <br />
          - Built and maintained high-performance frontend features using React,
          focusing on modular architecture, responsiveness, and intuitive user
          experiences for multi-role users.
          <br />- Developed and enhanced Node.js backend services, supporting
          secure APIs, role-based access control, and scalable service
          integration.
          <br />
          - Acted as a primary code reviewer, enforcing engineering best
          practices that reduced technical debt, improved system scalability,
          and increased development velocity, enabling faster and more reliable
          product delivery.
          <br />
          - Owned deployment execution and release coordination across AWS
          infrastructure (EC2, RDS, S3, CloudWatch), ensuring stable production
          releases, high system reliability, and minimal downtime.
          <br />
          - Integrated third-party services including SMS messaging,
          mapping/location services, and email systems to deliver unified
          communication and scheduling capabilities.
          <br />- Collaborated with product managers, designers, and QA to
          translate complex healthcare workflows into maintainable technical
          solutions.
        </>
      ),
    },
    {
      icon: <Briefcase size={20} />,
      title: "Full-Stack Developer",
      company: "Codment",
      duration: "08/2019 - 12/2021",
      description: (
        <>
          - Developed a real estate presentation platform that allowed users to
          explore properties through immersive 360- degree virtual tours,
          reducing the need for on-site visits.
          <br />
          - Engineered a dynamic and responsive front-end interface using HTML,
          CSS, and jQuery, enhancing user engagement and visual clarity across
          devices.
          <br />- Utilized SVG Canvas to render interactive property maps and
          floor plans, providing users with an intuitive spatial understanding
          of each unit.
          <br />
          - Integrated a custom Flash-based panorama player to deliver seamless
          virtual walkthroughs, improving the property browsing experience.
          <br />
          - Built server-side architecture with Laravel, enabling modular
          content management, secure data handling, and clean URL routing for
          improved SEO performance.
          <br />- Collaborated with designers and stakeholders to align
          technical execution with user experience goals, delivering a polished
          and high-performing product within deadlines.
        </>
      ),
    },
    {
      icon: <Briefcase size={20} />,
      title: "Frontend Developer",
      company: "Squareboat",
      duration: "02/2017 - 07/2019",
      description: (
        <>
          - Developed and launched an interactive financial dashboard to
          visualize key metrics using React and D3.js for dynamic data
          visualization.
          <br />
          - Built an advanced filtering system for tailored investment analysis,
          allowing users to drill down into specific financial metrics
          <br />- Implemented interactive charts and dynamic visualizations,
          increasing user engagement by 25% and accelerating insight discovery.
          <br />
          - Integrated a custom Flash-based panorama player to deliver seamless
          virtual walkthroughs, improving the property browsing experience.
          <br />
          - Optimized UI responsiveness and performance, improving page load
          times by 30% and ensuring a seamless experience across desktop,
          tablet, and mobile devices.
          <br />- Collaborated with designers to create intuitive and accessible
          interfaces used by thousands of end users, improving overall usability
          and satisfaction.
        </>
      ),
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Bachelor of Technology in Computer Science",
      company: "California Insitute of Technology",
      duration: "08/2012 - 05/2016",
      description:
        "Graduated with Honors, focusing on software engineering, algorithms, and data structures. Completed a senior thesis on distributed systems.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-dark-200 relative overflow-hidden"
      ref={(el) => {
        sectionRef.current = el;
        sectionInViewRef(el);
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary-400 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-secondary-400 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building scalable, high-impact software—focused on creating reliable full-stack systems and exploring how AI-driven solutions can accelerate real-world product innovation."
        />

        <div className="grid grid-cols-1 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Technical Expertise
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary-500 dark:text-primary-400">
                          {skill.icon}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.label}
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.percentage}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Education & Experience
              </h3>

              <div className="relative pl-8 border-l-2 border-primary-500/30 dark:border-primary-400/30 space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Card variant="glass" className="relative">
                      <div className="absolute -left-[41px] -top-1 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-400 flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {item.icon}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Calendar size={14} />
                            {item.duration}
                          </span>
                        </div>

                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {item.company}
                        </p>

                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
