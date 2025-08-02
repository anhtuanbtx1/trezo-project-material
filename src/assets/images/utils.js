/**
 * Image Utility Functions
 * 
 * Utility functions for image management, optimization, and manipulation.
 */

import { IMAGE_EXTENSIONS, DEFAULT_IMAGES, IMAGE_SIZES, AVATAR_SIZES } from './constants';

/**
 * Get image URL with optional size parameters
 * @param {string} imagePath - The base image path
 * @param {Object} options - Options for image processing
 * @param {number} options.width - Desired width
 * @param {number} options.height - Desired height
 * @param {string} options.quality - Image quality (low, medium, high)
 * @param {string} options.format - Desired format (webp, jpg, png)
 * @returns {string} Processed image URL
 */
export const getImageUrl = (imagePath, options = {}) => {
  if (!imagePath) return DEFAULT_IMAGES.AVATAR;
  
  const { width, height, quality, format } = options;
  const params = new URLSearchParams();
  
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  if (quality) params.append('q', quality);
  if (format) params.append('f', format);
  
  const queryString = params.toString();
  return queryString ? `${imagePath}?${queryString}` : imagePath;
};

/**
 * Get responsive image srcSet for different screen densities
 * @param {string} imagePath - The base image path
 * @param {Object} sizes - Object with width/height for different densities
 * @returns {string} srcSet string for responsive images
 */
export const getResponsiveSrcSet = (imagePath, sizes = {}) => {
  if (!imagePath) return '';
  
  const { width = 256, height = 256 } = sizes;
  
  return [
    `${getImageUrl(imagePath, { width, height })} 1x`,
    `${getImageUrl(imagePath, { width: width * 2, height: height * 2 })} 2x`,
    `${getImageUrl(imagePath, { width: width * 3, height: height * 3 })} 3x`,
  ].join(', ');
};

/**
 * Get avatar image with proper sizing
 * @param {string} imagePath - The avatar image path
 * @param {string} size - Size key from AVATAR_SIZES (xs, sm, md, lg, xl, xxl)
 * @returns {Object} Object with src and srcSet for avatar
 */
export const getAvatarImage = (imagePath, size = 'md') => {
  const avatarSize = AVATAR_SIZES[size.toUpperCase()] || AVATAR_SIZES.MD;
  const src = getImageUrl(imagePath || DEFAULT_IMAGES.AVATAR, avatarSize);
  const srcSet = getResponsiveSrcSet(imagePath || DEFAULT_IMAGES.AVATAR, avatarSize);
  
  return { src, srcSet, ...avatarSize };
};

/**
 * Validate image file extension
 * @param {string} filename - The image filename
 * @returns {boolean} True if valid image extension
 */
export const isValidImageExtension = (filename) => {
  if (!filename) return false;
  
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return Object.values(IMAGE_EXTENSIONS).includes(extension);
};

/**
 * Get image file extension
 * @param {string} imagePath - The image path
 * @returns {string} File extension
 */
export const getImageExtension = (imagePath) => {
  if (!imagePath) return '';
  return imagePath.toLowerCase().substring(imagePath.lastIndexOf('.'));
};

/**
 * Check if image is SVG
 * @param {string} imagePath - The image path
 * @returns {boolean} True if SVG
 */
export const isSvgImage = (imagePath) => {
  return getImageExtension(imagePath) === IMAGE_EXTENSIONS.SVG;
};

/**
 * Generate alt text from image path
 * @param {string} imagePath - The image path
 * @param {string} fallback - Fallback alt text
 * @returns {string} Generated alt text
 */
export const generateAltText = (imagePath, fallback = 'Image') => {
  if (!imagePath) return fallback;
  
  // Extract filename without extension
  const filename = imagePath.substring(imagePath.lastIndexOf('/') + 1);
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  
  // Convert camelCase or kebab-case to readable text
  return nameWithoutExt
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/^\w/, c => c.toUpperCase());
};

/**
 * Preload image
 * @param {string} imagePath - The image path to preload
 * @returns {Promise} Promise that resolves when image is loaded
 */
export const preloadImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imagePath;
  });
};

/**
 * Preload multiple images
 * @param {string[]} imagePaths - Array of image paths to preload
 * @returns {Promise} Promise that resolves when all images are loaded
 */
export const preloadImages = (imagePaths) => {
  return Promise.all(imagePaths.map(preloadImage));
};

/**
 * Get optimized image props for React components
 * @param {string} imagePath - The image path
 * @param {Object} options - Options for optimization
 * @returns {Object} Props object for img element
 */
export const getOptimizedImageProps = (imagePath, options = {}) => {
  const {
    alt,
    size,
    lazy = true,
    responsive = true,
    quality = 'medium',
  } = options;
  
  const imageSize = size ? IMAGE_SIZES[size.toUpperCase()] : null;
  const src = getImageUrl(imagePath, { ...imageSize, quality });
  const srcSet = responsive ? getResponsiveSrcSet(imagePath, imageSize) : undefined;
  const altText = alt || generateAltText(imagePath);
  
  return {
    src,
    srcSet,
    alt: altText,
    loading: lazy ? 'lazy' : 'eager',
    ...(imageSize && { width: imageSize.width, height: imageSize.height }),
  };
};

export default {
  getImageUrl,
  getResponsiveSrcSet,
  getAvatarImage,
  isValidImageExtension,
  getImageExtension,
  isSvgImage,
  generateAltText,
  preloadImage,
  preloadImages,
  getOptimizedImageProps,
};
