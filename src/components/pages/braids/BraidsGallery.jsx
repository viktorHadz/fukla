// BraidsGallery.jsx
import { useState, useEffect } from 'react';
import ImageWithPlaceholder from '../../common/ImageWithPlaceHolder';
import { fetchImagesFromStorage } from '../../../fetchFireStore';
import { storage } from '../../../firebase';

const BraidsGallery = ({ initialImages, nextPageTokenRef }) => {
  const [visibleImages, setVisibleImages] = useState([]); // Images currently displayed
  const [preloadedImages, setPreloadedImages] = useState([]); // Images preloaded but not yet displayed
  const [hasMore, setHasMore] = useState(true); // Tracks if more images are available

  // Load initial images and preload next batch when gallery opens
  useEffect(() => {
    if (initialImages.length) {
      setVisibleImages(initialImages);
    }

    // Preload next batch
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (nextPageTokenRef.current) {
      fetchImagesFromStorage(storage, 'Braids', {
        maxResults: 6,
        pageToken: nextPageTokenRef.current,
      }).then(({ images, nextPageToken }) => {
        setPreloadedImages(images);
        nextPageTokenRef.current = nextPageToken;

        // Update hasMore
        if (!nextPageToken) {
          setHasMore(false);
        }
      });
    } else {
      // No more pages to load
      setHasMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialImages]);

  // Load more images
  const loadMoreImages = () => {
    if (preloadedImages.length) {
      setVisibleImages((prev) => [...prev, ...preloadedImages]);

      // Preload next batch
      if (nextPageTokenRef.current) {
        setPreloadedImages([]);

        fetchImagesFromStorage(storage, 'Braids', {
          maxResults: 6,
          pageToken: nextPageTokenRef.current,
        }).then(({ images, nextPageToken }) => {
          setPreloadedImages(images);
          nextPageTokenRef.current = nextPageToken;

          // Update hasMore
          if (!nextPageToken) {
            setHasMore(false);
          }
        });
      } else {
        // No more pages to load
        setHasMore(false);
      }
    }
  };

  return (
    <div>
      <div
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
      {hasMore && (
        <button
          onClick={loadMoreImages}
          className='mt-4 site-button-alt'
          id='load-more-items'
        >
          Зареди още
        </button>
      )}
    </div>
  );
};

export default BraidsGallery;
