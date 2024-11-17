import { CustomSwiper } from '../../common/CustomSwiper';

export const SliderStart = () => {
  const slides = [
    <div className='slide-wrap-swipe'>
      <p className='slide__title'>This is process 1</p>
      <img
        className='braidshero__image'
        src='images/services/4.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='slide-wrap-swipe'>
      <p className='slide__title'>This is process 2</p>

      <img
        className='braidshero__image'
        src='images/services/4.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
    <div className='slide-wrap-swipe'>
      <p className='slide__title'>This is process 3</p>

      <img
        className='braidshero__image'
        src='images/services/6.webp'
        alt='Service'
        loading='lazy'
      />
    </div>,
  ];
  return (
    <>
      <CustomSwiper slides={slides} />
    </>
  );
};
