import { useState, useEffect, useRef, useLayoutEffect, Fragment } from 'react';
import { storage, ref, list, getDownloadURL } from '../../../firebase';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ImageWithPlaceholder from '../../common/ImageWithPlaceHolder';

const BraidsGallery = () => {
  const [visibleImages, setVisibleImages] = useState([]); // Images currently displayed
  const [preloadedImages, setPreloadedImages] = useState([]); // Images preloaded but not yet displayed
  const nextPageTokenRef = useRef(null); // Pagination token
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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
  // Scrolls to bottom when visibleImages updates
  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleImages]);
  // Open and close gallery
  const handleOpenGallery = () => setIsGalleryOpen(true);
  const handleCloseGallery = () => setIsGalleryOpen(false);

  return (
    <>
      <button onClick={handleOpenGallery}>Open Gallery</button>
      {isGalleryOpen && (
        <Dialog
          open={isGalleryOpen}
          onClose={handleCloseGallery}
          className='relative z-50'
        >
          {/* Dialog Overlay*/}
          <div className='fixed inset-0 flex items-center justify-center w-screen bg-zinc-950 bg-opacity-85'>
            {/* Dialog Panel */}
            <DialogPanel className='relative w-[95%] h-[90%] mt-24 border border-transparent rounded-md bg-zinc-50 overflow-hidden'>
              {/* Dialog Title */}
              <DialogTitle className='relative flex flex-col items-center w-full p-8 mb-8 text-xl font-bold text-center sm:p-4 bg-zinc-900 sm:text-2xl md:text-4xl underline-txt'>
                {/* Close Button */}
                <button
                  className='absolute sm:top-4 sm:right-4 top-2 right-2 rounded-full text-white hover:bg-[#e95d7a] transition duration-200'
                  onClick={handleCloseGallery}
                >
                  <XMarkIcon className='w-8 h-auto p-1' />
                </button>
                {/* Load More Button */}
                {nextPageTokenRef.current && (
                  <button
                    onClick={loadMoreImages}
                    className='site-button absolute left-2 bottom-4 sm:left-4 !text-base !font-normal !p-2'
                  >
                    Зареди още
                  </button>
                )}
                {/* Centered Text */}
                <div className='items-center justify-center hidden w-full text-white sm:flex'>
                  <p>Галерия - Плитки</p>
                </div>
              </DialogTitle>

              <div
                ref={scrollContainerRef}
                className='grid w-full h-full grid-flow-row grid-cols-1 gap-8 p-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 justify-items-center'
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
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default BraidsGallery;
