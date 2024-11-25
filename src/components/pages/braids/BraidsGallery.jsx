// BraidsGallery.jsx
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { storage, ref, list, getDownloadURL } from '../../../firebase';
import ImageWithPlaceholder from '../../common/ImageWithPlaceHolder';

const BraidsGallery = ({ isGalleryOpen }) => {
  const [visibleImages, setVisibleImages] = useState([]); // Images currently displayed
  const [preloadedImages, setPreloadedImages] = useState([]); // Images preloaded but not yet displayed
  const nextPageTokenRef = useRef(null); // Pagination token
  const scrollContainerRef = useRef(null); // For scrolling to the bottom on image load

  // Fetch initial images when the Braids page loads
  useEffect(() => {
    const fetchInitialImages = async () => {
      const braidsGalleryRef = ref(storage, 'Braids');

      // Use list() to get the first batch (up to 6 items)
      const result = await list(braidsGalleryRef, { maxResults: 6 });

      // Fetch URLs for the first 6 items and preload images
      const initialImages = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          // Preload image
          const img = new Image();
          img.src = url;
          return { name: item.name, url };
        })
      );

      setVisibleImages(initialImages);
      nextPageTokenRef.current = result.nextPageToken || null;
    };

    fetchInitialImages();
  }, []);

  // When the gallery opens, start preloading the next 6 images
  useEffect(() => {
    if (isGalleryOpen) {
      const preloadNextImages = async () => {
        if (nextPageTokenRef.current) {
          const braidsGalleryRef = ref(storage, 'Braids');
          const result = await list(braidsGalleryRef, {
            maxResults: 6,
            pageToken: nextPageTokenRef.current,
          });

          // Fetch URLs for the next batch and preload images
          const nextImages = await Promise.all(
            result.items.map(async (item) => {
              const url = await getDownloadURL(item);
              // Preload image
              const img = new Image();
              img.src = url;
              return { name: item.name, url };
            })
          );

          setPreloadedImages(nextImages);
          nextPageTokenRef.current = result.nextPageToken || null;
        }
      };

      preloadNextImages();
    }
  }, [isGalleryOpen]);

  // Load and preload next batch
  const loadMoreImages = async () => {
    // Add preloaded images to visible images
    setVisibleImages((prev) => [...prev, ...preloadedImages]);
    setPreloadedImages([]);

    // Start preloading the next batch
    if (nextPageTokenRef.current) {
      const braidsGalleryRef = ref(storage, 'Braids');
      const result = await list(braidsGalleryRef, {
        maxResults: 6,
        pageToken: nextPageTokenRef.current,
      });

      // Fetch URLs for the next batch and preload images
      const nextImages = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          // Preload image
          const img = new Image();
          img.src = url;
          return { name: item.name, url };
        })
      );

      setPreloadedImages(nextImages);
      nextPageTokenRef.current = result.nextPageToken || null;
    }
  };

  // Scroll to bottom when visibleImages updates
  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleImages]);

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className='grid grid-flow-row grid-cols-1 gap-8 p-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 justify-items-center'
        style={{ maxHeight: '100%' }}
      >
        {visibleImages.map((image, index) => (
          <ImageWithPlaceholder
            key={index}
            src={image.url}
            alt={`Braids-${index}`}
            loading='lazy'
            className='w-auto max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[800px] shadow-lg rounded-md shadow-gray-300 cursor-pointer'
          />
        ))}
      </div>
      {nextPageTokenRef.current && (
        <button onClick={loadMoreImages} className='mt-4 site-button'>
          Зареди още
        </button>
      )}
    </div>
  );
};

export default BraidsGallery;
