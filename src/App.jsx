import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';

// Import Components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactCardModal from './components/ContactCardModal';

const LandingPage = ({ onContactClick }) => (
  <>
    <HeroSection onContactClick={onContactClick} />
    <ServicesSection />
    <CTASection onContactClick={onContactClick} />
    <AboutSection />
    <PricingSection onContactClick={onContactClick} />
    <Footer />
  </>
);

LandingPage.propTypes = {
  onContactClick: PropTypes.func.isRequired
};

const AppContent = ({ page = 'home' }) => {
  const { theme } = useTheme();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className={`
      min-h-screen 
      ${theme.background} 
      ${theme.text} 
      transition-theme 
      duration-300 
      ease-in-out
    `}>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="App">
        <Helmet>
          <title>Intellisync Solutions - AI-Driven Marketing Partner</title>
          <meta 
            name="description" 
            content="Empowering SMEs with cutting-edge AI marketing solutions" 
          />
          <link rel="canonical" href="https://intellisync.com" />
        </Helmet>

        <Navigation />
        {page === 'home' && <LandingPage onContactClick={handleContactClick} />}
        {page === 'services' && <ServicesSection />}
        {page === 'about' && <AboutSection />}
        {page === 'pricing' && <PricingSection onContactClick={handleContactClick} />}
        
        <ContactCardModal 
          isOpen={isContactModalOpen} 
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

AppContent.propTypes = {
  page: PropTypes.oneOf(['home', 'services', 'about', 'pricing'])
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Helmet>
          <title>IntelliSync Marketing</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<AppContent page="home" />} />
          <Route path="/services" element={<AppContent page="services" />} />
          <Route path="/about" element={<AppContent page="about" />} />
          <Route path="/pricing" element={<AppContent page="pricing" />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
