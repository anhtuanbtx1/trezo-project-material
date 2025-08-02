/**
 * Centralized Image Management System
 * 
 * This file serves as the single source of truth for all images in the application.
 * All components should import images from this centralized location to ensure
 * consistency and easier maintenance.
 * 
 * Usage:
 * import { IMAGES } from '@/assets/images';
 * <img src={IMAGES.logos.main} alt="Logo" />
 */

// Import all image categories
import * as logos from './logos';
import * as icons from './icons';
import * as backgrounds from './backgrounds';
import * as products from './products';
import * as users from './users';
import * as ui from './ui';
import * as gallery from './gallery';
import * as dashboard from './dashboard';
import * as common from './common';

// Centralized image object
export const IMAGES = {
  logos,
  icons,
  backgrounds,
  products,
  users,
  ui,
  gallery,
  dashboard,
  common,
};

// Export individual categories for direct access
export {
  logos,
  icons,
  backgrounds,
  products,
  users,
  ui,
  gallery,
  dashboard,
  common,
};

// Default export for convenience
export default IMAGES;

/**
 * Image naming conventions:
 * 
 * 1. Use camelCase for image keys
 * 2. Use descriptive names that indicate the image purpose
 * 3. Group related images under logical categories
 * 4. Use consistent naming patterns within categories
 * 
 * Examples:
 * - logos.main, logos.icon, logos.white
 * - users.avatar1, users.avatar2, users.defaultAvatar
 * - products.placeholder, products.featured1
 * - icons.home, icons.settings, icons.user
 */
