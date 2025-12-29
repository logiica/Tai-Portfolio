import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import {
  Layers,
  LayoutDashboard,
  Server,
  BrainCircuit,
  Network,
  Code2,
} from "lucide-react";
import { useSectionInView } from "../../hooks/use-section-in-view";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Card variant="glass" className="h-full group perspective">
        <div className="transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
          <div className="backface-hidden">
            <div className="p-6">
              <div className="mb-5 text-primary-500 dark:text-primary-400">
                <motion.div
                  className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useScrollAnimation(sectionRef);
  const sectionInViewRef = useSectionInView("Services");

  const services = [
    {
      icon: <Layers size={28} />,
      title: "Full Stack Development",
      description:
        "Designing and building responsive, end-to-end web applications using modern frontend and backend technologies.",
    },
    {
      icon: <LayoutDashboard size={28} />,
      title: "Frontend Engineering",
      description:
        "Creating clean, accessible, and high-performance user interfaces with a strong focus on user experience.",
    },
    {
      icon: <Server size={28} />,
      title: "Backend & API Development",
      description:
        "Developing secure, scalable server-side systems and APIs that power reliable applications.",
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "Generative AI Integration",
      description:
        "Integrating AI models and intelligent features into applications to enhance automation and user engagement.",
    },
    {
      icon: <Network size={28} />,
      title: "Software Architecture & Scalability",
      description:
        "Designing maintainable system architectures that support growth, performance, and long-term reliability.",
    },
    {
      icon: <Code2 size={28} />,
      title: "Technical Consulting & Code Review",
      description:
        "Providing guidance, best practices, and code reviews to improve code quality and development efficiency.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-dark-200 relative overflow-hidden"
      ref={(el) => {
        sectionRef.current = el;
        sectionInViewRef(el);
      }}
    >
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary-400 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-secondary-400 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionTitle
          title="Services I Offer"
          subtitle="Expert solutions to help bring your vision to life - from AI engineering to full-stack development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Process section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-12">
            My Development Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and vision.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "Creating detailed specifications and project roadmap.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "Developing the solution with regular progress updates.",
              },
              {
                number: "04",
                title: "Deployment",
                description:
                  "Launching the product and providing ongoing support.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Connect steps with line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                )}

                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl font-bold border-2 border-primary-500 dark:border-primary-400">
                    {step.number}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {step.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
