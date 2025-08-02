/**
 * useImage Hook
 * 
 * Custom React hook for easier image management with loading states and error handling.
 */

import { useState, useEffect, useCallback } from 'react';
import { getOptimizedImageProps, preloadImage } from '../utils';
import { DEFAULT_IMAGES } from '../constants';

/**
 * Custom hook for image management
 * @param {string} imagePath - The image path
 * @param {Object} options - Options for image processing
 * @param {string} options.size - Image size (thumbnail, small, medium, large, xlarge)
 * @param {boolean} options.lazy - Enable lazy loading
 * @param {boolean} options.responsive - Enable responsive images
 * @param {string} options.quality - Image quality (low, medium, high)
 * @param {string} options.fallback - Fallback image path
 * @param {boolean} options.preload - Preload the image
 * @returns {Object} Image state and properties
 */
export const useImage = (imagePath, options = {}) => {
  const {
    size = 'medium',
    lazy = true,
    responsive = true,
    quality = 'medium',
    fallback = DEFAULT_IMAGES.AVATAR,
    preload = false,
  } = options;

  const [loading, setLoading] = useState(preload);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Get optimized image properties
  const imageProps = getOptimizedImageProps(imagePath || fallback, {
    size,
    lazy,
    responsive,
    quality,
  });

  // Preload image if requested
  const preloadImageCallback = useCallback(async () => {
    if (!preload || !imagePath) return;

    try {
      setLoading(true);
      setError(null);
      await preloadImage(imageProps.src);
      setLoaded(true);
    } catch (err) {
      setError(err);
      console.warn('Failed to preload image:', imagePath, err);
    } finally {
      setLoading(false);
    }
  }, [imagePath, imageProps.src, preload]);

  useEffect(() => {
    preloadImageCallback();
  }, [preloadImageCallback]);

  // Handle image load events
  const handleLoad = useCallback(() => {
    setLoaded(true);
    setLoading(false);
    setError(null);
  }, []);

  const handleError = useCallback((err) => {
    setError(err);
    setLoading(false);
    console.warn('Image failed to load:', imagePath, err);
  }, [imagePath]);

  return {
    ...imageProps,
    loading,
    error,
    loaded,
    onLoad: handleLoad,
    onError: handleError,
  };
};

/**
 * Hook for avatar images with specific sizing
 * @param {string} imagePath - The avatar image path
 * @param {string} size - Avatar size (xs, sm, md, lg, xl, xxl)
 * @param {Object} options - Additional options
 * @returns {Object} Avatar image state and properties
 */
export const useAvatar = (imagePath, size = 'md', options = {}) => {
  return useImage(imagePath, {
    ...options,
    size,
    fallback: DEFAULT_IMAGES.AVATAR,
  });
};

/**
 * Hook for logo images
 * @param {string} imagePath - The logo image path
 * @param {string} variant - Logo variant (main, icon, white, etc.)
 * @param {Object} options - Additional options
 * @returns {Object} Logo image state and properties
 */
export const useLogo = (imagePath, variant = 'main', options = {}) => {
  return useImage(imagePath, {
    ...options,
    fallback: DEFAULT_IMAGES.LOGO,
    preload: true, // Logos are usually critical
  });
};

/**
 * Hook for product images with gallery support
 * @param {string|string[]} imagePaths - Single image path or array of paths
 * @param {Object} options - Additional options
 * @returns {Object} Product image state and properties
 */
export const useProductImages = (imagePaths, options = {}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const paths = Array.isArray(imagePaths) ? imagePaths : [imagePaths];
  const currentPath = paths[currentIndex] || paths[0];
  
  const imageState = useImage(currentPath, {
    ...options,
    fallback: DEFAULT_IMAGES.PRODUCT,
  });

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % paths.length);
  }, [paths.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + paths.length) % paths.length);
  }, [paths.length]);

  const selectImage = useCallback((index) => {
    if (index >= 0 && index < paths.length) {
      setCurrentIndex(index);
    }
  }, [paths.length]);

  return {
    ...imageState,
    currentIndex,
    totalImages: paths.length,
    nextImage,
    prevImage,
    selectImage,
    hasMultiple: paths.length > 1,
  };
};

/**
 * Hook for background images
 * @param {string} imagePath - The background image path
 * @param {Object} options - Additional options
 * @returns {Object} Background image state and CSS properties
 */
export const useBackgroundImage = (imagePath, options = {}) => {
  const {
    size = 'cover',
    position = 'center',
    repeat = 'no-repeat',
    ...imageOptions
  } = options;

  const imageState = useImage(imagePath, {
    ...imageOptions,
    fallback: DEFAULT_IMAGES.BACKGROUND,
  });

  const backgroundStyle = {
    backgroundImage: `url(${imageState.src})`,
    backgroundSize: size,
    backgroundPosition: position,
    backgroundRepeat: repeat,
  };

  return {
    ...imageState,
    backgroundStyle,
  };
};

export default {
  useImage,
  useAvatar,
  useLogo,
  useProductImages,
  useBackgroundImage,
};
