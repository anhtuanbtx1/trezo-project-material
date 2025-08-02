/**
 * Image Constants
 * 
 * Constants and configuration for the image management system.
 */

// Image file extensions
export const IMAGE_EXTENSIONS = {
  JPEG: '.jpg',
  PNG: '.png',
  SVG: '.svg',
  GIF: '.gif',
  WEBP: '.webp',
  ICO: '.ico',
};

// Image categories
export const IMAGE_CATEGORIES = {
  LOGOS: 'logos',
  ICONS: 'icons',
  BACKGROUNDS: 'backgrounds',
  PRODUCTS: 'products',
  USERS: 'users',
  UI: 'ui',
  GALLERY: 'gallery',
  DASHBOARD: 'dashboard',
  COMMON: 'common',
};

// Image sizes (for responsive images)
export const IMAGE_SIZES = {
  THUMBNAIL: { width: 64, height: 64 },
  SMALL: { width: 128, height: 128 },
  MEDIUM: { width: 256, height: 256 },
  LARGE: { width: 512, height: 512 },
  XLARGE: { width: 1024, height: 1024 },
};

// Avatar sizes
export const AVATAR_SIZES = {
  XS: { width: 24, height: 24 },
  SM: { width: 32, height: 32 },
  MD: { width: 40, height: 40 },
  LG: { width: 64, height: 64 },
  XL: { width: 80, height: 80 },
  XXL: { width: 128, height: 128 },
};

// Logo sizes
export const LOGO_SIZES = {
  ICON: { width: 26, height: 26 },
  SMALL: { width: 100, height: 26 },
  MEDIUM: { width: 142, height: 38 },
  LARGE: { width: 200, height: 54 },
};

// Image quality settings
export const IMAGE_QUALITY = {
  LOW: 60,
  MEDIUM: 80,
  HIGH: 90,
  LOSSLESS: 100,
};

// Default image paths
export const DEFAULT_IMAGES = {
  AVATAR: '/images/users/default-avatar.png',
  PRODUCT: '/images/products/placeholder.png',
  BACKGROUND: '/images/backgrounds/default-bg.jpg',
  LOGO: '/images/logos/logo.svg',
};

// Image optimization settings
export const OPTIMIZATION_SETTINGS = {
  LAZY_LOADING: true,
  PROGRESSIVE_JPEG: true,
  WEBP_FALLBACK: true,
  RESPONSIVE_IMAGES: true,
};

// Naming conventions
export const NAMING_CONVENTIONS = {
  SEPARATOR: '-',
  CASE_STYLE: 'camelCase', // or 'kebab-case', 'snake_case'
  PREFIX_PATTERN: /^[a-z][a-zA-Z0-9]*$/,
  SUFFIX_PATTERN: /[a-zA-Z0-9]+$/,
};

export default {
  IMAGE_EXTENSIONS,
  IMAGE_CATEGORIES,
  IMAGE_SIZES,
  AVATAR_SIZES,
  LOGO_SIZES,
  IMAGE_QUALITY,
  DEFAULT_IMAGES,
  OPTIMIZATION_SETTINGS,
  NAMING_CONVENTIONS,
};
