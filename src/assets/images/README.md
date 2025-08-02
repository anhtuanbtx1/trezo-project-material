# Centralized Image Management System

A comprehensive image management system for React applications that provides a single source of truth for all images, ensuring consistency, easier maintenance, and better performance.

## 🎯 Features

- **Centralized Management**: Single source of truth for all images
- **Organized Structure**: Logical categorization of images
- **Type Safety**: Full TypeScript support with IntelliSense
- **Utility Functions**: Helper functions for image optimization and manipulation
- **Performance Optimized**: Lazy loading, responsive images, and caching
- **Easy Migration**: Simple migration path from existing image references

## 📁 Directory Structure

```
src/assets/images/
├── index.js                 # Main export file
├── index.d.ts              # TypeScript declarations
├── types.ts                # TypeScript type definitions
├── constants.js            # Image constants and configuration
├── utils.js                # Utility functions
├── config.js               # Configuration settings
├── README.md               # This documentation
├── examples/               # Example components
│   └── ImageExamples.js    # Usage examples
├── icons/                  # UI icons and action icons
│   └── index.js
├── logos/                  # Application logos and branding
│   └── index.js
├── backgrounds/            # Background images and covers
│   └── index.js
├── products/               # Product images and galleries
│   └── index.js
├── users/                  # User avatars and profile images
│   └── index.js
├── ui/                     # UI elements and illustrations
│   └── index.js
├── gallery/                # Gallery and showcase images
│   └── index.js
├── dashboard/              # Dashboard-specific images
│   └── index.js
└── common/                 # Shared/common images
    └── index.js
```

## 🚀 Quick Start

### Basic Usage

```javascript
// Import the centralized image system
import { IMAGES } from '@/assets/images';

// Use in your components
function MyComponent() {
  return (
    <div>
      <img src={IMAGES.logos.main} alt="Logo" />
      <img src={IMAGES.users.user1} alt="User Avatar" />
      <img src={IMAGES.products.productDetails1} alt="Product" />
    </div>
  );
}
```

### Using Utility Functions

```javascript
import { getAvatarImage, getOptimizedImageProps } from '@/assets/images/utils';

// Get optimized avatar
const avatarProps = getAvatarImage(IMAGES.users.user1, 'lg');

// Get optimized image props
const imageProps = getOptimizedImageProps(IMAGES.products.featured, {
  size: 'medium',
  lazy: true,
  quality: 'high'
});

function OptimizedComponent() {
  return (
    <div>
      <img {...avatarProps} alt="User Avatar" />
      <img {...imageProps} />
    </div>
  );
}
```

## 📋 Image Categories

### Logos (`IMAGES.logos`)
- `main` - Main application logo
- `icon` - Logo icon for compact spaces
- `simple` - Simple logo variant
- `white` - White logo for dark backgrounds
- `whiteBig` - Large white logo
- `favicon` - Browser favicon

### Users (`IMAGES.users`)
- `user1`, `user2`, `user3` - Individual user avatars
- `admin` - Admin user avatar
- `profile` - Generic profile image
- `doctor`, `femaleDoctor` - Professional avatars

### Products (`IMAGES.products`)
- `productDetails1`, `productDetails2`, `productDetails3` - Product images
- Additional product images as needed

### Backgrounds (`IMAGES.backgrounds`)
- `profileCover` - Profile cover image
- `signIn`, `signUp` - Authentication backgrounds
- `comingSoon` - Coming soon page background

### Icons (`IMAGES.icons`)
- `star`, `trophy` - Status icons
- `barCode`, `qrCode` - Code icons
- `signature`, `sort` - Action icons

## 🛠 Utility Functions

### `getImageUrl(imagePath, options)`
Get image URL with optional processing parameters.

```javascript
const url = getImageUrl('/images/user.jpg', {
  width: 200,
  height: 200,
  quality: 'high'
});
```

### `getAvatarImage(imagePath, size)`
Get properly sized avatar image.

```javascript
const avatar = getAvatarImage(IMAGES.users.user1, 'lg');
// Returns: { src, srcSet, width, height }
```

### `getOptimizedImageProps(imagePath, options)`
Get complete props object for optimized images.

```javascript
const props = getOptimizedImageProps(IMAGES.products.featured, {
  size: 'medium',
  lazy: true,
  responsive: true
});
```

## 🎨 Best Practices

### 1. Always Use the Centralized System
```javascript
// ✅ Good
import { IMAGES } from '@/assets/images';
<img src={IMAGES.logos.main} alt="Logo" />

// ❌ Avoid
<img src="/images/logo.svg" alt="Logo" />
```

### 2. Use Utility Functions for Optimization
```javascript
// ✅ Good
const imageProps = getOptimizedImageProps(imagePath, options);
<img {...imageProps} />

// ❌ Avoid
<img src={imagePath} alt="Image" />
```

### 3. Provide Meaningful Alt Text
```javascript
// ✅ Good
<img src={IMAGES.users.user1} alt="John Doe's profile picture" />

// ❌ Avoid
<img src={IMAGES.users.user1} alt="Image" />
```

### 4. Use Appropriate Image Sizes
```javascript
// ✅ Good - Use size-specific variants
const avatarProps = getAvatarImage(imagePath, 'md');

// ❌ Avoid - Using large images for small displays
<img src={largeImage} style={{width: 40, height: 40}} />
```

## 📝 Adding New Images

### 1. Add Image to Public Directory
Place your image in the appropriate subdirectory under `public/images/`.

### 2. Update Category Index
Add the image reference to the appropriate category index file:

```javascript
// src/assets/images/products/index.js
export const newProduct = '/images/products/new-product.jpg';

export default {
  // ... existing products
  newProduct,
};
```

### 3. Update TypeScript Types (if using TypeScript)
Add the new image to the appropriate interface in `types.ts`:

```typescript
export interface ProductImages {
  // ... existing products
  newProduct: string;
}
```

## 🔧 Configuration

The system includes comprehensive configuration options in `config.js`:

- **Environment Settings**: Different configs for dev/prod
- **Image Processing**: Quality, format, and compression settings
- **Performance**: Lazy loading, caching, and optimization
- **Error Handling**: Fallbacks and retry logic

## 📱 Responsive Images

The system supports responsive images out of the box:

```javascript
// Automatically generates srcSet for different screen densities
const responsiveProps = getOptimizedImageProps(imagePath, {
  responsive: true,
  size: 'medium'
});
```

## 🚀 Performance Features

- **Lazy Loading**: Automatic lazy loading for better performance
- **Image Optimization**: Automatic format and quality optimization
- **Caching**: Intelligent caching strategies
- **Preloading**: Utility functions for preloading critical images

## 🔍 TypeScript Support

Full TypeScript support with:
- Type definitions for all image categories
- IntelliSense for image paths
- Type-safe utility functions
- Compile-time validation

## 🧪 Testing

The system includes utilities for testing:

```javascript
import { preloadImages, isValidImageExtension } from '@/assets/images/utils';

// Preload images for testing
await preloadImages([IMAGES.logos.main, IMAGES.users.user1]);

// Validate image extensions
const isValid = isValidImageExtension('image.jpg'); // true
```

## 📚 Examples

See `examples/ImageExamples.js` for comprehensive usage examples including:
- Logo usage patterns
- Avatar implementations
- Product image galleries
- Background image usage
- Icon implementations
- Optimized image components

## 🪝 React Hooks

### `useImage` Hook
Custom hook for easier image management:

```javascript
import { useImage } from '@/assets/images/hooks';

function MyComponent() {
  const { src, loading, error } = useImage(IMAGES.users.user1, {
    size: 'lg',
    lazy: true
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading image</div>;

  return <img src={src} alt="User" />;
}
```

## 🔄 Migration Guide

See the migration guide for step-by-step instructions on migrating from direct image paths to the centralized system.
