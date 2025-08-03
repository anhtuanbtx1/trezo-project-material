import { useTheme } from '../contexts/ThemeContext';

/**
 * Custom hook that provides theme utilities and helpers
 * @returns {Object} Theme utilities and state
 */
export const useThemeMode = () => {
  const { isDarkMode, theme, toggleTheme, setTheme, mode } = useTheme();

  // Helper functions for common theme operations
  const getBackgroundColor = (lightColor = '#ffffff', darkColor = '#0c1427') => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getTextColor = (lightColor = '#3A4252', darkColor = '#ffffff') => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBorderColor = (lightColor = '#ECEEF2', darkColor = '#172036') => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getCardBackground = () => {
    return isDarkMode ? '#0c1427' : '#ffffff';
  };

  const getBodyBackground = () => {
    return isDarkMode ? '#0a0e19' : '#F6F7F9';
  };

  const getSecondaryTextColor = () => {
    return isDarkMode ? '#8695AA' : '#64748B';
  };

  // Theme-aware styles for common components
  const getCardStyles = () => ({
    backgroundColor: getCardBackground(),
    color: getTextColor(),
    border: `1px solid ${getBorderColor()}`,
    borderRadius: '7px',
  });

  const getInputStyles = () => ({
    backgroundColor: isDarkMode ? 'transparent' : '#ffffff',
    color: getTextColor(),
    border: `1px solid ${getBorderColor()}`,
    '&:focus': {
      borderColor: '#605DFF',
    },
  });

  const getButtonStyles = (variant = 'contained') => {
    const baseStyles = {
      textTransform: 'none',
      borderRadius: '7px',
    };

    if (variant === 'outlined') {
      return {
        ...baseStyles,
        borderColor: getBorderColor(),
        color: getTextColor(),
        '&:hover': {
          backgroundColor: isDarkMode ? '#172036' : '#f5f5f5',
        },
      };
    }

    return baseStyles;
  };

  // CSS class helpers
  const getThemeClasses = () => ({
    card: isDarkMode ? 'dark-card' : 'light-card',
    text: isDarkMode ? 'dark-text' : 'light-text',
    background: isDarkMode ? 'dark-bg' : 'light-bg',
    border: isDarkMode ? 'dark-border' : 'light-border',
  });

  // Theme-aware color palette
  const colors = {
    primary: '#605DFF',
    secondary: '#3584FC',
    success: '#25B003',
    warning: '#ffc107',
    error: '#FF4023',
    info: '#0dcaf0',
    background: {
      default: getBodyBackground(),
      paper: getCardBackground(),
    },
    text: {
      primary: getTextColor(),
      secondary: getSecondaryTextColor(),
    },
    border: getBorderColor(),
  };

  return {
    // State
    isDarkMode,
    mode,
    theme,
    
    // Actions
    toggleTheme,
    setTheme,
    
    // Helpers
    getBackgroundColor,
    getTextColor,
    getBorderColor,
    getCardBackground,
    getBodyBackground,
    getSecondaryTextColor,
    
    // Styles
    getCardStyles,
    getInputStyles,
    getButtonStyles,
    getThemeClasses,
    
    // Colors
    colors,
  };
};

export default useThemeMode;
