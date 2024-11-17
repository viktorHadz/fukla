// components/common/CustomSwiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const CustomSwiper = ({ slides }) => {
  return (
    <Swiper loop={true} modules={[Navigation]} navigation slidesPerView={1}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
