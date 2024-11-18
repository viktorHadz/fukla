import React, { useState } from 'react';

const ImageWithPlaceholder = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError] = useState(false);

  return (
    <div className='relative'>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-red-300 animate-pulse`}></div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
        loading='lazy'
      />

      {/* If Image Erred */}
      {hasError && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-200 ${className}`}
        >
          <span className='text-gray-500'>Image not available</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
