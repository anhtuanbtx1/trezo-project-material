/**
 * TypeScript Declaration File for Image Management System
 * 
 * Provides type definitions for the centralized image management system.
 */

import {
  Images,
  LogoImages,
  IconImages,
  BackgroundImages,
  ProductImages,
  UserImages,
  UIImages,
  GalleryImages,
  DashboardImages,
  CommonImages,
  GetImageUrl,
  GetResponsiveSrcSet,
  GetAvatarImage,
  IsValidImageExtension,
  GetImageExtension,
  IsSvgImage,
  GenerateAltText,
  PreloadImage,
  PreloadImages,
  GetOptimizedImageProps,
  ImageProcessingOptions,
  ImageUtilityOptions,
  AvatarSize,
  ImageSize,
  ImageQuality,
  LoadingStrategy,
  ImageFormat,
  OptimizedImageProps,
  AvatarImageResult,
} from './types';

// Main IMAGES export
export declare const IMAGES: Images;

// Individual category exports
export declare const logos: LogoImages;
export declare const icons: IconImages;
export declare const backgrounds: BackgroundImages;
export declare const products: ProductImages;
export declare const users: UserImages;
export declare const ui: UIImages;
export declare const gallery: GalleryImages;
export declare const dashboard: DashboardImages;
export declare const common: CommonImages;

// Utility functions
export declare const getImageUrl: GetImageUrl;
export declare const getResponsiveSrcSet: GetResponsiveSrcSet;
export declare const getAvatarImage: GetAvatarImage;
export declare const isValidImageExtension: IsValidImageExtension;
export declare const getImageExtension: GetImageExtension;
export declare const isSvgImage: IsSvgImage;
export declare const generateAltText: GenerateAltText;
export declare const preloadImage: PreloadImage;
export declare const preloadImages: PreloadImages;
export declare const getOptimizedImageProps: GetOptimizedImageProps;

// Constants
export declare const IMAGE_EXTENSIONS: Record<string, string>;
export declare const IMAGE_CATEGORIES: Record<string, string>;
export declare const IMAGE_SIZES: Record<string, { width: number; height: number }>;
export declare const AVATAR_SIZES: Record<string, { width: number; height: number }>;
export declare const LOGO_SIZES: Record<string, { width: number; height: number }>;
export declare const IMAGE_QUALITY: Record<string, number>;
export declare const DEFAULT_IMAGES: Record<string, string>;

// Default export
declare const _default: Images;
export default _default;

// Module augmentation for better IntelliSense
declare module '@/assets/images' {
  export {
    IMAGES,
    logos,
    icons,
    backgrounds,
    products,
    users,
    ui,
    gallery,
    dashboard,
    common,
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
    IMAGE_EXTENSIONS,
    IMAGE_CATEGORIES,
    IMAGE_SIZES,
    AVATAR_SIZES,
    LOGO_SIZES,
    IMAGE_QUALITY,
    DEFAULT_IMAGES,
  };
  export default _default;
}

// Global type declarations for image imports
declare global {
  namespace ImageManagement {
    type Images = Images;
    type LogoImages = LogoImages;
    type IconImages = IconImages;
    type BackgroundImages = BackgroundImages;
    type ProductImages = ProductImages;
    type UserImages = UserImages;
    type UIImages = UIImages;
    type GalleryImages = GalleryImages;
    type DashboardImages = DashboardImages;
    type CommonImages = CommonImages;
    
    type ImageProcessingOptions = ImageProcessingOptions;
    type ImageUtilityOptions = ImageUtilityOptions;
    type OptimizedImageProps = OptimizedImageProps;
    type AvatarImageResult = AvatarImageResult;
    
    type AvatarSize = AvatarSize;
    type ImageSize = ImageSize;
    type ImageQuality = ImageQuality;
    type LoadingStrategy = LoadingStrategy;
    type ImageFormat = ImageFormat;
  }
}
