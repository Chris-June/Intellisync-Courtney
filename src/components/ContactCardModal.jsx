import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageCircle 
} from 'lucide-react';
import PropTypes from 'prop-types';

const ContactCardModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    onClose();
  };

  const handleModalClose = () => {
    console.log('Close button clicked');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-pink-900/95 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleModalClose}
              className="absolute top-4 right-4 z-[60] bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300 border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 backdrop-blur-3xl">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"
                  style={{
                    maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)'
                  }}
                />
              </div>
              
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/grid.svg')]" />
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      opacity: 0.1,
                      scale: 0.5,
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight
                    }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.5, 1, 0.5],
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight
                    }}
                    transition={{
                      duration: Math.random() * 8 + 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="relative z-10 p-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <motion.h2 
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 text-transparent bg-clip-text tracking-tight"
                  animate={{ 
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{
                    backgroundSize: '200% auto'
                  }}
                >
                  Contact Us
                </motion.h2>
                <p className="text-white/80 max-w-sm mx-auto font-light">
                  We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you shortly.
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Contact Information Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="bg-blue-500/20 rounded-full p-3 w-fit mb-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-white/60 text-sm">Call Us</p>
                    <p className="text-white font-medium">(519) 123-4567</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="bg-green-500/20 rounded-full p-3 w-fit mb-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">Chatham-Kent, ON</p>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <motion.div 
                      animate={{
                        scale: focusedField === 'name' ? 1.1 : 1,
                        opacity: focusedField === 'name' ? 1 : 0.5
                      }}
                      className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <User className="w-5 h-5 text-white" />
                    </motion.div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <motion.div 
                      animate={{
                        scale: focusedField === 'email' ? 1.1 : 1,
                        opacity: focusedField === 'email' ? 1 : 0.5
                      }}
                      className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Email"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Message Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <motion.div 
                      animate={{
                        scale: focusedField === 'message' ? 1.1 : 1,
                        opacity: focusedField === 'message' ? 1 : 0.5
                      }}
                      className="absolute left-0 top-3 pl-3 flex items-center pointer-events-none"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </motion.div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Message"
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl text-white font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      </motion.div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ContactCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ContactCardModal;
