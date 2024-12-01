import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed z-50 bottom-4 right-4'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='p-2 text-gray-800 bg-white rounded-full shadow-lg focus:outline-none hover:text-pinkv'
        >
          <ChevronUpIcon className='w-8 h-8' />
        </button>
      )}
    </div>
  );
};
