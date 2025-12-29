import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Working with John was an absolute pleasure. He took our vague idea and transformed it into a stunning, functional website that perfectly represents our brand. His attention to detail and technical expertise are unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, DesignHub',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'John\'s ability to balance beautiful design with technical functionality is rare. He understood our requirements perfectly and delivered a product that exceeded our expectations. I highly recommend his services.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, Innovate LLC',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'We hired John to redesign our e-commerce platform, and the results were remarkable. Our conversion rate increased by 40% within the first month. His expertise in UI/UX design and development is truly exceptional.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'CTO, FutureTech',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'As a technical leader, I was impressed by John\'s clean code and attention to best practices. He delivered a complex web application on time and on budget, with excellent documentation and maintainability.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useScrollAnimation(sectionRef);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gray-50 dark:bg-dark-300 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary-400 mix-blend-multiply blur-3xl"
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary-400 mix-blend-multiply blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Client Testimonials"
          subtitle="Don't just take my word for it - hear what my clients have to say about working with me."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial slider */}
            <div className="overflow-hidden">
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <Card variant="glass" className="p-8 md:p-10 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-dark-100 shadow-lg">
                            <img 
                              src={testimonials[currentIndex].image} 
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 -right-3 bg-primary-500 text-white p-2 rounded-full">
                            <Quote size={16} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4 flex justify-center">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-6">
                        "{testimonials[currentIndex].text}"
                      </p>
                      
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      
                      <p className="text-primary-600 dark:text-primary-400">
                        {testimonials[currentIndex].position}
                      </p>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 flex items-center justify-center shadow-md hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-primary-500 w-6' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 flex items-center justify-center shadow-md hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Client logos */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-8">
            Trusted by Amazing Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
              <motion.div
                key={company}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-16 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                    {company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;