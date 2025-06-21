import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface OptimisedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimisedImage: React.FC<OptimisedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  className,
  containerClassName,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP and fallback URLs
  const getOptimisedSrc = (originalSrc: string, format: 'webp' | 'original' = 'original') => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }

    // For external URLs, return as-is (in production, you'd use a service like Cloudinary)
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // For local images, you could implement WebP conversion logic here
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden',
        containerClassName
      )}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <Skeleton 
          className="absolute inset-0 w-full h-full" 
          style={{
            paddingBottom: aspectRatio ? `${aspectRatio}%` : undefined,
          }}
        />
      )}

      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && isLoading && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {isInView && !hasError && (
        <picture>
          {/* WebP source for modern browsers */}
          <source
            srcSet={getOptimisedSrc(src, 'webp')}
            type="image/webp"
          />
          <img
            ref={imgRef}
            src={getOptimisedSrc(src)}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'transition-opacity duration-300',
              isLoading ? 'opacity-0' : 'opacity-100',
              'w-full h-full object-cover',
              className
            )}
            {...props}
          />
        </picture>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
}; 