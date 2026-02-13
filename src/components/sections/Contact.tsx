import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
// import Button from "../ui/Button";
import {
  Mail,
  // Phone,
  MapPin,
  // Send,
  Github,
  Linkedin,
  // Twitter,
} from "lucide-react";
import { useSectionInView } from "../../hooks/use-section-in-view";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useScrollAnimation(sectionRef);
  const sectionInViewRef = useSectionInView("Contact");
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Form submission logic would go here
  //   console.log("Form submitted:", formState);
  //   alert("Thanks for your message! I'll get back to you soon.");
  //   setFormState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  // const inputClasses = `w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 
  //   border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 
  //   dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300`;

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-dark-300 relative overflow-hidden"
      ref={(el) => {
        sectionRef.current = el;
        sectionInViewRef(el);
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-100/20 to-secondary-100/20 dark:from-primary-900/10 dark:to-secondary-900/10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to chat? Drop me a message and I'll get back to you!"
        />

        <div className="grid grid-cols-1 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="glass" className="h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="mailto:tainguyen072ca@gmail.com"
                        className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        tainguyen072ca@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Garden Grove, California, USA
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                Connect with me
              </h4>

              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/logiica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-dark-100 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  whileHover={{ y: -5 }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tai-nguyen-a2600a3a0/arien-khardiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-dark-100 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  whileHover={{ y: -5 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:tainguyen072ca@gmail.com"
                  className="p-3 bg-gray-200 dark:bg-dark-100 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label="Email"
                >
                  <Mail size={22} />
                </motion.a>
              </div>
            </Card>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card variant="glass" className="h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={inputClasses}
                    placeholder=""
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={<Send size={18} />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
