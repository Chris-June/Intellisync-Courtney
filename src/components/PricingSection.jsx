import { motion } from 'framer-motion';
import { CheckCircle, Zap, Rocket, Sparkles, ArrowRight, Shield } from 'lucide-react';
import PropTypes from 'prop-types';
import StreamingText from './StreamingText';

const PricingCard = ({ title, price, features, isFeatured, delay, specialIcon, onContactClick }) => {
  const IconComponent = specialIcon === 'zap' ? Zap : specialIcon === 'rocket' ? Rocket : null;

  // Color mappings for different plan titles with vibrant, high-contrast colors
  const streamingTextColors = {
    'Starter': 'from-emerald-300 to-green-500',
    'Pro': 'from-amber-300 to-orange-500',
    'Enterprise': 'from-rose-400 to-pink-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`
        relative
        group
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-8
        flex flex-col
        min-h-[600px]
        overflow-hidden
        ${isFeatured ? 'ring-2 ring-purple-400/50' : ''}
      `}
    >
      {/* Animated gradient background */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10
        animate-gradient-xy
      "/>

      {isFeatured && (
        <div className="
          absolute -top-1 right-8
          bg-gradient-to-r from-purple-600 to-pink-600
          text-white px-6 py-2
          rounded-b-lg font-semibold
          shadow-lg
          transform
          -translate-y-1
        ">
          Most Popular
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          {IconComponent && (
            <div className="
              w-12 h-12
              bg-gradient-to-br from-purple-500 to-pink-500
              rounded-xl
              flex items-center justify-center
              group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              transition-shadow duration-500
            ">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          )}
          <h3 className="text-2xl font-bold text-white">
            <StreamingText 
              texts={[title, `${title} Plan`, `Powerful ${title} Solution`]} 
              parentTag="span"
              className={`inline-block bg-gradient-to-r ${streamingTextColors[title]} text-transparent bg-clip-text font-extrabold`}
            />
          </h3>
        </div>

        <div className="mb-8">
          <span className="text-sm text-white/60 uppercase">Starting at</span>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {price}
            </span>
            <span className="text-white/60 ml-2">/month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (index * 0.1) }}
              className="flex items-start text-white/80 group/item"
            >
              <CheckCircle className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-1" />
              <span className="group-hover/item:text-white transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactClick}
          className={`
            group/btn
            relative w-full
            px-8 py-4
            bg-gradient-to-r
            ${isFeatured 
              ? 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
              : 'from-white/10 to-white/5 hover:from-white/20 hover:to-white/10'
            }
            text-white font-bold
            rounded-xl
            flex items-center justify-center
            overflow-hidden
            transition-all duration-300
            ${isFeatured ? 'shadow-lg hover:shadow-purple-500/25' : 'border border-white/10'}
          `}
        >
          <span className="relative z-10 flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl -z-10 group-hover:bg-pink-500/20 transition-colors duration-500" />
    </motion.div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFeatured: PropTypes.bool,
  delay: PropTypes.number.isRequired,
  specialIcon: PropTypes.oneOf(['zap', 'rocket', null]),
  onContactClick: PropTypes.func.isRequired
};

const PricingSection = ({ onContactClick }) => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: '$9.99',
      features: [
        'Up to 5 team members',
        'Basic analytics dashboard',
        'Email support response within 24h',
        'Access to core AI features',
        'Monthly performance reports'
      ],
      specialIcon: null,
      delay: 0.2
    },
    {
      title: 'Pro',
      price: '$29.99',
      features: [
        'Up to 20 team members',
        'Advanced analytics & insights',
        'Priority email support',
        'Custom AI model training',
        'Weekly strategy sessions',
        'A/B testing capabilities',
        'API access'
      ],
      isFeatured: true,
      specialIcon: 'zap',
      delay: 0.4
    },
    {
      title: 'Enterprise',
      price: '$99.99',
      features: [
        'Unlimited team members',
        'Full analytics suite',
        '24/7 dedicated support',
        'Custom solutions & integrations',
        'Dedicated account manager',
        'Advanced security features',
        'Custom reporting',
        'SLA guarantees'
      ],
      specialIcon: 'rocket',
      delay: 0.6
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
        <div className="max-w-6xl mx-auto">
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
              <span className="text-white/90 text-sm font-medium">Flexible Pricing</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Every Business
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose a plan that scales with your business. Our AI-powered marketing
              solutions are designed to deliver exceptional value at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                onContactClick={onContactClick}
              />
            ))}
          </div>

          {/* Money-back guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-16 
              text-center
              p-6
              bg-white/5
              backdrop-blur-sm
              border border-white/10
              rounded-2xl
              max-w-3xl
              mx-auto
            "
          >
            <div className="flex items-center justify-center space-x-2 text-white mb-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">30-Day Money-Back Guarantee</span>
            </div>
            <p className="text-white/70">
              Try any plan risk-free. If you&apos;re not completely satisfied, we&apos;ll refund your payment.
              No questions asked.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

PricingSection.propTypes = {
  onContactClick: PropTypes.func.isRequired
};

export default PricingSection;
