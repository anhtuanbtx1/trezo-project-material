/**
 * TypeScript Definitions for Image Management System
 * 
 * Type definitions for better type safety and IntelliSense support.
 */

// Image file extensions
export type ImageExtension = '.jpg' | '.jpeg' | '.png' | '.svg' | '.gif' | '.webp' | '.ico';

// Image categories
export type ImageCategory = 
  | 'logos' 
  | 'icons' 
  | 'backgrounds' 
  | 'products' 
  | 'users' 
  | 'ui' 
  | 'gallery' 
  | 'dashboard' 
  | 'common';

// Image sizes
export type ImageSize = 'thumbnail' | 'small' | 'medium' | 'large' | 'xlarge';

// Avatar sizes
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Logo sizes
export type LogoSize = 'icon' | 'small' | 'medium' | 'large';

// Image quality levels
export type ImageQuality = 'low' | 'medium' | 'high' | 'lossless';

// Loading strategies
export type LoadingStrategy = 'eager' | 'lazy' | 'auto';

// Image formats
export type ImageFormat = 'webp' | 'jpg' | 'jpeg' | 'png' | 'svg' | 'gif';

// Responsive breakpoints
export type ResponsiveBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Image dimensions
export interface ImageDimensions {
  width: number;
  height: number;
}

// Image processing options
export interface ImageProcessingOptions {
  width?: number;
  height?: number;
  quality?: ImageQuality | number;
  format?: ImageFormat;
}

// Responsive image configuration
export interface ResponsiveImageConfig {
  sizes: ImageDimensions;
  breakpoints?: ResponsiveBreakpoint[];
}

// Avatar image result
export interface AvatarImageResult {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

// Optimized image props
export interface OptimizedImageProps {
  src: string;
  srcSet?: string;
  alt: string;
  loading: LoadingStrategy;
  width?: number;
  height?: number;
}

// Image utility options
export interface ImageUtilityOptions {
  alt?: string;
  size?: ImageSize;
  lazy?: boolean;
  responsive?: boolean;
  quality?: ImageQuality;
}

// Logo image types
export interface LogoImages {
  main: string;
  icon: string;
  simple: string;
  white: string;
  whiteBig: string;
  favicon: string;
}

// Icon image types
export interface IconImages {
  barCode: string;
  qrCode: string;
  signature: string;
  sort: string;
  star: string;
  trophy: string;
  created: string;
  error: string;
}

// Background image types
export interface BackgroundImages {
  comingSoon: string;
  portfolioBg: string;
  cardsBg: string;
  profileCover: string;
  signIn: string;
  signUp: string;
  forgotPassword: string;
  resetPassword: string;
  confirmEmail: string;
  lockScreen: string;
  logout: string;
  shape: string;
  line: string;
  cutCircle: string;
  paper: string;
}

// Product image types
export interface ProductImages {
  productDetails1: string;
  productDetails2: string;
  productDetails3: string;
  chowmein: string;
}

// User image types
export interface UserImages {
  user1: string;
  user2: string;
  user3: string;
  users: string;
  admin: string;
  profile: string;
  doctor: string;
  femaleDoctor: string;
  mainDoctor: string;
  patient: string;
  blueMan: string;
  avatarWithLaptop: string;
  manWithTablet: string;
  manSearchingHouse: string;
}

// UI image types
export interface UIImages {
  app: string;
  marketingTool: string;
  onlineLearning: string;
  welcome: string;
  starter: string;
  bank: string;
  masterCard: string;
  hospital: string;
  vectorMap: string;
  vectorMap2: string;
  vector1: string;
  vector2: string;
  sphereBowl: string;
  springFat: string;
  internalError: string;
  notFound: string;
  video: string;
}

// Gallery image types
export interface GalleryImages {
  gallery1: string;
  gallery2: string;
  gallery3: string;
}

// Dashboard image types (placeholder)
export interface DashboardImages {
  [key: string]: string;
}

// Common image types (placeholder)
export interface CommonImages {
  [key: string]: string;
}

// Main images interface
export interface Images {
  logos: LogoImages;
  icons: IconImages;
  backgrounds: BackgroundImages;
  products: ProductImages;
  users: UserImages;
  ui: UIImages;
  gallery: GalleryImages;
  dashboard: DashboardImages;
  common: CommonImages;
}

// Configuration types
export interface ImageConfig {
  useOptimization: boolean;
  enableLazyLoading: boolean;
  showImageDebugInfo: boolean;
  cacheBusting: boolean;
}

export interface ProcessingConfig {
  quality: Record<string, number>;
  formats: {
    preferred: ImageFormat;
    fallback: ImageFormat;
    vector: ImageFormat;
  };
  compression: Record<string, any>;
}

export interface CacheConfig {
  duration: Record<string, number>;
  headers: Record<string, any>;
}

export interface ErrorConfig {
  retryAttempts: number;
  retryDelay: number;
  fallbacks: Record<string, string>;
  reportErrors: boolean;
  logLevel: 'error' | 'warn' | 'info' | 'debug';
}

// Utility function types
export type GetImageUrl = (imagePath: string, options?: ImageProcessingOptions) => string;
export type GetResponsiveSrcSet = (imagePath: string, sizes?: ImageDimensions) => string;
export type GetAvatarImage = (imagePath: string, size?: AvatarSize) => AvatarImageResult;
export type IsValidImageExtension = (filename: string) => boolean;
export type GetImageExtension = (imagePath: string) => string;
export type IsSvgImage = (imagePath: string) => boolean;
export type GenerateAltText = (imagePath: string, fallback?: string) => string;
export type PreloadImage = (imagePath: string) => Promise<HTMLImageElement>;
export type PreloadImages = (imagePaths: string[]) => Promise<HTMLImageElement[]>;
export type GetOptimizedImageProps = (imagePath: string, options?: ImageUtilityOptions) => OptimizedImageProps;

// Export all types
export default {
  ImageExtension,
  ImageCategory,
  ImageSize,
  AvatarSize,
  LogoSize,
  ImageQuality,
  LoadingStrategy,
  ImageFormat,
  ResponsiveBreakpoint,
  ImageDimensions,
  ImageProcessingOptions,
  ResponsiveImageConfig,
  AvatarImageResult,
  OptimizedImageProps,
  ImageUtilityOptions,
  LogoImages,
  IconImages,
  BackgroundImages,
  ProductImages,
  UserImages,
  UIImages,
  GalleryImages,
  DashboardImages,
  CommonImages,
  Images,
  ImageConfig,
  ProcessingConfig,
  CacheConfig,
  ErrorConfig,
};
