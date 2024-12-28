import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', to: '/' },
        { name: 'Services', to: '/services' },
        { name: 'About', to: '/about' },
        { name: 'Pricing', to: '/pricing' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', to: '/blog' },
        { name: 'Case Studies', to: '/case-studies' },
        { name: 'Whitepapers', to: '/whitepapers' },
        { name: 'FAQ', to: '/faq' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact Us', to: '/contact' },
        { name: 'Book a Demo', to: '/demo' },
        { name: 'Partner Program', to: '/partners' },
        { name: 'Careers', to: '/careers' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, url: 'https://twitter.com/intellisync' },
    { icon: Linkedin, url: 'https://linkedin.com/company/intellisync' },
    { icon: Instagram, url: 'https://instagram.com/intellisync' }
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Tagline Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Zap className="text-purple-400" size={32} />
              <span className="text-2xl font-bold">Intellisync</span>
            </div>
            <p className="text-white/80">
              Transforming marketing through intelligent AI solutions that drive growth and innovation.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/70 hover:text-white transition-all"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links Columns */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: sectionIndex * 0.2 
              }}
              viewport={{ once: true }}
              className="md:col-span-1 space-y-6"
            >
              <h4 className="text-xl font-bold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="
                        text-white/70 
                        hover:text-white 
                        hover:translate-x-2 
                        transition-all 
                        duration-300 
                        inline-block
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-6"
          >
            <h4 className="text-xl font-bold mb-4 text-white">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={20} />
                <span>Courtney.June@intellisync.ca</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-purple-400" size={20} />
                <span>+1 (519) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="text-purple-400" size={20} />
                <span>Chatham-Kent, Ontario</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/70">
            {new Date().getFullYear()} Intellisync Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
