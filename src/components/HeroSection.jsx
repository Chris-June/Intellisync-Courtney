import { motion } from 'framer-motion';
import {  Zap, Target, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import PropTypes from 'prop-types';
import StreamingText from './StreamingText';

const HeroSection = ({ onContactClick }) => {
  const { isDarkMode } = useTheme();

  const heroSectionStyle = {
    backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000'
  };

  const heroFeatures = [
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Harness the power of advanced machine learning to unlock deep marketing intelligence.',
      delay: 0.2
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Identify and engage your most valuable audience with laser-focused strategies.',
      delay: 0.4
    },
    {
      icon: Rocket,
      title: 'Accelerated Growth',
      description: 'Drive sustainable business growth through data-driven marketing solutions.',
      delay: 0.6
    }
  ];

  const themeClasses = {
    dark: 'bg-gradient-to-br from-black via-purple-900 to-black text-gray-100',
    light: 'bg-white text-gray-900'
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${themeClasses[isDarkMode ? 'dark' : 'light']}`}
      style={heroSectionStyle}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
        >
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-white/50 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.2,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            >
              <Zap className="text-yellow-400 mr-2" size={20} />
              <span className="text-white">AI Marketing Revolution</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              <StreamingText 
                texts={['Transform Your Marketing with Intelligent AI', 'Transform Your Business with Intelligent AI', 'Transform Your Growth with Intelligent AI']} 
                parentTag="span"
                className="text-5xl md:text-6xl font-bold"
              />
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Leverage cutting-edge AI technologies to unlock unprecedented marketing insights, drive targeted strategies, and accelerate business growth.
            </p>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Features Column */}
          <div className="space-y-6">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: feature.delay 
                }}
                viewport={{ once: true }}
                className={`
                  p-6 rounded-2xl 
                  bg-white/10 backdrop-blur-sm
                  border border-white/20
                  shadow-lg hover:shadow-xl 
                  transition-all duration-300 
                  transform hover:-translate-x-2
                `}
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  onContactClick: PropTypes.func.isRequired
};

export default HeroSection;
