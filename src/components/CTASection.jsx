import { motion } from 'framer-motion';
import { Sparkles,ArrowRight, Brain, Target, ChartBar } from 'lucide-react';
import PropTypes from 'prop-types';

const CTASection = ({ onContactClick }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/90 to-pink-900/90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1,
              scale: 0.5,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-white/90 text-sm font-medium">Transform Your Marketing Today</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Marketing
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Strategy</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
            >
              Experience the power of AI-driven marketing solutions that adapt, optimize,
              and accelerate your business growth. Join the marketing revolution today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="
                  group
                  relative
                  px-8 py-4
                  bg-gradient-to-r from-purple-600 to-pink-600
                  hover:from-purple-700 hover:to-pink-700
                  text-white font-bold
                  rounded-xl
                  shadow-lg
                  hover:shadow-purple-500/25
                  transition-all
                  duration-300
                  flex items-center
                  overflow-hidden
                "
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: Brain,
                title: "AI-Powered",
                description: "Smart automation and insights"
              },
              {
                icon: Target,
                title: "Precision Targeting",
                description: "Reach the right audience"
              },
              {
                icon: ChartBar,
                title: "Data-Driven",
                description: "Make informed decisions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="
                  relative
                  group
                  bg-white/5
                  backdrop-blur-sm
                  border border-white/10
                  rounded-2xl
                  p-6
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <div className="
                  absolute inset-0 
                  bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  rounded-2xl
                " />
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  onContactClick: PropTypes.func.isRequired
};

export default CTASection;
