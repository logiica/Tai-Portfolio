import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Use spring animation for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Track when cursor is over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.tagName.toLowerCase() === 'input' ||
          target.tagName.toLowerCase() === 'textarea' ||
          target.getAttribute('role') === 'button') {
        setCursorVariant('hover');
      }
    };

    const handleMouseOut = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const variants = {
    default: {
      x: cursorX,
      y: cursorY,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(59, 130, 246, 0)',
      border: '2px solid rgba(59, 130, 246, 0.5)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 400,
      }
    },
    hover: {
      x: cursorX,
      y: cursorY,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      border: '2px solid rgba(59, 130, 246, 0.8)',
      scale: 1.2,
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 400,
      }
    },
    click: {
      x: cursorX,
      y: cursorY,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      border: '2px solid rgba(59, 130, 246, 1)',
      scale: 0.8,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 400,
      }
    }
  };

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          height: 8,
          width: 8,
          backgroundColor: 'rgb(59, 130, 246)',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CursorEffect;