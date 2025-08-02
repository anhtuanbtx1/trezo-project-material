/**
 * OptimizedImage Component
 * 
 * A React component that automatically applies image optimizations and best practices.
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getOptimizedImageProps, generateAltText } from '../utils';
import { DEFAULT_IMAGES } from '../constants';

/**
 * OptimizedImage component with automatic optimization and error handling
 */
const OptimizedImage = ({
  src,
  alt,
  size = 'medium',
  lazy = true,
  responsive = true,
  quality = 'medium',
  fallback,
  onLoad,
  onError,
  className,
  style,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get optimized image properties
  const imageProps = getOptimizedImageProps(hasError ? (fallback || DEFAULT_IMAGES.AVATAR) : src, {
    size,
    lazy,
    responsive,
    quality,
    alt: alt || generateAltText(src),
  });

  const handleLoad = useCallback((event) => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.(event);
  }, [onLoad]);

  const handleError = useCallback((event) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(event);
  }, [onError]);

  return (
    <img
      {...imageProps}
      {...props}
      className={`optimized-image ${isLoading ? 'loading' : ''} ${hasError ? 'error' : ''} ${className || ''}`}
      style={style}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['thumbnail', 'small', 'medium', 'large', 'xlarge']),
  lazy: PropTypes.bool,
  responsive: PropTypes.bool,
  quality: PropTypes.oneOf(['low', 'medium', 'high', 'lossless']),
  fallback: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default OptimizedImage;
