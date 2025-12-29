import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'glass' | 'outline';
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'solid',
  hoverEffect = true,
  onClick
}) => {
  const variantStyles = {
    solid: 'bg-white dark:bg-dark-200 shadow-lg',
    glass: 'bg-white/10 dark:bg-dark-300/30 backdrop-blur-md border border-white/20 dark:border-white/10',
    outline: 'bg-transparent border border-gray-200 dark:border-gray-700',
  };

  return (
    <motion.div
      className={`
        rounded-xl p-6 
        ${variantStyles[variant]} 
        ${hoverEffect ? 'hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
      whileHover={hoverEffect ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;