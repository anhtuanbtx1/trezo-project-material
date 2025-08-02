/**
 * Image Management System Examples
 * 
 * This component demonstrates the proper usage of the centralized image management system.
 * Use these examples as a reference for implementing images in your components.
 */

import React from 'react';
import { Box, Card, Typography, Avatar, Grid } from '@mui/material';

// Import from the centralized image system
import { IMAGES } from '../index';
import { getAvatarImage, getOptimizedImageProps, generateAltText } from '../utils';

const ImageExamples = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Image Management System Examples
      </Typography>
      
      <Grid container spacing={3}>
        {/* Logo Examples */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Logo Usage Examples
            </Typography>
            
            {/* Main logo */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Main Logo:</Typography>
              <img 
                src={IMAGES.logos.main} 
                alt="Main Logo" 
                style={{ height: 38, width: 'auto' }}
              />
            </Box>
            
            {/* Logo icon */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Logo Icon:</Typography>
              <img 
                src={IMAGES.logos.icon} 
                alt="Logo Icon" 
                style={{ height: 26, width: 26 }}
              />
            </Box>
            
            {/* White logo for dark backgrounds */}
            <Box sx={{ mb: 2, p: 2, bgcolor: 'grey.800', borderRadius: 1 }}>
              <Typography variant="subtitle2" color="white">White Logo (Dark Background):</Typography>
              <img 
                src={IMAGES.logos.white} 
                alt="White Logo" 
                style={{ height: 26, width: 'auto' }}
              />
            </Box>
          </Card>
        </Grid>

        {/* Avatar Examples */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Avatar Usage Examples
            </Typography>
            
            {/* Using utility function for avatars */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Different Avatar Sizes:</Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 1 }}>
                {['xs', 'sm', 'md', 'lg', 'xl'].map(size => {
                  const avatarProps = getAvatarImage(IMAGES.users.user1, size);
                  return (
                    <Avatar
                      key={size}
                      src={avatarProps.src}
                      sx={{ width: avatarProps.width, height: avatarProps.height }}
                      alt={`Avatar ${size}`}
                    />
                  );
                })}
              </Box>
            </Box>
            
            {/* Different user avatars */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Different Users:</Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Avatar src={IMAGES.users.user1} alt="User 1" />
                <Avatar src={IMAGES.users.user2} alt="User 2" />
                <Avatar src={IMAGES.users.user3} alt="User 3" />
                <Avatar src={IMAGES.users.admin} alt="Admin" />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Product Image Examples
            </Typography>
            
            {/* Product gallery */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Product Gallery:</Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <img 
                  src={IMAGES.products.productDetails1} 
                  alt="Product 1"
                  style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }}
                />
                <img 
                  src={IMAGES.products.productDetails2} 
                  alt="Product 2"
                  style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }}
                />
                <img 
                  src={IMAGES.products.productDetails3} 
                  alt="Product 3"
                  style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Optimized Image Example */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Optimized Image Example
            </Typography>
            
            {/* Using utility function for optimization */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Optimized Image with Utility:</Typography>
              <OptimizedImageExample />
            </Box>
          </Card>
        </Grid>

        {/* Background Images */}
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Background Image Examples
            </Typography>
            
            <Grid container spacing={2}>
              {/* Profile cover example */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    height: 120,
                    backgroundImage: `url(${IMAGES.backgrounds.profileCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" color="white" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Profile Cover
                  </Typography>
                </Box>
              </Grid>
              
              {/* Cards background example */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    height: 120,
                    backgroundImage: `url(${IMAGES.backgrounds.cardsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" color="white" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Cards Background
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Icons Examples */}
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Icon Usage Examples
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={IMAGES.icons.star} alt="Star" style={{ width: 24, height: 24 }} />
                <Typography variant="caption" display="block">Star</Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <img src={IMAGES.icons.barCode} alt="Bar Code" style={{ width: 24, height: 24 }} />
                <Typography variant="caption" display="block">Bar Code</Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <img src={IMAGES.icons.qrCode} alt="QR Code" style={{ width: 24, height: 24 }} />
                <Typography variant="caption" display="block">QR Code</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

// Example component using optimized image props
const OptimizedImageExample = () => {
  const imageProps = getOptimizedImageProps(IMAGES.users.profile, {
    size: 'medium',
    lazy: true,
    responsive: true,
    quality: 'high',
  });

  return (
    <img
      {...imageProps}
      style={{ 
        width: '100%', 
        maxWidth: 200, 
        height: 'auto', 
        borderRadius: 8 
      }}
    />
  );
};

export default ImageExamples;
