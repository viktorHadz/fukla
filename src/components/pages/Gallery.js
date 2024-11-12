import React, { useState, useEffect } from 'react';
import storage from '../../firebase';
import { useLocation } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

export const Gallery = () => {
  const location = useLocation();
  const { folder } = location.state;

  const [imageUrls, setImageUrls] = useState([]);

  const imagesRef = storage.ref().child(folder ?? (folder : 'braids'));

  useEffect(() => {
    imagesRef.listAll().then(listResult => {
      const urls = listResult.items.map(imageRef => imageRef.getDownloadURL());
      Promise.all(urls).then(setImageUrls);
    });
  }, []);
  
  return (
    <div className="galley">
      <ScrollToTopOnMount />
      {imageUrls.map(url => (
        <div className="gallery__box" key={url}>
          <img className="gallery__image" src={url} alt="Portfolio" loading="lazy" />
        </div>
      ))}
    </div>
  );
}