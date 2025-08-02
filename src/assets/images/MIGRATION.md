# Migration Guide: Centralized Image Management System

This guide provides step-by-step instructions for migrating from direct image path references to the new centralized image management system.

## 🎯 Migration Overview

The migration process involves:
1. **Audit**: Identify all existing image references
2. **Categorize**: Organize images into logical categories
3. **Update**: Replace direct paths with centralized imports
4. **Optimize**: Apply utility functions for better performance
5. **Test**: Verify all images load correctly

## 📋 Pre-Migration Checklist

- [ ] Backup your current codebase
- [ ] Review all components that use images
- [ ] Identify image categories and usage patterns
- [ ] Plan the migration in phases (critical images first)

## 🔍 Step 1: Audit Existing Images

### Find All Image References

Use these commands to find all image references in your codebase:

```bash
# Find all img tags
grep -r "<img" src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"

# Find all background-image CSS properties
grep -r "background-image" src/ --include="*.css" --include="*.scss" --include="*.js" --include="*.jsx"

# Find all direct /images/ references
grep -r "/images/" src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"

# Find all require() or import statements for images
grep -r "require.*\.\(jpg\|jpeg\|png\|svg\|gif\|webp\)" src/
grep -r "import.*\.\(jpg\|jpeg\|png\|svg\|gif\|webp\)" src/
```

### Create Migration Inventory

Create a spreadsheet or document listing:
- File path where image is used
- Current image reference
- Image category (logos, users, products, etc.)
- Usage context (avatar, background, icon, etc.)
- Priority (critical, high, medium, low)

## 📁 Step 2: Categorize and Organize Images

### Current vs. New Structure

**Before (Current):**
```
public/images/
├── logo.svg
├── user1.jpg
├── product-details1.jpg
├── background.jpg
└── ...
```

**After (Centralized):**
```
src/assets/images/
├── logos/
│   └── index.js (exports logo.svg as 'main')
├── users/
│   └── index.js (exports user1.jpg as 'user1')
├── products/
│   └── index.js (exports product-details1.jpg)
└── backgrounds/
    └── index.js (exports background.jpg)
```

### Add Missing Images to Categories

For each image you found in the audit:

1. **Determine the appropriate category**
2. **Add the image reference to the category index file**
3. **Use descriptive, consistent naming**

Example:
```javascript
// src/assets/images/users/index.js
export const user1 = '/images/users/user1.jpg';
export const adminAvatar = '/images/users/admin.png';
export const defaultAvatar = '/images/users/default-avatar.png';
```

## 🔄 Step 3: Update Component References

### Phase 1: Critical Images (Logos, Navigation)

Start with the most critical images that appear on every page:

**Before:**
```javascript
// src/components/Layout/TopNavbar/index.js
<img src="/images/logo.svg" alt="Logo" width={100} height={26} />
```

**After:**
```javascript
// src/components/Layout/TopNavbar/index.js
import { IMAGES } from '@/assets/images';

<img src={IMAGES.logos.main} alt="Logo" width={100} height={26} />
```

### Phase 2: User Images and Avatars

**Before:**
```javascript
// src/components/UiKit/Avatar/ImageAvatars.js
<Avatar src="/images/users/user1.jpg" alt="User 1" />
<Avatar src="/images/users/user2.jpg" alt="User 2" />
```

**After:**
```javascript
// src/components/UiKit/Avatar/ImageAvatars.js
import { IMAGES } from '@/assets/images';

<Avatar src={IMAGES.users.user1} alt="User 1" />
<Avatar src={IMAGES.users.user2} alt="User 2" />
```

### Phase 3: Product and Content Images

**Before:**
```javascript
// src/components/eCommerce/ProductDetailsContent/ProductImg/index.js
<img src="/images/products/product-details1.jpg" alt="Product" />
```

**After:**
```javascript
// src/components/eCommerce/ProductDetailsContent/ProductImg/index.js
import { IMAGES } from '@/assets/images';

<img src={IMAGES.products.productDetails1} alt="Product" />
```

### Phase 4: Background Images and CSS

**Before:**
```javascript
// CSS-in-JS or inline styles
backgroundImage: `url(/images/profile-cover.jpg)`
```

**After:**
```javascript
import { IMAGES } from '@/assets/images';

backgroundImage: `url(${IMAGES.backgrounds.profileCover})`
```

## ⚡ Step 4: Apply Optimizations

### Use Utility Functions

**Before:**
```javascript
<img src={IMAGES.users.user1} alt="User Avatar" />
```

**After (Optimized):**
```javascript
import { IMAGES, getAvatarImage } from '@/assets/images';

const avatarProps = getAvatarImage(IMAGES.users.user1, 'md');
<img {...avatarProps} alt="User Avatar" />
```

### Use React Hooks

**Before:**
```javascript
<img src={IMAGES.products.featured} alt="Featured Product" />
```

**After (With Hook):**
```javascript
import { IMAGES } from '@/assets/images';
import { useImage } from '@/assets/images/hooks';

function ProductImage() {
  const { src, loading, error } = useImage(IMAGES.products.featured, {
    size: 'large',
    lazy: true
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading image</div>;
  
  return <img src={src} alt="Featured Product" />;
}
```

## 🧪 Step 5: Testing and Validation

### Automated Testing

Create a test to verify all images are accessible:

```javascript
// src/assets/images/__tests__/images.test.js
import { IMAGES } from '../index';

describe('Image Management System', () => {
  test('all image paths are valid', () => {
    const checkImagePaths = (obj, path = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string') {
          expect(value).toMatch(/^\/images\//);
          expect(value).not.toBe('');
        } else if (typeof value === 'object') {
          checkImagePaths(value, `${path}.${key}`);
        }
      });
    };

    checkImagePaths(IMAGES);
  });
});
```

### Manual Testing Checklist

- [ ] All logos display correctly
- [ ] User avatars load properly
- [ ] Product images show in galleries
- [ ] Background images render correctly
- [ ] Icons appear as expected
- [ ] No broken image placeholders
- [ ] Images load with proper alt text
- [ ] Responsive images work on different screen sizes

### Performance Testing

- [ ] Images load efficiently (check Network tab)
- [ ] Lazy loading works correctly
- [ ] No unnecessary image requests
- [ ] Proper caching headers are set

## 🚨 Common Migration Issues

### Issue 1: Missing Image References

**Problem:** Image not found in centralized system
**Solution:** Add the image to the appropriate category index file

```javascript
// Add to src/assets/images/[category]/index.js
export const missingImage = '/images/path/to/missing-image.jpg';
```

### Issue 2: Incorrect Import Paths

**Problem:** Import path doesn't resolve
**Solution:** Check your path alias configuration

```javascript
// Make sure you have path alias set up in your bundler
// For Create React App, you might need to use relative paths:
import { IMAGES } from '../../assets/images';
```

### Issue 3: TypeScript Errors

**Problem:** TypeScript can't find image types
**Solution:** Ensure types are properly exported and imported

```typescript
// Add to src/assets/images/types.ts if missing
export interface NewCategoryImages {
  newImage: string;
}
```

### Issue 4: CSS Background Images

**Problem:** CSS background images not updating
**Solution:** Use CSS-in-JS or CSS variables

```javascript
// CSS-in-JS approach
const styles = {
  background: `url(${IMAGES.backgrounds.hero})`
};

// Or use CSS custom properties
document.documentElement.style.setProperty('--hero-bg', IMAGES.backgrounds.hero);
```

## 📈 Migration Progress Tracking

### Create a Migration Checklist

- [ ] **Phase 1: Critical Images (Week 1)**
  - [ ] Logo components
  - [ ] Navigation images
  - [ ] Error page images
  
- [ ] **Phase 2: User Interface (Week 2)**
  - [ ] User avatars
  - [ ] Profile images
  - [ ] UI icons
  
- [ ] **Phase 3: Content Images (Week 3)**
  - [ ] Product images
  - [ ] Gallery images
  - [ ] Background images
  
- [ ] **Phase 4: Optimization (Week 4)**
  - [ ] Apply utility functions
  - [ ] Implement React hooks
  - [ ] Performance optimization

### Rollback Plan

If issues arise during migration:

1. **Keep the old system running** alongside the new one
2. **Use feature flags** to toggle between systems
3. **Have a quick rollback script** ready
4. **Monitor error logs** for image loading issues

## 🎉 Post-Migration Benefits

After completing the migration, you'll have:

- ✅ **Single source of truth** for all images
- ✅ **Better organization** and maintainability
- ✅ **Type safety** with TypeScript support
- ✅ **Performance optimizations** built-in
- ✅ **Easier testing** and validation
- ✅ **Consistent naming** conventions
- ✅ **Better developer experience** with IntelliSense

## 🆘 Getting Help

If you encounter issues during migration:

1. Check the main [README.md](./README.md) for usage examples
2. Review the [examples](./examples/) directory
3. Test with the provided utility functions
4. Verify your image paths in the browser Network tab

Remember: **Migrate incrementally** and **test thoroughly** at each phase!
