import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define theme configurations
const lightTheme = {
  background: 'bg-white',
  text: 'text-gray-900',
  primary: 'bg-brand-primary text-white',
  secondary: 'bg-gray-100 text-gray-800',
};

const darkTheme = {
  background: 'bg-gradient-to-br from-black via-purple-900 to-black',
  text: 'text-gray-100',
  primary: 'bg-gradient-to-r from-purple-600 to-purple-800 text-white',
  secondary: 'bg-gray-800 text-gray-200',
  accent: 'border-silver-500 hover:border-silver-300',
};

// Create the Theme Context
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: lightTheme,
});

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist theme preference in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newThemeMode = !isDarkMode;
    setIsDarkMode(newThemeMode);
    localStorage.setItem('theme', newThemeMode ? 'dark' : 'light');
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
