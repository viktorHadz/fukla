import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { storage, ref, listAll, getDownloadURL } from '../../../firebase';

const BraidsGallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(6);
  const [currentImage, setCurrentImage] = useState(null);

  // Fetch images from Firebase
  useEffect(() => {
    const fetchImages = async () => {
      const galleryRef = ref(storage, 'Braids');
      const result = await listAll(galleryRef);
      console.log('Gallery Result:', result);
      const urls = await Promise.all(
        result.items.map((item) => getDownloadURL(item))
      );
      console.log('Fetched URLs:', urls);
      setImages(urls);
    };

    fetchImages();
  }, []);

  // Handlers
  const handleOpenGallery = () => {
    console.log('Opening gallery');
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    console.log('Closing gallery');
    setIsGalleryOpen(false);
    setCurrentImage(null);
  };

  const openImage = (image) => {
    console.log('Opening image:', image);
    setCurrentImage(image);
  };

  const loadMoreImages = () => {
    console.log('Loading more images');
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <>
      <div className='my-4 text-center'>
        <button
          onClick={handleOpenGallery}
          className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
        >
          Open Braids Gallery
        </button>
      </div>

      <Dialog
        open={isGalleryOpen}
        onClose={handleCloseGallery}
        className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80'
      >
        <div className='fixed inset-0 bg-black bg-opacity-80' />
        <div className='relative w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg'>
          <h1 className='text-center'>Braids Gallery</h1>

          {/* Gallery Grid */}
          <div className='grid grid-cols-2 gap-4 mt-4'>
            {images.slice(0, visibleImages).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Braids-${index}`}
                className='rounded-md cursor-pointer'
                onClick={() => openImage(image)}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages < images.length && (
            <button
              onClick={loadMoreImages}
              className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'
            >
              Load More
            </button>
          )}

          {/* Fullscreen Image */}
          {currentImage && (
            <div className='mt-4'>
              <img
                src={currentImage}
                alt='Fullscreen'
                className='w-full h-auto rounded-md'
              />
            </div>
          )}

          <button
            onClick={handleCloseGallery}
            className='absolute p-2 text-black bg-gray-100 rounded-full top-4 right-4 hover:bg-gray-200'
          >
            ✕
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default BraidsGallery;
