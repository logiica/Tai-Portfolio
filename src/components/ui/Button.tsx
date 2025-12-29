import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  icon,
  className = '',
  type = 'button',
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white border border-primary-600',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white border border-secondary-600',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white border border-accent-600',
    outline: 'bg-transparent hover:bg-primary-100 dark:hover:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200',
  };

  // Size styles
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-2.5',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        rounded-lg font-medium flex items-center justify-center gap-2 transition-all 
        dark:shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;