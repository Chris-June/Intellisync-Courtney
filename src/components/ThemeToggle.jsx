
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full 
        ${isDarkMode 
          ? 'bg-gradient-to-r from-purple-800 to-black' 
          : 'bg-gradient-to-r from-blue-200 to-white'}
        flex items-center cursor-pointer
        transition-all duration-300 ease-in-out
        focus:outline-none shadow-lg
      `}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`
          w-6 h-6 rounded-full absolute top-1 
          ${isDarkMode 
            ? 'right-1 bg-gradient-to-r from-silver-500 to-silver-300' 
            : 'left-1 bg-gradient-to-r from-yellow-300 to-orange-300'}
          shadow-md transition-all duration-300
        `}
        initial={false}
        animate={{ 
          x: isDarkMode ? -32 : 0 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        {/* Subtle glow effect */}
        <div 
          className={`
            absolute inset-0 rounded-full opacity-50 
            ${isDarkMode 
              ? 'bg-purple-600' 
              : 'bg-yellow-300'}
          `}
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
