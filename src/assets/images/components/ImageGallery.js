/**
 * ImageGallery Component
 * 
 * A reusable image gallery component that works with the centralized image system.
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from '@mui/material';
import OptimizedImage from './OptimizedImage';

/**
 * ImageGallery component for displaying multiple images
 */
const ImageGallery = ({
  images = [],
  currentIndex = 0,
  onImageChange,
  showThumbnails = true,
  showNavigation = true,
  showCounter = true,
  thumbnailSize = 'small',
  mainImageSize = 'large',
  className,
  style,
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const handleImageChange = useCallback((index) => {
    setActiveIndex(index);
    onImageChange?.(index);
  }, [onImageChange]);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % images.length;
    handleImageChange(nextIndex);
  }, [activeIndex, images.length, handleImageChange]);

  const handlePrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    handleImageChange(prevIndex);
  }, [activeIndex, images.length, handleImageChange]);

  if (!images.length) {
    return (
      <Box className={`image-gallery empty ${className || ''}`} style={style}>
        <Typography variant="body2" color="text.secondary">
          No images to display
        </Typography>
      </Box>
    );
  }

  const currentImage = images[activeIndex];

  return (
    <Box className={`image-gallery ${className || ''}`} style={style}>
      {/* Main Image Display */}
      <Box className="gallery-main" sx={{ position: 'relative', mb: showThumbnails ? 2 : 0 }}>
        <OptimizedImage
          src={currentImage.src || currentImage}
          alt={currentImage.alt || `Image ${activeIndex + 1}`}
          size={mainImageSize}
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
        />

        {/* Navigation Arrows */}
        {showNavigation && images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              }}
            >
              ‹
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              }}
            >
              ›
            </IconButton>
          </>
        )}

        {/* Image Counter */}
        {showCounter && images.length > 1 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              bgcolor: 'rgba(0,0,0,0.7)',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
            }}
          >
            {activeIndex + 1} / {images.length}
          </Box>
        )}
      </Box>

      {/* Thumbnail Navigation */}
      {showThumbnails && images.length > 1 && (
        <Box
          className="gallery-thumbnails"
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            pb: 1,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              onClick={() => handleImageChange(index)}
              sx={{
                cursor: 'pointer',
                border: activeIndex === index ? 2 : 1,
                borderColor: activeIndex === index ? 'primary.main' : 'grey.300',
                borderRadius: 1,
                overflow: 'hidden',
                flexShrink: 0,
                opacity: activeIndex === index ? 1 : 0.7,
                transition: 'all 0.2s ease',
                '&:hover': { opacity: 1 },
              }}
            >
              <OptimizedImage
                src={image.src || image}
                alt={image.alt || `Thumbnail ${index + 1}`}
                size={thumbnailSize}
                style={{ width: 60, height: 60, objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
    ])
  ).isRequired,
  currentIndex: PropTypes.number,
  onImageChange: PropTypes.func,
  showThumbnails: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showCounter: PropTypes.bool,
  thumbnailSize: PropTypes.oneOf(['thumbnail', 'small', 'medium']),
  mainImageSize: PropTypes.oneOf(['medium', 'large', 'xlarge']),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ImageGallery;
