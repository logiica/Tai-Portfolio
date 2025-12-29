import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import useSound from 'use-sound';

const SoundToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  
  const [playOn] = useSound('/sounds/switch-on.mp3', { volume: 0.5 });
  const [playOff] = useSound('/sounds/switch-off.mp3', { volume: 0.5 });

  const toggleSound = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      playOn();
    } else {
      playOff();
    }
  };

  useEffect(() => {
    const audio = new Audio('/sounds/ambient.mp3');
    audio.loop = true;
    
    if (!isMuted) {
      audio.play().catch(() => {
        // Handle autoplay restrictions
        setIsMuted(true);
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMuted]);

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 p-3 bg-white dark:bg-dark-200 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isMuted ? "Enable sound" : "Disable sound"}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      ) : (
        <Volume2 className="w-6 h-6 text-primary-500" />
      )}
    </motion.button>
  );
};

export default SoundToggle;