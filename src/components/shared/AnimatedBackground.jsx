import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.2),rgba(0,0,0,0))]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0"
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.2,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </motion.div>
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </div>
  );
};

AnimatedBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedBackground;
