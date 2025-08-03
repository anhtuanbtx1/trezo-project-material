import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createAppTheme } from '../theme';

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // Initialize with dark mode as default
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, default to dark if not found
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Create theme based on current mode
  const theme = createAppTheme(isDarkMode ? 'dark' : 'light');

  // Apply theme to HTML element
  const applyThemeToDOM = (darkMode) => {
    const htmlElement = document.querySelector('html');
    const bodyElement = document.querySelector('body');
    
    if (htmlElement && bodyElement) {
      if (darkMode) {
        htmlElement.classList.add('dark-theme');
        bodyElement.style.backgroundColor = '#0a0e19';
        bodyElement.style.color = '#8695AA';
      } else {
        htmlElement.classList.remove('dark-theme');
        bodyElement.style.backgroundColor = '#F6F7F9';
        bodyElement.style.color = '#64748B';
      }
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    applyThemeToDOM(newMode);
  };

  // Set theme function (for programmatic control)
  const setTheme = (mode) => {
    const isDark = mode === 'dark';
    setIsDarkMode(isDark);
    localStorage.setItem('theme', mode);
    applyThemeToDOM(isDark);
  };

  // Apply theme on mount and when isDarkMode changes
  useEffect(() => {
    applyThemeToDOM(isDarkMode);
  }, [isDarkMode]);

  // Initialize theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      // Set dark as default for new users
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
    applyThemeToDOM(isDarkMode);
  }, []);

  const contextValue = {
    isDarkMode,
    theme,
    toggleTheme,
    setTheme,
    mode: isDarkMode ? 'dark' : 'light',
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
