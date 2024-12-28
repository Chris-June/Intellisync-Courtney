import { motion } from 'framer-motion';
import { Target, Award, Users, Brain, ChartBar,  Shield, Sparkles } from 'lucide-react';
import PropTypes from 'prop-types';

const StatCard = ({ icon: Icon, title, value, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="
      relative
      group
      bg-gradient-to-br from-white/10 to-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-2xl
      p-8
      overflow-hidden
    "
  >
    {/* Animated gradient background */}
    <div className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      transition-opacity duration-500
      bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10
      animate-gradient-xy
    "/>

    <div className="relative z-10">
      <div className="
        w-16 h-16
        bg-gradient-to-br from-purple-500 to-pink-500
        rounded-2xl
        flex items-center justify-center
        mb-6
        group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
        transition-shadow duration-500
      ">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-3">
        {value}
      </div>
      <p className="text-white/80">{description}</p>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-colors duration-500" />
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl -z-10 group-hover:bg-pink-500/20 transition-colors duration-500" />
  </motion.div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

const AboutSection = () => {
  const stats = [
    {
      icon: Target,
      title: "Precision Targeting",
      value: "95%",
      description: "Accuracy in audience segmentation and targeting strategies.",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Industry Recognition",
      value: "5x",
      description: "Award-winning AI marketing solutions recognized by industry leaders.",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Client Success",
      value: "250+",
      description: "Satisfied clients across diverse industries and market segments.",
      delay: 0.6
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms that learn and adapt to your business needs"
    },
    {
      icon: ChartBar,
      title: "Real-Time Analytics",
      description: "Instant insights and performance metrics at your fingertips"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protecting your valuable data"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/90 to-pink-900/90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-white/90 text-sm font-medium">About Intellisync</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We are a passionate team of{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                AI and marketing experts
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We are dedicated to transforming how businesses leverage technology to drive growth.
              Our mission is to empower companies with intelligent, data-driven marketing solutions
              that adapt and evolve.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

export default AboutSection;
