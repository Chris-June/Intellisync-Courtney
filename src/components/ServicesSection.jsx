import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Zap, ChevronRight, BarChart2, Users, Bot } from 'lucide-react';
import PropTypes from 'prop-types';

const ServiceCard = ({ icon: Icon, title, description, features, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="
        relative overflow-hidden
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6 md:p-8
        group
        min-h-[400px]
        flex flex-col
      "
    >
      {/* Animated gradient background */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10
        animate-gradient-xy
      "/>

      {/* Icon container with glow effect */}
      <div className="
        relative w-16 h-16
        bg-gradient-to-br from-purple-500 to-pink-500
        rounded-2xl
        flex items-center justify-center
        mb-6
        group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
        transition-shadow duration-500
      ">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 relative">{title}</h3>
      
      <p className="text-white/80 mb-6 relative">{description}</p>

      {/* Features list with hover effects */}
      <ul className="space-y-3 relative flex-grow">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + (index * 0.1) }}
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 mr-2 text-purple-400" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* Interactive learn more button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          mt-6
          py-3 px-6
          bg-gradient-to-r from-purple-600 to-pink-600
          hover:from-purple-700 hover:to-pink-700
          text-white font-semibold
          rounded-xl
          flex items-center justify-center
          group/btn
          relative
          overflow-hidden
        "
      >
        <span className="relative z-10">Learn More</span>
        <ChevronRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
      </motion.button>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl -z-10 group-hover:bg-pink-500/20 transition-colors duration-500" />
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
};

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Marketing Strategy",
      description: "Harness the power of artificial intelligence to create data-driven marketing strategies that deliver exceptional results.",
      features: [
        "Predictive Analytics",
        "Customer Behavior Modeling",
        "Automated Campaign Optimization",
        "Real-time Performance Insights"
      ],
      delay: 0.2
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Leverage advanced machine learning algorithms to identify and engage your most valuable customer segments.",
      features: [
        "Audience Segmentation",
        "Lookalike Modeling",
        "Cross-channel Targeting",
        "Dynamic Personalization"
      ],
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "Growth Acceleration",
      description: "Supercharge your marketing ROI with intelligent automation and data-driven optimization strategies.",
      features: [
        "Revenue Attribution",
        "Conversion Optimization",
        "Market Opportunity Analysis",
        "Scalable Growth Framework"
      ],
      delay: 0.6
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformative AI Marketing Solutions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Revolutionize your marketing approach with intelligent, adaptive technologies
            that drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Additional service highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 bg-white/5 rounded-2xl p-6"
          >
            <BarChart2 className="w-8 h-8 text-purple-400" />
            <div>
              <h4 className="text-white font-semibold">Data-Driven</h4>
              <p className="text-white/70">Make informed decisions</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 bg-white/5 rounded-2xl p-6"
          >
            <Bot className="w-8 h-8 text-purple-400" />
            <div>
              <h4 className="text-white font-semibold">AI-Powered</h4>
              <p className="text-white/70">Smart automation</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4 bg-white/5 rounded-2xl p-6"
          >
            <Users className="w-8 h-8 text-purple-400" />
            <div>
              <h4 className="text-white font-semibold">Customer-Centric</h4>
              <p className="text-white/70">Personalized experiences</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
