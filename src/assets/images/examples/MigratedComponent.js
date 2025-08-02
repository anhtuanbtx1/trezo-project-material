/**
 * Example: Migrated Component
 * 
 * This shows how to migrate an existing component to use the centralized image system.
 * Compare this with the original ImageAvatars component to see the improvements.
 */

import React from 'react';
import { Card, Typography, Box, Avatar } from '@mui/material';

// Import from centralized image system
import { IMAGES } from '../index';
import { getAvatarImage } from '../utils';
import { useAvatar } from '../hooks';
import { OptimizedImage } from '../components';

/**
 * BEFORE: Original component using direct paths
 */
const OriginalImageAvatars = () => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        ❌ BEFORE: Direct Image Paths
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Direct paths - not recommended */}
        <Avatar alt="Remy Sharp" src="/images/users/user1.jpg" />
        <Avatar alt="Travis Howard" src="/images/users/user2.jpg" />
        <Avatar alt="Cindy Baker" src="/images/users/user3.jpg" />
      </Box>
    </Card>
  );
};

/**
 * AFTER: Migrated component using centralized system
 */
const MigratedImageAvatars = () => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        ✅ AFTER: Centralized Image System
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Using centralized image references */}
        <Avatar alt="Remy Sharp" src={IMAGES.users.user1} />
        <Avatar alt="Travis Howard" src={IMAGES.users.user2} />
        <Avatar alt="Cindy Baker" src={IMAGES.users.user3} />
      </Box>
    </Card>
  );
};

/**
 * OPTIMIZED: Using utility functions for better performance
 */
const OptimizedImageAvatars = () => {
  // Using utility function for optimized avatars
  const user1Avatar = getAvatarImage(IMAGES.users.user1, 'md');
  const user2Avatar = getAvatarImage(IMAGES.users.user2, 'md');
  const user3Avatar = getAvatarImage(IMAGES.users.user3, 'md');

  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        🚀 OPTIMIZED: With Utility Functions
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Avatar 
          alt="Remy Sharp" 
          src={user1Avatar.src}
          srcSet={user1Avatar.srcSet}
          sx={{ width: user1Avatar.width, height: user1Avatar.height }}
        />
        <Avatar 
          alt="Travis Howard" 
          src={user2Avatar.src}
          srcSet={user2Avatar.srcSet}
          sx={{ width: user2Avatar.width, height: user2Avatar.height }}
        />
        <Avatar 
          alt="Cindy Baker" 
          src={user3Avatar.src}
          srcSet={user3Avatar.srcSet}
          sx={{ width: user3Avatar.width, height: user3Avatar.height }}
        />
      </Box>
    </Card>
  );
};

/**
 * ADVANCED: Using React hooks for state management
 */
const AdvancedImageAvatars = () => {
  // Using custom hooks for advanced features
  const user1 = useAvatar(IMAGES.users.user1, 'lg');
  const user2 = useAvatar(IMAGES.users.user2, 'lg');
  const user3 = useAvatar(IMAGES.users.user3, 'lg');

  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        ⚡ ADVANCED: With React Hooks
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {[user1, user2, user3].map((user, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <Avatar 
              src={user.src}
              srcSet={user.srcSet}
              sx={{ 
                width: user.width, 
                height: user.height,
                opacity: user.loading ? 0.5 : 1,
                transition: 'opacity 0.3s ease'
              }}
            />
            {user.loading && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '0.75rem',
                  color: 'text.secondary'
                }}
              >
                Loading...
              </Box>
            )}
            {user.error && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '0.75rem',
                  color: 'error.main'
                }}
              >
                Error
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

/**
 * COMPONENT-BASED: Using reusable OptimizedImage component
 */
const ComponentBasedExample = () => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        🧩 COMPONENT-BASED: Reusable Components
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <OptimizedImage
          src={IMAGES.users.user1}
          alt="Remy Sharp"
          size="medium"
          style={{ 
            width: 40, 
            height: 40, 
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <OptimizedImage
          src={IMAGES.users.user2}
          alt="Travis Howard"
          size="medium"
          style={{ 
            width: 40, 
            height: 40, 
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <OptimizedImage
          src={IMAGES.users.user3}
          alt="Cindy Baker"
          size="medium"
          style={{ 
            width: 40, 
            height: 40, 
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </Box>
    </Card>
  );
};

/**
 * Main component showing all migration approaches
 */
const MigratedComponent = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Image System Migration Examples
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 3 }}>
        This component demonstrates different approaches to migrating from direct image paths 
        to the centralized image management system, from basic migration to advanced optimizations.
      </Typography>

      <OriginalImageAvatars />
      <MigratedImageAvatars />
      <OptimizedImageAvatars />
      <AdvancedImageAvatars />
      <ComponentBasedExample />

      <Card sx={{ p: 2, bgcolor: 'info.light' }}>
        <Typography variant="h6" gutterBottom>
          📝 Migration Benefits Summary
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <li>✅ Single source of truth for all images</li>
          <li>✅ Better organization and maintainability</li>
          <li>✅ Type safety with IntelliSense support</li>
          <li>✅ Performance optimizations (lazy loading, responsive images)</li>
          <li>✅ Error handling and fallback images</li>
          <li>✅ Consistent naming conventions</li>
          <li>✅ Easier testing and validation</li>
        </Box>
      </Card>
    </Box>
  );
};

export default MigratedComponent;
