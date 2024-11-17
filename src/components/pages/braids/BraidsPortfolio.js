// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Grid } from 'swiper';
import { Link } from 'react-router-dom';
// import 'swiper/css';
// import React, { useState, useEffect } from 'react';
// import storage from '../../../firebase';

export const BraidsPortfolio = () => {
  // const [imageUrls, setImageUrls] = useState([]);
  // const imageUrls = [1, 2];

  // const imagesRef = storage.ref().child('braidsFeatured/');

  // useEffect(() => {
  //   imagesRef.listAll().then(listResult => {
  //     const urls = listResult.items.map(imageRef => imageRef.getDownloadURL());
  //     Promise.all(urls).then(setImageUrls);
  //   });
  // }, []);

  return (
    <section className='braidsportfolio__box'>
      {/* <Swiper
        slidesPerView={2}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Grid, Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 18,
            grid: {
              rows: 1,
              fill: 'row',
            },
          },
        }}
        className='braidsportfolio'
      >
        {imageUrls.map((url) => (
          <SwiperSlide key={url} className='braidsportfolio__container'>
            <img className='braidsportfolio__img' src={url} alt='Portfolio' />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className='braidsportfolio__btn'>
        <Link
          to='/gallery'
          state={{ folder: 'braids' }}
          className='braidsportfolio__gallery'
        >
          Цялостна галерия
        </Link>
      </div>
    </section>
  );
};
