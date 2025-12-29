import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useSectionInView } from '../../hooks/use-section-in-view';

const Blog: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useScrollAnimation(sectionRef);
  const sectionInViewRef = useSectionInView('Blog');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore emerging technologies and methodologies that are shaping the future of web development and changing how we build digital experiences.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'May 15, 2025',
      readTime: '6 min read',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Optimizing Web Performance: A Comprehensive Guide',
      excerpt: 'Learn practical techniques and strategies to improve your website\'s performance, from code optimization to asset delivery and caching.',
      image: 'https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 28, 2025',
      readTime: '8 min read',
      category: 'Performance',
    },
    {
      id: 3,
      title: 'Designing for Accessibility: Why It Matters',
      excerpt: 'Discover why accessibility should be a fundamental consideration in web design and development, not an afterthought.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 10, 2025',
      readTime: '5 min read',
      category: 'Design',
    },
  ];

  return (
    <section 
      id="blog" 
      className="py-20 bg-white dark:bg-dark-200 relative overflow-hidden"
      ref={(el) => {
        sectionRef.current = el;
        sectionInViewRef(el);
      }}
    >
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <svg className="absolute top-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="From My Blog"
          subtitle="Insights, tutorials, and thoughts on web development, design, and technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant="glass" 
                className="h-full flex flex-col overflow-hidden group"
                hoverEffect={false}
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline mt-2"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-lg hover:underline"
          >
            View All Articles <ArrowRight size={18} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;