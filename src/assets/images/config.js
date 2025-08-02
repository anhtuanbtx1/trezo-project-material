/**
 * Image Management Configuration
 * 
 * Configuration settings for the centralized image management system.
 */

/**
 * Base paths for different image sources
 */
export const IMAGE_BASE_PATHS = {
  PUBLIC: '/images',
  ASSETS: '/src/assets/images',
  CDN: process.env.REACT_APP_CDN_URL || '',
  EXTERNAL: 'https://',
};

/**
 * Environment-specific settings
 */
export const ENVIRONMENT_CONFIG = {
  development: {
    useOptimization: false,
    enableLazyLoading: true,
    showImageDebugInfo: true,
    cacheBusting: false,
  },
  production: {
    useOptimization: true,
    enableLazyLoading: true,
    showImageDebugInfo: false,
    cacheBusting: true,
  },
  test: {
    useOptimization: false,
    enableLazyLoading: false,
    showImageDebugInfo: false,
    cacheBusting: false,
  },
};

/**
 * Get current environment configuration
 */
export const getCurrentConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return ENVIRONMENT_CONFIG[env] || ENVIRONMENT_CONFIG.development;
};

/**
 * Image processing configuration
 */
export const PROCESSING_CONFIG = {
  // Default quality settings for different image types
  quality: {
    thumbnail: 70,
    avatar: 80,
    product: 85,
    background: 75,
    logo: 90,
  },
  
  // Format preferences
  formats: {
    preferred: 'webp',
    fallback: 'jpg',
    vector: 'svg',
  },
  
  // Compression settings
  compression: {
    jpeg: { quality: 85, progressive: true },
    png: { quality: 90, compressionLevel: 6 },
    webp: { quality: 80, lossless: false },
  },
};

/**
 * Responsive breakpoints for image sizing
 */
export const RESPONSIVE_BREAKPOINTS = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

/**
 * Image loading strategies
 */
export const LOADING_STRATEGIES = {
  EAGER: 'eager',
  LAZY: 'lazy',
  AUTO: 'auto',
};

/**
 * Cache configuration
 */
export const CACHE_CONFIG = {
  // Cache duration in seconds
  duration: {
    images: 86400, // 24 hours
    thumbnails: 604800, // 7 days
    logos: 2592000, // 30 days
  },
  
  // Cache headers
  headers: {
    'Cache-Control': 'public, max-age=86400',
    'ETag': true,
    'Last-Modified': true,
  },
};

/**
 * Error handling configuration
 */
export const ERROR_CONFIG = {
  // Retry attempts for failed image loads
  retryAttempts: 3,
  retryDelay: 1000, // milliseconds
  
  // Fallback images for different categories
  fallbacks: {
    avatar: '/images/users/default-avatar.png',
    product: '/images/products/placeholder.png',
    background: '/images/backgrounds/default-bg.jpg',
    logo: '/images/logos/logo.svg',
    icon: '/images/icons/default-icon.svg',
  },
  
  // Error reporting
  reportErrors: getCurrentConfig().showImageDebugInfo,
  logLevel: 'warn', // 'error', 'warn', 'info', 'debug'
};

/**
 * Performance optimization settings
 */
export const PERFORMANCE_CONFIG = {
  // Preloading settings
  preload: {
    critical: true, // Preload critical images
    above_fold: true, // Preload above-the-fold images
    user_interaction: false, // Preload on user interaction
  },
  
  // Intersection Observer settings for lazy loading
  intersectionObserver: {
    rootMargin: '50px 0px',
    threshold: 0.1,
  },
  
  // Image size limits
  limits: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxWidth: 4096,
    maxHeight: 4096,
  },
};

/**
 * Accessibility configuration
 */
export const ACCESSIBILITY_CONFIG = {
  // Alt text requirements
  altText: {
    required: true,
    maxLength: 125,
    generateFromFilename: true,
  },
  
  // ARIA settings
  aria: {
    useAriaLabel: true,
    useAriaDescribedBy: false,
  },
  
  // Focus management
  focus: {
    skipToContent: true,
    focusableImages: false,
  },
};

/**
 * Development tools configuration
 */
export const DEV_TOOLS_CONFIG = {
  // Image analysis
  analysis: {
    showSizeInfo: getCurrentConfig().showImageDebugInfo,
    showLoadTime: getCurrentConfig().showImageDebugInfo,
    showOptimizationSuggestions: getCurrentConfig().showImageDebugInfo,
  },
  
  // Debug overlay
  debugOverlay: {
    enabled: getCurrentConfig().showImageDebugInfo,
    showDimensions: true,
    showFileSize: true,
    showFormat: true,
  },
};

// Export the complete configuration
export default {
  IMAGE_BASE_PATHS,
  ENVIRONMENT_CONFIG,
  PROCESSING_CONFIG,
  RESPONSIVE_BREAKPOINTS,
  LOADING_STRATEGIES,
  CACHE_CONFIG,
  ERROR_CONFIG,
  PERFORMANCE_CONFIG,
  ACCESSIBILITY_CONFIG,
  DEV_TOOLS_CONFIG,
  getCurrentConfig,
};
