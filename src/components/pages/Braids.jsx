import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { useEffect, useState, useRef } from 'react';
import { storage } from '../../firebase';
import { fetchImagesFromStorage } from '../../fetchFireStore.jsx';

import { BraidsBanner } from './braids/BraidsBanner';
import { BraidsHero1 } from './braids/BraidsHero1.jsx';
import { BraidsHero2 } from './braids/BraidsHero2.jsx';
import { BraidStyles } from './braids/BraidsStyles.jsx';
import { PricingAndGallery } from './braids/PricingAndGallery.jsx';
import { AboutSlavina } from './braids/aboutSlavina.jsx';
import { FAQ } from './braids/FAQ.jsx';

export const Braids = () => {
  const [initialImages, setInitialImages] = useState([]);
  const nextPageTokenRef = useRef(null);

  useEffect(() => {
    const fetchInitialImages = async () => {
      const { images, nextPageToken } = await fetchImagesFromStorage(
        storage,
        'Braids',
        { maxResults: 6 }
      );
      setInitialImages(images);
      nextPageTokenRef.current = nextPageToken;
    };

    fetchInitialImages();
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <BraidsBanner />
      <BraidsHero1 />
      <BraidsHero2 />
      <BraidStyles />
      <PricingAndGallery
        initialImages={initialImages}
        nextPageTokenRef={nextPageTokenRef}
      />
      <AboutSlavina />
      <FAQ />
    </>
  );
};
